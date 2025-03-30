import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSchema, insertNewsletterSchema, searchQuerySchema } from "@shared/schema";
import { ZodError } from "zod";
import { fromZodError } from "zod-validation-error";

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

  app.get('/api/search', async (req, res) => {
    try {
      const { query } = searchQuerySchema.parse(req.query);
      
      const results = await storage.searchContent(query);
      
      return res.status(200).json({ results });
    } catch (error) {
      if (error instanceof ZodError) {
        const validationError = fromZodError(error);
        return res.status(400).json({ message: validationError.message });
      }
      return res.status(500).json({ message: 'An error occurred while searching. Please try again later.' });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
