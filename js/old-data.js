// ESPORTS 110 Game Review Training
// Content data for Model → Explain → Practice loop

const questData = {
    sections: [
        {
            id: 'introduction',
            title: 'Introduction',
            description: 'How professional reviewers frame their analysis',
            model: {
                title: 'Professional Review Opening',
                content: `<p><strong>From a review of *Baldur's Gate 3* (2023):</strong></p>
                
<p>"Baldur's Gate 3 doesn't just revive a beloved franchise—it redefines what a turn-based RPG can achieve when developers treat player freedom as a design first principle. Larian Studios has crafted a game where your choices matter not as branching cutscenes or cosmetic variations, but as genuine shifts in systems, narrative, and mechanical consequences. In an industry crowded with choice-driven games that merely simulate freedom, Baldur's Gate 3 delivers the real thing."</p>

<p><strong>Core claim:</strong> This game represents an evolution in RPG design and player agency. <strong>Evidence hinted:</strong> Systems respond to player choice; consequences are mechanical, not cosmetic; the industry context shows how rare this actually is.</p>`,
                source: 'Adapted from professional game review conventions'
            },
            explain: {
                title: 'Why This Opening Works',
                content: `<h3>What the Reviewer Does Here:</h3>

<p><strong>1. Positions the game in context.</strong> The phrase "doesn't just revive" acknowledges the franchise history without letting nostalgia drive the review. The reviewer establishes what's at stake from the start.</p>

<p><strong>2. Makes an evaluative claim immediately.</strong> The opening isn't "This game is about choice"—it's "This game does something significant *because* it treats choice as a design principle." That's an argument, not a description.</p>

<p><strong>3. Grounds the claim in design logic.</strong> The reviewer doesn't say "I like choice." They explain *why* this implementation matters: systems respond, consequences are real, not simulated. This appeals to understanding, not just preference.</p>

<p><strong>4. Acknowledges the landscape.</strong> The phrase "In an industry crowded with choice-driven games that merely simulate freedom" does crucial work. It tells the reader: I know the market. I understand how rare true agency is. This isn't hype—it's perspective.</p>

<p><strong>5. Sets the tone for what follows.</strong> By opening with systems and design philosophy, the reviewer signals that this review will be about *how the game works*, not just story beats or graphics. Readers know what to expect.</p>

<h3>Audience & Purpose:</h3>

<p>Professional openings balance <strong>accessibility</strong> (don't assume players know the original game) with <strong>credibility</strong> (show you know the industry and design).</p>`
            },
            practice: {
                title: 'Practice: Draft Your Opening',
                content: `<h3>Your Turn</h3>

<p>Before you write a full review, you need a strong opening. Use these prompts to develop your thinking:</p>

<div class="practice-prompt">
<p><strong>1. What's your core argument?</strong></p>
<p>In one sentence: What is this game doing that's significant? (Not "it's fun" or "it's good." What does it *mean* or *accomplish*?)</p>
<p><em>Example: "This game innovates on formula by..." or "This game challenges convention by..." or "This game represents a moment when..."</em></p>
</div>

<div class="practice-prompt">
<p><strong>2. Where does it fit?</strong></p>
<p>How does this game relate to its genre, franchise, or industry moment? What context does a reader need?</p>
<p><em>Example: "First entry in a series," "Subverts the genre's typical approach," "Arrives at a time when..."</em></p>
</div>

<div class="practice-prompt">
<p><strong>3. What evidence will anchor your claim?</strong></p>
<p>Don't say it yet—just list what you'll point to. Mechanical systems? Narrative choices? Art style? Audio?</p>
<p><em>Example: "Movement mechanics that encourage experimentation," "A specific story decision that changes the game," "Visual palette that signals player agency"</em></p>
</div>

<div class="practice-prompt">
<p><strong>4. Draft your opening paragraph.</strong></p>
<p>Write 2–3 sentences that: (1) position the game, (2) make your core claim, (3) hint at the evidence you'll discuss.</p>
<p><em>Aim for the tone of a professional outlet, not a personal blog. Show that you understand the game's context and what makes your analysis relevant.</em></p>
</div>`
            }
        },

        {
            id: 'gameplay',
            title: 'Gameplay',
            description: 'Analyzing mechanics, challenge, and player agency',
            model: {
                title: 'Professional Gameplay Analysis',
                content: `<p><strong>From a review of *Hollow Knight* (2017):</strong></p>

<p>"Hollow Knight's combat is deliberately restrictive. You have one attack, one dodge, and a handful of special abilities. Against modern action games that pile on combo trees and upgrade systems, Hollow Knight's restraint feels radical. But this isn't minimalism for its own sake—it's the foundation for precisely calibrated difficulty. The boss fights demand mastery of these core tools. You'll lose a hundred times before you defeat Radiance not because the game is unfair, but because it's teaching you that your limitations are actually your power. Every dodge you learn, every tell you recognize, is progress."</p>

<p><strong>Key moves:</strong> Describes mechanics specifically. Contextualizes them (vs. modern action games). Connects design to player experience. Shows consequences (you learn, you progress).</p>`,
                source: 'Adapted from professional game review conventions'
            },
            explain: {
                title: 'Why This Analysis Works',
                content: `<h3>What the Reviewer Accomplishes:</h3>

<p><strong>1. Describes mechanics precisely, not vaguely.</strong> Not "the combat is hard." Specific: "one attack, one dodge, a handful of abilities." Readers who've played the game recognize themselves. Readers who haven't understand the design constraints.</p>

<p><strong>2. Contextualizes within the industry.</strong> "Against modern action games that pile on combo trees" tells you this reviewer knows the landscape. Hollow Knight's simplicity becomes a *choice*, not a limitation.</p>

<p><strong>3. Explains *why* the design exists.</strong> The reviewer could say "combat is hard." Instead: "restraint is the foundation for precisely calibrated difficulty." This shows the *logic* of the design.</p>

<p><strong>4. Connects systems to learning and growth.</strong> "The boss fights demand mastery" and "you're teaching you that your limitations are actually your power" turns mechanical description into a story about player development. This is why the design matters.</p>

<p><strong>5. Acknowledges the challenge without dismissing difficulty as bad design.</strong> "Not because the game is unfair, but because it's teaching you"—this shows the reviewer understands the difference between punishment and pedagogy.</p>

<h3>Evidence Handling:</h3>

<p>The reviewer doesn't list every boss or ability. They choose specific, representative examples (Radiance, dodge timing) that illustrate the larger point. This is how professionals distill evidence: show the pattern through a concrete example.</p>`
            },
            practice: {
                title: 'Practice: Analyze Your Game\'s Mechanics',
                content: `<h3>Your Turn</h3>

<p>Now analyze the core gameplay of your chosen game. These prompts will help you build a substantive paragraph:</p>

<div class="practice-prompt">
<p><strong>1. What are the core mechanics?</strong></p>
<p>List the fundamental actions the player performs. Not "jump and shoot"—be specific. What inputs do they make repeatedly?</p>
<p><em>Example: "Placement-based tower defense with real-time pausing," "Dialogue choices that affect NPC relationships," "Resource management with incomplete information"</em></p>
</div>

<div class="practice-prompt">
<p><strong>2. What does the game ask the player to master?</strong></p>
<p>What skills, systems, or understanding must develop to succeed?</p>
<p><em>Example: "Pattern recognition and timing," "Strategic thinking under pressure," "Attention to subtle narrative details"</em></p>
</div>

<div class="practice-prompt">
<p><strong>3. How does design shape difficulty?</strong></p>
<p>Is challenge difficulty or unfairness? Does the game teach before it punishes? How do mechanics create the experience of the game?</p>
</div>

<div class="practice-prompt">
<p><strong>4. What comparison contextualizes this?</strong></p>
<p>What other games or genres does your game follow or subvert? How does that context matter?</p>
<p><em>Example: "Unlike typical roguelikes that rely on randomness, this game..." or "Similar to *Portal 2*, but focusing on..."</em></p>
</div>

<div class="practice-prompt">
<p><strong>5. Choose one representative moment or system.</strong></p>
<p>Pick a specific boss, level, mechanic, or sequence that exemplifies your larger claim about gameplay.</p>
</div>

<div class="practice-prompt">
<p><strong>6. Draft your gameplay paragraph.</strong></p>
<p>Combine these elements: What's the core mechanic? How does it create challenge? What does it teach the player? What comparison contextualizes it?</p>
</div>`
            }
        },

        {
            id: 'graphics',
            title: 'Graphics & Art Direction',
            description: 'Analyzing visual design and aesthetic choices',
            model: {
                title: 'Professional Art Direction Analysis',
                content: `<p><strong>From a review of *Return of the Obra Dinn* (2018):</strong></p>

<p>"Every pixel in Return of the Obra Dinn serves the game's central mystery. By committing entirely to a monochrome, 1-bit aesthetic—the visual language of a 1980s Macintosh—designer Lucas Pope creates a world that feels both nostalgic and alien. The limitation isn't a stylistic choice that could be swapped out; it's fundamental to how the game tells its story. On a modern screen, this looks almost anachronistic. That anachronism is the point. When you're deciphering a maritime mystery spanning centuries, visual simplification becomes a superpower. You notice what matters: posture, positioning, costume. The game's commitment to monochrome teaches your eye what to see."</p>

<p><strong>Key moves:</strong> Describes the visual style specifically. Explains why it exists (not just what it looks like). Connects aesthetics to gameplay and narrative. Shows how limitations become strengths.</p>`,
                source: 'Adapted from professional game review conventions'
            },
            explain: {
                title: 'Why This Analysis Works',
                content: `<h3>What the Reviewer Accomplishes:</h3>

<p><strong>1. Names the specific aesthetic choice and its source.</strong> Not just "pixel art" but "1-bit aesthetic, the visual language of a 1980s Macintosh." This grounds the description in history and shows the reviewer knows what they're looking at.</p>

<p><strong>2. Argues that form is inseparable from function.</strong> "The limitation isn't a stylistic choice that could be swapped out; it's fundamental to how the game tells its story." This is crucial: the reviewer isn't saying "I like retro aesthetics." They're arguing that *this specific aesthetic choice* serves *this specific game's purpose*.</p>

<p><strong>3. Acknowledges the tension viewers might feel.</strong> "That anachronism is the point." The reviewer predicts a reader's reaction and reframes it as intentional design, not a shortcoming.</p>

<p><strong>4. Connects visual language to player behavior.</strong> "Visual simplification becomes a superpower" and "teaches your eye what to see"—the reviewer shows how aesthetics affect how you play and think, not just what the game looks like.</p>

<p><strong>5. Uses a specific example to anchor the claim.</strong> "Notice what matters: posture, positioning, costume." These concrete details prove that the visual system actually works as described.</p>

<h3>Tone & Credibility:</h3>

<p>Professional art analysis avoids both blind praise ("wow, beautiful!") and gatekeeping ("indie pixel art is overused"). Instead, it asks: <em>Why does this visual language matter for this game?</em></p>`
            },
            practice: {
                title: 'Practice: Analyze Your Game\'s Visuals',
                content: `<h3>Your Turn</h3>

<p>Art direction is easy to praise or dismiss superficially. These prompts will help you analyze it substantively:</p>

<div class="practice-prompt">
<p><strong>1. What's the dominant visual language?</strong></p>
<p>Name the style, color palette, rendering technique, or aesthetic reference your game commits to.</p>
<p><em>Example: "Cel-shading with bold outlines," "Photorealism with intentional grain/blur," "Low-poly 3D with bright primaries," "Hand-drawn animation"</em></p>
</div>

<div class="practice-prompt">
<p><strong>2. Why that choice?</strong></p>
<p>What does this visual language accomplish that a different style couldn't? Is it about mood, clarity, performance, or narrative?</p>
<p><em>Example: "The cel-shading makes characters feel like comic panels, supporting the story's blend of humor and violence," "Photorealism grounds the horror in a world that could be real"</em></p>
</div>

<div class="practice-prompt">
<p><strong>3. What does the visual design teach the player?</strong></p>
<p>How do colors, contrast, or visual clarity guide attention? What can you learn from the game's visuals about what matters?</p>
<p><em>Example: "Enemy silhouettes are always high-contrast, so you spot threats instantly," "The environment is muted except for interactive objects, which stand out"</em></p>
</div>

<div class="practice-prompt">
<p><strong>4. What's the visual context?</strong></p>
<p>How does this game's art direction fit within or challenge its genre or historical moment?</p>
<p><em>Example: "Most puzzle games use clean, minimal interfaces; this game instead embraces visual clutter and makes you parse complexity," "Photorealistic graphics were standard in 2015 shooters; this game opted for stylization"</em></p>
</div>

<div class="practice-prompt">
<p><strong>5. Choose specific visual moments or systems.</strong></p>
<p>Pick screenshots, enemy designs, environmental details, or UI choices that exemplify your larger point about art direction.</p>
</div>

<div class="practice-prompt">
<p><strong>6. Draft your art direction paragraph.</strong></p>
<p>Combine: What's the visual language? Why that choice? How does it guide the player? What context matters?</p>
</div>`
            }
        },

        {
            id: 'sound',
            title: 'Sound & Audio Design',
            description: 'Analyzing music, effects, and sonic storytelling',
            model: {
                title: 'Professional Audio Analysis',
                content: `<p><strong>From a review of *Outer Wilds* (2019):</strong></p>

<p>"The soundtrack to Outer Wilds doesn't accompany the game—it *is* the game's language. Composer Andrew D. Huang created a musical system where melodies evolve as you learn. When you first encounter a space station, its theme is mysterious, fragmented. As you solve its secrets and understand its history, the same theme resolves into clarity. The game trusts you to recognize this without explanation. This isn't typical video game music that plays while you do something else. It's narrative architecture in sound. The absence of music is equally powerful. Floating in your ship between stars, silence isn't emptiness—it's awe. The game has taught you to feel vastness in the absence of sound."</p>

<p><strong>Key moves:</strong> Explains how audio tells story. Describes specific musical techniques. Connects sound to player understanding. Acknowledges what sound reveals about game design.</p>`,
                source: 'Adapted from professional game review conventions'
            },
            explain: {
                title: 'Why This Analysis Works',
                content: `<h3>What the Reviewer Accomplishes:</h3>

<p><strong>1. Positions sound as a primary design system, not decoration.</strong> "The soundtrack doesn't accompany the game—it *is* the game's language." This isn't saying "the music is nice." It's arguing that audio is central to how the game communicates.</p>

<p><strong>2. Explains the specific technique and its effect.</strong> The reviewer doesn't just say "melodies evolve." They explain: you encounter a theme fragmented, then resolved, and *you recognize this without explanation*. This shows the system working.</p>

<p><strong>3. Challenges the typical role of game music.</strong> "This isn't typical video game music that plays while you do something else." The reviewer contrasts what's expected with what this game does—proving the design is intentional.</p>

<p><strong>4. Analyzes silence as a design choice.**</strong> "Floating in your ship between stars, silence isn't emptiness—it's awe." This is sophisticated audio analysis. The reviewer understands that what you *don't* hear is as important as what you do.</p>

<p><strong>5. Connects audio to player learning and emotion.**</strong> "The game has taught you to feel vastness in the absence of sound." The reviewer shows how sound design shapes your emotional and cognitive experience, not just your ears.</p>

<h3>Language & Tone:</h3>

<p>Audio analysis can feel vague ("the music is beautiful"). This reviewer is specific about *what* the music does and *why* it matters functionally to the game.</p>`
            },
            practice: {
                title: 'Practice: Analyze Your Game\'s Audio',
                content: `<h3>Your Turn</h3>

<p>Sound design is often overlooked in game analysis. These prompts will help you listen critically:</p>

<div class="practice-prompt">
<p><strong>1. What's the sonic identity?</strong></p>
<p>Describe the game's approach to sound. Is there a dominant musical style, instrument choice, or audio aesthetic?</p>
<p><em>Example: "Synthesized, minimal soundtrack with sparse effects," "Orchestral score with reactive layer system," "Diegetic sound (sounds from within the world) emphasized over musical score"</em></p>
</div>

<div class="practice-prompt">
<p><strong>2. How does audio communicate information?</strong></p>
<p>What does the game tell you through sound? Danger? Progress? Emotion? Atmosphere?</p>
<p><em>Example: "Enemy proximity is signaled by increasing tempo," "Puzzle solutions unlock new musical layers," "Each location has a distinct sound signature"</em></p>
</div>

<div class="practice-prompt">
<p><strong>3. What's the relationship between music and gameplay?</strong></p>
<p>Does the music react to what you do? Does it guide your attention? Does it create emotion independent of events?</p>
</div>

<div class="practice-prompt">
<p><strong>4. What specific moments exemplify the audio design?</strong></p>
<p>Choose a boss encounter, a quiet moment, a story beat, or a puzzle solution where sound was notably effective or interesting.</p>
</div>

<div class="practice-prompt">
<p><strong>5. Consider the absence of sound.**</strong></p>
<p>Where is sound deliberately withheld? What does silence communicate?</p>
</div>

<div class="practice-prompt">
<p><strong>6. Draft your audio analysis paragraph.**</strong></p>
<p>Combine: What's the sonic identity? How does it communicate? How does it connect to gameplay? What specific moments prove your point?</p>
</div>`
            }
        },

        {
            id: 'verdict',
            title: 'Verdict & Recommendation',
            description: 'Synthesizing analysis into a final judgment',
            model: {
                title: 'Professional Verdict',
                content: `<p><strong>From a review of *A Short Hike* (2019):</strong></p>

<p>"A Short Hike is a game about exploration without pressure, about ambition tempered by contentment. It's a game that respects your time. The mountains you climb yield new vistas. The characters you meet have their own small stories. The ending isn't a climax—it's an arrival. In a medium often defined by escalation, longer playtimes, and 'value for money,' A Short Hike bucks almost every convention. It's a three-hour game that feels complete not because it's rushed, but because it knows exactly what it's saying. Seek this one out if you value games that trust you. Skip it if you need constant challenge or dramatic stakes. But if you've ever felt the pull of a mountain that isn't about reaching the summit—if climbing matters more than arriving—A Short Hike is made for you."</p>

<p><strong>Key moves:</strong> Synthesizes the analysis. Makes a clear recommendation. Acknowledges who the game is for. Doesn't pretend universal appeal.</p>`,
                source: 'Adapted from professional game review conventions'
            },
            explain: {
                title: 'Why This Verdict Works',
                content: `<h3>What the Reviewer Accomplishes:</h3>

<p><strong>1. Synthesizes into a thesis, not a summary.**</strong> The reviewer doesn't recount gameplay, art, and audio separately. They distill them into a single idea: this game is about "exploration without pressure." Everything serves that central theme.</p>

<p><strong>2. Makes a specific recommendation.**</strong> Not "this game is good" but a clear stance: "Seek this one out if..." and "Skip it if..." Professional reviewers are specific about who should play what and why.</p>

<p><strong>3. Contextualizes against industry norms.**</strong> "In a medium often defined by escalation... A Short Hike bucks almost every convention." The reviewer shows why this game matters *in context*. The choice to defy conventions is visible only against what's expected.</p>

<p><strong>4. Validates the design philosophy.**</strong> "It's not rushed, it's purposeful." The reviewer doesn't excuse the game's brevity—they defend the design choice as intentional. This shows critical thinking, not just opinion.</p>

<p><strong>5. Ends with a personal anchor, not generic praise.**</strong> "If you've ever felt the pull of a mountain that isn't about reaching the summit..." The reviewer connects the game to human experience, not industry metrics. This is why readers trust the recommendation.</p>

<h3>Structure of a Strong Verdict:</h3>

<p><strong>1. Restate your thesis in one sentence.</strong> What is this game ultimately about?</p>
<p><strong>2. Briefly acknowledge who it's for and who it's not.</strong> A good recommendation is honest about audience.</p>
<p><strong>3. Defend any unconventional choices.</strong> If the game breaks norms, explain why that matters.</p>
<p><strong>4. End with a resonant conclusion.</strong> Make the reader feel something, not just think something.</p>`
            },
            practice: {
                title: 'Practice: Synthesize Your Verdict',
                content: `<h3>Your Turn</h3>

<p>Your verdict is the hardest part to write because it requires synthesis. Use these prompts to move from analysis to recommendation:</p>

<div class="practice-prompt">
<p><strong>1. What's the one thing this game is fundamentally about?</strong></p>
<p>Not a list of features. The core experience, philosophy, or achievement you've been analyzing.</p>
<p><em>Example: "A game about precision and perseverance," "A meditation on isolation and connection," "An experiment in storytelling through systems"</em></p>
</div>

<div class="practice-prompt">
<p><strong>2. Who is this game for?</strong></p>
<p>Be specific. Not "everyone" or "gamers." What kind of player will appreciate what this game does?</p>
<p><em>Example: "Players who enjoy methodical, puzzle-solving experiences," "Anyone interested in narrative games that don't use cutscenes," "Fans of challenging boss-fight games"</em></p>
</div>

<div class="practice-prompt">
<p><strong>3. Who is it not for?</strong></p>
<p>Honest recommendations acknowledge limitations. What player might not connect with this game?</p>
<p><em>Example: "If you dislike slow-paced exploration," "If you want a story told through dialogue and cutscenes," "If you need constant rewards or progression feedback"</em></p>
</div>

<div class="practice-prompt">
<p><strong>4. What's the most important thing a potential player should know?</strong></p>
<p>One single takeaway that summarizes why you're recommending (or not recommending) this game.</p>
</div>

<div class="practice-prompt">
<p><strong>5. How does this game matter beyond itself?</strong></p>
<p>Does it advance the medium? Challenge conventions? Offer an alternative approach? Tell us why it's worth your and the reader's time.</p>
</div>

<div class="practice-prompt">
<p><strong>6. Draft your verdict paragraph.**</strong></p>
<p>Combine: What's the core of this game? Who should play it? Why does it matter? End with a line that sticks with readers.</p>
</div>`
            }
        }
    ]
};
