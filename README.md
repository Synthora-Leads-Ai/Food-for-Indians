# Food of Indians by Jain Delight

A premium website for Food of Indians, a pure Jain vegetarian restaurant in Madan Mahal, Jabalpur. Built with React, Vite, Tailwind CSS, and Framer Motion.

## 🌿 About

Food of Indians by Jain Delight serves authentic Jain cuisine following the principles of Ahimsa (non-violence). Our menu is 100% pure vegetarian with no onion, no garlic, and no root vegetables.

**Location:** Opposite Under Bridge, Madan Mahal, Jabalpur – 482001, Madhya Pradesh

## ✨ Features

- **3D Lotus Animation** - Interactive Three.js signature element in hero
- **Multi-page Navigation** - Home, About, Philosophy, Menu, Specialties, Gallery, Contact
- **Smooth Animations** - Framer Motion for all transitions and interactions
- **Responsive Design** - Mobile-first approach with Tailwind CSS
- **Category-based Menu** - Breakfast, Starters, Main Course, Rice, Thalis
- **Image Gallery** - Lightbox with full-screen view
- **Contact Form** - Integrated contact form with validation
- **Floating Actions** - WhatsApp, Call, Scroll-to-top buttons

## 🎨 Design System

### Colors
- **Saffron** (#E8631A) - Primary brand color
- **Gold** (#D4A017) - Secondary accent
- **Maroon** (#6B1A1A) - Deep richness
- **Cream** (#FDF6E3) - Background
- **Deep Brown** (#3D2300) - Text

### Typography
- **Display:** Playfair Display (headings)
- **Body:** Cormorant Garamond (descriptions)
- **UI:** DM Sans (buttons, labels)

## 🚀 Installation

```bash
# Navigate to project directory
cd food-of-indians

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📦 Tech Stack

- **React 18** - UI framework
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **React Three Fiber** - 3D graphics
- **React Router** - Navigation
- **Lucide React** - Icons

## 📁 Project Structure

```
food-of-indians/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── Scene3D.jsx (3D Lotus)
│   │   ├── Footer.jsx
│   │   └── FloatingActions.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Philosophy.jsx
│   │   ├── Menu.jsx
│   │   ├── Specialties.jsx
│   │   ├── Gallery.jsx
│   │   └── Contact.jsx
│   ├── config/
│   │   └── restaurantData.js (centralized data)
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── public/
├── index.html
├── package.json
├── tailwind.config.js
└── vite.config.js
```

## 🎯 Key Pages

### Home
- Hero with 3D lotus animation
- Featured signature dishes
- Four pillars of Jain cuisine
- CTA sections

### About
- Restaurant story
- Four pillars detailed
- Location information

### Philosophy
- What is Jain food
- What's NOT included (and why)
- What IS used in Jain cooking
- Six philosophical pillars

### Menu
- Category tabs (Breakfast, Starters, Main Course, Rice, Thalis)
- Dish cards with images, descriptions, prices
- Signature dish badges

### Specialties
- Detailed showcase of signature dishes
- Large images with descriptions
- "Why it's special" sections

### Gallery
- Grid layout with hover effects
- Lightbox for full-screen viewing
- Image labels

### Contact
- Contact information (address, phone, email, hours)
- Contact form
- Google Maps embed

## 🔧 Customization

### Update Restaurant Info
Edit `src/config/restaurantData.js` to update:
- Contact details (phone, email, address)
- Menu items and prices
- Specialties
- Testimonials
- Gallery images

### Update Colors
Edit `tailwind.config.js` to customize the color palette.

### Add Google Maps
Replace the API key in `src/pages/Contact.jsx`:
```javascript
src={`https://www.google.com/maps/embed/v1/place?key=YOUR_API_KEY&q=...`}
```

## 📱 Responsive Breakpoints

- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🌟 Signature Elements

1. **3D Rotating Lotus** - Three.js animation in hero
2. **Smooth Scroll Animations** - Framer Motion entrance effects
3. **Tilt Cards** - Hover effects on menu items
4. **Floating Action Buttons** - WhatsApp, Call, Scroll-to-top
5. **Category Tabs** - Sticky menu navigation

## 📄 License

© 2025 Food of Indians by Jain Delight. All rights reserved.

## 🙏 Credits

- Images: Unsplash (free for commercial use)
- Icons: Lucide React
- Fonts: Google Fonts (Playfair Display, Cormorant Garamond, DM Sans)

---

**Made with 🙏 in Jabalpur, Madhya Pradesh**

Pure. Compassionate. Delicious.
