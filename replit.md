# Shubham Mohole Portfolio

## Overview

This is a professional portfolio website for Shubham Mohole, a Full-Stack Developer and AI/ML specialist. The site is built as a single-page application showcasing professional experience, projects, skills, certifications, and contact information. The design follows a "Cyber Architect" theme with a dark mode-first approach, featuring a navy/black background with cyber green accents (#64ffda) for a modern, technical aesthetic.

The application is designed to target recruiters for Backend, Cloud Engineering, and AI Systems roles, emphasizing enterprise-level experience at Infosys and current graduate studies at the University at Buffalo.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework**: React with TypeScript for type safety and better developer experience.

**Routing**: Wouter for lightweight client-side routing with minimal bundle size.

**UI Component Library**: Radix UI primitives combined with shadcn/ui components following the "new-york" style variant. This provides accessible, unstyled components that are customized with Tailwind CSS.

**Styling**: Tailwind CSS with a custom dark theme configuration. Uses CSS variables for theming, allowing dynamic theme switching between dark and light modes (dark is default).

**Animation**: Framer Motion for scroll-triggered animations, element transitions, and interactive effects (fade-ups, slide-ins, etc.).

**State Management**: TanStack Query (React Query) for server state management and data fetching.

**Theme System**: Custom ThemeProvider component managing dark/light mode toggling with localStorage persistence.

### Backend Architecture

**Server Framework**: Express.js serving both API routes and static assets.

**Runtime**: Node.js with TypeScript, compiled via esbuild for production builds.

**Development Server**: Vite for hot module replacement and fast development experience.

**Storage Interface**: Abstract IStorage interface with in-memory implementation (MemStorage). This design allows easy migration to persistent database storage without changing business logic.

**API Design**: RESTful API pattern with routes registered through a centralized router in `server/routes.ts`. All application routes are prefixed with `/api`.

**Build System**: Separate build processes for client (Vite) and server (esbuild), with the client building to `dist/public` and server bundling to `dist/index.js`.

### Data Storage Solutions

**Current Implementation**: In-memory storage using Map data structures for user data.

**Database Schema**: Drizzle ORM configured for PostgreSQL with schema definitions in `shared/schema.ts`. Currently defines a users table with UUID primary keys.

**Migration Strategy**: Drizzle Kit configured for schema migrations with PostgreSQL dialect, ready for database provisioning when `DATABASE_URL` environment variable is set.

**Future Scalability**: The storage interface abstraction allows seamless transition from in-memory to PostgreSQL by implementing a new storage class without changing application code.

### Authentication and Authorization

**Current State**: Basic user schema with username/password fields defined. No active authentication middleware implemented.

**Session Management**: connect-pg-simple package included for PostgreSQL-backed sessions when database is provisioned.

**Credential Validation**: Zod schemas (drizzle-zod) for runtime type validation of user inputs.

### Component Architecture

**Layout Structure**: Single-page application with fixed navigation and smooth scrolling between sections:
- Navbar (sticky header with section links and theme toggle)
- Hero Section (profile, name, role badges, CTA buttons)
- About Section (bio narrative + animated skill badges)
- Skills Section (categorized grid of technical skills with icons)
- Projects Section (alternating image/text layout for 4 major projects)
- Experience Section (timeline with Infosys work and UB education)
- Certifications Section (horizontal carousel of Oracle and UB certificates)
- Contact Section (professional contact form + social links)

**Design System**: Centralized component library in `client/src/components/ui/` with consistent styling via Tailwind CSS utility classes and CSS variables. All interactive elements use hover and active state elevations for depth.

**Responsive Design**: Mobile-first approach with breakpoint-based grid layouts (single column on mobile, multi-column on desktop).

## External Dependencies

### Third-Party UI Libraries
- **Radix UI**: Comprehensive set of accessible, unstyled UI primitives (accordion, dialog, dropdown-menu, popover, tabs, toast, tooltip, etc.)
- **shadcn/ui**: Pre-built component patterns using Radix UI and Tailwind CSS
- **Framer Motion**: Animation library for scroll-based and interactive animations
- **Embla Carousel**: Carousel/slider for certifications section
- **Lucide React**: Icon library for UI elements
- **Simple Icons**: Technology/brand icons for skills section

### Backend Services
- **@neondatabase/serverless**: Neon serverless PostgreSQL driver (not actively used but configured)
- **Drizzle ORM**: TypeScript ORM for PostgreSQL with type-safe queries
- **Express**: Web server framework

### Developer Tools
- **Vite**: Build tool and dev server with HMR
- **esbuild**: Fast JavaScript bundler for server-side code
- **TypeScript**: Type checking and compilation
- **Tailwind CSS**: Utility-first CSS framework
- **PostCSS**: CSS processing with autoprefixer

### Form Handling
- **React Hook Form**: Form state management with @hookform/resolvers for validation
- **Zod**: Runtime schema validation

### Utilities
- **date-fns**: Date manipulation and formatting
- **clsx + tailwind-merge**: Conditional className composition
- **class-variance-authority**: Component variant management
- **nanoid**: Unique ID generation

### Asset Management
- Images stored in `attached_assets/` directory
- Generated images for projects and profile picture
- Design guidelines and content requirements documented as text files

### Environment Configuration
- **DATABASE_URL**: PostgreSQL connection string (required for database operations)
- **NODE_ENV**: Environment flag (development/production)
- **REPL_ID**: Replit-specific identifier for platform integration