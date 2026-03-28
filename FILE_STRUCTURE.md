# Portfolio File Structure & Key Files

## 📁 Complete Project Structure

```
my_portfolio/
│
├── 📄 Root Configuration Files
│   ├── package.json              # Dependencies & scripts
│   ├── tsconfig.json             # TypeScript config
│   ├── tailwind.config.js        # Tailwind theme colors
│   ├── postcss.config.js         # CSS processing
│   ├── next.config.js            # Next.js configuration
│   ├── .gitignore                # Git exclusions
│   ├── .env.example              # Environment template
│   │
├── 📚 Documentation
│   ├── README.md                 # Main documentation
│   ├── SETUP_GUIDE.md            # Detailed setup & customization
│   └── FILE_STRUCTURE.md         # This file
│
├── src/
│   │
│   ├── 📱 app/ (Next.js App Router)
│   │   ├── layout.tsx            # Root HTML layout & meta tags
│   │   ├── page.tsx              # Main portfolio page
│   │   └── globals.css           # Global styles & animations
│   │
│   └── 🧩 components/ (Reusable Components)
│       ├── Navbar.tsx            # Navigation bar fixed at top
│       ├── Hero.tsx              # Full-screen hero section
│       ├── About.tsx             # About & timeline section
│       ├── Skills.tsx            # Skills grid with progress bars
│       ├── Projects.tsx          # Projects with modal view
│       ├── Contact.tsx           # Contact form & info
│       └── Footer.tsx            # Footer with scroll button
│
├── public/                       # Static assets (future: images, docs)
│
└── .next/                        # Build output (auto-generated)
    └── node_modules/             # Dependencies (auto-generated)
```

## 🔑 Key Files Explained

### Configuration Files

#### `package.json`
- Defines project metadata and dependencies
- Scripts: `dev` (development), `build` (production), `start`, `lint`
- Contains React, Next.js, Tailwind, Framer Motion versions

#### `tailwind.config.js`
- Defines custom color palette (primary-dark, accent-teal, etc.)
- Font families (Inter, JetBrains Mono)
- Font sizes (hero, heading-lg, body-lg, etc.)
- **Edit this to change colors globally**

#### `tsconfig.json`
- TypeScript compiler configuration
- Path aliases: `@/*` maps to `src/*`
- Enables strict type checking

#### `next.config.js`
- Next.js optimization settings
- Image handling configuration

### Application Core

#### `src/app/layout.tsx`
```typescript
// Key exports:
export const metadata = {...}  // SEO meta tags
// Returns HTML structure with Navbar, content, Footer
```
- Root layout wrapping entire app
- Sets up meta tags for SEO
- Imports global CSS

#### `src/app/page.tsx`
```typescript
// Imports all components in order:
<Navbar />
<Hero />
<About />
<Skills />
<Projects />
<Contact />
<Footer />
```
- Main page that combines all sections
- Simple and clean structure

#### `src/app/globals.css`
- Global CSS variables and reset
- Custom animations:
  - `@keyframes fadeInUp`
  - `@keyframes glow`
  - `@keyframes float`
- Utility classes (`.gradient-text`, `.shadow-glow`, etc.)

### Component Files

Each component is a "Client Component" (marked with `'use client'`) for interactivity:

#### `src/components/Navbar.tsx`
- Fixed navigation bar
- Hamburger menu for mobile
- Dark/light theme toggle (UI only)
- Smooth scroll links

#### `src/components/Hero.tsx`
- Full-viewport hero section
- Animated background particles
- Main heading with glow effect
- Profile emoji avatar
- CTA buttons: "View Projects" & "Download Resume"

#### `src/components/About.tsx`
- Two-column layout (desktop)
- Bio and professional summary
- Timeline of education and achievements
- Quick stats grid

#### `src/components/Skills.tsx`
- 6 skill categories in grid
- Each skill has animated progress bar
- Icons for each category
- Hover effects on cards

#### `src/components/Projects.tsx`
- Masonry grid (auto-responsive)
- 6 project cards
- Hover overlay with links
- Click to open modal with details
- Modal shows full description and tech stack

#### `src/components/Contact.tsx`
- Contact form (name, email, message)
- Success message on submission
- Contact info cards (email, phone, location)
- Social media links
- Call-to-action box

#### `src/components/Footer.tsx`
- Three-column footer layout
- Quick links
- Social media icons
- Scroll-to-top button (FAB)
- Copyright notice

## 🎨 Color System

Colors are defined in `tailwind.config.js` and used as Tailwind classes:

```javascript
// In tailwind.config.js
colors: {
  'primary-dark': '#0a0f1e',      // Used: bg-primary-dark
  'secondary-dark': '#1e293b',    // Used: bg-secondary-dark
  'text-light': '#f8fafc',        // Used: text-text-light
  'accent-teal': '#22d3ee',       // Used: bg-accent-teal, text-accent-teal
  'accent-indigo': '#6366f1',     // Used: bg-accent-indigo
  'muted': '#64748b',             // Used: text-muted
  'success-green': '#10b981',     // Used: bg-success-green
}
```

## 📊 Data Structure

### Skills Data (Skills.tsx)
```typescript
const skillsData = [
  {
    category: 'Programming',
    icon: FiCode,
    skills: [
      { name: 'Python', level: 90 },
      { name: 'Java', level: 70 },
      ...
    ]
  },
  ...
]
```

### Projects Data (Projects.tsx)
```typescript
const projectsData = [
  {
    id: 1,
    title: 'Project Name',
    category: 'Category',
    description: 'Short desc',
    fullDescription: 'Long desc',
    tech: ['Tech1', 'Tech2'],
    image: '🎨',
    github: 'url',
    demo: 'url'
  },
  ...
]
```

## 🔄 Component Flow

```
layout.tsx (Root)
└── page.tsx
    ├── Navbar (always visible)
    ├── Hero (full viewport)
    ├── About (with sections)
    ├── Skills (grid)
    ├── Projects (modal)
    ├── Contact (form + info)
    └── Footer (with scroll button)
```

## 🎬 Animation Classes

Defined in `globals.css`, available anywhere:

- `.animate-fade-in-up` - Fade in with upward movement
- `.animate-glow` - Glowing shadow pulsing
- `.animate-float` - Up-down floating motion
- `.animate-slide-in-left` - Slide from left
- `.animate-slide-in-right` - Slide from right

## 📚 Import Paths

Thanks to `tsconfig.json` path alias `@/*` → `src/*`:

```typescript
// Instead of:
import Navbar from '../../../components/Navbar'

// Write:
import Navbar from '@/components/Navbar'
```

## 🔧 Commonly Modified Files

1. **Change colors**: `tailwind.config.js`
2. **Update personal info**: All component files
3. **Add projects**: `src/components/Projects.tsx`
4. **Modify sections**: Individual component files
5. **Change fonts**: `tailwind.config.js` + `globals.css`

## 📦 Dependencies Quick Ref

- `next` - Framework
- `react` & `react-dom` - UI library
- `tailwindcss` - Styling
- `framer-motion` - Animations
- `react-icons` - Icon library

---

**For detailed setup instructions, see SETUP_GUIDE.md**
