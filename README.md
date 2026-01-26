# ESPORTS 110 Game Review Training Tool

A professional, pedagogically-sound learning tool that teaches college students how game reviewers work through a structured **Model → Explain → Practice** framework.

## Project Overview

This is **not a game**. It's a training simulator that uses professional scaffolding to guide students toward mastering game review methodology.

### What It Does

Students work through five core review sections:
- **Introduction** – How professionals frame analysis
- **Gameplay** – Analyzing mechanics and challenge design
- **Graphics & Art Direction** – Analyzing visual language
- **Sound & Audio Design** – Analyzing sonic storytelling
- **Verdict & Recommendation** – Synthesizing analysis into judgment

For each section, students:
1. **Model** – Study a professional-quality review excerpt
2. **Explain** – Learn why the writing works from a design perspective
3. **Practice** – Draft their own outline notes with scaffolded prompts

## File Structure

```
esports110gr/
├── index.html              # Static landing page
├── proposal.html           # Static game proposal guidelines
├── quest.html              # Interactive Training Quest
├── relic.html              # Placeholder for outline generation
├── css/
│   ├── base.css           # Typography, colors, components
│   └── layout.css         # Grid, page structure, responsive design
└── js/
    ├── data.js            # Content data (models, explanations, practice)
    └── quest.js           # Navigation and tab interaction logic
```

## Pages

### **index.html** – Home/Learning Path
- Explains the tool's purpose and pedagogy
- Maps out the three-phase learning path
- Directs students to proposal guidelines or training quest
- Static, no interactivity

### **proposal.html** – Game Proposal Guidelines
- Explains why students must justify their game choice
- Defines what makes a game "worthy of analysis"
- Lists required components (justification, context, approach, references)
- Explains submission expectations and instructor feedback process
- Static, no forms or submission (Canvas is the system of record)

### **quest.html** – Training Quest (INTERACTIVE)
- Central learning experience with sidebar navigation
- Five review sections presented in a three-tabbed interface (Model / Explain / Practice)
- Dynamic content rendering via JavaScript (data.js + quest.js)
- Progress indicator showing all five modules
- Responsive design for desktop and mobile

### **relic.html** – Placeholder
- Future home for review outline generation and export
- Explains what's coming and directs students to the Training Quest

## Content Strategy

### Model Section
Each section opens with a professional-style game review excerpt that:
- Makes evaluative claims (not just description)
- Implies evidence (systems, examples, comparisons)
- Models professional voice and industry awareness
- Uses real analysis techniques

Examples feature games like:
- *Baldur's Gate 3* (player agency and choice systems)
- *Hollow Knight* (mechanics and difficulty design)
- *Return of the Obra Dinn* (visual language and aesthetics)
- *Outer Wilds* (audio design and narrative structure)
- *A Short Hike* (design philosophy and player respect)

### Explain Section
Breaks down *why* the professional excerpt works:
- What criteria the reviewer is using
- How evidence is implied or referenced
- How audience and purpose shape the language
- How judgment is balanced and justified
- Industry context and professional conventions

### Practice Section
Scaffolded prompts guide students to build their own analysis:
1. Focused questions about their chosen game
2. Concrete examples and sentence stems
3. Emphasis on specificity over generalization
4. Connection to the model section's techniques
5. Space for personal analytical insight

## Key Design Decisions

### No Gamification, Real Interactivity
- No points, badges, XP, or progress tracking
- No fake "unlock" gates or artificial progression
- Progress indicators are purely suggestive
- Interaction is limited to navigation and tab switching
- Every interactive element serves a learning purpose

### JavaScript Only Where It Serves Learning
- **quest.js** handles tab switching and section navigation
- **data.js** contains all content for easy maintenance
- Minimal state (current section + current tab)
- No persistence or local storage needed
- Canvas is the system of record for submissions

### Professional, Modern UI
- Clean typographic hierarchy
- High contrast and readability
- Accessible color palette and spacing
- Responsive design (desktop-first, mobile-optimized)
- No retro styling, pixel art, or nostalgic effects
- Contemporary button and form treatment

### Static Pages Where Appropriate
- index.html, proposal.html, relic.html are pure HTML/CSS
- No JavaScript required for these pages
- Can be read offline or cached easily
- Fast loading and search-engine friendly

## Deployment Instructions

### GitHub Pages Setup

1. Create a new repository named `esports110gr` on GitHub
2. Clone the repository to your local machine
3. Copy all files from this project into the repository root
4. Commit and push to GitHub:
   ```bash
   git add .
   git commit -m "Initial commit: Game Review Training Tool"
   git push origin main
   ```
5. Go to repository Settings > Pages
6. Set source to `main` branch, root directory
7. Your site will be live at `https://yourusername.github.io/esports110gr/`

### Local Testing

Open `index.html` in a modern web browser. All relative paths work correctly when opening directly from the file system.

## Browser Compatibility

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)
- Requires JavaScript enabled (only for quest.html interactivity)

## Customization Guide

### Changing Content

All quest section content is in **js/data.js**. Edit the `questData.sections` array:

```javascript
{
    id: 'sectionid',
    title: 'Display Title',
    description: 'Subtitle text',
    model: {
        title: 'Section Title',
        content: '<p>Your HTML content here</p>',
        source: 'Attribution'
    },
    explain: {
        title: 'Why This Works',
        content: '<p>Explanation content</p>'
    },
    practice: {
        title: 'Practice Prompts',
        content: '<p>Practice content</p>'
    }
}
```

### Styling

- **css/base.css** – CSS variables, typography, component styles
- **css/layout.css** – Grid system, page layouts, responsive breakpoints

Edit the `:root` variables in base.css to change colors, spacing, or typography:

```css
:root {
    --color-primary: #0066cc;
    --color-primary-hover: #0052a3;
    /* ... etc ... */
}
```

### Adding More Sections

To add a sixth review section:

1. Add a new object to `questData.sections` in js/data.js
2. Include all required fields (id, title, description, model, explain, practice)
3. The navigation and rendering will update automatically

## Pedagogical Notes

This tool follows evidence-based instructional design principles:

- **Model-Explain-Practice** – Explicit instruction with guided practice
- **Scaffolding** – Prompts decrease in directiveness as students progress
- **Apprenticeship model** – Students study expert thinking before producing their own
- **Low-risk environment** – Practice happens without grade consequences
- **Transfer** – Students apply learning to their own game analysis
- **Professional framing** – Language emphasizes craft and critical thinking, not grades

## Canvas Integration

Students submit their actual work through Canvas:

1. **Phase 0** – Game Proposal assignment (Canvas form or file upload)
2. **Phase 1** – Training Quest (self-paced, no submission)
3. **Phase 2** – Final Review outline and written review (Canvas submission)

Canvas remains the authoritative system of record. This tool is supplemental learning.

## Technical Stack

- **HTML5** – Semantic structure
- **CSS3** – Modern layout, Grid, Flexbox, custom properties
- **JavaScript (Vanilla)** – No frameworks or dependencies
- **No build tools** – Works immediately with `index.html`
- **No external dependencies** – All content is self-contained

## Accessibility

- WCAG 2.1 Level AA compliant
- Semantic HTML structure
- Sufficient color contrast (WCAG standards)
- Keyboard navigation support
- Focus indicators for keyboard users
- Responsive text sizing
- Mobile-friendly viewport

## FAQ

**Q: Can students take notes in the tool?**
A: Not directly in this version. Students should use their preferred note-taking tool (Google Docs, Word, OneNote) while working through the quest. A future version (Phase 2) will include outline generation.

**Q: Is there a score or grade?**
A: No. This is a learning tool, not an assessment tool. Grades come from Canvas assignments (the proposal and final review).

**Q: Can students skip sections?**
A: Yes. The navigation allows jumping to any section. However, the recommended learning path is sequential (Introduction → Gameplay → Graphics → Sound → Verdict).

**Q: What if students submit the outlined notes as their review?**
A: That would violate academic integrity. The tool is for *learning* how professionals think. Students must write their own review in their own voice. The tool prepares them; Canvas is where they demonstrate mastery.

**Q: Can I add my own game examples?**
A: Yes. Edit js/data.js to replace the model excerpts with games you and your class care about.

## Support & Maintenance

- **Issues?** Check that all files are in the correct directory structure
- **Display problems?** Clear browser cache and refresh
- **Want to modify content?** Edit js/data.js (text content) and css/ files (styling)
- **Need to add features?** See the Customization Guide above

## License

This tool was created for ESPORTS 110 Game Studies (Berrien RESA). Modify and use as needed for educational purposes.

---

**Built with care for students learning the craft of game criticism and analysis.**
