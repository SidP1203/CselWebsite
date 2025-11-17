# CSEL Cincinnati Website

## Overview

This is a full-stack web application for CSEL (Cincinnati Social-Emotional Learning) organization. The project is built with React + TypeScript frontend, Express.js backend, and PostgreSQL database using Drizzle ORM. The application serves as the organization's main website featuring information about their mission, programs, donation capabilities, and contact forms. CSEL focuses on creating supportive school and community cultures through social-emotional learning programs.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript and Vite for build tooling
- **Routing**: Wouter for lightweight client-side routing
- **UI Components**: Radix UI primitives with shadcn/ui design system
- **Styling**: Tailwind CSS with custom theme configuration (professional variant with red primary color)
- **State Management**: TanStack React Query for server state management
- **Forms**: React Hook Form with Zod validation and Hookform resolvers
- **Fonts**: Google Fonts (Montserrat and Open Sans) for typography
- **Analytics**: Google Analytics integration for tracking

### Backend Architecture
- **Framework**: Express.js with TypeScript
- **Database ORM**: Drizzle ORM with PostgreSQL dialect
- **Database Provider**: Neon Database (serverless PostgreSQL)
- **API Design**: RESTful endpoints for contact submissions, newsletter signups, and payment processing
- **Payment Processing**: Stripe integration (v19.1.0) for donation processing with API version 2025-09-30.clover
- **Validation**: Zod schemas for request validation with proper error handling
- **Development**: Hot module replacement with Vite integration
- **Session Management**: Built-in session handling with connect-pg-simple

### Database Schema
- **Users Table**: Basic user authentication structure (id, username, password)
- **Contact Submissions**: Stores contact form data with newsletter opt-in capability
- **Newsletter Subscriptions**: Manages email newsletter subscriptions with unique constraints
- **Migrations**: Drizzle Kit for database schema management and migrations

### Data Storage Strategy
- **Primary Storage**: PostgreSQL via Neon Database for production data
- **Development Storage**: In-memory storage implementation for development/testing
- **Storage Interface**: Abstract storage interface allowing for different implementations
- **Data Validation**: Zod schemas ensure data integrity at application and database levels

### External Dependencies
- **Database**: Neon Database (serverless PostgreSQL)
- **Payment Gateway**: Stripe for secure payment processing (deposits to General Electric Credit Union)
- **Analytics**: Google Analytics for website tracking
- **Fonts**: Google Fonts CDN for web typography
- **Build Tools**: Vite with React plugin and custom Replit integrations
- **Development**: Replit-specific plugins for cartographer and error handling

## Recent Changes (November 17, 2025)

### Focus Areas Section - Complete Rebuild
- Created 6 comprehensive new pages with detailed content from official documentation:
  - **School Programs** (/programs/school): Princeton Middle School programs, Summer Bridge, SEL classes, peer mediation training, Evanston Academy, Chase Elementary, South Avondale Middle School
  - **Community Affiliations** (/programs/community): Greater Cincinnati Foundation grant, Talbert House partnership, St. Monica Center, Cincinnati Public Library collaboration
  - **Research & Results** (/programs/research): 9-year impact data, 85% student learning outcomes, 96% staff confirmation, suspension reduction stats (21% at SMC, 17% at PCMS)
  - **Success Stories** (/programs/success-stories): Testimonials from David Mackzum (PCMS), Michael Pearl (St. Monica Center), Ariel Miller (ACTS Group Leader)
  - **Resources** (/programs/resources): SEL links (sel4oh.org, sel4us.org), educational videos, articles
  - **Current News & Events** (/programs/news-events): Staff development, $60,000 GCF grant, International SEL Exchange
- Updated Focus Areas landing page to link to real pages instead of "Work in Progress" toast messages
- All pages feature professional design with consistent branding, icons, statistics displays, and CTAs

### Team Member Updates
- Added team member photos for Gregory J. Greiwe, Joshua Spears, and Barbara Gray
- Updated Gregory J. Greiwe's title to "Head of Fundraising"
- Removed placeholder team members (Amanda Foster, David Chen, Rev. Marcus Johnson, CSEL Facilitators)
- Reordered Leadership Team: Louise, Bob, Dan, Gregory, Barbara, Swapna, Joshua
- Updated Louise Gomer Bangel's bio with comprehensive 57-year career history including CPE founding (1979), Board Chair Emeritus transition (2024), and book co-authorship

### Content Updates
- Updated all three Success Stories with real testimonials from Princeton Middle School and Saint Monica
- Increased "Our History" text size to match "Our Story" section
- Fixed "Explore Our Programs" button on homepage to link to Focus Areas page (/programs route)
- Fixed donate button in Get Involved section to properly navigate to /donate page
- Added contact dialog popup for Volunteer and Partner With Us buttons showing Robert E Kelly's contact info (phone: 513-207-2043, email: rektck60@gmail.com)
- Resolved testimonial attribution formatting issues

### Stripe Payment Integration
- Implemented complete donation workflow using Stripe Payment Intents API
- Created `/donate` page with amount selection and custom donation input
- Integrated Stripe Elements for secure payment collection
- Built `/donate/success` confirmation page for post-payment experience
- Updated all donation CTAs to link to new checkout flow
- Configured backend API endpoint `/api/create-payment-intent` for payment processing
- Added environment variables for Stripe keys (VITE_STRIPE_PUBLIC_KEY, STRIPE_SECRET_KEY)
- Messaging focuses on peer-led conflict resolution and student empowerment