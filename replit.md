# CSEL Cincinnati Website

## Overview

CSEL Cincinnati is a community organization website built with a modern React frontend and Express.js backend. The site promotes the Center for Social-Emotional Learning's mission to provide mental health support and social-emotional learning programs in Greater Cincinnati schools. The application features a contact form system, newsletter subscriptions, and informational pages about the organization's services and programs.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript using Vite as the build tool
- **Routing**: Wouter for client-side routing with pages for Home, About, Programs, and Donate
- **UI Components**: Radix UI component library with shadcn/ui design system for consistent styling
- **Styling**: Tailwind CSS with custom theme configuration supporting light/dark modes
- **State Management**: TanStack Query (React Query) for server state management
- **Form Handling**: React Hook Form with Zod validation for type-safe form processing
- **Responsive Design**: Mobile-first approach with responsive breakpoints and mobile menu

### Backend Architecture
- **Framework**: Express.js with TypeScript in ESM module format
- **Database ORM**: Drizzle ORM with PostgreSQL as the target database
- **API Design**: RESTful endpoints for contact submissions and newsletter subscriptions
- **Validation**: Zod schemas for request validation with proper error handling
- **Development**: Hot reload support with Vite integration in development mode
- **Storage Layer**: Abstracted storage interface with in-memory implementation for development

### Database Schema
- **Users Table**: Basic user management with username/password authentication
- **Contact Submissions**: Stores contact form data including name, email, phone, subject, message, and newsletter preferences
- **Newsletter Subscriptions**: Dedicated table for email newsletter subscriptions with timestamp tracking
- **Migration System**: Drizzle Kit for schema migrations and database management

### Form Processing
- **Contact Form**: Comprehensive contact form with optional newsletter subscription integration
- **Newsletter Signup**: Standalone newsletter subscription with email validation
- **Validation Pipeline**: Client-side validation with Zod schemas, server-side validation, and user feedback through toast notifications
- **Error Handling**: Graceful error handling with user-friendly messages for validation failures and server errors

## External Dependencies

### Core Technologies
- **Database**: PostgreSQL via Neon Database serverless platform
- **Build System**: Vite with React plugin for fast development and optimized production builds
- **Package Manager**: npm with lock file for consistent dependency resolution

### UI and Styling
- **Component Library**: Radix UI primitives for accessible, unstyled UI components
- **Styling Framework**: Tailwind CSS with PostCSS processing
- **Typography**: Google Fonts (Montserrat and Open Sans) for consistent brand typography
- **Icons**: Lucide React for scalable vector icons

### Development Tools
- **TypeScript**: Full TypeScript setup with strict configuration
- **ESLint/Prettier**: Code quality and formatting tools (implied by project structure)
- **Replit Integration**: Custom Vite plugins for Replit development environment support

### Runtime Libraries
- **Date Handling**: date-fns for date manipulation and formatting
- **Utility Libraries**: clsx and class-variance-authority for conditional CSS classes
- **Session Management**: connect-pg-simple for PostgreSQL session storage (configured but not actively used)