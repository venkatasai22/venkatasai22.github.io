# SETUP AND DEPLOYMENT GUIDE

## Quick Start

### 1. Install Dependencies
```bash
npm install
```

This will install:
- next (v14.0.0)
- react & react-dom (v18.2.0)
- tailwindcss (v3.3.0)
- framer-motion (v10.16.0)
- react-icons (v4.12.0)

### 2. Run Development Server
```bash
npm run dev
```

The site will be available at `http://localhost:3000`

### 3. Build for Production
```bash
npm run build
npm start
```

## File Structure Explanation

### Core Configuration Files
- `package.json` - Project dependencies and scripts
- `tsconfig.json` - TypeScript configuration
- `tailwind.config.js` - Tailwind CSS theme colors and customization
- `postcss.config.js` - PostCSS plugins (Tailwind, Autoprefixer)
- `next.config.js` - Next.js configuration

### Application Code
- `src/app/layout.tsx` - Root layout wrapping all pages
- `src/app/page.tsx` - Main portfolio page (imports all components)
- `src/app/globals.css` - Global styles, animations, and utility classes
- `src/components/` - Reusable React components:
  - `Navbar.tsx` - Navigation bar with mobile menu
  - `Hero.tsx` - Hero section with CTA buttons
  - `About.tsx` - About section with timeline
  - `Skills.tsx` - Skills grid with progress bars
  - `Projects.tsx` - Projects display with modal
  - `Contact.tsx` - Contact form and info
  - `Footer.tsx` - Footer with social links

## Customization Guide

### Change Colors
Edit `tailwind.config.js` in the `colors` object:
```javascript
colors: {
  'primary-dark': '#0a0f1e',  // Main background
  'secondary-dark': '#1e293b', // Secondary background
  'text-light': '#f8fafc',     // Text color
  'accent-teal': '#22d3ee',    // Primary accent
  'accent-indigo': '#6366f1',  // Secondary accent
  'muted': '#64748b',          // Muted text
  'success-green': '#10b981',  // Success color
}
```

### Update Personal Information
1. **Name/Title** - Edit in `Navbar.tsx` and `Hero.tsx`
2. **About Text** - Edit `About.tsx`
3. **Skills** - Edit `skillsData` in `Skills.tsx`
4. **Projects** - Edit `projectsData` in `Projects.tsx`
5. **Contact Info** - Edit `Contact.tsx` and `Footer.tsx`

### Add New Projects
In `Projects.tsx`, add to `projectsData`:
```javascript
{
  id: 7,
  title: 'Your Project Title',
  category: 'Project Type',
  description: 'Short description',
  fullDescription: 'Detailed description',
  tech: ['Tech1', 'Tech2', 'Tech3'],
  image: '🎨', // emoji
  github: 'https://github.com/yourrepo',
  demo: 'https://demo-link.com',
}
```

### Modify Animations
Global animations are in `src/app/globals.css`:
- `fadeInUp` - Fade and slide up
- `glow` - Glowing shadow effect
- `float` - Floating animation
- `slideInLeft/Right` - Slide animations

CSS animation classes available:
- `.animate-fade-in-up`
- `.animate-glow`
- `.animate-float`
- `.animate-slide-in-left`
- `.animate-slide-in-right`

## Key Components Breakdown

### Navbar
- **Fixed positioning** - Stays at top on scroll
- **Links** - Smooth scroll to sections
- **Mobile Menu** - Hamburger on small screens
- **Theme Toggle** - Dark/light mode switch (UI only)

### Hero
- **Parallax Background** - Subtle gradient animation
- **Particle Effects** - Animated background dots
- **CTA Buttons** - "View Projects" and "Download Resume"
- **Profile Photo** - Circular with hover effect

### About
- **Two-Column Layout** - Photo + Bio (desktop)
- **Timeline** - Education and hackathons
- **Stats** - Quick numbers display

### Skills
- **6 Skill Categories** - Organized into groups
- **Progress Bars** - Animate on scroll
- **Hover Effects** - Card elevation and rotation

### Projects
- **Masonry Grid** - 3 columns on desktop, responsive
- **Hover Overlays** - GitHub and demo links
- **Modal View** - Click to see full details
- **Tech Stack Tags** - Display technologies used

### Contact
- **Contact Form** - Name, email, message fields
- **Success Message** - Shows after submission
- **Info Cards** - Email, phone, location
- **Social Links** - LinkedIn, GitHub, Email

### Footer
- **Quick Links** - Navigation links
- **Social Icons** - Linked to profiles
- **Scroll Button** - Appears after scrolling (bottom right)

## Deployment Options

### 1. Vercel (Recommended)
- Simplest deployment for Next.js
- Automatic builds on push
- Free tier available

```bash
npm install -g vercel
vercel
```

### 2. Netlify
- Good alternative option
- Connect GitHub repo for CI/CD
- Generous free tier

```bash
# Build locally first
npm run build

# Then deploy to Netlify
```

### 3. GitHub Pages
- Free static hosting
- Good for personal projects

```bash
# Export as static
npm run build
# Deploy /out folder
```

### 4. Docker (Advanced)
Create `Dockerfile`:
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

## Performance Checklist

- ✅ Images optimized (use Next.js Image component)
- ✅ CSS minified with Tailwind
- ✅ Animations GPU-accelerated
- ✅ Fonts preloaded in layout
- ✅ Lazy loading for images
- ✅ Code splitting automatic in Next.js
- ✅ Responsive images (srcset)

## SEO Optimization

### Meta Tags (in layout.tsx)
- Title: "Pedduri Venkatasai | Portfolio"
- Description: "B.Tech AIML Graduate | Aspiring SDE & AI Engineer..."

### Recommendations
- Add JSON-LD structured data
- Add Open Graph tags for social sharing
- Create sitemap.xml
- Add robots.txt

## Troubleshooting

### Development Server Won't Start
```bash
# Clear Next.js cache
rm -rf .next

# Reinstall dependencies
rm -rf node_modules package-lock.json
npm install

# Try again
npm run dev
```

### Styling Issues
- Clear Tailwind cache: `rm -rf .next`
- Rebuild: `npm run dev`
- Check `tailwind.config.js` is properly configured

### Mobile Menu Not Working
- Ensure JavaScript is enabled
- Check browser console for errors
- Verify Framer Motion is installed

## Browser Support

- Chrome/Edge: Latest 2 versions
- Firefox: Latest 2 versions
- Safari: Latest 2 versions
- Mobile browsers: iOS Safari 12+, Chrome Mobile

## Additional Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Framer Motion Documentation](https://www.framer.com/motion/)
- [React Icons Documentation](https://react-icons.github.io/react-icons/)

## Support

For issues or questions:
1. Check the README.md
2. Review component comments
3. Check Next.js/Tailwind documentation
4. Test in development mode (`npm run dev`)

---

**Last Updated**: March 2026
