import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSchema, insertNewsletterSchema } from "@shared/schema";
import { ZodError } from "zod";
import { fromZodError } from "zod-validation-error";
import Stripe from "stripe";

const stripe = process.env.STRIPE_SECRET_KEY 
  ? new Stripe(process.env.STRIPE_SECRET_KEY, { apiVersion: "2025-09-30.clover" })
  : null;

export async function registerRoutes(app: Express): Promise<Server> {
  // API routes
  app.post('/api/contact', async (req, res) => {
    try {
      const data = insertContactSchema.parse(req.body);
      
      // Store contact submission
      await storage.createContactSubmission(data);
      
      // Handle newsletter subscription if checked
      if (data.newsletter === 'on') {
        try {
          await storage.createNewsletterSubscription({ email: data.email });
        } catch (error) {
          // Continue even if newsletter subscription fails
          console.error("Newsletter subscription failed:", error);
        }
      }
      
      return res.status(200).json({ message: 'Thank you for your message! We will get back to you soon.' });
    } catch (error) {
      if (error instanceof ZodError) {
        const validationError = fromZodError(error);
        return res.status(400).json({ message: validationError.message });
      }
      return res.status(500).json({ message: 'An error occurred while submitting your message. Please try again later.' });
    }
  });

  app.post('/api/newsletter', async (req, res) => {
    try {
      const data = insertNewsletterSchema.parse(req.body);
      
      await storage.createNewsletterSubscription(data);
      
      return res.status(200).json({ message: 'Thank you for subscribing to our newsletter!' });
    } catch (error) {
      if (error instanceof ZodError) {
        const validationError = fromZodError(error);
        return res.status(400).json({ message: validationError.message });
      }
      return res.status(500).json({ message: 'An error occurred while subscribing to the newsletter. Please try again later.' });
    }
  });

  // Stripe payment endpoint for donations
  app.post("/api/create-payment-intent", async (req, res) => {
    if (!stripe) {
      return res.status(500).json({ message: "Stripe is not configured. Please contact support." });
    }

    try {
      const { amount } = req.body;
      
      if (!amount || amount <= 0) {
        return res.status(400).json({ message: "Invalid donation amount" });
      }

      const paymentIntent = await stripe.paymentIntents.create({
        amount: Math.round(amount * 100), // Convert dollars to cents
        currency: "usd",
        automatic_payment_methods: {
          enabled: true,
        },
      });

      res.json({ clientSecret: paymentIntent.client_secret });
    } catch (error: any) {
      console.error("Error creating payment intent:", error);
      res.status(500).json({ message: "Error processing donation: " + error.message });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
