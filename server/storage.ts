import { 
  users, type User, type InsertUser,
  type Contact, type InsertContact,
  type Newsletter, type InsertNewsletter,
  type SearchResult
} from "@shared/schema";

// modify the interface with any CRUD methods
// you might need

export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  createContactSubmission(contact: InsertContact): Promise<Contact>;
  createNewsletterSubscription(newsletter: InsertNewsletter): Promise<Newsletter>;
  searchContent(query: string): Promise<SearchResult[]>;
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
    
    // Ensure the phone and newsletter fields are properly typed
    const phone = insertContact.phone ?? null;
    const newsletter = insertContact.newsletter ?? null;
    
    const contact: Contact = { 
      id,
      name: insertContact.name,
      email: insertContact.email,
      message: insertContact.message,
      subject: insertContact.subject,
      phone,
      newsletter,
      submittedAt
    };
    
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

  async searchContent(query: string): Promise<SearchResult[]> {
    const normalizedQuery = query.toLowerCase().trim();
    const results: SearchResult[] = [];

    // Define searchable content
    const searchableContent = [
      // Pages
      {
        id: 'home',
        title: 'CSEL Cincinnati - Home',
        excerpt: 'CSEL Cincinnati strengthens our community through education, support, and advocacy for social-emotional learning.',
        type: 'page' as const,
        url: '/',
        content: 'CSEL Cincinnati strengthens our community through education, support, and advocacy for social-emotional learning. We work with schools, families, and communities to promote social and emotional development.'
      },
      {
        id: 'about',
        title: 'About CSEL Cincinnati',
        excerpt: 'Learn about our mission, vision, and the team behind CSEL Cincinnati.',
        type: 'page' as const,
        url: '/about',
        content: 'CSEL Cincinnati was founded to empower communities through social-emotional learning. Our founder, Louise Gomer Bangel, established the organization to provide social-emotional learning tools to Cincinnati communities and schools.'
      },
      {
        id: 'donate',
        title: 'Support Our Mission - Donate',
        excerpt: 'Support CSEL Cincinnati through donations and help us continue our mission.',
        type: 'page' as const,
        url: '/donate',
        content: 'Your donation helps support our programs and initiatives. We provide social-emotional curriculum, training for educators, and resources for families.'
      },
      // Programs
      {
        id: 'program-path',
        title: 'PATHS Program',
        excerpt: 'Promoting Alternative Thinking Strategies for children in elementary schools.',
        type: 'program' as const,
        url: '/programs',
        content: 'PATHS (Promoting Alternative Thinking Strategies) is a comprehensive program for promoting emotional and social competencies and reducing aggression and behavior problems in elementary school-aged children.'
      },
      {
        id: 'program-second-step',
        title: 'Second Step Program',
        excerpt: 'Building social-emotional competence and foundational learning skills.',
        type: 'program' as const,
        url: '/programs',
        content: 'Second Step is a program that teaches social-emotional skills like empathy, emotion management, and problem solving to help children succeed in school and life.'
      },
      {
        id: 'program-ruler',
        title: 'RULER Program',
        excerpt: 'An evidence-based approach to social and emotional learning.',
        type: 'program' as const,
        url: '/programs',
        content: 'RULER is an evidence-based approach to social and emotional learning developed at the Yale Center for Emotional Intelligence. RULER stands for Recognizing, Understanding, Labeling, Expressing and Regulating emotions.'
      },
      // News & Events
      {
        id: 'event-fundraiser',
        title: 'Annual Community Fundraiser Gala',
        excerpt: 'Join us for an evening celebrating community impact with dinner, entertainment, and inspiring stories.',
        type: 'event' as const,
        url: '/#events',
        content: 'Annual Community Fundraiser Gala on June 12, 2023. Join us for an evening celebrating community impact with dinner, entertainment, and inspiring stories.'
      },
      {
        id: 'news-financial-literacy',
        title: 'CSEL Launches New Financial Literacy Program',
        excerpt: 'A new initiative providing workshops and one-on-one coaching to help families build financial stability.',
        type: 'news' as const,
        url: '/#events',
        content: 'CSEL Launches New Financial Literacy Program on May 28, 2023. A new initiative providing workshops and one-on-one coaching to help families build financial stability.'
      },
      {
        id: 'event-volunteer-day',
        title: 'Community Volunteer Day',
        excerpt: 'Join hundreds of volunteers for a day of service projects across Cincinnati neighborhoods.',
        type: 'event' as const,
        url: '/#events',
        content: 'Community Volunteer Day on July 8, 2023. Join hundreds of volunteers for a day of service projects across Cincinnati neighborhoods.'
      }
    ];

    // Perform search
    for (const item of searchableContent) {
      // Check if query appears in title, excerpt, or content
      if (
        item.title.toLowerCase().includes(normalizedQuery) ||
        item.excerpt.toLowerCase().includes(normalizedQuery) ||
        item.content.toLowerCase().includes(normalizedQuery)
      ) {
        // Add to results, but omit the content field which is just for searching
        results.push({
          id: item.id,
          title: item.title,
          excerpt: item.excerpt,
          type: item.type,
          url: item.url
        });
      }
    }

    return results;
  }
}

export const storage = new MemStorage();
