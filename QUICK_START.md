# ⚡ Quick Start Guide

## In 3 Minutes

### 1️⃣ Install & Run
```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) 🎉

### 2️⃣ Make It Yours
Edit these files with your info:

| What to Change | Where | Info |
|---|---|---|
| Name in nav | `src/components/Navbar.tsx` | Line: Logo area |
| Who you are | `src/components/Hero.tsx` | Heading + subheading |
| About section | `src/components/About.tsx` | Bio paragraphs |
| Skills | `src/components/Skills.tsx` | skillsData array |
| Projects | `src/components/Projects.tsx` | projectsData array |
| Contact info | `src/components/Contact.tsx` | Email, phone, links |
| Colors | `tailwind.config.js` | colors object |

### 3️⃣ Deploy
```bash
npm run build
npm start
```

Then deploy to [Vercel](https://vercel.com), [Netlify](https://netlify.com), or your hosting.

---

## 🆘 Common Tasks

### Change the primary color (teal)
Edit `tailwind.config.js`:
```javascript
'accent-teal': '#YOUR_COLOR_HERE'
```

### Add your photo
1. Create `public/photo.jpg`
2. Replace emoji in components with:
```jsx
<Image src="/photo.jpg" alt="Your Name" />
```

### Publish to Vercel (Free!)
```bash
npm install -g vercel
vercel
```

### Hide the dark/light toggle
In `src/components/Navbar.tsx`, comment out:
```javascript
{/* <motion.button onClick={() => setIsDark(!isDark)}... />  */}
```

### Change "Download Resume" button link
In `src/components/Hero.tsx`, update:
```jsx
<a href="path/to/your/resume.pdf">
```

---

## 📝 Key Files at a Glance

```
🎨 Colors & Theme      → tailwind.config.js
📖 Main Page          → src/app/page.tsx  
🧭 Navigation         → src/components/Navbar.tsx
⭐ Hero Section       → src/components/Hero.tsx
📚 About You          → src/components/About.tsx
🛠️  Skills            → src/components/Skills.tsx
🎯 Projects           → src/components/Projects.tsx
📧 Contact Form       → src/components/Contact.tsx
🔗 Footer             → src/components/Footer.tsx
```

---

## 💡 Pro Tips

1. **Use smooth scroll**: All navigation links already support it (`href="#section-id"`)

2. **Custom fonts**: Add via Google Fonts in `src/app/layout.tsx`

3. **Animations**: Already built-in! Components use Framer Motion automatically

4. **Mobile responsive**: Works on all devices automatically (Tailwind)

5. **SEO ready**: Update title/description in `src/app/layout.tsx`

---

## 🐛 Troubleshooting

| Problem | Solution |
|---|---|
| Port 3000 in use | `npm run dev -- -p 3001` |
| Styles not updating | `rm -rf .next` then `npm run dev` |
| Module not found | `npm install` then restart |
| Page blank | Check browser console for errors |

---

## 📖 Need More Help?

- **Setup Details**: See `SETUP_GUIDE.md`
- **File Structure**: See `FILE_STRUCTURE.md`
- **Full Docs**: See `README.md`

---

**That's it! You're ready to customize and ship! 🚀**
