# 🎨 Your Art Website — How to Manage It

## 📁 Your Folder Structure
Upload these to Netlify exactly like this:

```
your-website/
│
├── index.html        ← The website (don't edit this)
├── config.js         ← ✏️  EDIT THIS to update everything
└── images/           ← 📸 Put ALL your photos here
    ├── artist-photo.jpg
    ├── trending1.jpg
    ├── trending2.jpg
    ├── trending3.jpg
    ├── art1.jpg
    ├── art2.jpg
    └── ... etc
```

---

## ✏️ How to Update Anything

### Change your name, bio, WhatsApp number
Open `config.js` and edit the `artist:` section at the top.

### Add/change WhatsApp number
Find this line in config.js:
```
whatsapp: "919999999999",
```
Replace with your number. Example for India +91 98765 43210:
```
whatsapp: "919876543210",
```
⚠️ No + sign, no spaces, no dashes. Just numbers.

---

## 📸 How to Add Photos

1. Put your photo files inside the `images/` folder
2. In `config.js`, set the image path. Example:
```js
image: "images/art1.jpg",
```
3. If no photo is set or image fails to load → it automatically shows the emoji instead ✅

**Recommended image sizes:**
| Use | Size |
|-----|------|
| Artist photo | 600×750 px |
| Gallery artwork | 800×800 px |
| Trending banner | 800×600 px |

---

## 💰 How to Update Prices

Find the artwork in `config.js` under `gallery:` and change the price:
```js
price: "₹2,500",       // normal price
price: "On Request",   // for custom/enquiry items
```

---

## 🖼️ How to Add a New Artwork

Copy and paste this block inside the `gallery: [ ]` section in config.js:

```js
{
  emoji: "🌸",                         // shown if no image
  image: "images/your-new-art.jpg",    // your image file
  title: "Your Artwork Name",
  type: "Madhubani · Canvas · 12×16 in",
  price: "₹3,000",
  category: "Madhubani",               // used for filter buttons
  status: "new",                       // "available" | "sold" | "new"
  gradient: "linear-gradient(135deg, #FF6B00, #FFB800)",
},
```

---

## 🚀 How to Update the Live Website (Netlify)

1. Make your changes to `config.js` or add new photos to `images/`
2. Go to **app.netlify.com** → your site
3. Click **"Deploys"** → **"Drag and drop your site folder here"**
4. Upload your entire folder again → site updates in seconds ✅

---

## ❓ Quick Answers

**Q: Image not showing?**
Check the filename matches exactly (case-sensitive). `Art1.jpg` ≠ `art1.jpg`

**Q: WhatsApp button not working?**
Make sure the number has no +, spaces or dashes. Just digits.

**Q: Want to add a new art category to the filter?**
Just use a new category name in any artwork — it appears automatically!
