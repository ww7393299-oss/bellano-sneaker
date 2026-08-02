# 🚀 BELLANO Website — Complete Setup & Deployment Guide

---

## ✅ Prerequisites

Before you begin, ensure you have installed:
- **Node.js** (v16 or higher) - [Download](https://nodejs.org/)
- **npm** (comes with Node.js) or **yarn**
- A code editor (**VS Code** recommended)
- **Git** (optional, for version control)

Check your installations:
```bash
node --version    # v16.x or higher
npm --version     # 8.x or higher
```

---

## 📦 Installation Steps

### **Step 1: Extract/Clone the Project**
```bash
# If you have the project folder
cd bellano-website

# Or clone from repository
git clone https://github.com/your-repo/bellano-website.git
cd bellano-website
```

### **Step 2: Install Dependencies**
```bash
npm install
```
This will install:
- React 18.2
- React Router v6
- Tailwind CSS 3.3
- Lucide React
- Vite 5
- All peer dependencies

### **Step 3: Run Development Server**
```bash
npm run dev
```

Expected output:
```
  ➜  Local:   http://localhost:5173/
  ➜  press h to show help
```

The browser will automatically open at `http://localhost:5173`

---

## 🎯 Project Structure Walkthrough

```
bellano-website/
│
├── src/
│   ├── components/
│   │   └── Navbar.jsx          ← Navigation + Social Links
│   │
│   ├── pages/                  ← All page components
│   │   ├── Home.jsx            ← Hero + Featured Products
│   │   ├── Shop.jsx            ← 4 Products with 360° Rotation
│   │   ├── ProductDetails.jsx  ← Individual Product Page
│   │   ├── About.jsx           ← Company Story & Team
│   │   ├── Login.jsx           ← Authentication
│   │   └── Cart.jsx            ← Shopping Cart
│   │
│   ├── App.jsx                 ← Router Setup & State
│   ├── main.jsx                ← Entry Point
│   └── index.css               ← Global Styles + Tailwind
│
├── index.html                  ← HTML Template
├── package.json                ← Dependencies & Scripts
├── vite.config.js             ← Vite Configuration
├── tailwind.config.js         ← Tailwind Customization
├── postcss.config.js          ← PostCSS Setup
└── README.md                  ← Documentation

```

---

## 🔄 Available Commands

### **Development**
```bash
npm run dev       # Start dev server (http://localhost:5173)
```

### **Production Build**
```bash
npm run build     # Creates optimized build in /dist folder
npm run preview   # Preview production build locally
```

### **Linting** (Optional)
```bash
npm run lint      # Check code quality
```

---

## 🛠️ Customization Guide

### **1. Change Accent Color (Currently Gold #D4AF37)**

**Option A: Global CSS**
Edit `src/index.css`:
```css
.accent-text {
  color: #D4AF37;  /* Change this hex value */
  text-shadow: 0 0 20px rgba(212, 175, 55, 0.5);  /* Update RGB */
}
```

**Option B: Component Tailwind Classes**
Replace `#D4AF37` with your color hex in:
- `Navbar.jsx` line 20: `text-[#D4AF37]`
- All component files with gold accents

**Option C: Tailwind Config**
Edit `tailwind.config.js`:
```javascript
colors: {
  'bellano-gold': '#YOUR_NEW_COLOR',
}
```

### **2. Update Product Images**

Edit each page's product array. Example in `Shop.jsx`:
```javascript
const products = [
  {
    id: 1,
    name: 'BELLANO X',
    price: '₹999',
    image: 'https://YOUR_IMAGE_URL.jpg',  // ← Replace here
    // ...
  }
]
```

Best practices:
- Use high-quality images (at least 500x500px)
- Optimize for web (compress before uploading)
- Use CDN URLs for faster loading
- Provide fallback images

### **3. Update Product Information**

**Home.jsx** - Featured products:
```javascript
const products = [
  { id: 1, name: 'BELLANO X', price: '₹999', ... }
  // Update name, price, description
]
```

**Shop.jsx** - Full product listing:
```javascript
const products = [
  {
    id: 1,
    name: 'BELLANO X',
    price: '₹999',
    description: 'Your new description',
    features: ['Feature 1', 'Feature 2'],
    // Add/edit as needed
  }
]
```

**ProductDetails.jsx** - Detailed specs:
```javascript
const products = {
  1: {
    name: 'BELLANO X',
    description: 'Detailed description here',
    tech: [
      { label: 'Upper Material', value: 'Custom material' },
      // Update specs
    ]
  }
}
```

### **4. Update Company Info (About Page)**

Edit `About.jsx`:
```jsx
// Story section (around line 40)
<p>Your company story here...</p>

// Team members (around line 260)
const teamMembers = [
  { name: 'Your Name', role: 'Your Role', specialty: 'Your Specialty' }
]
```

### **5. Update Navigation Links**

Edit `Navbar.jsx`:
```jsx
// Social media links (around line 60)
<a href="https://twitter.com/your-handle">
  
// Email contact (around line 71)
<a href="mailto:your-email@bellano.com">
```

### **6. Change Fonts**

The fonts are imported from Google Fonts in `src/index.css`:
```css
@import url('https://fonts.googleapis.com/css2?family=Inter+Tight:wght@400;500;600;700;800&family=IBM+Plex+Mono:wght@400;500&display=swap');
```

To change:
1. Go to [Google Fonts](https://fonts.google.com)
2. Select your fonts and weights
3. Copy the import URL
4. Replace in `index.css`
5. Update `fontFamily` in components

---

## 🚀 Deployment

### **Deploy to Vercel (Recommended)**

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/bellano-website.git
   git push -u origin main
   ```

2. **Connect to Vercel**
   - Go to [Vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Click "Deploy"

3. **Done!** Your site is live at `https://bellano-website.vercel.app`

### **Deploy to Netlify**

1. **Build locally**
   ```bash
   npm run build
   ```

2. **Deploy**
   - Go to [Netlify.com](https://netlify.com)
   - Drag & drop the `dist` folder
   - Or connect GitHub for auto-deploy

### **Deploy to Your Own Server**

1. **Build for production**
   ```bash
   npm run build
   ```

2. **Upload `dist` folder** to your web server
   - Via FTP/SFTP
   - Via cPanel File Manager
   - Via SSH

3. **Set up 404 redirects** (if using SPA routing)
   Create a `.htaccess` file in root:
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

---

## 🔐 Environment Variables (Optional)

Create a `.env` file in the root:
```env
VITE_API_URL=https://api.bellano.com
VITE_APP_NAME=BELLANO
VITE_BRAND_EMAIL=hello@bellano.com
```

Access in components:
```javascript
const apiUrl = import.meta.env.VITE_API_URL;
```

---

## 🧪 Testing Locally

### **Test Responsiveness**
1. Open DevTools (F12 or Right-click → Inspect)
2. Click the device icon (Ctrl+Shift+M)
3. Select different devices (iPhone, iPad, Desktop)

### **Test Performance**
```bash
npm run build
npm run preview
```

Then test at `http://localhost:4173`

### **Test on Mobile**
1. Find your local IP: `ipconfig getifaddr en0` (Mac) or `ipconfig` (Windows)
2. On phone, go to `http://YOUR_IP:5173`

### **Clear Cache**
If you see old versions:
```bash
# Clear node modules
rm -rf node_modules package-lock.json
npm install

# Clear Vite cache
rm -rf .vite

# Hard refresh browser
Ctrl+Shift+R or Cmd+Shift+R
```

---

## 🐛 Troubleshooting

### **"Port 5173 already in use"**
```bash
# Use a different port
npm run dev -- --port 3000
```

### **"Module not found" error**
```bash
# Reinstall dependencies
rm -rf node_modules
npm install
```

### **Images not loading**
- Check URL in browser console (F12)
- Ensure image URLs are correct
- Use absolute URLs or proper relative paths
- Check CORS if using external images

### **Tailwind classes not applying**
1. Ensure `tailwind.config.js` includes `src/` path
2. Check if class is in `safelist`
3. Restart dev server: `npm run dev`

### **Styling issues after build**
- Check `dist/index.css` is generated
- Clear browser cache (Ctrl+Shift+Delete)
- Ensure all CSS files are imported

### **Router not working**
- Check React Router import in `App.jsx`
- Ensure all pages are properly imported
- Verify route paths match Link `to=""` props

---

## 📊 Analytics Setup (Optional)

### **Google Analytics**
Add to `index.html` before `</head>`:
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

Replace `GA_MEASUREMENT_ID` with your Google Analytics ID.

---

## 🔗 Useful Resources

- **React Docs**: https://react.dev
- **React Router**: https://reactrouter.com
- **Tailwind CSS**: https://tailwindcss.com
- **Lucide Icons**: https://lucide.dev
- **Vite Docs**: https://vitejs.dev
- **MDN Web Docs**: https://developer.mozilla.org

---

## 📱 Browser Compatibility

| Browser | Support | Notes |
|---------|---------|-------|
| Chrome | ✅ Latest | Fully supported |
| Firefox | ✅ Latest | Fully supported |
| Safari | ✅ Latest | Supports backdrop-filter |
| Edge | ✅ Latest | Fully supported |
| Mobile | ✅ iOS/Android | Touch-optimized |
| IE 11 | ❌ Not supported | Uses modern ES6+ |

---

## 🎓 Learning Resources

### **For React Beginners**
- React Hooks: useState, useRef, useEffect
- Component composition
- Props drilling & context

### **For Tailwind CSS**
- Utility-first approach
- Responsive prefixes (sm:, md:, lg:)
- Customization via config

### **For React Router**
- BrowserRouter & Routes
- Link component
- useParams, useNavigate hooks

---

## ✨ Best Practices

1. **Keep components small** - Break into smaller, reusable pieces
2. **Use semantic HTML** - Improves accessibility
3. **Optimize images** - Compress before uploading
4. **Mobile-first** - Design for mobile, scale up
5. **Accessibility** - Use alt text, proper heading hierarchy
6. **Performance** - Lazy load images, code splitting
7. **Security** - Validate inputs, sanitize data
8. **Documentation** - Comment complex logic

---

## 🎯 Next Steps

1. ✅ Installation complete
2. 🔧 Customize branding & content
3. 📸 Add real product images
4. 🚀 Deploy to production
5. 📊 Set up analytics
6. 🔐 Configure backend API
7. 💳 Integrate payment gateway
8. ✨ Optimize performance

---

## 📞 Support & Contact

For issues or questions:
- **GitHub Issues**: [Project Issues](https://github.com/your-repo/issues)
- **Email**: hello@bellano.com
- **Social**: @bellano on all platforms

---

**Happy coding! 🎉**

---

**Last Updated**: January 2025  
**Version**: 1.0.0
