# 🌙 Dark Luxury Theme - Color Conversion Guide

## ✅ Already Updated
- `tailwind.config.js` - New emerald/gold/charcoal palette ✓
- `src/components/Scene3D.jsx` - Emerald 3D lotus ✓

## 🎨 Color Replacements Needed

### Global Find & Replace (Use VS Code)

**Find → Replace in Files (Ctrl+Shift+H)**

#### Background Colors
```
Find: bg-cream
Replace: bg-charcoal-900

Find: bg-white
Replace: bg-charcoal-800

Find: bg-saffron-50
Replace: bg-charcoal-800

Find: bg-saffron-100
Replace: bg-charcoal-700

Find: bg-gold-50
Replace: bg-charcoal-800

Find: from-cream
Replace: from-charcoal-900

Find: to-saffron-50
Replace: to-charcoal-800

Find: from-saffron-50
Replace: from-charcoal-800

Find: to-gold-50
Replace: to-charcoal-700

Find: from-maroon-900
Replace: from-charcoal-950

Find: to-deep-brown
Replace: to-charcoal-900
```

#### Primary Colors (Saffron → Emerald)
```
Find: bg-saffron-600
Replace: bg-emerald-600

Find: text-saffron-600
Replace: text-emerald-500

Find: text-saffron-700
Replace: text-emerald-600

Find: hover:bg-saffron-700
Replace: hover:bg-emerald-700

Find: border-saffron-
Replace: border-emerald-

Find: focus:border-saffron-600
Replace: focus:border-emerald-600

Find: from-saffron-600
Replace: from-emerald-600

Find: to-saffron-700
Replace: to-emerald-700

Find: from-saffron-500
Replace: from-emerald-500
```

#### Text Colors
```
Find: text-deep-brown
Replace: text-cream

Find: text-deep-brown/80
Replace: text-cream/90

Find: text-deep-brown/70
Replace: text-cream/80

Find: text-deep-brown/60
Replace: text-cream/70
```

#### Glow Effects
```
Find: glow-saffron
Replace: glow-emerald
```

#### Gold Accents (Keep but adjust)
```
Find: text-gold-600
Replace: text-gold-400

Find: text-gold-500
Replace: text-gold-400

Find: bg-gold-500
Replace: bg-gold-600

Find: fill-gold-500
Replace: fill-gold-400
```

---

## 📝 Manual Updates Needed

### 1. Hero.jsx

**Line ~15: Background gradient**
```jsx
// OLD
className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-cream via-saffron-50 to-gold-50"

// NEW
className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-charcoal-950 via-charcoal-900 to-charcoal-800"
```

**Line ~20: Pattern color**
```jsx
// OLD
backgroundImage: `radial-gradient(circle at 2px 2px, #E8631A 1px, transparent 0)`

// NEW
backgroundImage: `radial-gradient(circle at 2px 2px, #10B981 1px, transparent 0)`
```

**Line ~45: Badge background**
```jsx
// OLD
className="inline-flex items-center gap-2 bg-saffron-100 text-saffron-700"

// NEW
className="inline-flex items-center gap-2 bg-emerald-900/50 text-emerald-400 border border-emerald-700"
```

**Line ~90: Trust badges**
```jsx
// OLD
className="flex items-center gap-2 bg-white/80 backdrop-blur-sm"

// NEW
className="flex items-center gap-2 bg-charcoal-800/80 backdrop-blur-sm border border-emerald-900/30"
```

**Line ~110: CTA buttons**
```jsx
// OLD
className="group inline-flex items-center justify-center gap-2 bg-saffron-600 text-white"

// NEW
className="group inline-flex items-center justify-center gap-2 bg-emerald-600 text-white hover:bg-emerald-700 glow-emerald"
```

**Line ~120: Secondary button**
```jsx
// OLD
className="inline-flex items-center justify-center gap-2 bg-white text-saffron-600 border-2 border-saffron-600"

// NEW
className="inline-flex items-center justify-center gap-2 bg-transparent text-emerald-400 border-2 border-emerald-600 hover:bg-emerald-900/30"
```

**Line ~135: Stats cards**
```jsx
// OLD
className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl"

// NEW
className="card-dark card-dark-hover p-8 rounded-2xl"
```

**Line ~150: Scroll indicator**
```jsx
// OLD
className="w-6 h-10 border-2 border-saffron-600"

// NEW
className="w-6 h-10 border-2 border-emerald-500"
```

---

### 2. Navbar.jsx

**Line ~40: Scrolled background**
```jsx
// OLD
scrolled ? 'bg-cream/95 backdrop-blur-md shadow-lg' : 'bg-transparent'

// NEW
scrolled ? 'bg-charcoal-900/95 backdrop-blur-md shadow-lg border-b border-emerald-900/20' : 'bg-transparent'
```

**Line ~50: Logo colors**
```jsx
// OLD
className="font-display text-2xl md:text-3xl font-bold text-saffron-600"

// NEW
className="font-display text-2xl md:text-3xl font-bold text-emerald-500"
```

**Line ~55: Subtitle**
```jsx
// OLD
className="font-body text-sm md:text-base italic text-gold-600"

// NEW
className="font-body text-sm md:text-base italic text-gold-400"
```

**Line ~70: Active link**
```jsx
// OLD
location.pathname === link.path ? 'text-saffron-600' : 'text-deep-brown hover:text-saffron-600'

// NEW
location.pathname === link.path ? 'text-emerald-400' : 'text-cream hover:text-emerald-400'
```

**Line ~75: Link underline**
```jsx
// OLD
className="absolute -bottom-1 left-0 h-0.5 bg-saffron-600"

// NEW
className="absolute -bottom-1 left-0 h-0.5 bg-emerald-500"
```

**Line ~85: Call button**
```jsx
// OLD
className="hidden lg:flex items-center gap-2 bg-saffron-600 text-white hover:bg-saffron-700 glow-saffron"

// NEW
className="hidden lg:flex items-center gap-2 bg-emerald-600 text-white hover:bg-emerald-700 glow-emerald"
```

**Line ~95: Mobile menu button**
```jsx
// OLD
className="lg:hidden p-2 text-deep-brown hover:text-saffron-600"

// NEW
className="lg:hidden p-2 text-cream hover:text-emerald-400"
```

**Line ~110: Mobile menu background**
```jsx
// OLD
className="lg:hidden bg-cream border-t border-saffron-200"

// NEW
className="lg:hidden bg-charcoal-800 border-t border-emerald-900/30"
```

---

### 3. Footer.jsx

**Line ~10: Footer background**
```jsx
// OLD
className="bg-gradient-to-br from-maroon-900 to-deep-brown text-cream"

// NEW
className="bg-gradient-to-br from-charcoal-950 to-charcoal-900 text-cream border-t border-emerald-900/20"
```

**Line ~25: Brand title**
```jsx
// OLD
className="font-display text-2xl font-bold text-gold-400"

// NEW
className="font-display text-2xl font-bold text-emerald-400"
```

**Line ~30: Subtitle**
```jsx
// OLD
className="font-body text-lg italic text-gold-500"

// NEW
className="font-body text-lg italic text-gold-400"
```

**Line ~60: Link hover**
```jsx
// OLD
className="text-cream/80 hover:text-gold-400"

// NEW
className="text-cream/80 hover:text-emerald-400"
```

**Line ~95: Icon colors**
```jsx
// OLD
className="text-gold-400"

// NEW
className="text-emerald-400"
```

---

### 4. FloatingActions.jsx

**Line ~40: WhatsApp button (keep green)**
```jsx
// Already green - no change needed
```

**Line ~55: Call button**
```jsx
// OLD
className="w-14 h-14 bg-saffron-600 text-white hover:bg-saffron-700 glow-saffron"

// NEW
className="w-14 h-14 bg-emerald-600 text-white hover:bg-emerald-700 glow-emerald"
```

**Line ~70: Scroll to top**
```jsx
// OLD
className="w-14 h-14 bg-gold-600 text-white hover:bg-gold-700"

// NEW
className="w-14 h-14 bg-gold-500 text-charcoal-900 hover:bg-gold-400 glow-gold"
```

---

### 5. ScrollProgress.jsx

**Line ~15: Progress bar gradient**
```jsx
// OLD
className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-saffron-600 via-gold-500 to-saffron-600"

// NEW
className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-600 via-gold-500 to-emerald-600"
```

---

## 🎨 Component-Specific Updates

### Home.jsx
- All section backgrounds: `bg-white` → `bg-charcoal-800`
- Gradient sections: `from-saffron-50 to-gold-50` → `from-charcoal-900 to-charcoal-800`
- Card backgrounds: `bg-cream` → `bg-charcoal-800`
- Hover effects: Add `card-dark-hover` class

### About.jsx
- Hero background: `from-saffron-50 to-gold-50` → `from-charcoal-900 to-charcoal-800`
- Section backgrounds: `bg-white` → `bg-charcoal-800`
- Card backgrounds: `bg-cream` → `bg-charcoal-900`

### Philosophy.jsx
- All white sections → `bg-charcoal-800`
- Cream sections → `bg-charcoal-900`
- Icon circles: `bg-red-100` → `bg-red-900/30`, `bg-green-500` → `bg-emerald-600`
- Gold boxes: `bg-gold-50` → `bg-gold-900/20 border border-gold-700`

### Menu.jsx
- Hero: `from-saffron-50 to-gold-50` → `from-charcoal-900 to-charcoal-800`
- Sticky tabs background: `bg-white` → `bg-charcoal-900 border-b border-emerald-900/20`
- Active tab: `bg-saffron-600` → `bg-emerald-600`
- Inactive tab: `bg-cream` → `bg-charcoal-800 hover:bg-charcoal-700`
- Menu section: `bg-cream` → `bg-charcoal-900`
- Cards: `bg-white` → `card-dark card-dark-hover`
- Badge: `bg-gold-500` → `bg-gold-600`

### Specialties.jsx
- All backgrounds follow same pattern
- Signature badge: `bg-gold-500` → `bg-gold-600`
- Info boxes: `bg-saffron-50` → `bg-emerald-900/20 border border-emerald-700`

### Gallery.jsx
- Hero: `from-saffron-50 to-gold-50` → `from-charcoal-900 to-charcoal-800`
- Section: `bg-white` → `bg-charcoal-900`
- Lightbox: `bg-black/90` → `bg-charcoal-950/95`

### Contact.jsx
- Hero: `from-saffron-50 to-gold-50` → `from-charcoal-900 to-charcoal-800`
- Section: `bg-white` → `bg-charcoal-800`
- Icon circles: `bg-saffron-100` → `bg-emerald-900/30`
- Icon colors: `text-saffron-600` → `text-emerald-500`
- Form background: `bg-cream` → `bg-charcoal-900 border border-emerald-900/20`
- Input borders: `border-saffron-200` → `border-emerald-900/30`
- Input focus: `focus:border-saffron-600` → `focus:border-emerald-500`
- Input background: Add `bg-charcoal-800 text-cream`
- Map section: `bg-cream` → `bg-charcoal-900`

---

## 🚀 Quick Apply Script

Run this in VS Code terminal (food-of-indians folder):

```bash
# Find and replace all at once (PowerShell)
$files = Get-ChildItem -Path src -Recurse -Include *.jsx
foreach ($file in $files) {
    $content = Get-Content $file.FullName -Raw
    $content = $content -replace 'bg-cream', 'bg-charcoal-900'
    $content = $content -replace 'bg-white', 'bg-charcoal-800'
    $content = $content -replace 'bg-saffron-600', 'bg-emerald-600'
    $content = $content -replace 'text-saffron-600', 'text-emerald-500'
    $content = $content -replace 'text-deep-brown', 'text-cream'
    $content = $content -replace 'glow-saffron', 'glow-emerald'
    Set-Content $file.FullName $content
}
```

---

## ✨ Final Touches

### Add to index.css (already done):
- `.glow-emerald` class ✓
- `.glow-gold` class ✓
- `.card-dark` class ✓
- `.card-dark-hover` class ✓

### Test Checklist:
- [ ] Hero looks dark with emerald lotus
- [ ] Navbar is dark with emerald accents
- [ ] All text is readable (cream on dark)
- [ ] Buttons are emerald with glow
- [ ] Cards have subtle borders
- [ ] Hover effects work
- [ ] Footer is dark
- [ ] Floating buttons are emerald

---

## 🎨 Result

**Dark Luxury Theme:**
- Deep charcoal backgrounds (#111827, #1F2937)
- Emerald green primary (#10B981, #059669)
- Gold accents (#D4A017, #FACC15)
- Cream text (#FDF6E3)
- Glowing effects on interactive elements
- Premium, upscale feel
- Food photos pop against dark background

**Perfect for:** Evening dining, premium positioning, modern luxury restaurant
