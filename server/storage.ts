import { 
  users, type User, type InsertUser,
  type Contact, type InsertContact,
  type Newsletter, type InsertNewsletter
} from "@shared/schema";

// modify the interface with any CRUD methods
// you might need

export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  createContactSubmission(contact: InsertContact): Promise<Contact>;
  createNewsletterSubscription(newsletter: InsertNewsletter): Promise<Newsletter>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private contacts: Map<number, Contact>;
  private newsletters: Map<number, Newsletter>;
  currentUserId: number;
  currentContactId: number;
  currentNewsletterId: number;

  constructor() {
    this.users = new Map();
    this.contacts = new Map();
    this.newsletters = new Map();
    this.currentUserId = 1;
    this.currentContactId = 1;
    this.currentNewsletterId = 1;
  }

  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.currentUserId++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }
  
  async createContactSubmission(insertContact: InsertContact): Promise<Contact> {
    const id = this.currentContactId++;
    const submittedAt = new Date();
    const contact: Contact = { ...insertContact, id, submittedAt };
    this.contacts.set(id, contact);
    return contact;
  }
  
  async createNewsletterSubscription(insertNewsletter: InsertNewsletter): Promise<Newsletter> {
    // Check if email already exists to ensure uniqueness
    const existingSubscription = Array.from(this.newsletters.values()).find(
      newsletter => newsletter.email === insertNewsletter.email
    );
    
    if (existingSubscription) {
      return existingSubscription; // Return existing subscription if email already exists
    }
    
    const id = this.currentNewsletterId++;
    const subscribedAt = new Date();
    const newsletter: Newsletter = { ...insertNewsletter, id, subscribedAt };
    this.newsletters.set(id, newsletter);
    return newsletter;
  }
}

export const storage = new MemStorage();
