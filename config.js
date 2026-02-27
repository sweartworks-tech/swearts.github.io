// ============================================================
//  KALA DEVI ARTS — EASY WEBSITE CONFIG
//  Edit this file to update your website content.
//  No coding knowledge needed!
// ============================================================

const SITE_CONFIG = {

  // ── ARTIST INFO ──────────────────────────────────────────
  artist: {
    name: "Kala Devi",                          // Your name
    tagline: "Where Tradition Meets Beauty",    // Short tagline
    bio_line1: "Born into a family of artisans, Kala Devi has spent over two decades mastering the ancient art forms of Madhubani, Warli, and Pattachitra painting.",
    bio_line2: "Her work is a vibrant celebration of Indian mythology, nature, and folk traditions — created entirely by hand using natural pigments and handmade paper.",
    years_experience: "20+",
    artworks_sold: "500+",
    art_styles: "30+",
    whatsapp: "919999999999",   // Your WhatsApp number with country code, NO + sign
                                 // Example: India +91 98765 43210 → "919876543210"
    photo: "images/artist-photo.jpg",  // Put your photo in the images/ folder
  },

  // ── TRENDING ARTWORKS ────────────────────────────────────
  // These appear in the "Trending This Season" section
  // tag options: "🔥 Most Popular" | "⭐ Bestseller" | "🆕 New Arrival" | "💎 Premium"
  trending: [
    {
      emoji: "🦚",                              // Shown if no image
      image: "images/trending1.jpg",            // Your image file (optional)
      title: "Madhubani Peacock Series",
      description: "Vibrant peacock motifs in traditional Madhubani style with natural dyes on handmade paper.",
      tag: "🔥 Most Popular",
      gradient: "linear-gradient(135deg, #C0392B, #FF6B00)",  // Background color if no image
    },
    {
      emoji: "🪷",
      image: "images/trending2.jpg",
      title: "Lotus Warli Collection",
      description: "Minimalist Warli tribal art blended with lotus motifs. Perfect for home décor and gifting.",
      tag: "⭐ Bestseller",
      gradient: "linear-gradient(135deg, #6A0572, #C0392B)",
    },
    {
      emoji: "🐘",
      image: "images/trending3.jpg",
      title: "Pattachitra Elephant Tales",
      description: "Odisha's ancient Pattachitra tradition — intricate elephant designs on palm leaf and canvas.",
      tag: "🆕 New Arrival",
      gradient: "linear-gradient(135deg, #00897B, #FFB800)",
    },
  ],

  // ── GALLERY ARTWORKS ─────────────────────────────────────
  // These appear in the Art Gallery section with prices
  // status options: "available" | "sold" | "new"
  // category options: "Madhubani" | "Warli" | "Pattachitra" | "Custom" (used for filter buttons)
  gallery: [
    {
      emoji: "🦋",
      image: "images/art1.jpg",                 // Put your artwork image in images/ folder
      title: "Butterfly Madhubani",
      type: "Madhubani · Handmade Paper · 12×16 in",
      price: "₹2,500",                          // Set to "On Request" for custom pieces
      category: "Madhubani",
      status: "new",                            // "available" | "sold" | "new"
      gradient: "linear-gradient(135deg, #FF6B00, #FFB800)",
    },
    {
      emoji: "🌸",
      image: "images/art2.jpg",
      title: "Lotus Village Scene",
      type: "Warli · Canvas · 18×24 in",
      price: "₹4,200",
      category: "Warli",
      status: "available",
      gradient: "linear-gradient(135deg, #6A0572, #FF6B00)",
    },
    {
      emoji: "🐦",
      image: "images/art3.jpg",
      title: "Sacred Bird Pattachitra",
      type: "Pattachitra · Palm Leaf · 10×14 in",
      price: "₹3,800",
      category: "Pattachitra",
      status: "sold",
      gradient: "linear-gradient(135deg, #C0392B, #6A0572)",
    },
    {
      emoji: "🌺",
      image: "images/art4.jpg",
      title: "Festival Rangoli Design",
      type: "Mixed Media · Canvas · 20×20 in",
      price: "₹5,500",
      category: "Madhubani",
      status: "available",
      gradient: "linear-gradient(135deg, #00897B, #FFB800)",
    },
    {
      emoji: "🐘",
      image: "images/art5.jpg",
      title: "Royal Elephant March",
      type: "Pattachitra · Canvas · 24×30 in",
      price: "₹7,000",
      category: "Pattachitra",
      status: "new",
      gradient: "linear-gradient(135deg, #FFB800, #C0392B)",
    },
    {
      emoji: "🌟",
      image: "images/art6.jpg",
      title: "Custom Portrait Art",
      type: "Custom Order · Any Size · Your Choice",
      price: "On Request",
      category: "Custom",
      status: "available",
      gradient: "linear-gradient(135deg, #6A0572, #00897B)",
    },
  ],

};
