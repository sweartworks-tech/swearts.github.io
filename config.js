// ============================================================
//  SWEARTS — WEBSITE CONFIG
//  Edit this file to update your website content.
//  No coding knowledge needed!
// ============================================================

const SITE_CONFIG = {

  // ── ARTIST INFO ──────────────────────────────────────────
  artist: {
    name: "Swetha Lingala",
    tagline: "Where Tradition Meets Beauty",
    bio_line1: "Swetha Lingala is an Indian artist dedicated to bringing the beauty of traditional art forms into modern life. Rooted in the rich cultural heritage of India, her work celebrates techniques such as Lippan art and Madhubani painting, honoring the stories, motifs, and craftsmanship passed down through generations.",
    bio_line2: "Driven by the belief that traditional art should continue to live, evolve, and inspire, Swetha's work brings warmth, culture, and meaning into the spaces it touches. Whether through intricate mirror-work, vibrant folk patterns, or tactile yarn designs, she aims to make every piece a reminder of heritage, beauty, and the joy of creating with one's hands.",
    artworks_sold: "50+",
    art_styles: "10+",
    whatsapp: "919472758363",        // ← Replace with your US number e.g. 14155551234
    photo: "",
    instagram: "https://www.instagram.com/YOUR_HANDLE",  // ← Replace with your Instagram URL
    gmail: "your@gmail.com",                              // ← Replace with your Gmail
  },

  // ── TRENDING ARTWORKS (shown in the dark section) ────────
  trending: [
    {
      emoji: "🪬",
      image: "Images/DSC_0730.JPG",
      title: "Lotus Garden Lippan Art",
      description: "Graceful pink Lotusin full bloom, hand-sculpted on a vibrant orange canvas with swirling stems, green leaves and scattered mirror dots — like a garden frozen in time..",
      tag: "🔥 Most Popular",
      gradient: "linear-gradient(135deg, #1a0000, #C0392B)",
    },
    {
      emoji: "🌸",
      image: "Images/DSC_0780.JPG",
      title: "Life of Tree – Multicolor",
      description: "Handcrafted yarn tree with colorful crochet flowers, vintage buttons and wooden bead roots.",
      tag: "⭐ Bestseller",
      gradient: "linear-gradient(135deg, #006064, #880E4F)",
    },
    {
      emoji: "🌿",
      image: "Images/DSC_0757.JPG",
      title: "Rainbow Chakra Lippan Art ",
      description: "A vibrant explosion of color — red, orange, teal and cobalt layers bloom outward, richly adorned with mirror work that catches every ray of light..",
      tag: "💎 Premium",
      gradient: "linear-gradient(135deg, #1B5E20, #F9A825)",
    },
  ],

  // ── GALLERY ARTWORKS ─────────────────────────────────────
  gallery: [

    // ── Lippan Art ──
    {
      emoji: "🪬",
      image: "Images/DSC_0737.JPG",
      title: "Teal Pink Lippan Art",
      type: "A mesmerizing dance of teal and hot pink petals, hand-sculpted in clay with shimmering silver mirrors radiating from a jewelled centre.",
      price: "$75",
      category: "Lippan Art",
      status: "available",
      gradient: "linear-gradient(135deg, #FF6B00, #FFB800)",
    },
    {
      emoji: "🪬",
      image: "Images/DSC_0740.JPG",
      title: " Yellow Blue Lippan Art",
      type: "Sunshine meets sky — a cheerful Lippan art piece in bold yellow, sky blue and rose pink with a sparkling full mirror border.",
      price: "$75",
      category: "Lippan Art",
      status: "available",
      gradient: "linear-gradient(135deg, #1a0000, #C0392B)",
    },
    {
      emoji: "💠",
      image: "images/DSC_0939.JPG",
      title: "Royal Elephant Lippan Art",
      type: "A majestic white elephant adorned in festive jewellery and a richly decorated royal blanket, hand-sculpted on a vibrant red canvas with golden mirror dots — a symbol of strength, luck and celebration.",
      price: "$75",
      category: "Lippan Art",
      status: "available",
      gradient: "linear-gradient(135deg, #006064, #880E4F)",
    },
    {
      emoji: "💠",
      image: "images/DSC_0735.JPG",
      title: "Teal & Pink Lippan Art",
      type: "Lippan Art · Mandala Pattern · Circular Board · 14 inch",
      price: "$75",
      category: "Lippan Art",
      status: "available",
      gradient: "linear-gradient(135deg, #006064, #880E4F)",
    },
    {
      emoji: "💠",
      image: "images/DSC_0737.JPG",
      title: "Teal Pink Lippan Art",
      type: "Lippan Art · Mandala Pattern · Circular Board · 14 inch",
      price: "$75",
      category: "Lippan Art",
      status: "available",
      gradient: "linear-gradient(135deg, #006064, #E91E63)",
    },
    {
      emoji: "🌺",
      image: "images/DSC_0738.JPG",
      title: "Sunburst Lippan Art",
      type: "Lippan Art · Mandala Pattern · Circular Board · 14 inch",
      price: "$75",
      category: "Lippan Art",
      status: "available",
      gradient: "linear-gradient(135deg, #B71C1C, #00897B)",
    },
    {
      emoji: "🌼",
      image: "images/DSC_0740.JPG",
      title: "Yellow Blue Lippan Art",
      type: "Lippan Art · Mandala Pattern · Circular Board · 14 inch",
      price: "$75",
      category: "Lippan Art",
      status: "available",
      gradient: "linear-gradient(135deg, #F9A825, #0288D1)",
    },
    {
      emoji: "🌿",
      image: "images/DSC_0742.JPG",
      title: "Emerald Gold Lippan Art",
      type: "Lippan Art · Mandala Pattern · Circular Board · 14 inch",
      price: "$75",
      category: "Lippan Art",
      status: "available",
      gradient: "linear-gradient(135deg, #1B5E20, #F9A825)",
    },
    {
      emoji: "🌈",
      image: "images/DSC_0757.JPG",
      title: "Rainbow Chakra Lippan Art",
      type: "Lippan Art · Mandala Pattern · Circular Board · 14 inch",
      price: "$75",
      category: "Lippan Art",
      status: "available",
      gradient: "linear-gradient(135deg, #0288D1, #C0392B)",
    },
    {
      emoji: "🐘",
      image: "images/DSC_0939.JPG",
      title: "Royal Elephant Lippan Art",
      type: "Lippan Art · Circular Board · 14 inch",
      price: "$75",
      category: "Lippan Art",
      status: "available",
      gradient: "linear-gradient(135deg, #C0392B, #F9A825)",
    },

    // ── Yarn Art ──
    {
      emoji: "🌳",
      image: "images/DSC_0780.JPG",
      title: "Life of Tree – Multicolor",
      type: "Yarn Art · Wall Hanging · Handcrafted",
      price: "$75",
      category: "Yarn Art",
      status: "available",
      gradient: "linear-gradient(135deg, #2E7D32, #FF6B00)",
    },
    {
      emoji: "🌹",
      image: "images/DSC_0787.JPG",
      title: "Life of Tree – Red",
      type: "Yarn Art · Wall Hanging · Handcrafted",
      price: "$75",
      category: "Yarn Art",
      status: "available",
      gradient: "linear-gradient(135deg, #B71C1C, #f5f5f5)",
    },

    // ── Custom ──
    {
      emoji: "🎨",
      image: "",
      title: "Custom Order",
      type: "Any Style · Any Size · Your Choice of Colors",
      price: "On Request",
      category: "Custom",
      status: "available",
      gradient: "linear-gradient(135deg, #6A0572, #FF6B00)",
    },
  ],

};
