# 🚀 Deployment Guide - Food of Indians

## Pre-Deployment Checklist

Before deploying, ensure you've updated:

- [ ] Phone numbers in `src/config/restaurantData.js`
- [ ] Email address in `src/config/restaurantData.js`
- [ ] WhatsApp number in `src/config/restaurantData.js`
- [ ] Google Maps API key in `src/pages/Contact.jsx`
- [ ] Menu prices (confirm with owner)
- [ ] Test all links and buttons
- [ ] Test on mobile devices
- [ ] Verify images load correctly

---

## Option 1: Vercel (Recommended - Free & Easy)

### Why Vercel?
- ✅ Free for personal/commercial projects
- ✅ Automatic HTTPS
- ✅ Global CDN
- ✅ Automatic deployments from Git
- ✅ Perfect for React/Vite projects

### Steps:

1. **Push to GitHub**
   ```bash
   cd food-of-indians
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin YOUR_GITHUB_REPO_URL
   git push -u origin main
   ```

2. **Deploy to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Sign up with GitHub
   - Click "New Project"
   - Import your `food-of-indians` repository
   - Vercel auto-detects Vite settings
   - Click "Deploy"
   - Done! Your site is live in ~2 minutes

3. **Custom Domain (Optional)**
   - Go to Project Settings → Domains
   - Add your domain (e.g., foodofindians.com)
   - Update DNS records as instructed
   - HTTPS is automatic

---

## Option 2: Netlify (Free & Popular)

### Why Netlify?
- ✅ Free tier with generous limits
- ✅ Drag-and-drop deployment
- ✅ Form handling built-in
- ✅ Automatic HTTPS

### Steps:

1. **Build the Project**
   ```bash
   cd food-of-indians
   npm run build
   ```
   This creates a `dist` folder with production files.

2. **Deploy via Drag & Drop**
   - Go to [netlify.com](https://netlify.com)
   - Sign up
   - Drag the `dist` folder to the deploy area
   - Done!

3. **Deploy via Git (Better for updates)**
   - Push code to GitHub (see Vercel steps)
   - In Netlify, click "New site from Git"
   - Connect to GitHub
   - Select repository
   - Build settings:
     - Build command: `npm run build`
     - Publish directory: `dist`
   - Click "Deploy"

4. **Custom Domain**
   - Go to Site Settings → Domain Management
   - Add custom domain
   - Update DNS records

---

## Option 3: Traditional Web Hosting (cPanel/FTP)

### For shared hosting like Hostinger, Bluehost, GoDaddy, etc.

### Steps:

1. **Build the Project**
   ```bash
   cd food-of-indians
   npm run build
   ```

2. **Upload Files**
   - Open your hosting cPanel or FTP client (FileZilla)
   - Navigate to `public_html` or `www` folder
   - Upload ALL contents of the `dist` folder
   - Do NOT upload the `dist` folder itself, just its contents

3. **Configure Domain**
   - Point your domain to the hosting
   - Ensure `.htaccess` is configured for SPA routing:
   
   ```apache
   <IfModule mod_rewrite.c>
     RewriteEngine On
     RewriteBase /
     RewriteRule ^index\.html$ - [L]
     RewriteCond %{REQUEST_FILENAME} !-f
     RewriteCond %{REQUEST_FILENAME} !-d
     RewriteRule . /index.html [L]
   </IfModule>
   ```

4. **Test**
   - Visit your domain
   - Test all pages and navigation

---

## Option 4: GitHub Pages (Free but Limited)

### Steps:

1. **Install gh-pages**
   ```bash
   npm install --save-dev gh-pages
   ```

2. **Update package.json**
   Add these scripts:
   ```json
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```
   
   Add homepage:
   ```json
   "homepage": "https://YOUR_USERNAME.github.io/food-of-indians"
   ```

3. **Update vite.config.js**
   ```javascript
   export default defineConfig({
     plugins: [react()],
     base: '/food-of-indians/'
   })
   ```

4. **Deploy**
   ```bash
   npm run deploy
   ```

5. **Enable GitHub Pages**
   - Go to repository Settings → Pages
   - Source: gh-pages branch
   - Save

**Note:** GitHub Pages doesn't support custom domains on free tier easily.

---

## Post-Deployment Tasks

### 1. Test Everything
- [ ] All pages load correctly
- [ ] Navigation works
- [ ] Images display
- [ ] Contact form submits
- [ ] Floating buttons work (WhatsApp, Call)
- [ ] Mobile responsive
- [ ] 3D lotus animation loads

### 2. SEO Setup

**Add Google Analytics (Optional)**
```html
<!-- Add to index.html before </head> -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

**Submit to Google Search Console**
1. Go to [search.google.com/search-console](https://search.google.com/search-console)
2. Add your property (domain)
3. Verify ownership
4. Submit sitemap (if you create one)

### 3. Social Media Setup

**Open Graph Tags (Already in index.html, but customize)**
```html
<meta property="og:title" content="Food of Indians by Jain Delight" />
<meta property="og:description" content="Pure Jain vegetarian restaurant in Jabalpur" />
<meta property="og:image" content="URL_TO_SHARE_IMAGE" />
<meta property="og:url" content="YOUR_DOMAIN" />
```

### 4. Performance Optimization

**Enable Compression**
- Vercel/Netlify: Automatic
- Traditional hosting: Enable gzip in cPanel

**Image Optimization**
- Consider using WebP format
- Lazy loading (already implemented)

**Caching**
- Vercel/Netlify: Automatic
- Traditional hosting: Configure in `.htaccess`

---

## Updating the Site

### Vercel/Netlify (Git-based):
```bash
# Make changes to code
git add .
git commit -m "Update menu prices"
git push
# Automatic deployment triggers!
```

### Traditional Hosting:
```bash
npm run build
# Upload new dist folder contents via FTP
```

---

## Troubleshooting

### Issue: Blank page after deployment
**Solution:** Check browser console for errors. Usually a base path issue.
- Ensure `vite.config.js` has correct base path
- For root domain, use `base: '/'`

### Issue: 404 on page refresh
**Solution:** Configure server for SPA routing
- Vercel: Automatic
- Netlify: Create `_redirects` file in `public/`:
  ```
  /*    /index.html   200
  ```
- Traditional: Use `.htaccess` (see Option 3)

### Issue: Images not loading
**Solution:** 
- Check image URLs in `restaurantData.js`
- Ensure internet connection (Unsplash CDN)
- Replace with local images if needed

### Issue: Contact form not working
**Solution:**
- Netlify: Use Netlify Forms
- Vercel: Integrate with Formspree or EmailJS
- Traditional: Use PHP mail script

---

## Cost Breakdown

| Platform | Free Tier | Custom Domain | HTTPS | CDN |
|----------|-----------|---------------|-------|-----|
| Vercel | ✅ Unlimited | ✅ Free | ✅ Auto | ✅ Yes |
| Netlify | ✅ 100GB/month | ✅ Free | ✅ Auto | ✅ Yes |
| GitHub Pages | ✅ 100GB/month | ⚠️ Limited | ✅ Auto | ✅ Yes |
| Traditional Hosting | ❌ $3-10/month | ✅ Included | ⚠️ Extra | ❌ No |

**Recommendation:** Use Vercel or Netlify for best experience and zero cost.

---

## Domain Setup

### Buy a Domain
- Namecheap: ~$10/year
- GoDaddy: ~$12/year
- Google Domains: ~$12/year

### Connect to Vercel/Netlify
1. Add domain in platform settings
2. Update nameservers at domain registrar:
   - Vercel: `ns1.vercel-dns.com`, `ns2.vercel-dns.com`
   - Netlify: Provided in settings
3. Wait 24-48 hours for DNS propagation
4. HTTPS automatically enabled

---

## Support & Maintenance

### Regular Updates
- Update menu prices seasonally
- Add new dishes
- Update gallery images
- Refresh testimonials

### Monitoring
- Check Google Analytics weekly
- Monitor site speed (PageSpeed Insights)
- Test on new devices/browsers

### Backup
- Keep Git repository updated
- Download production build periodically

---

## Need Help?

**Common Resources:**
- Vercel Docs: [vercel.com/docs](https://vercel.com/docs)
- Netlify Docs: [docs.netlify.com](https://docs.netlify.com)
- Vite Docs: [vitejs.dev](https://vitejs.dev)
- React Docs: [react.dev](https://react.dev)

**Quick Fixes:**
- Clear browser cache: Ctrl+Shift+R (Windows) or Cmd+Shift+R (Mac)
- Check console: F12 → Console tab
- Test mobile: F12 → Toggle device toolbar

---

🎉 **Congratulations!** Your Food of Indians website is now live!

Made with 🙏 for Jain Delight, Jabalpur
