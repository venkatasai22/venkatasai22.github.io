# Pedduri Venkatasai | Portfolio Website

A professional, modern, and responsive single-page portfolio website built with **Next.js**, **React**, **Tailwind CSS**, and **Framer Motion**. Featuring a dark futuristic theme with smooth animations and interactions.

## 🎨 Design Features

### Color Palette
- **Primary Background**: `#0a0f1e` (Deep Space Navy)
- **Secondary**: `#1e293b` (Charcoal)
- **Text**: `#f8fafc` (Off-white)
- **Primary Accent**: `#22d3ee` (Neon Cyan/Teal)
- **Secondary Accent**: `#6366f1` (Soft Indigo)
- **Muted**: `#64748b` (Subtext)
- **Success**: `#10b981` (Green)

### Typography
- **Headings**: Inter Bold (3rem-5rem)
- **Body**: Inter Regular (1rem)
- **Code/Tech Stack**: JetBrains Mono

### Key Features
✨ **Smooth Animations** with Framer Motion  
📱 **Fully Responsive** - Mobile-first design  
🌙 **Dark Mode** (Default) with theme toggle  
⚡ **Fast Performance** - Next.js optimization  
♿ **Accessible** - WCAG AA compliant  
🎯 **SEO Optimized** - Meta tags & structured data  

## 📋 Sections

1. **Navbar** - Fixed navigation with smooth scroll, dark/light toggle, and mobile hamburger menu
2. **Hero** - Full-viewport hero section with parallax background and CTA buttons
3. **About** - Bio, education timeline, and quick stats
4. **Skills** - Categorized skills with animated progress bars
5. **Projects** - Masonry grid with modal view and tech stack details
6. **Contact** - Contact form, social links, and contact information
7. **Footer** - Links, social profiles, and scroll-to-top button

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone the repository** (if applicable)
```bash
cd my_portfolio
```

2. **Install dependencies**
```bash
npm install
# or
yarn install
```

3. **Run the development server**
```bash
npm run dev
# or
yarn dev
```

4. **Open in browser**
Navigate to [http://localhost:3000](http://localhost:3000)

## 🏗️ Project Structure

```
my_portfolio/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout
│   │   ├── page.tsx            # Main page
│   │   └── globals.css         # Global styles & animations
│   └── components/
│       ├── Navbar.tsx          # Navigation bar
│       ├── Hero.tsx            # Hero section
│       ├── About.tsx           # About section
│       ├── Skills.tsx          # Skills section
│       ├── Projects.tsx        # Projects section
│       ├── Contact.tsx         # Contact section
│       └── Footer.tsx          # Footer
├── public/                      # Static assets
├── package.json
├── tsconfig.json
├── tailwind.config.js
├── postcss.config.js
└── next.config.js
```

## 🛠️ Technologies Used

### Frontend Framework
- **Next.js 14** - React framework with SSR/SSG
- **React 18** - UI library
- **TypeScript** - Type safety

### Styling
- **Tailwind CSS** - Utility-first CSS framework
- **PostCSS** - CSS transformations
- **Custom CSS Animations** - Fade, glow, float effects

### Animations & Interactions
- **Framer Motion** - Advanced animations library
- **React Icons** - Icon library (FiIcon set)

### Development Tools
- **VS Code** - Recommended editor
- **Git** - Version control

## 🎬 Animations & Interactions

- **Fade In Up** - Elements fade and slide up on scroll
- **Glow Effect** - Buttons and accents have glowing shadows
- **Hover Scales** - Interactive elements scale on hover (1.05)
- **Particle Background** - Animated background particles in hero
- **Smooth Scroll** - Smooth transitions between sections
- **Progress Bar Animation** - Skill bars animate on scroll

## 📱 Responsive Design

- **Mobile First** approach
- **Breakpoints**:
  - `sm`: 640px
  - `md`: 768px
  - `lg`: 1024px
  - `xl`: 1280px
- **Hamburger Menu** on mobile devices
- **Flexible Grid Layouts** that adapt to screen size

## ♿ Accessibility

- WCAG AA compliant
- High contrast colors (4.5:1 ratio)
- Semantic HTML elements
- Keyboard navigation support
- Alt text for images
- ARIA labels where needed

## 📊 Performance Optimizations

- Image optimization with Next.js Image component
- Code splitting and lazy loading
- CSS minification with Tailwind
- Optimized animations (GPU-accelerated)
- Fast font loading with web fonts
- Minimal JavaScript bundle

## 🚀 Deployment

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Other Platforms
- **Netlify**: Connect GitHub repo for auto-deployment
- **GitHub Pages**: Export as static site
- **Traditional Hosting**: `npm run build` then deploy `/out` folder

## 🔐 Environment Variables

Create a `.env.local` file for any environment-specific variables:
```env
NEXT_PUBLIC_SITE_URL=https://yourportfoliosite.com
```

## 📝 Customization

### Update Personal Information
Edit relevant sections in component files:
- **Name**: Navbar, Hero
- **About**: About.tsx
- **Skills**: Skills.tsx
- **Projects**: Projects.tsx
- **Contact**: Contact.tsx

### Modify Colors
Update color values in `tailwind.config.js`:
```javascript
colors: {
  'primary-dark': '#0a0f1e',
  'accent-teal': '#22d3ee',
  // ... other colors
}
```

### Add/Remove Projects
Edit the `projectsData` array in `Projects.tsx`

## 📞 Contact

- **Email**: [venkatsaipedduri@gmail.com](mailto:venkatsaipedduri@gmail.com)
- **Phone**: +91 9392567391
- **LinkedIn**: [linkedin.com/in/venkatasaipedduri-358036304](https://linkedin.com/in/venkatasaipedduri-358036304)
- **Location**: Hyderabad, Telangana

## 📄 License

This project is open source and available under the MIT License.

## 🙏 Credits

- Icons: [React Icons](https://react-icons.github.io/react-icons/)
- Animation: [Framer Motion](https://www.framer.com/motion/)
- Styling: [Tailwind CSS](https://tailwindcss.com/)
- Framework: [Next.js](https://nextjs.org/)

## 📈 Version History

### v1.0.0 (Initial Release)
- Complete portfolio website with all sections
- Dark/light theme toggle
- Fully responsive design
- Smooth animations and interactions
- Contact form
- Social media integration

---

**Built with ❤️ by Pedduri Venkatasai**
