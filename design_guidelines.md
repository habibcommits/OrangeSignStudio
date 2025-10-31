# Orange Sign - Design Guidelines

## Design Approach

**Reference-Based Approach**: Drawing inspiration from premium creative agencies and portfolio sites (Behance, Awwwards winners, modern print studios) to create a visually sophisticated experience that showcases Orange Sign's craftsmanship and 30+ years of expertise.

## Core Design Principles

1. **Premium Visual Identity**: Every element should reflect high-quality craftsmanship
2. **Bold but Balanced**: Orange as strategic accent, not overwhelming
3. **Gallery-First Thinking**: Projects are the hero - showcase work prominently
4. **Trust Building**: Professional polish with client-focused messaging

---

## Typography System

**Font Family**: Poppins for headings (bold, confident), Inter for body (clean, readable)

**Hierarchy**:
- Hero Headline: 3.5rem (desktop) / 2.25rem (mobile), Poppins Bold, tight leading
- Section Headings: 2.5rem (desktop) / 1.875rem (mobile), Poppins SemiBold
- Subsection Titles: 1.5rem, Poppins Medium
- Card Titles: 1.25rem, Poppins SemiBold
- Body Text: 1rem, Inter Regular, relaxed leading (1.7)
- Small Text/Labels: 0.875rem, Inter Medium
- Stats/Numbers: 3rem, Poppins Bold (emphasis on 30+ years, 500+ projects)

---

## Layout System

**Spacing Units**: Use Tailwind units of 4, 6, 8, 12, 16, 20, 24 (e.g., p-4, gap-8, mb-12)

**Container Strategy**:
- Full-width sections with inner max-w-7xl for content
- Text-heavy sections: max-w-4xl centered
- Form sections: max-w-2xl

**Section Padding**: py-20 (desktop) / py-12 (mobile) for consistent vertical rhythm

**Grid Patterns**:
- Services: 3-column grid (lg), 2-column (md), 1-column (mobile)
- Projects Gallery: Masonry-style 3-column grid showcasing 6-8 projects
- Testimonials: 2-column grid (lg), 1-column (mobile)
- Contact: 2-column split (form left, info/map right on desktop)

---

## Color Strategy

**Primary Orange**: Use strategically - CTAs, accents, hover states, section dividers, icon backgrounds
**Light Mode**: White backgrounds, dark gray text (#1F2937), light gray cards (#F9FAFB)
**Dark Mode**: Dark backgrounds (#111827), white text, slightly lighter cards (#1F2937)
**Accent Usage**: Orange gradient overlays on hero image (subtle), orange glow on floating WhatsApp button, orange underlines on active nav items

---

## Component Library

### Hero Section
- Full-viewport height (90vh) with large background image of premium signage/print work
- Gradient overlay (dark to transparent) for text readability
- Centered content with tagline, headline, dual CTAs
- CTAs with blurred glass-morphism background (backdrop-blur-md, bg-white/20)
- Floating stats bar at bottom: "30+ Years | 500+ Projects | 5K+ Clients" with orange dividers

### Navigation
- Sticky header with blur effect on scroll (backdrop-blur-lg)
- Logo left, nav links center, theme toggle + WhatsApp icon right
- Mobile: Hamburger menu with smooth slide-in drawer
- Smooth scroll behavior to sections with offset for sticky header

### Service Cards
- Elevated cards with subtle shadow and border
- Icon at top (orange circular background, white icon)
- Title, 2-3 line description
- "Learn More" link with arrow (orange, hover underline)
- Hover: Slight lift (transform translateY(-4px)), enhanced shadow

### Projects Gallery
- Masonry grid with varying image heights for visual interest
- Overlay on hover: gradient with project title and brief description
- "View Details" button appears on hover
- High-quality project images (before/after, outdoor installations, LED signage)

### Testimonial Cards
- White/dark cards with quotation mark icon (large, orange, low opacity background)
- Client quote in larger text (1.125rem)
- Client name, role, company in smaller text with orange accent line separator
- 4-5 star rating display (orange stars)
- Professional headshot placeholder (circular, 64px)

### Contact Form
- Clean, modern form fields with floating labels
- Input fields: rounded corners (rounded-lg), border focus state (orange ring)
- Large textarea for message (min 6 rows)
- Dual CTAs: "Send Message" (orange solid) + "WhatsApp" (orange outline with icon)
- Contact info sidebar: phone (clickable), email, hours, address with icons

### Google Maps Embed
- Full-width section with 500px height (desktop) / 350px (mobile)
- Rounded corners on container, subtle shadow
- "Get Directions" overlay button (bottom-right, orange)

### Footer
- Multi-column layout: Logo/tagline | Quick Links | Services | Contact
- Social media icons (if applicable) with orange hover
- Copyright centered at bottom
- Dark background with light text (inverse of main theme)

---

## Interactive Elements

### Floating WhatsApp Button
- Fixed position bottom-right (bottom-6, right-6)
- Large circular button (64px) with WhatsApp green (#25D366)
- Pulsing animation (subtle scale effect)
- Tooltip on hover: "Chat with us"
- Shadow with green glow

### Theme Toggle
- Sun/moon icon toggle in header
- Smooth transition (300ms) between themes
- Persist choice in localStorage

### Scroll Animations (Framer Motion)
- Sections fade in and slide up on scroll (y: 50 → 0, opacity: 0 → 1)
- Stagger children in grid layouts (delay: 0.1s between items)
- Keep animations subtle and professional (no excessive motion)

---

## Images

**Hero Section**: Large, high-quality image showing premium signage installation or panaflex printing in action. Image should showcase scale and professional quality. Use gradient overlay (from rgba(0,0,0,0.6) to transparent) to ensure text readability.

**Projects Gallery**: 6-8 images of completed work:
- LED signage installations (nighttime shots)
- Large-format outdoor banners/billboards
- Storefront signage examples
- Panaflex prints in vibrant colors
- Before/after comparisons

**About Section**: Optional background image of workshop/printing facility (low opacity, subtle)

**Image Treatment**: All project images should have subtle rounded corners (rounded-lg), optimized loading (lazy load), and maintain aspect ratios.

---

## Accessibility & Polish

- High contrast text (AA compliant minimum)
- Focus states on all interactive elements (orange ring)
- Keyboard navigation support
- Loading states for form submission (spinner + disabled state)
- Success/error toast notifications (top-right, auto-dismiss)
- Smooth page transitions between routes

---

## Admin Panel Design
- Clean dashboard layout with sidebar navigation
- Project management table with thumbnail preview
- Upload dropzone for images (drag-and-drop visual feedback)
- Minimalist, data-focused design (less decoration than main site)
- Orange accent on active states and primary actions