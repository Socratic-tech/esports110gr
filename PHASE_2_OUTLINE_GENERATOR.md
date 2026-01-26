# Phase 2: Review Outline Generator

## What This Is

The Review Outline Generator (now in `relic.html`) transforms students' learning into a **structured, professional review blueprint** ready for submission.

This is the **actual assignment tool** students use to create their Phase 2 deliverable—a detailed outline that guides their written or video game review.

---

## Assignment Context

### The Arc
1. **Phase 0:** Game Proposal → approved by instructor
2. **Phase 1:** Training Quest → learn how professionals review games
3. **Phase 2:** Review Outline Generator → plan detailed review (← YOU ARE HERE)
4. **Phase 3:** Final Review → write or produce actual review

### The Assignment Requirements (From Your Brief)

Students must create an outline that includes:
- ✅ **Sections:** Introduction, Gameplay, Graphics, Sound, Verdict (+ custom)
- ✅ **Details:** Bullet points and notes (complete sentences not required)
- ✅ **Visuals:** Detailed planning of screenshots and video clips with placement
- ✅ **Creativity:** Unique structure and personal insights
- ✅ **Format:** .doc, .pdf, or .rtf file

---

## How It Works: Student Perspective

### Step 1: Start Building
Student opens `/relic.html` and enters their game title. If they saved their proposal, it auto-loads the game name.

### Step 2: Work Through 5 Core Sections
For each section (Introduction, Gameplay, Graphics, Sound, Verdict):

1. **Read the tip** (reminder of Training Quest learning)
2. **Answer content prompts** (bullet points, detailed analysis)
3. **Plan visuals** (add screenshot/clip types with descriptions)
4. **Add personal insight** (what's unique about your perspective)

### Step 3: Add Custom Sections (Optional)
If they want sections for Story, Accessibility, Multiplayer, etc., they click "Add Custom Section" and build it the same way.

### Step 4: Generate Outline
Click "Generate Review Outline" → tool creates formatted outline with all sections

### Step 5: Download or Copy
- **Copy to Clipboard** → Paste into Google Docs or Word
- **Download as Text** → Get `.txt` file to open and format

### Step 6: Format & Submit
Open in Word/Google Docs, format as desired (add images, colors, etc.), save as `.doc` or `.pdf`, submit through Canvas.

---

## Tool Features

### 5 Core Section Builders

#### 1. Introduction
- Hook & core argument
- Context you'll establish
- Opening visuals (title card, opening footage, etc.)

**Prompt:** What makes this game worth analyzing? Why should readers care?

#### 2. Gameplay
- Core mechanics
- Challenge design
- Representative example (specific boss/level)
- Your unique take

**Prompt:** What does the player do? How is challenge created? What's your original insight?

#### 3. Graphics & Art Direction
- Visual language & style
- Purpose of choices
- How visuals guide the player
- Specific visual moments

**Prompt:** Why THAT aesthetic? What does it accomplish? How does it serve the game?

#### 4. Sound & Audio Design
- Sonic identity
- How audio communicates
- Emotional impact
- Specific audio moments

**Prompt:** What does sound do in this game? How does it create meaning and emotion?

#### 5. Verdict & Recommendation
- Core thesis (one sentence)
- Who it's for
- Who it's NOT for
- Broader significance
- Final line

**Prompt:** Synthesize your analysis. Make a clear recommendation. Acknowledge strengths AND weaknesses.

### Visual Planning for Each Section
Students add multiple visuals per section with:
- **Type:** What kind of visual (screenshot, gameplay clip, etc.)
- **Purpose:** Where in the section and what it demonstrates

Example:
```
Type: Gameplay Clip - Core Combat Loop
Purpose: Opening 30 seconds of combat showing the three-button mechanic in action
```

### Custom Sections
Button to add unlimited custom sections for:
- Story/Narrative analysis
- Multiplayer design
- Accessibility features
- Innovation & design philosophy
- Anything else relevant

### Auto-Save
All data saved to browser's localStorage as student types. No data sent anywhere.

### Export Options
- **Copy to Clipboard** → Works instantly, paste anywhere
- **Download as Text** → Get `.txt` file to open in any editor

---

## Data Flow

### Data Loaded
If student has completed proposal (Phase 0), game title auto-loads from localStorage:
```
Proposal data → outline loads game name
```

### Data Saved
Every keystroke auto-saves:
```
Student types → Auto-save to localStorage → Data persists
```

### Data Generated
When student clicks "Generate Outline":
```
All fields → Formatted outline → Display on page
```

### Data Exported
Student copies or downloads:
```
Formatted outline → Text → Clipboard or file
→ Paste into Word/Docs
→ Format and submit through Canvas
```

---

## The Outline Format

Generated outline includes:

```
REVIEW OUTLINE: [GAME TITLE]
================================================================================

1. INTRODUCTION
─────────────────────────────────────────────────────────────────────────────
Your Hook & Core Argument:
[Student's text]

Context You'll Establish:
[Student's text]

Opening Visuals:
  1. [Visual type] → [What it demonstrates]
  2. [Visual type] → [What it demonstrates]

2. GAMEPLAY
─────────────────────────────────────────────────────────────────────────────
[Same structure for each section...]

3. GRAPHICS & ART DIRECTION
[...]

4. SOUND & AUDIO DESIGN
[...]

5. VERDICT & RECOMMENDATION
[...]

6+. [CUSTOM SECTIONS]
[...]
```

**Readable, structured, professional-looking—ready to copy into Word.**

---

## How to Submit

### Student Instructions
1. Generate outline in this tool
2. Copy or download the text
3. Open in Word or Google Docs
4. Format as you prefer (add colors, images, reorganize if needed)
5. Save as `.doc` or `.pdf`
6. Upload through Canvas

### What Instructor Sees
- Final formatted file in Canvas
- NOT the raw tool output
- Opportunity to give feedback on organization and depth

### Feedback Loop
1. Instructor grades outline
2. Gives feedback on Canvas
3. Student can refine using this tool if needed
4. Resubmit if requested
5. Then proceed to write full review (Phase 3)

---

## Grading Criteria

The assignment asks to grade based on:

| Criterion | What to Look For |
|-----------|-----------------|
| **Thoroughness** | Detailed bullet points with specific examples |
| **Organization** | Clear structure, logical flow between sections |
| **Visual Planning** | Specific notes on where screenshots/clips go; strategic placement |
| **Creativity** | Unique sections added; non-standard structure if appropriate |
| **Personal Insight** | Student's unique perspective evident; not just facts |

This tool supports all of these:
- ✅ Detailed prompts encourage thoroughness
- ✅ Section structure enforces organization
- ✅ Visual planning fields require placement notes
- ✅ Custom section button enables creativity
- ✅ Insight prompts in each section encourage personality

---

## Technical Details

### localStorage
- **Key:** `esports110_outline`
- **Storage:** Browser's local storage (device-only)
- **Visibility:** Only student on their device
- **Persistence:** Survives refresh, close, multiple sessions
- **Deletion:** Clear browser cache or click "Clear & Start Over"

### Auto-Save
- **Trigger:** `input` event on textarea/input
- **Frequency:** Every keystroke
- **Frequency:** Instant (no delay)
- **Non-blocking:** Doesn't slow down typing

### Data Structure
```javascript
{
  "outline-game": "Elden Ring (2022)",
  "intro-argument": "...",
  "intro-context": "...",
  "gameplay-mechanics": "...",
  // ... all fields
}
```

### No External Dependencies
- Pure HTML/CSS/JavaScript
- Standard browser APIs only
- Works offline
- No frameworks, no servers

---

## How It Connects to Training Quest

The tool includes reminders for each section that reference Training Quest learning:

**Introduction:** "Remember: Your opening frames the game's significance. Reference the game's place in industry, culture, or design."

**Gameplay:** "Remember: Describe mechanics specifically, not vaguely. Show how the game's systems create challenge or meaning."

**Graphics:** "Remember: Explain WHY visual choices exist. Connect aesthetics to gameplay and narrative."

**Sound:** "Remember: Audio is functional design. Explain how sound communicates information, creates emotion, or advances narrative."

**Verdict:** "Remember: Your verdict synthesizes your analysis. Make a clear recommendation. Acknowledge strengths and weaknesses."

These tips help students apply what they learned.

---

## Customization Guide

### Add More Sections
Edit the HTML to add additional core sections (e.g., "Story & Narrative"). Each section follows the same pattern:

```html
<div class="section-builder">
    <div class="section-header">
        <h3><span class="section-number">6</span>Story & Narrative</h3>
    </div>
    <!-- ... rest of section structure ... -->
</div>
```

### Change Prompt Text
Edit the placeholder text and prompts in each section to match your expectations.

### Add Required Fields
Modify validation if you want to require certain sections. Currently all are optional.

### Change Storage Key
Update the storage key if you're running multiple instances:
```javascript
const OUTLINE_STORAGE_KEY = 'your_custom_key';
```

---

## Accessibility

✅ **Keyboard Navigation**
- Tab through all fields
- Enter to add visuals
- Shift+Tab backwards
- Clear focus indicators

✅ **Form Accessibility**
- Proper labels on all fields
- Help text on each prompt
- Semantic HTML
- Screen reader friendly

✅ **Visual Design**
- High contrast text
- Color + shape for states
- Large text fields
- Mobile responsive

✅ **Mobile/Touch**
- All buttons 44×44px minimum
- Touch-friendly spacing
- Responsive layout
- Works on tablets and phones

---

## Common Student Questions

**Q: Do I have to use all sections?**
A: The five core sections (Intro, Gameplay, Graphics, Sound, Verdict) are expected. Custom sections are optional but encouraged if relevant.

**Q: How detailed should my notes be?**
A: Detailed enough that someone else could write your review from the outline. Use specific examples, not vague statements.

**Q: Do I need complete sentences?**
A: No. Bullet points and notes are perfect. The outline is a blueprint, not finished prose.

**Q: What if I want to reorganize my outline later?**
A: You can. Open the downloaded file in Word and restructure as needed. The outline is a starting point.

**Q: How many visuals should I plan?**
A: At least 2-3 per section (more if helpful). Think strategically about where they go and what they demonstrate.

**Q: Can I do this on my phone?**
A: Yes, it's mobile-responsive. But you might find it easier on a computer since there's a lot of typing.

---

## Troubleshooting

### Data Disappeared
- Check if browser cache was cleared
- Look in browser's application/storage settings
- If localStorage disabled, enable it

### Copy Button Doesn't Work
- Try download button instead
- Manually select and copy from the display
- Check if browser allows clipboard access

### Visuals Not Saving
- Refresh the page (data should reload)
- Check browser console for errors (F12)
- Try a different browser

### Can't Add Custom Section
- Clear browser cache
- Disable any script-blocking extensions
- Try incognito mode

---

## Connecting to Final Review (Phase 3)

After outline is approved:
1. Student has a detailed blueprint
2. For written review: Expand each section with full sentences, examples, transitions
3. For video review: Use outline to plan shots, clips, narration
4. Both submissions use this outline as structure

The outline is literally a script/draft waiting to be developed.

---

## Assessment Tips

### Red Flags
- ❌ Vague sections ("game is good", "graphics look nice")
- ❌ No specific examples
- ❌ Visuals not clearly connected to analysis
- ❌ Recycled ideas from the game's marketing
- ❌ No personal insights or critique

### Green Flags
- ✅ Specific mechanics named and analyzed
- ✅ Concrete moments referenced (e.g., "Boss fight in level 3")
- ✅ Visual plan is strategic ("this screenshot shows X" not just "put a screenshot here")
- ✅ Personal insights evident ("This unique approach to difficulty teaches...")
- ✅ Honest assessment of both strengths and weaknesses

### Strong Outline Example

```
Gameplay: Core Mechanics
• Three-button combat: attack, dodge, parry
• Not a "everything goes" system—restrictions create mastery
• Player learns through mechanical literacy, not dialogue
• Example: Boss "Malenia" teaches parry through patterns, not tutorials
  → Three attack combos establish rhythm
  → Punishing parry timing teaches precision
  → Win comes from reading, not reflexes alone
```

vs. Weak Example:

```
Gameplay
The gameplay is really good and challenging. You fight bosses that
are hard but fair. The combat system is fun and rewards skill.
```

---

## Summary

The Review Outline Generator is:

✅ **Legitimate scaffolding** – Guides real structure, not fake engagement  
✅ **Connected to learning** – References Training Quest throughout  
✅ **Transparent about data** – Local storage, student-owned  
✅ **Export-ready** – Generates text ready for Word/Docs  
✅ **Assignment-aligned** – Matches your grading criteria  
✅ **Student-centered** – Reduces anxiety about structure  
✅ **Professional modeling** – Mirrors real review structure  

**Students scaffold here, refine in Word, submit through Canvas, then use it to write their final review.**

---

## Next Phase: Final Review

Once outline is approved, students move to Phase 3: writing or producing their actual review using the outline as a blueprint.

The outline they submit here becomes the structure for that final deliverable.

---

**Everything is ready. Students are equipped to create professional game reviews.**
