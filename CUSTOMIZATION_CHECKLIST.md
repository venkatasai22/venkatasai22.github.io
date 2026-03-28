# 📋 Customization Checklist

Use this checklist to personalize your portfolio. Check off each item as you complete it.

## Phase 1: Setup & Run ⚙️

- [ ] **Navigate to project folder**
  ```bash
  cd d:\Devilspace\my_portfolio
  ```

- [ ] **Install dependencies**
  ```bash
  npm install
  ```
  *Expected time: 2-5 minutes*

- [ ] **Start development server**
  ```bash
  npm run dev
  ```

- [ ] **Open in browser**
  Navigate to http://localhost:3000 and verify site loads

- [ ] **Check responsiveness**
  - [ ] Desktop view looks good
  - [ ] Tablet view works
  - [ ] Mobile view (toggle mobile in DevTools)

---

## Phase 2: Personalize Information 📝

### Navbar & Branding
- [ ] Edit name in `src/components/Navbar.tsx`
  - Find: `"VS | AIML <span>Engineer</span>"`
  - Update: Use your full name or initials
  - Line: ~25

### Hero Section
- [ ] Update main heading in `src/components/Hero.tsx`
  - Find: `"Hi, I'm <span>Venkatasai</span>"`
  - Update: Your name
  - Line: ~50

- [ ] Update subheading
  - Current: "B.Tech AIML Graduate | Aspiring SDE & AI Engineer"
  - Update: Your title/role
  - Line: ~60

- [ ] Update description paragraph
  - Current: About building web solutions
  - Update: Your professional summary
  - Line: ~70

- [ ] Update button text (optional)
  - Line: Project & Resume button text

### About Section
- [ ] Heading
  - Update: "Entry-Level Software Engineer" to your title
  - File: `src/components/About.tsx`
  - Line: ~85

- [ ] Biography paragraphs (3-4 sentences each)
  - Paragraph 1: Your background/education
  - Paragraph 2: Experience/technical skills
  - Paragraph 3: Your personality/interests
  - Lines: ~90-110

- [ ] Update timeline events
  - Current: Education (2021-2025), Hackathon, Internship
  - Replace with your actual timeline
  - `timelineEvents` array: Lines ~8-20

### Skills Section
- [ ] Update 6 skill categories in `src/components/Skills.tsx`
  - Keep or modify: Programming, Backend, AI/ML, Tools, Concepts, ITSM
  - Update `skillsData` array (Lines: ~8-60)
  - For each skill, set appropriate proficiency level (1-100)

### Projects Section
- [ ] Update 6 projects in `src/components/Projects.tsx`
  - Edit `projectsData` array (Lines: ~8-100)
  - For each project:
    - [ ] Set project title
    - [ ] Set category
    - [ ] Write short description (2-3 sentences)
    - [ ] Write full description (5-10 sentences)
    - [ ] List technologies used
    - [ ] Set emoji icon
    - [ ] Add GitHub link
    - [ ] Add demo/live link (optional)

### Contact Section
- [ ] Email address in `src/components/Contact.tsx`
  - Current: venkatsaipedduri@gmail.com
  - Update: Your email
  - Lines: ~79, ~180, ~200

- [ ] Phone number
  - Current: +91 9392567391
  - Update: Your phone
  - Lines: ~85, ~187

- [ ] Location
  - Current: Hyderabad, Telangana
  - Update: Your location
  - Line: ~91

- [ ] Social media links
  - LinkedIn: Your LinkedIn URL
  - GitHub: Your GitHub profile URL
  - Email: Your contact email
  - Lines: ~75-90, ~200-210

### Footer
- [ ] Update bio paragraph in `src/components/Footer.tsx`
  - Lines: ~15-20

- [ ] Verify social links match Contact section
  - Lines: ~50-65

- [ ] Update copyright year (auto-updates but verify)
  - Line: ~90

---

## Phase 3: Design Customization 🎨

### Colors (Optional)
- [ ] Edit `tailwind.config.js` if you want different colors
  - Teal accent: `'accent-teal': '#22d3ee'`
  - Indigo accent: `'accent-indigo': '#6366f1'`
  - You can use any hex color

### Typography (Optional)
- [ ] Change fonts in `tailwind.config.js`
  - Headings: Inter (or change to your font)
  - Body: Inter (or change to your font)
  - Code: JetBrains Mono (or change to your font)

### Animations (Optional)
- [ ] Keep default animations (recommended) or edit `globals.css`
  - Fade-in effect
  - Glow effect
  - Float effect
  - Adjust timing/intensity as desired

---

## Phase 4: Content Enhancement 📸

### Add Profile Photo
- [ ] Create `public/` folder (if doesn't exist)
- [ ] Add your photo as `public/profile.jpg`
- [ ] Update component to use it:
  ```jsx
  <Image src="/profile.jpg" alt="Your Name" />
  ```

### Project Images (Optional)
- [ ] Add project screenshots to `public/`
- [ ] Update project cards to display images
- [ ] Replace emoji with actual images (optional)

### Resume File
- [ ] Create `public/resume.pdf` with your resume
- [ ] Update "Download Resume" button link:
  ```jsx
  href="/resume.pdf"
  ```

### Favicon (Optional)
- [ ] Create `public/favicon.ico` with your logo
- [ ] Add to head in `layout.tsx`

---

## Phase 5: Testing & Validation ✅

### Functionality Testing
- [ ] All navigation links work (smooth scroll to sections)
- [ ] Mobile menu opens/closes
- [ ] Theme toggle button works (UI)
- [ ] Contact form inputs work
- [ ] All external links work (LinkedIn, GitHub, email)
- [ ] Scroll-to-top button appears and works
- [ ] Project cards are clickable
- [ ] Project modal opens/closes

### Visual Testing
- [ ] Colors look good throughout
- [ ] Fonts are readable
- [ ] Images load properly
- [ ] No broken images or icons
- [ ] Consistent spacing/padding
- [ ] Buttons have hover effects
- [ ] Mobile layout is responsive

### Responsiveness Testing
- [ ] **Mobile (320px-480px)**
  - [ ] Text is readable
  - [ ] Buttons are clickable
  - [ ] Menu works
  - [ ] No horizontal scroll

- [ ] **Tablet (768px-1024px)**
  - [ ] Layout looks good
  - [ ] Images scale properly
  - [ ] Two-column layouts work

- [ ] **Desktop (124px+)**
  - [ ] Full layout visible
  - [ ] No strange stretching
  - [ ] Optimal readability

### Accessibility Testing
- [ ] Keyboard navigation works (Tab, Enter)
- [ ] Color contrast is good
- [ ] Links are understandable
- [ ] Images have alt text (where needed)
- [ ] Forms are labeled

### Browser Testing
- [ ] Chrome/Edge latest
- [ ] Firefox latest
- [ ] Safari (if Mac available)
- [ ] Mobile browsers

---

## Phase 6: Optimization 🚀

### Performance
- [ ] Run build and check bundle size
  ```bash
  npm run build
  ```
- [ ] Check for unused imports
- [ ] Optimize images (keep <500KB each)
- [ ] Remove unused CSS (Tailwind does this)

### SEO
- [ ] Update meta title in `layout.tsx`
- [ ] Update meta description in `layout.tsx`
- [ ] Verify all links work
- [ ] Check for proper heading hierarchy

### Code Quality
- [ ] No console errors
- [ ] No console warnings
- [ ] Code is readable
- [ ] Comments are clear

---

## Phase 7: Deployment 🚀

Choose one deployment option:

### Option A: Vercel (Recommended)
- [ ] Create Vercel account at vercel.com
- [ ] Install Vercel CLI: `npm install -g vercel`
- [ ] Deploy: `vercel`
- [ ] Follow prompts
- [ ] Visit your live site

### Option B: Netlify
- [ ] Create Netlify account
- [ ] Connect GitHub repository
- [ ] Set build command: `npm run build`
- [ ] Set publish directory: `.next`
- [ ] Deploy automatically

### Option C: Traditional Hosting
- [ ] Run: `npm run build`
- [ ] Upload contents of `out/` folder
- [ ] Point domain to hosting
- [ ] Test live site

### Option D: GitHub Pages
- [ ] Export as static: Configure next.config.js
- [ ] Run: `npm run build`
- [ ] Deploy `out/` folder

---

## Phase 8: Post-Launch 📊

- [ ] Test live domain
- [ ] Verify all links work
- [ ] Check performance (Lighthouse)
- [ ] Add to resume/LinkedIn
- [ ] Share with network
- [ ] Monitor analytics (optional)

### Optional Enhancements
- [ ] Add Google Analytics
- [ ] Setup contact form submission (Formspree/Sendgrid)
- [ ] Create sitemap.xml
- [ ] Add blog section (future)
- [ ] Setup domain email
- [ ] Add certificate/achievements section

---

## 📝 Notes

**Est. Time to Complete: 1-2 hours**

### Quick Reference
- **Config files** that rarely need change:
  - ✅ `package.json`
  - ✅ `tsconfig.json`
  - ✅ `next.config.js`
  - ✅ `postcss.config.js`

- **Files you WILL edit:**
  - All files in `src/components/`
  - `tailwind.config.js` (optional)

- **Common Issues & Fixes:**
  - Port 3000 in use? → `npm run dev -- -p 3001`
  - Styles not updating? → Delete `.next/` folder
  - Module error? → Run `npm install` again

---

## ✨ Final Checklist

Before launching:
- [ ] All personal info is correct and up-to-date
- [ ] All links work (test in DevTools network tab)
- [ ] Mobile responsive (test on real phone)
- [ ] No console errors (check DevTools Console)
- [ ] Contact form works (test submission)
- [ ] Performance is good (Lighthouse score 90+)
- [ ] SEO is setup (meta tags updated)
- [ ] Domain is configured (if custom domain)
- [ ] SSL certificate is valid
- [ ] Backup of code is created (Git)

---

**You're all set! 🎉 Your portfolio is ready to impress!**

Questions? Check the guides:
- `QUICK_START.md` - Fast setup
- `SETUP_GUIDE.md` - Detailed help
- README.md - Full documentation
