# 🚀 Deployment Guide

Your portfolio can be deployed using any of these methods. Choose the one that works best for you!

---

## **Option 1: Vercel (Recommended - 5 minutes)**

Vercel is the official Next.js hosting platform. Deployment is automatic and free.

### Steps:

1. **Sign up at Vercel**
   - Go to https://vercel.com
   - Click "Sign Up"
   - Choose "Continue with GitHub"
   - Authorize Vercel to access your GitHub

2. **Import Your Repository**
   - Click "New Project"
   - Select `venkatasai22/venkatasai22.github.io`
   - Click "Import"

3. **Configure Project**
   - Framework: Auto-detected as Next.js
   - Root Directory: ./
   - Environment Variables: (leave blank)
   - Click "Deploy"

4. **Done!**
   - Vercel provides a URL like: `https://venkatasai22-github-io.vercel.app`
   - Your site will auto-deploy on every push to `main` branch

### Add a Custom Domain (Optional):
- Go to Vercel Project Settings → Domains
- Add your custom domain
- Update DNS settings as instructed

---

## **Option 2: GitHub Pages (Free)**

Host directly on GitHub Pages using your github.io repository.

### Steps:

1. **Enable GitHub Pages**
   - Go to https://github.com/venkatasai22/venkatasai22.github.io
   - Click Settings → Pages
   - Source: Choose `Deploy from a branch`
   - Branch: `main`
   - Folder: Choose the folder with exported files
   - Click "Save"

2. **Set Up GitHub Actions** (Recommended)
   - Create file: `.github/workflows/deploy.yml` (already included)
   - This will auto-build and deploy on every push

3. **Access Your Site**
   - URL: https://venkatasai22.github.io

**Note**: GitHub Pages free tier can be slower. Vercel is recommended for Next.js.

---

## **Option 3: Netlify (Free)**

Another excellent free hosting option with automatic deploys.

### Steps:

1. **Sign up at Netlify**
   - Go to https://netlify.com
   - Click "Sign up"
   - Choose "Continue with GitHub"

2. **Deploy from GitHub**
   - Click "New site from Git"
   - Select `venkatasai22/venkatasai22.github.io`

3. **Configure Build Settings**
   - Build command: `npm run build`
   - Publish directory: `.next`
   - Click "Deploy"

4. **Done!**
   - Your site is live at a Netlify URL
   - Auto-deploys on every push to main

---

## **Option 4: Traditional Hosting (Self-Hosted)**

For AWS, DigitalOcean, or custom servers:

### Build Locally:
```bash
npm run build
npm start
```

### Deploy:
- Copy project files to your server
- Install Node.js on server
- Run: `npm install && npm start`
- Use Nginx/Apache as reverse proxy
- Point domain to your server

---

## **Quick Comparison**

| Platform | Cost | Setup Time | Auto-Deploy | Performance | Best For |
|----------|------|-----------|-------------|-------------|----------|
| **Vercel** | Free | 5 min | ✅ Yes | ⭐⭐⭐⭐⭐ | **Recommended** |
| **Netlify** | Free | 5 min | ✅ Yes | ⭐⭐⭐⭐ | Good alternative |
| **GitHub Pages** | Free | 10 min | ✅ Yes | ⭐⭐⭐ | GitHub-first |
| **Self-Hosted** | Paid | 20+ min | ❌ Manual | Variable | Full control |

---

## **Recommended: Vercel Deployment (Fastest)**

### One-Command Deployment:

If Vercel CLI is installed:
```bash
npm install -g vercel
vercel
```

Follow the prompts and your site is live in seconds!

---

## **After Deployment**

### Test Your Site:
- [ ] Home page loads
- [ ] Navigation links work
- [ ] Responsive on mobile
- [ ] Images load correctly
- [ ] Forms work (if configured)
- [ ] Links to GitHub/LinkedIn work

### Set Up Custom Domain:
Most platforms support custom domains. Update your DNS to point to the deployed site.

### Monitor Performance:
- Vercel: Check Vercel dashboard
- Netlify: Check Netlify analytics
- GitHub Pages: Check GitHub Pages settings

---

## **Environment Variables** (if needed)

If you add backend features, you may need environment variables:

1. Create `.env.local` (local development)
2. Add variables to hosting platform settings:
   - **Vercel**: Settings → Environment Variables
   - **Netlify**: Settings → Build & Deploy → Environment

---

## **Troubleshooting**

### Site not deploying?
- Check that main branch is up-to-date: `git push origin main`
- Verify build succeeds locally: `npm run build`
- Check platform CI/CD logs

### Styling not showing?
- Tailwind CSS needs proper build: `npm run build`
- Check CSS imports in layout.tsx

### Images not loading?
- Keep images under 1MB
- Use relative paths in public folder
- Vercel/Netlify handle image optimization

### Port already in use?
```bash
npm run dev -- -p 3001
```

---

##📱 **Mobile Test**

After deployment, test on mobile:
- Use Chrome DevTools mobile view
- Or test on real phone
- Check hamburger menu works
- Verify responsive layout

---

## **Keep Site Updated**

To update your live site:

1. Make changes locally
2. Test: `npm run dev`
3. Commit: `git add . && git commit -m "Update message"`
4. Push: `git push origin main`
5. Platform auto-deploys (Vercel/Netlify)

---

## **Next Steps**

1. **Choose a platform** (Vercel recommended)
2. **Sign up** (if needed)
3. **Connect GitHub** and import repository
4. **Deploy** (usually just one click)
5. **Share your portfolio!**

Your portfolio will be live in **5-10 minutes** with any of these options.

**Recommended action**: Deploy to Vercel - it's the fastest and best for Next.js!

---

**Questions?** Check platform documentation or reach out for help.
