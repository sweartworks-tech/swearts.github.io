// ============================================================
//  ⚠️ DEPRECATED — NOT USED BY THE LIVE SITE ⚠️
//  index.html and artwork.html load content from data/site.json,
//  not this file. Editing this file has NO effect on swearts.com.
//  Use admin.html (or edit data/site.json directly) instead.
//  This file is kept only as a historical reference and can be
//  safely deleted once you've confirmed you don't need it.
// ============================================================
//
// ============================================================
//  SWEARTS — WEBSITE CONFIG (legacy / unused)
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
    whatsapp: "19472758363",        // ← Replace with your US number e.g. 14155551234
    photo: "",
    video: "https://youtube.com/shorts/w6-8D7XPHbw?feature=share", 
    instagram: "https://www.instagram.com/swe_artss?igsh=MXBoeXFzZ2R0N3FxdA==",  // ← Replace with your Instagram URL
    gmail: "sweartworks@gmail.com",                              // ← Replace with your Gmail
  },

  // ── TRENDING ARTWORKS (shown in the dark section) ────────
  trending: [
    {
      emoji: "🪬",
      image: "Images/web/001.webp",
      title: "Ganesh Blessing",
      description: "Pure white with deep red Ganesh at the centre, surrounded by cascading mirror flowers. Made with a lot of love and intention — this one feels like it belongs in a sacred corner of your home.",
      tag: "🔥 Most Popular",
      gradient: "linear-gradient(135deg, #1a0000, #C0392B)",
    },
    {
      emoji: "🪬",
      image: "Images/web/002.webp",
      title: "Lord Venkateswara",
      description: "A devotional piece close to my heart. Lord Venkateswara rendered in raised gold clay on black, every ornament and crown detail sculpted by hand. Took patience, but some pieces just demand it.",
      tag: "⭐ Bestseller",
      gradient: "linear-gradient(135deg, #006064, #880E4F)",
    },
    {
      emoji: "🪬",
      image: "Images/web/018.webp",
      title: "Royal Elephant Lippan Art",
      description: "A majestic white elephant adorned in festive jewellery and a richly decorated royal blanket, hand-sculpted on a vibrant red canvas with golden mirror dots — a symbol of strength, luck and celebration.",
      tag: "💎 Premium",
      gradient: "linear-gradient(135deg, #1B5E20, #F9A825)",
    },
  ],

  // ── MAKING PROCESS ─────────────────────────────────────
  // Add your own process photos here later. Leave image empty until you have them.
  process: [
    { step: "01", title: "Inspiration", text: "Every piece begins with a motif, color story, or feeling worth bringing to life.", image: "" },
    { step: "02", title: "Preparing the Base", text: "The surface is prepared carefully so the raised artwork has a strong, clean foundation.", image: "" },
    { step: "03", title: "Hand-Shaping", text: "Clay or yarn is shaped by hand, building texture and rhythm one detail at a time.", image: "" },
    { step: "04", title: "Mirrors & Details", text: "Mirrors, borders and fine details are placed patiently to create the signature sparkle.", image: "" },
    { step: "05", title: "Finishing", text: "The final piece is cleaned, checked, photographed and prepared to become part of a home.", image: "" }
  ],

  // ── GALLERY ARTWORKS ─────────────────────────────────────
  gallery: [

    // ── Lippan Art ──
    {
      emoji: "🪬",
      image: "Images/web/015.webp",
      title: "Festival of Colors",
      type: "Sky blue base, red, teal, yellow, cobalt — this piece doesn't hold back and I love that about it. It's the most colorful thing I've made and somehow it all works perfectly together.",
      price: "$85",
      category: "Lippan Art",
      status: "available",
      gradient: "linear-gradient(135deg, #FF6B00, #FFB800)",
    },
    {
      emoji: "🪬",
      image: "Images/web/010.webp",
      title: "Sunshine Blue Lippan",
      type: "Sunshine meets sky — a cheerful Lippan art piece in bold yellow, sky blue and rose pink with a sparkling full mirror border.",
      price: "$75",
      category: "Lippan Art",
      status: "available",
      gradient: "linear-gradient(135deg, #1a0000, #C0392B)",
    },
    {
      emoji: "🪬",
      image: "Images/web/004.webp",
      title: "Pink Tide",
      type: "Hot pink and teal petals swirling around a deep navy base — lush, layered and full of movement. The mirrors scattered through each petal make it glow from across the room..",
      price: "$75",
      category: "Lippan Art",
      status: "available",
      gradient: "linear-gradient(135deg, #006064, #880E4F)",
    },
    {
      emoji: "🪬",
      image: "Images/web/003.webp",
      title: "Lord Jagannath",
      type: "That iconic smile. Black, white and red with a bold gold border — Lord Jagannath's face in Lippan Art feels both ancient and alive. One of my most requested pieces.",
      price: "$75",
      category: "Lippan Art",
      status: "available",
      gradient: "linear-gradient(135deg, #006064, #880E4F)",
    },
    {
      emoji: "🪬",
      image: "Images/web/019.webp",
      title: "Lucky Elephants" ,
      type: "Lippan Art · Lucky Elephants · Circular Board · 14 inch",
      price: "$99",
      category: "Lippan Art",
      status: "available",
      gradient: "linear-gradient(135deg, #006064, #E91E63)",
    },
    {
      emoji: "🪬",
      image: "Images/web/024.webp",
      title: "Ganesha Mandala",
      type: "Lippan Art · Mandala Pattern · Circular Board · 14 inch",
      price: "$40",
      category: "Lippan Art",
      status: "available",
      gradient: "linear-gradient(135deg, #B71C1C, #00897B)",
    },
    {
      emoji: "🪬",
      image: "Images/web/007.webp",
      title: "Emerald Palace",
      type: "Forest green and gold with a real mirror at the heart — this one doubles as a wall mirror and a work of art. There's something almost royal about it.",
      price: "$75",
      category: "Lippan Art",
      status: "available",
      gradient: "linear-gradient(135deg, #F9A825, #0288D1)",
    },
    {
      emoji: "🪬",
      image: "Images/web/006.webp",
      title: "Midnight Lotus",
      type: "Deep black canvas with raised gold outlines and silver mirror inlay — quiet, elegant, and a little mysterious. The kind of piece that looks different every time the light hits it.",
      price: "$75",
      category: "Lippan Art",
      status: "available",
      gradient: "linear-gradient(135deg, #1B5E20, #F9A825)",
    },
    {
      emoji: "🪬",
      image: "Images/web/009.webp",
      title: "Black Gold Mirror",
      type: "Bold black Lippan work with warm gold raised borders and a large central mirror. Clean, striking, and elegant. It makes a statement without saying a word.",
      price: "$75",
      category: "Lippan Art",
      status: "available",
      gradient: "linear-gradient(135deg, #0288D1, #C0392B)",
    },
    {
      emoji: "🪬",
      image: "Images/web/005.webp",
      title: "Fiesta Lippan",
      type: "Teal, orange, red and olive petals spinning outward like a garden in full bloom. This one just radiates joy — every layer feels like a celebration frozen in clay and mirrors.",
      price: "$75",
      category: "Lippan Art",
      status: "available",
      gradient: "linear-gradient(135deg, #C0392B, #F9A825)",
    },
    {
      emoji: "🪬",
      image: "Images/web/017.webp",
      title: "Lord Jagannath",
      type: "That iconic smile. Black, white and red with a bold white border — Lord Jagannath's face in Lippan Art feels both ancient and alive",
      price: "$50",
      category: "Lippan Art",
      status: "available",
      gradient: "linear-gradient(135deg, #C0392B, #F9A825)",
    },
    {
      emoji: "🪬",
      image: "Images/web/020.webp",
      title: "Blooming Flower",
      type: "A vibrant, lotus-inspired Lippan mandala featuring bold purple and blue petals with intricate mirror-work on a warm orange backdrop",
      price: "$40",
      category: "Lippan Art",
      status: "available",
      gradient: "linear-gradient(135deg, #C0392B, #F9A825)",
    },
    {
      emoji: "🪬",
      image: "Images/web/021.webp",
      title: "Blooming Flower",
      type: "A vibrant, lotus-themed Lippan art piece featuring tiered purple and teal petals accented with intricate mirror-work on a bold orange background",
      price: "$40",
      category: "Lippan Art",
      status: "available",
      gradient: "linear-gradient(135deg, #C0392B, #F9A825)",
    },
    {
      emoji: "🪬",
      image: "Images/web/022.webp",
      title: "Blooming Flower",
      type: "This deep royal blue Lippan art piece features delicate white clay vines and intricate mirror flowers centered around a functional mirror.",
      price: "$70",
      category: "Lippan Art",
      status: "available",
      gradient: "linear-gradient(135deg, #C0392B, #F9A825)",
    },
    // ── Yarn Art ──
    {
      emoji: "🌳",
      image: "Images/web/014.webp",
      title: "Life of Tree – Multicolor",
      type: "Yarn Art · Wall Hanging · Handcrafted",
      price: "$90",
      category: "Yarn Art",
      status: "available",
      gradient: "linear-gradient(135deg, #2E7D32, #FF6B00)",
    },
    {
      emoji: "🌹",
      image: "Images/web/013.webp",
      title: "Life of Tree – Red",
      type: "Yarn Art · Wall Hanging · Handcrafted",
      price: "$90",
      category: "Yarn Art",
      status: "available",
      gradient: "linear-gradient(135deg, #B71C1C, #f5f5f5)",
    },

    // ── Custom ──
    {
      emoji: "🎨",
      image: "Images/web/026.webp",
      title: "Blue Lippan Wall Clock",
      type: "A beautifully handcrafted blue and white mandala clock that adds a calm, artistic touch to any wall.",
      price: "$80",
      category: "Custom",
      status: "available",
      gradient: "linear-gradient(135deg, #6A0572, #FF6B00)",
    },
    {
      emoji: "🎨",
      image: "Images/web/011.webp",
      title: "Kolam Circle Art",
      type: "A bold red handcrafted kolam design framed in gold, bringing festive warmth and traditional charm to your space.",
      price: "$35",
      category: "Custom",
      status: "available",
      gradient: "linear-gradient(135deg, #6A0572, #FF6B00)",
    },
    {
      emoji: "🎨",
      image: "Images/web/012.webp",
      title: "Radiant Red Mandala Art",
      type: "A vibrant red mandala adorned with delicate white and gold detailing, bringing festive energy and elegance to any room.",
      price: "$35",
      category: "Custom",
      status: "available",
      gradient: "linear-gradient(135deg, #6A0572, #FF6B00)",
    },
  ],
};
