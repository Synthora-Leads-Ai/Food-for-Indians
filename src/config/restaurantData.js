export const restaurantInfo = {
  name: "Food of Indians",
  brandLine: "by Jain Delight",
  tagline: "The Soul of Indian Vegetarian Cuisine",
  subTagline: "Where Every Plate is an Act of Compassion",
  
  contact: {
    address: "Opposite Under Bridge, Madan Mahal, Jabalpur – 482001",
    city: "Jabalpur",
    state: "Madhya Pradesh",
    phone: "+91 XXXXX XXXXX",
    whatsapp: "+91 XXXXX XXXXX",
    email: "info@foodofindians.com",
    mapQuery: "Madan Mahal, Jabalpur, Madhya Pradesh 482001"
  },
  
  hours: {
    weekday: "08:00 AM – 10:00 PM",
    sunday: "09:00 AM – 09:00 PM",
    note: "Extended hours during festivals"
  },
  
  stats: [
    { value: "40+", label: "Menu Items" },
    { value: "100%", label: "Pure Veg" },
    { value: "0", label: "Onion & Garlic" },
    { value: "∞", label: "Love in Every Dish" }
  ],
  
  badges: [
    { icon: "🟢", text: "100% Pure Vegetarian" },
    { icon: "🌿", text: "No Onion · No Garlic" },
    { icon: "🙏", text: "Satvik & Jain-Certified" },
    { icon: "🔥", text: "Freshly Cooked Daily" },
    { icon: "📍", text: "Madan Mahal, Jabalpur" }
  ],
  
  pillars: [
    {
      icon: "🌿",
      title: "Ahimsa (Non-Violence)",
      description: "Every ingredient is chosen to cause the least possible harm to any living being. We follow the Jain principle of Ahimsa in full."
    },
    {
      icon: "🔥",
      title: "Freshly Cooked Daily",
      description: "Our food is prepared fresh every morning using seasonal, locally sourced vegetables. Nothing overnight. Nothing preserved."
    },
    {
      icon: "🙏",
      title: "Satvik Purity",
      description: "Our kitchen maintains complete satvik standards. No tamasik ingredients. No artificial colours. Pure, clean, healing food."
    },
    {
      icon: "📖",
      title: "Heritage Recipes",
      description: "Inspired by Gujarati, Rajasthani, and MP culinary traditions, our recipes have been passed down and perfected over generations."
    }
  ]
};

export const menuCategories = {
  breakfast: {
    name: "Breakfast / Nashtaa",
    items: [
      {
        name: "Poha",
        description: "Flattened rice cooked with mustard seeds, green chillies, turmeric, fresh coriander, and lemon. Light, filling, classic.",
        price: "₹60-80",
        image: "https://picsum.photos/800/600?random=1"
      },
      {
        name: "Upma",
        description: "Semolina cooked to a soft, porridge-like consistency with vegetables, curry leaves, mustard, and green chilli.",
        price: "₹60-80",
        image: "https://picsum.photos/800/600?random=2"
      },
      {
        name: "Jain Pav Bhaji",
        description: "The beloved Mumbai street food, Jain-style. No potato, no onion. Bhaji made with raw banana, bottle gourd, capsicum, and tomatoes.",
        price: "₹90-120",
        image: "https://picsum.photos/800/600?random=3"
      },
      {
        name: "Dhokla",
        description: "Steamed fermented chickpea flour cake. Soft, spongy, tangy. Topped with mustard seeds, green chilli, and fresh coconut.",
        price: "₹70-90",
        image: "https://picsum.photos/800/600?random=4"
      },
      {
        name: "Idli & Sambar",
        description: "Soft steamed rice cakes with Jain-adapted sambar. Served with coconut chutney.",
        price: "₹70-90",
        image: "https://picsum.photos/800/600?random=5"
      },
      {
        name: "Methi Thepla",
        description: "Gujarati flatbread made with fresh fenugreek leaves and whole wheat flour. Soft, slightly bitter, perfect with curd.",
        price: "₹60-80",
        image: "https://picsum.photos/800/600?random=6"
      }
    ]
  },
  
  starters: {
    name: "Starters / Snacks",
    items: [
      {
        name: "Paneer Tikka",
        description: "Cottage cheese cubes marinated in yoghurt and spices, grilled on tawa or tandoor. Juicy, charred, aromatic.",
        price: "₹130-160",
        image: "https://picsum.photos/800/600?random=7",
        featured: true
      },
      {
        name: "Hara Bhara Kabab",
        description: "Crispy shallow-fried patties of spinach, peas, and paneer. Green, vibrant, packed with protein and iron.",
        price: "₹110-140",
        image: "https://picsum.photos/800/600?random=8"
      },
      {
        name: "Veg Manchurian",
        description: "Deep-fried vegetable dumplings in a tangy Indo-Chinese sauce. Made without onion or garlic.",
        price: "₹120-150",
        image: "https://picsum.photos/800/600?random=9"
      },
      {
        name: "Samosa (Jain-style)",
        description: "Golden pastry triangles filled with spiced raw banana and peas (no potato, no onion). Classic shape, Jain soul.",
        price: "₹60-80",
        image: "https://picsum.photos/800/600?random=10"
      }
    ]
  },
  
  mainCourse: {
    name: "Main Course — Gravies",
    items: [
      {
        name: "Paneer Butter Masala",
        description: "The most beloved Indian cottage cheese curry. Our Jain version uses a rich tomato-cashew base that is creamy, sweet, and deeply aromatic.",
        price: "₹160-200",
        image: "https://picsum.photos/800/600?random=11",
        featured: true
      },
      {
        name: "Shahi Paneer",
        description: "Royal cottage cheese in a luxurious saffron-cream gravy. Cashew-tomato base makes it silky and fragrant.",
        price: "₹180-220",
        image: "https://picsum.photos/800/600?random=12",
        featured: true
      },
      {
        name: "Malai Kofta",
        description: "Soft paneer and raw banana dumplings in a velvety cream gravy. Sweet, mild, and indulgent. Perfect with naan.",
        price: "₹170-210",
        image: "https://picsum.photos/800/600?random=13",
        featured: true
      },
      {
        name: "Dal Makhani",
        description: "Slow-cooked black lentils in a tomato-cream base. Prepared overnight for maximum richness.",
        price: "₹140-170",
        image: "https://picsum.photos/800/600?random=14"
      },
      {
        name: "Chhole",
        description: "Robust, spiced chickpea curry with tomato base and fragrant whole spices. Served with bhatura or rice.",
        price: "₹130-160",
        image: "https://picsum.photos/800/600?random=15"
      }
    ]
  },
  
  rice: {
    name: "Rice & Biryani",
    items: [
      {
        name: "Jain Biryani",
        description: "Slow-cooked layered rice with above-ground vegetables, saffron, fried cashews, and raisins. No onion, no garlic, full flavour.",
        price: "₹180-220",
        image: "https://picsum.photos/800/600?random=16",
        featured: true
      },
      {
        name: "Veg Pulao",
        description: "Aromatic basmati rice cooked with seasonal vegetables and whole spices.",
        price: "₹130-160",
        image: "https://picsum.photos/800/600?random=17"
      },
      {
        name: "Jeera Rice",
        description: "Fragrant basmati rice cooked with ghee and whole cumin seeds. The perfect accompaniment to any dal or sabzi.",
        price: "₹90-110",
        image: "https://picsum.photos/800/600?random=18"
      }
    ]
  },
  
  thalis: {
    name: "Thali (Full Meal Sets)",
    items: [
      {
        name: "Gujarati Jain Thali",
        description: "Undhiyu, Gujarati Kadhi, Thepla, Khichdi, Rice, Shrikhand, Papad, Farsan, Pickle",
        price: "₹280-320",
        image: "https://picsum.photos/800/600?random=19",
        featured: true
      },
      {
        name: "Rajasthani Jain Thali",
        description: "Gatte ki Sabzi, Panchmel Dal, Bajra Roti, Churma, Papad, Chaas, Rice, Pickle + Salad",
        price: "₹260-300",
        image: "https://picsum.photos/800/600?random=20",
        featured: true
      },
      {
        name: "Special Jain Thali",
        description: "3 Sabzi (including 1 paneer dish), Dal Makhani, Jeera Rice, 2 Roti + 1 Naan, Raita, Papad, Sweet, Chaas",
        price: "₹240-280",
        image: "https://picsum.photos/800/600?random=21"
      },
      {
        name: "Sadha Thali",
        description: "2 Sabzi, 1 Dal, Rice, 4 Rotis, Curd, Papad, Salad, Pickle",
        price: "₹160-200",
        image: "https://picsum.photos/800/600?random=22"
      }
    ]
  }
};

export const specialties = [
  {
    name: "Jain Biryani",
    description: "The crown jewel of our kitchen. Layers of saffron-infused basmati rice with paneer, seasonal vegetables, fried cashews, and raisins — all slow-cooked in the dum style.",
    whySpecial: "Proves that biryani doesn't need onion or garlic to be extraordinary.",
    image: "https://picsum.photos/1000/800?random=23"
  },
  {
    name: "Malai Kofta",
    description: "Melt-in-your-mouth dumplings of paneer and raw banana, swimming in a saffron-cashew cream gravy. Our most-ordered dish.",
    whySpecial: "The raw banana replaces potato perfectly — richer, more complex.",
    image: "https://picsum.photos/1000/800?random=24"
  },
  {
    name: "Gujarati Jain Thali",
    description: "An entire feast on one plate — thepla, khichdi, kadhi, undhiyu, shrikhand, and more. Authentic Gujarati Jain flavours, made fresh with love every day.",
    whySpecial: "The complete Jain dining experience in one sitting.",
    image: "https://picsum.photos/1000/800?random=25"
  },
  {
    name: "Shahi Paneer with Naan",
    description: "Paneer cubes in a royal saffron-cream-cashew gravy, served with hand-made buttered naan. Fit for royalty, priced for all.",
    whySpecial: "Our most luxurious daily dish — saffron makes it unforgettable.",
    image: "https://picsum.photos/1000/800?random=26"
  }
];

export const testimonials = [
  {
    name: "Priya Jain",
    location: "Jabalpur",
    rating: 5,
    text: "Coming from a strict Jain family, finding a restaurant that truly understands no-onion no-garlic cooking is rare. Food of Indians does it perfectly. The Shahi Paneer here is better than anything I've tasted even in Gujarat."
  },
  {
    name: "Rahul Sharma",
    location: "Madan Mahal",
    rating: 5,
    text: "Eat here at least three times a week. The Jain Thali is value for money and always fresh. You can taste the ghee and the love in every dish. The dal tadka alone is worth the visit."
  },
  {
    name: "Savita Mehta",
    location: "Indore",
    rating: 4,
    text: "Was pleasantly surprised to find such authentic Gujarati Jain food in Jabalpur. The thepla and kadhi reminded me of home. Will definitely visit again whenever I'm in the city."
  },
  {
    name: "Deepak Kothari",
    location: "Jabalpur",
    rating: 5,
    text: "The Malai Kofta here uses raw banana instead of potato and I couldn't even tell the difference — it was richer! This is what good Jain cooking looks like."
  },
  {
    name: "Suresh Singhvi",
    location: "Jabalpur",
    rating: 5,
    text: "During Paryushan, this is our family's go-to restaurant. They know exactly what can and cannot be served. Trustworthy and pure."
  }
];

export const galleryImages = [
  {
    url: "https://picsum.photos/1200/900?random=27",
    label: "A Feast of Colours — Jain Thali"
  },
  {
    url: "https://picsum.photos/1200/900?random=28",
    label: "The Art of Paneer"
  },
  {
    url: "https://picsum.photos/1200/900?random=29",
    label: "Dal — The Heart of Indian Food"
  },
  {
    url: "https://picsum.photos/1200/900?random=30",
    label: "The Biryani Story"
  },
  {
    url: "https://picsum.photos/1200/900?random=31",
    label: "Breads of India"
  },
  {
    url: "https://picsum.photos/1200/900?random=32",
    label: "Sweets — End on a High Note"
  },
  {
    url: "https://picsum.photos/1200/900?random=33",
    label: "Spices — The Soul of Indian Cooking"
  },
  {
    url: "https://picsum.photos/1200/900?random=34",
    label: "Street Food, Jain Style"
  }
];
