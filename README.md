# 🎯 BELLANO — Premium Luxury Sneaker E-commerce Website

A full-featured, premium luxury sneaker e-commerce platform built with **React**, **Tailwind CSS**, **React Router**, and **Lucide React Icons**.

---

## 📋 Project Structure

```
bellano-website/
├── src/
│   ├── components/
│   │   └── Navbar.jsx           # Navigation with social links & auth
│   ├── pages/
│   │   ├── Home.jsx             # Hero section + featured products
│   │   ├── Shop.jsx             # Product grid with 360° rotation
│   │   ├── ProductDetails.jsx   # Individual product page with rotation
│   │   ├── About.jsx            # Company story, vision, team
│   │   ├── Login.jsx            # Authentication page
│   │   └── Cart.jsx             # Shopping cart management
│   ├── App.jsx                  # Main router & state management
│   ├── main.jsx                 # React entry point
│   └── index.css                # Global styles + Tailwind
├── index.html                   # HTML entry point
├── package.json                 # Dependencies
├── vite.config.js              # Vite configuration
├── tailwind.config.js          # Tailwind customization
└── postcss.config.js           # PostCSS config

```

---

## 🚀 Quick Start

### 1. **Installation**
```bash
cd bellano-website
npm install
```

### 2. **Run Development Server**
```bash
npm run dev
```
Opens at `http://localhost:5173` by default

### 3. **Build for Production**
```bash
npm run build
npm run preview
```

---

## 📦 Dependencies

- **React 18.2** - UI framework
- **React Router v6** - Client-side routing
- **Tailwind CSS 3.3** - Utility-first CSS
- **Lucide React 0.294** - Icon library
- **Vite 5** - Build tool & dev server

---

## 🎨 Design System

### **Color Palette**
- **Background**: `#0a0f1f` (Deep Blue-Black)
- **Accent Gold**: `#D4AF37` (Warm Gold - Primary Brand Color)
- **Text**: White with opacity variants
- **Glass Elements**: Frosted glass with gradient borders

### **Typography**
- **Display/Body**: Inter Tight (400, 500, 600, 700, 800)
- **Mono/Readouts**: IBM Plex Mono (400, 500)

### **Glass Classes**
Two reusable glass effect classes:
1. `.liquid-glass` - Subtle frosted glass
2. `.accent-glass` - Gold-tinted glass with glow

---

## 📄 Pages & Features

### **Home (`/`)**
- Hero section with cursor-reactive 3D rotation
- Studio scrim overlay with ambient lighting
- Turntable ring animation
- Featured products showcase
- Staggered blur-fade-up animations

### **Shop (`/shop`)**
- Product grid (responsive: 1-4 columns)
- 360° interactive product rotation
- Product specifications (weight, drop, sizes)
- Feature badges
- Add to cart functionality
- Style quiz CTA

### **Product Details (`/product/:id`)**
- Full-screen product view
- Advanced 360° rotation with angle display
- Thumbnail carousel (0°, 45°, 90°, 180°)
- Size & color selection
- Quantity controls
- Wishlist toggle
- Technical specifications
- Product sharing

### **About (`/about`)**
- Company story & journey
- Mission, Values, Vision cards
- Product evolution timeline
- Team showcase
- Features breakdown for each model

### **Login (`/login`)**
- Email/password authentication form
- Show/hide password toggle
- Remember me checkbox
- Demo credentials display
- Social login buttons (Google, Twitter)
- Sign-up redirect
- Privacy & Terms footer

### **Cart (`/cart`)**
- Product list with images
- Quantity adjustments (±)
- Size & color display
- Item removal
- Real-time price calculation
- Shipping threshold (Free above ₹5000)
- Tax calculation (18%)
- Promo code input
- Order summary sidebar
- Empty cart state

---

## 🛍️ Product Lineup

### **BELLANO X — ₹999**
- Entry-level premium sneaker
- Breathable mesh upper
- EVA cushioning
- Classic silhouette

### **BELLANO Z — ₹3999**
- Advanced comfort technology
- Premium leather & mesh
- Memory foam cushioning
- Enhanced support

### **BELLANO AIR — ₹6999**
- Lightweight innovation
- Carbon fiber construction
- Ultra-light design
- Eco-friendly materials

### **BELLANO SPY — ₹9999**
- Luxury masterpiece
- Italian full-grain leather
- Nano-tech cushioning
- Handcrafted excellence

---

## 🎬 Animations & Interactions

### **Entrance Animations**
- `blur-fade-up` - Fade in with upward motion & blur
- Staggered delays for sequential reveals
- `prefers-reduced-motion` support

### **Interactive Elements**
- Cursor-reactive 3D shoe rotation (Home hero)
- 360° product rotation with angle tracking
- Product hover effects (zoom, overlay)
- Free badge pulse animation
- Smooth page transitions

### **Glass Effects**
- Gradient border animations
- Backdrop blur with luminosity blend
- Responsive hover states

---

## 🔐 Authentication

### **Demo Credentials**
- **Email**: `demo@bellano.com`
- **Password**: `demo123`

### **Features**
- Login state persistence (session)
- User email display in navbar
- Logout functionality
- Protected cart & checkout flows

---

## 📱 Responsive Design

- **Mobile** (<640px): Single column, hamburger menu
- **Tablet** (640-1024px): 2 columns, adjusted spacing
- **Desktop** (>1024px): Full 4-column grid, side navigation

### **Mobile Menu**
- Hamburger toggle with X transition
- Smooth slide animations
- Social links integrated
- Mobile-optimized touch targets

---

## 🔗 Social Media & Contact

### **Integrated Links**
- **Twitter**: `https://twitter.com`
- **Instagram**: `https://instagram.com`
- **LinkedIn**: `https://linkedin.com`
- **Email**: `hello@bellano.com`

All links open in new tabs with `rel="noopener noreferrer"` for security.

---

## 💳 Shopping Cart Features

- **Add/Remove Items**
- **Quantity Controls** with ±buttons
- **Real-time Calculations**:
  - Subtotal
  - Shipping (Free above ₹5000)
  - Tax (18% GST)
  - Total
- **Persistent Display** of item details (size, color)
- **Promo Code Input** (UI-ready)

---

## 🎯 Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

### **Features Requiring Support**
- `backdrop-filter` (glass effects)
- CSS Grid & Flexbox
- ES6+ JavaScript
- CSS Custom Properties

---

## 🔧 Customization

### **Colors**
Update the gold accent color in:
1. Tailwind utilities: `#D4AF37`
2. CSS variables in component styles
3. Gradient definitions in glass classes

### **Images**
Replace placeholder images:
- `https://images.unsplash.com/photo-...` → Your product images

### **Content**
Edit product data in:
- `Shop.jsx` - Product array
- `ProductDetails.jsx` - Detailed specs
- `About.jsx` - Team, story, vision

### **Fonts**
Google Fonts imports in `index.css`:
- Add font-weight variants as needed
- Update `fontFamily` in component classes

---

## 📊 Performance Optimizations

- Image lazy loading ready
- Efficient CSS with Tailwind
- Smooth 60fps animations with `transform`/`opacity`
- No unnecessary re-renders (React best practices)
- Responsive grid systems

---

## 📝 License

This project is proprietary. All rights reserved to BELLANO.

---

## 🎓 Tech Stack Summary

| Feature | Technology |
|---------|-----------|
| **Frontend Framework** | React 18.2 |
| **Routing** | React Router v6 |
| **Styling** | Tailwind CSS 3.3 |
| **Icons** | Lucide React |
| **Build Tool** | Vite 5 |
| **Typography** | Inter Tight + IBM Plex Mono |
| **Animations** | CSS Keyframes + Transitions |
| **State** | React Hooks (useState, useRef, useContext) |

---

## 🚀 Future Enhancements

- [ ] Backend API integration
- [ ] Real payment gateway
- [ ] User accounts & order history
- [ ] Product reviews & ratings
- [ ] Advanced filtering & search
- [ ] Analytics dashboard
- [ ] Email notifications
- [ ] Wishlist persistence
- [ ] Size chart visualization
- [ ] AR product viewer

---

## 📧 Support

For inquiries or support:
- **Email**: hello@bellano.com
- **Social**: @bellano on all platforms

---

**Built with ❤️ by BELLANO Design Team**
