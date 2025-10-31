# Orange Sign - Premium Printing & Signage Studio

## Overview

Orange Sign is a one-page marketing website for a premium printing and signage studio based in Islamabad, Pakistan. The application showcases the company's 30+ years of experience in panaflex printing, LED signage, and large-format advertising solutions. The site features a modern, gallery-first design approach with smooth scrolling sections, contact forms, and WhatsApp integration for customer engagement.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework & Build System**
- **React 18** with TypeScript for the UI layer
- **Vite** as the build tool and development server with HMR support
- **Wouter** for client-side routing (lightweight React router alternative)
- **TanStack Query (React Query)** for server state management and data fetching

**UI Component Strategy**
- **Shadcn/ui** component library built on Radix UI primitives for accessibility
- **Tailwind CSS** for styling with custom design system
- **Typography**: Poppins (headings) and Inter (body text) loaded via Google Fonts
- Custom theme system supporting light/dark modes via React Context

**Design System**
- Component-based architecture following the `components.json` configuration
- Centralized styling with CSS variables for theme tokens
- Responsive breakpoints using Tailwind's mobile-first approach
- Custom elevation system (`hover-elevate`, `active-elevate-2`) for interaction states

**Page Structure**
- Single-page application with section-based navigation (Hero, About, Services, Projects, Testimonials, Contact, Map)
- Dedicated `/projects` route for full project gallery
- Admin page (`/admin`) for project management (authentication-protected)
- Smooth scroll behavior for anchor-based navigation

### Backend Architecture

**Server Framework**
- **Express.js** running on Node.js with TypeScript
- RESTful API design pattern
- Middleware chain for logging, JSON parsing, and authentication

**API Endpoints**
- `POST /api/contact` - Contact form submission
- `GET /api/projects` - Fetch all projects
- `POST /api/admin/login` - Admin authentication
- Project CRUD operations (create, delete) with JWT authentication
- File upload support via Multer middleware (5MB limit, images only)

**Authentication System**
- JWT-based authentication with bcrypt password hashing
- Token stored in HTTP headers (`Authorization: Bearer <token>`)
- Protected routes using `authenticateToken` middleware
- 7-day token expiration

**Data Storage Strategy**
- In-memory storage implementation (`MemStorage` class) for development
- Abstracted storage interface (`IStorage`) allowing future database integration
- Drizzle ORM schema definitions prepared for PostgreSQL migration
- Seed data functionality for initial project gallery population

**Development Environment**
- Custom Vite integration with Express in middleware mode
- HMR (Hot Module Replacement) for development
- Request/response logging with duration tracking
- Static file serving in production mode

### Database Schema (Prepared for PostgreSQL)

**Users Table**
- `id` (UUID primary key)
- `username` (unique, not null)
- `password` (hashed, not null)

**Projects Table**
- `id` (UUID primary key)
- `title` (text, not null)
- `description` (text, not null)
- `imageUrl` (text, not null)
- `createdAt` (timestamp with default now)

**Contacts Table**
- `id` (UUID primary key)
- `name`, `email`, `phone`, `message` (all text, not null)
- `createdAt` (timestamp with default now)

**Migration Strategy**
- Drizzle Kit configured for PostgreSQL dialect
- Migration files output to `./migrations`
- Schema definitions use Zod for validation via `drizzle-zod`
- Connection via `DATABASE_URL` environment variable (Neon Database serverless driver ready)

## External Dependencies

### Third-Party Services

**Google Services**
- **Google Fonts**: Poppins and Inter font families loaded from CDN
- **Google Maps**: Embedded iframe showing business location in G-11 Markaz, Islamabad
- **Google Maps Reviews**: External link for customer testimonials redirect

**WhatsApp Integration**
- Direct messaging via `wa.me` protocol links
- Floating action button for instant contact
- Pre-populated message templates from contact form

### Cloud Infrastructure (Ready for Deployment)

**Neon Database**
- Serverless PostgreSQL via `@neondatabase/serverless` driver
- WebSocket-based connection pooling
- Configured but not yet connected (in-memory storage currently active)

**Asset Storage**
- Local file system storage for uploads (`attached_assets/uploads/`)
- Generated project images stored in `attached_assets/generated_images/`
- Static assets served from `client/public` in production

### Key NPM Dependencies

**UI & Styling**
- `@radix-ui/*` - Accessible component primitives (20+ components)
- `tailwindcss` - Utility-first CSS framework
- `class-variance-authority` - Type-safe variant styling
- `clsx` + `tailwind-merge` - Conditional className utilities

**Form Handling**
- `react-hook-form` - Performant form validation
- `@hookform/resolvers` - Zod schema integration
- `zod` - Schema validation library

**State & Data Fetching**
- `@tanstack/react-query` - Async state management
- Custom fetch wrapper with error handling

**Authentication & Security**
- `jsonwebtoken` - JWT token generation/verification
- `bcryptjs` - Password hashing (10 rounds)
- `multer` - Multipart form data handling for file uploads

**Development Tools**
- `@replit/vite-plugin-*` - Replit-specific development enhancements
- `tsx` - TypeScript execution for development server
- `esbuild` - Production bundling for server code
- `drizzle-kit` - Database migration tooling

### Build & Deployment Configuration

**Scripts**
- `dev`: Development mode with tsx watcher
- `build`: Vite frontend build + esbuild server bundle
- `start`: Production server from compiled bundle
- `db:push`: Drizzle schema push to database

**Output Structure**
- Frontend: `dist/public` (Vite build output)
- Backend: `dist/index.js` (ESM bundle)
- Both configured for Vercel serverless deployment pattern