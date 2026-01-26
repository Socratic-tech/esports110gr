# Quick Start Guide

## Deploy to GitHub Pages in 3 Steps

### 1. Create the Repository

On GitHub.com:
- Click **New repository**
- Name it: `esports110gr`
- Make it **Public**
- Do NOT initialize with README (you'll push your own)
- Click **Create repository**

### 2. Push the Files

In your terminal:

```bash
# Navigate to the esports110gr folder
cd esports110gr

# Initialize git (if not already done)
git init

# Add GitHub remote
git remote add origin https://github.com/YOUR_USERNAME/esports110gr.git

# Stage and commit files
git add .
git commit -m "Initial commit: Game Review Training Tool for ESPORTS 110"

# Push to GitHub
git branch -M main
git push -u origin main
```

### 3. Enable GitHub Pages

- Go to your repository on GitHub
- Click **Settings** → **Pages**
- Under "Source", select `main` branch
- Save
- Your site will be live in ~1 minute at:
  ```
  https://YOUR_USERNAME.github.io/esports110gr/
  ```

---

## Test Locally Before Deploying

### Option A: Simple HTTP Server (Recommended)

```bash
# Navigate to the project folder
cd esports110gr

# Python 3
python -m http.server 8000

# Then open: http://localhost:8000
```

### Option B: Open in Browser

Simply double-click `index.html`. Works for everything except some browsers may block file:// origin for older security reasons. HTTP server is more reliable.

---

## What You're Deploying

```
esports110gr/
├── index.html              ← Student landing page
├── proposal.html           ← Game proposal guidelines
├── quest.html              ← Interactive training
├── relic.html              ← Placeholder for Phase 2
├── css/
│   ├── base.css           ← Colors, typography, components
│   └── layout.css         ← Grid, pages, responsive design
└── js/
    ├── data.js            ← All quest content
    └── quest.js           ← Navigation logic
```

**No build tools. No dependencies. Works immediately.**

---

## Share With Students

Once deployed, share this URL:
```
https://yourusername.github.io/esports110gr/
```

Or link from your Canvas course with instructions:
> "Visit [link] to begin the Game Review Training Quest. Work through all five sections before starting your game proposal."

---

## Quick Customization

### Change Game Examples

Edit `js/data.js` and replace game names and review excerpts. For example:

```javascript
model: {
    title: 'Professional Review Opening',
    content: `<p><strong>From a review of *YOUR GAME HERE* (YEAR):</strong></p>
    
<p>"Your review excerpt here..."</p>`,
    source: 'Your source here'
},
```

### Change Colors

Edit `css/base.css`, line 2:

```css
:root {
    --color-primary: #0066cc;  ← Change this
    --color-primary-hover: #0052a3;
    /* ... etc ... */
}
```

### Change Course Name

Replace "ESPORTS 110" with your course code in:
- `index.html` (line 6, title tag + subtitle)
- `proposal.html` (title tag)
- `quest.html` (title tag)

---

## Troubleshooting

**"I see a blank page"**
- Refresh the browser (Ctrl+F5 or Cmd+Shift+R)
- Check browser console for errors (F12)
- Ensure all files are in the correct directory

**"The interactive quest doesn't work"**
- Make sure JavaScript is enabled
- Check that `js/data.js` and `js/quest.js` are in the correct folder
- Check browser console (F12) for error messages

**"GitHub Pages says 'There is no GitHub Pages site here'"**
- Wait 1-2 minutes after enabling Pages
- Make sure you enabled Pages in Settings
- Verify the branch is set to `main`

**"My changes aren't showing up"**
- Clear your browser cache (Ctrl+Shift+Delete)
- Do a hard refresh (Ctrl+F5)
- Wait a few minutes for GitHub to rebuild

---

## Tips

- ✅ Test locally before pushing to GitHub
- ✅ Keep all relative paths the same (don't reorganize folders)
- ✅ Edit js/data.js to customize game examples
- ✅ Use a code editor (VS Code, Sublime, Atom) for easier editing
- ✅ Share the GitHub Pages URL, not the repository URL
- ✅ Include this link in your Canvas syllabus

---

## Next Steps

1. **Deploy** using the 3 steps above
2. **Test** by visiting the live URL
3. **Customize** game examples in js/data.js if desired
4. **Share** the URL with students in Canvas
5. **Monitor** Canvas for proposal and review submissions

Done! Your students are ready to learn.

---

For detailed documentation, see **README.md**.
