# Design Guidelines for Shubham Mohole Portfolio

## Design Approach
**Reference-Based + Custom Dark Theme**: Professional developer portfolio inspired by modern tech portfolios (GitHub, Linear, Vercel) with a distinctive dark/cyber aesthetic targeting technical recruiters.

## Core Visual Identity

### Color Palette
- **Primary Background**: Dark navy/black (#0a192f or similar)
- **Accent Color**: Cyber Green (#64ffda) for CTAs, links, hover states, and highlights
- **Alternative Accent**: Electric Blue option for variety
- **Text**: Light gray/white hierarchy for readability on dark backgrounds

### Typography
- **Primary Font**: Clean sans-serif (Inter, DM Sans) or monospaced (JetBrains Mono) for technical feel
- **Headings**: Bold, large scale (text-4xl to text-6xl)
- **Body**: text-base to text-lg with increased line-height (1.7-1.8) for readability
- **Code/Technical**: Monospaced font for skill names and technical terms

## Layout System
- **Spacing Units**: Tailwind spacing - primarily p-8, p-12, p-16, p-20 for sections; gap-4, gap-6, gap-8 for grids
- **Max Width**: Container max-w-6xl or max-w-7xl for content sections
- **Section Padding**: py-16 to py-24 for vertical breathing room between major sections

## Component Specifications

### 1. Header/Navbar
- Fixed sticky navigation (top-0, z-50)
- Horizontal links to sections with smooth scroll (#About, #Skills, #Projects, #Experience, #Contact)
- Dark mode/light mode toggle button (dark default)
- Subtle backdrop blur effect (backdrop-blur-md)

### 2. Hero Section
- Full viewport height consideration (min-h-screen)
- **Profile Picture**: Circular (w-48 h-48 or larger) with cyber green glow/border effect (ring-4 ring-[#64ffda])
- Large bold title: "Shubham Mahesh Mohale"
- Subtitle with role badges: "Full-Stack Developer | Master's CS (UB) | AI & Cloud Specialist"
- Impact statement in prominent typography
- CTA buttons with cyber green accent

### 3. About Me Section
- **Two-column layout** (grid-cols-2 on desktop, single column on mobile)
- Left: Narrative text (max-w-prose for readability)
- Right: **Animated skill pills/badges** displaying top skills (JavaScript, React.js, Python, Java, Spring Boot, AI/ML)
- Skill badges with rounded corners, subtle glow, cyber green borders

### 4. Skills & Technologies Grid
- **3-4 column grid** (grid-cols-3 lg:grid-cols-4)
- **Categories**: Backend/DevOps, Frontend, AI/ML/Cloud, Core CS
- Each skill card: monochromatic icon + skill name
- Highlight Oracle OCI, Generative AI, Microservices with visual prominence
- Subtle hover effects (scale, glow)

### 5. Projects Showcase
- **Alternating layout**: Image left/text right, then image right/text left
- **4 Featured Projects**: Ripple Policy Simulator, LLM Text-to-Image, DevSync AI, Infosys Microservices
- **Large media placeholders**: aspect-video containers for project screenshots/demo videos
- Project cards with: Title, tech stack tags, description, GitHub/live demo links
- Cyber green accent on hover/interaction

### 6. Experience & Education Timeline
- **Vertical timeline** design with connector line
- Timeline nodes: Infosys (2022-2024), UB (Aug 2024-Present)
- **Achievement badges**: Small icons/badges next to key metrics ($ icon for "$500k cost reduction", speed icon for "90% reduction")
- Bullet points with clear hierarchy
- Date badges with cyber green accents

### 7. Certifications Carousel
- **Horizontal scrollable cards** (flex with overflow-x-scroll or snap)
- Cards for: 3 Oracle certs (OCI Foundations, AI Foundations, Generative AI Professional) + UB Certificate of Appreciation
- **Image placeholders**: For certificate JPG uploads (aspect-[3/4] or similar)
- Credential URL/link placement
- Smooth scroll snapping between cards

### 8. Contact Section
- Professional form layout
- Fields: Name, Email, Subject, Message (textarea)
- Cyber green submit button
- Social icons row: GitHub, LinkedIn, Email with hover effects
- Form inputs with dark theme styling (border-gray-700, bg-gray-800)

## Animations (Framer Motion)
- **Scroll-triggered entrance animations**:
  - Text fade-up for headings and paragraphs
  - Project cards slide-in from left/right based on alternating layout
  - Skill badges/pills stagger animation
  - Timeline items fade-in as they enter viewport
- **Interaction animations**:
  - Button hover scale (1.05)
  - Card lift on hover (translateY)
  - Profile picture subtle pulse/glow effect
- Keep animations subtle and professional - no distractions

## Responsive Behavior
- Mobile: Single column stacking, hamburger menu for navigation
- Tablet: 2-column grids, adjusted spacing
- Desktop: Full multi-column layouts, optimal reading widths

## Images
- **Hero Profile Picture**: Circular professional headshot (placeholder: solid cyber green circle with initials)
- **Project Screenshots**: 4 large landscape placeholders (1200x675px or aspect-video)
- **Certificate Images**: 4 portrait/landscape placeholders for uploaded JPGs
- All images: rounded corners (rounded-lg), subtle shadow, hover zoom effect