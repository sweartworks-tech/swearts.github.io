# SweArts 2.0 — Owner guide

## Recent fixes (read this first)
- **Fixed duplicate artwork links.** A few pieces (2× "Lord Jagannath", 3× "Blooming Flower") were silently sharing the same web address, so clicking some of them opened the wrong piece. Their IDs are now unique, and `admin.html` won't let this happen again on future saves.
- **Added social share previews.** Sharing swearts.com or any artwork link on WhatsApp/Instagram/iMessage now shows a proper title, description and image instead of a bare link. Each artwork page previews with its own photo.
- **Added a favicon** (the browser tab icon) and app icons.
- **Added `robots.txt` and `sitemap.xml`** so Google can find and index all artwork pages. ⚠️ `sitemap.xml` is a static file — when you add new artwork through the admin, the new page works fine but won't be in the sitemap until it's regenerated. Not urgent, but worth doing every few months (ask Claude to regenerate it from `data/site.json`).
- **`config.js` is unused** — the live site reads from `data/site.json` only. `config.js` is now clearly marked as deprecated at the top of the file so it doesn't cause confusion. Safe to delete once you've confirmed you don't need it as a reference.
- **Moved 77MB of unused raw photos** out of the published folder into `_originals-not-published/` (see note below) — this doesn't change how the site looks, it just stops publishing files nobody links to.

### About `_originals-not-published/`
This folder holds the full-size camera originals that aren't used on the site (only the resized `Images/web/*.webp` versions are). It's excluded from future commits via `.gitignore`. Two options:
1. **Simplest:** leave it in the repo folder on your computer for your own backup, just don't push it to GitHub.
2. **Cleaner:** move it entirely to Google Drive/Photos and delete it from the repo folder. If you've already pushed the old large files to GitHub before, they'll still take up space in the repository's history — that's a more advanced cleanup (`git filter-repo` or GitHub's own tools) and not urgent, just something to know about.


## What is included
- Calm premium home page
- Collection filters and gallery
- Individual artwork pages at `artwork.html?id=...`
- Artwork stories, materials, dimensions and care information
- Per-artwork making/process stories with photos
- Featured collection controls
- Mobile-friendly admin page
- Automatic browser-side image resize to WebP
- SEO-friendly product structured data on artwork pages

## First-time GitHub setup
1. Open your GitHub repository.
2. Go to **Settings → Developer settings → Personal access tokens → Fine-grained tokens**.
3. Create a token restricted to **only your SweArts repository**.
4. Repository permissions: **Contents → Read and write**.
5. Copy the token once. Do not put it in the website source.
6. Open your published website at `/admin.html`.
7. Enter GitHub owner, repository, branch (`main`) and the token.
8. Click **Connect**.

## Add an artwork
1. Admin → **Inventory** → **Add Artwork**.
2. Add title, category and price.
3. Add dimensions, materials and care notes.
4. Add a short description and the story/inspiration.
5. Upload the main artwork photo.
6. Add one or more **Making process** steps. Each step can have a title, short story and behind-the-scenes photo.
7. Save.
8. Wait for GitHub Pages to publish the commit.
9. Open the artwork from the collection to verify the detail page.

## Recommended photo sizes
- Main artwork: clear, well-lit photo; phone portrait or square is fine.
- Process photos: 1200–1800 px on the longest side.
- Photograph near a window or in soft daylight; avoid harsh flash.
- Keep the background simple so the artwork remains the focus.

## Marking pieces
Use: **Available**, **New**, or **Sold**.
Sold pieces remain visible so visitors can see your portfolio. They show an **Ask for a similar piece** action instead of a purchase/enquiry action.

## Featured artwork
Admin → **Featured** → select up to three pieces → Save Featured.
The first selected piece is the large hero feature.

## Making process
There are two levels:
- **Studio-wide process:** Admin → Making Process. Use this for your general Lippan/Yarn workflow.
- **Artwork-specific process:** edit an artwork and add process steps. Use this for the story of one particular piece.

## Site information
Admin → Site Info lets you update artist name, tagline, WhatsApp, email, Instagram, YouTube and biography.

## Updating the repository manually
If you prefer GitHub Desktop or git:
1. Download/extract the new SweArts package.
2. Replace the matching files/folders in your repository.
3. Commit and push to `main`.
4. GitHub Pages will publish the update.

Do not overwrite your existing `CNAME` if it already points to your custom domain.

## Important security note
The admin page is a client-side GitHub API tool. The token is stored only in `sessionStorage` in the browser. Use a fine-grained token limited to this repository and Contents read/write only.
For a stronger private admin login later, move to a server-side CMS/OAuth architecture so no GitHub token is entered into the browser.
