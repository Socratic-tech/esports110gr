// ESPORTS 110 Game Review Training – EXPANDED VERSION
// Includes specific examples, non-examples, and detailed guidance
// Model → Explain → Practice loop with "What NOT to Do" sections

const questData = {
    sections: [
        {
            id: 'introduction',
            title: 'Introduction',
            description: 'How professional reviewers frame their analysis',
            
            goodExample: {
                title: 'STRONG EXAMPLE #1: Baldur\'s Gate 3',
                content: `<p><strong>Professional opening:</strong></p>
                
<p>"Baldur's Gate 3 doesn't just revive a beloved franchise—it redefines what a turn-based RPG can achieve when developers treat player freedom as a design first principle. Larian Studios has crafted a game where your choices matter not as branching cutscenes or cosmetic variations, but as genuine shifts in systems, narrative, and mechanical consequences. In an industry crowded with choice-driven games that merely simulate freedom, Baldur's Gate 3 delivers the real thing."</p>

<p><strong>Why this works:</strong></p>
<ul>
<li><strong>Positions the game:</strong> "doesn't just revive"—acknowledges the franchise without nostalgia clouding the review</li>
<li><strong>Makes an evaluative claim:</strong> Not "has choices" but "redefines what an RPG can achieve"—that's an argument</li>
<li><strong>Defines the core:</strong> Explains what "real choice" means: systems respond, consequences are mechanical, not cosmetic</li>
<li><strong>Shows industry knowledge:</strong> "In an industry crowded with choice-driven games that merely simulate freedom"—proves the reviewer knows the landscape</li>
</ul>`
            },

            goodExample2: {
                title: 'STRONG EXAMPLE #2: Outer Wilds',
                content: `<p><strong>Another strong opening:</strong></p>

<p>"Outer Wilds is a mystery wrapped in a puzzle wrapped in a spacesim. It asks a question—who built this system of planets, and why?—and then refuses to show you the answer. Instead, it shows you a world. What you learn comes through exploration, not exposition. The game trusts you to understand. In an age of waypoints and quest markers, this is radical restraint. And it works because the mystery is genuinely worth solving."</p>

<p><strong>What makes this strong:</strong></p>
<ul>
<li><strong>Hooks immediately:</strong> "A mystery wrapped in a puzzle"—poetic and clear</li>
<li><strong>Names the design philosophy:</strong> "Trusts you," "radical restraint"—defines what makes it different</li>
<li><strong>Contextualizes:</strong> "In an age of waypoints and quest markers"—positions it against current trends</li>
<li><strong>Validates the approach:</strong> "It works because the mystery is genuinely worth solving"—explains why restraint matters</li>
</ul>`
            },

            weakExample: {
                title: 'WEAK EXAMPLES: What NOT to Do',
                content: `<p><strong>❌ Weak Example #1: Pure generic praise</strong></p>

<p>"This game is really good. It's fun and has great graphics. I loved playing it. If you like games with good gameplay and cool visuals, you should definitely check it out. The game is amazing."</p>

<p><strong>Problems:</strong></p>
<ul>
<li>Could describe ANY game—no specificity</li>
<li>"Fun," "great," "amazing" tell us nothing substantive</li>
<li>No industry context or analysis</li>
<li>Reads like social media, not professional writing</li>
<li>No clear claim about what makes THIS game matter</li>
</ul>

<p style="margin-top: 1.5rem;"><strong>❌ Weak Example #2: Pure description without argument</strong></p>

<p>"Elden Ring is an action RPG developed by FromSoftware. It was released in 2022. The game features an open world with dungeons and bosses. You can use weapons, magic, and spells. There are many enemies and areas to explore."</p>

<p><strong>Problems:</strong></p>
<ul>
<li>Reads like Wikipedia—just facts, no analysis</li>
<li>No evaluative claim about what's interesting</li>
<li>Doesn't explain why this game matters</li>
<li>Reader doesn't know your perspective or what you'll argue</li>
<li>Missing the actual review: What does THIS game DO that's significant?</li>
</ul>

<p style="margin-top: 1.5rem;"><strong>❌ Weak Example #3: Jargon masquerading as analysis</strong></p>

<p>"The core mechanical paradigms demonstrate a sophisticated synthesis of established convention matrices while introducing novel systemic articulations to distinguish itself within the franchise's increasingly complex design ecosystems."</p>

<p><strong>Problems:</strong></p>
<ul>
<li>Sounds smart but means nothing—jargon without substance</li>
<li>Reader has no idea what game this is or what you actually mean</li>
<li>Assumes reader knows the franchise, studio, history</li>
<li>Professional writing is clear, not obscure</li>
<li>A reader should understand your opening without context</li>
</ul>

<p style="margin-top: 1.5rem;"><strong>❌ Weak Example #4: Vague comparison</strong></p>

<p>"This game is kind of like Dark Souls but different. It's pretty good and I think people would like it. The story is okay and the bosses are challenging."</p>

<p><strong>Problems:</strong></p>
<ul>
<li>"Like Dark Souls but different"—tells nothing about what this game actually IS</li>
<li>"Pretty good," "okay," "challenging"—no meaningful analysis</li>
<li>Hedging ("kind of," "I think") suggests uncertainty, not thoughtfulness</li>
<li>No claim, no evidence, no purpose</li>
</ul>`
            },
            
            explain: {
                title: 'Why This Opening Works',
                content: `<h3>What professional openings accomplish:</h3>

<p><strong>1. Position the game in context.</strong> Where does it fit? What genre, franchise, or design tradition does it belong to? This gives readers a starting point for understanding.</p>

<p><strong>2. Make an evaluative claim immediately.</strong> Not "this game has X feature" but "this game does something significant BECAUSE of how it uses X." The opening should argue something, not just describe something.</p>

<p><strong>3. Ground claims in design logic.</strong> "This game is good" means nothing. "This game uses a restricted mechanic system to create precise difficulty curves" explains WHY it works.</p>

<p><strong>4. Acknowledge the industry landscape.</strong> Show that you know what else exists. This proves your analysis isn't naive and makes your claims more credible.</p>

<p><strong>5. Set expectations for what follows.</strong> By opening with design philosophy (not story), you signal "this review analyzes systems." Readers know what to expect.</p>

<h3>The formula for a strong opening:</h3>

<p><strong>[CONTEXT] + [EVALUATIVE CLAIM] + [WHY IT MATTERS] + [INDUSTRY KNOWLEDGE]</strong></p>

<p>Example structure:</p>
<p>"[Game] + [doesn't just X—it redefines Y] + [because Z] + [in an industry where...]"</p>`
            },

            practice: {
                title: 'Practice: Draft Your Opening',
                content: `<h3>Your Turn</h3>

<p>Use these prompts to develop a strong opening for your review:</p>

<div class="practice-prompt">
<p><strong>1. What's your core argument?</strong></p>
<p>In one sentence: What is this game doing that's significant? (Not "it's fun." What does it MEAN or ACCOMPLISH?)</p>
<p><em>Strong: "This game innovates on formula by..." or "This game challenges convention by..." or "This game represents a moment when..."</em></p>
<p><em>Weak: "This game is good." or "This game is fun to play." or "I really liked this game."</em></p>
</div>

<div class="practice-prompt">
<p><strong>2. Where does it fit?</strong></p>
<p>How does this game relate to its genre, franchise, or industry moment? What context does a reader need?</p>
<p><em>Strong: "First entry in franchise attempting X approach," "Subverts genre's typical Y," "Arrives at moment when industry is moving toward Z"</em></p>
<p><em>Weak: "It's a game," "Part of a well-known franchise," "Came out in 2023"</em></p>
</div>

<div class="practice-prompt">
<p><strong>3. What evidence will anchor your claim?</strong></p>
<p>What will you point to as proof? Mechanical systems? Narrative choices? Art style? Audio design?</p>
<p><em>Strong: "Movement mechanics that reward experimentation," "A story decision that changes the entire game structure," "Visual palette that communicates player agency"</em></p>
</div>

<div class="practice-prompt">
<p><strong>4. Draft your opening paragraph.</strong></p>
<p>Write 2–3 sentences that: (1) position the game, (2) make your core claim, (3) hint at evidence.</p>
<p><em>Aim for professional tone. Show you understand the game's context and what makes your analysis relevant. No vague praise.</em></p>
</div>`
            }
        },

        {
            id: 'gameplay',
            title: 'Gameplay',
            description: 'Analyzing mechanics, challenge, and player agency',
            
            goodExample: {
                title: 'STRONG EXAMPLE #1: Hollow Knight',
                content: `<p><strong>Professional gameplay analysis:</strong></p>

<p>"Hollow Knight's combat is deliberately restrictive. You have one attack, one dodge, and a handful of special abilities. Against modern action games that pile on combo trees and upgrade systems, Hollow Knight's restraint feels radical. But this isn't minimalism for its own sake—it's the foundation for precisely calibrated difficulty. The boss fights demand mastery of these core tools. You'll lose a hundred times before you defeat Radiance not because the game is unfair, but because it's teaching you that your limitations are actually your power. Every dodge you learn, every tell you recognize, is progress. The game understands: restriction creates clarity. And clarity creates mastery."</p>

<p><strong>Why this works:</strong></p>
<ul>
<li><strong>Describes mechanics precisely:</strong> Not "hard combat," but specific: "one attack, one dodge, handful of special abilities"</li>
<li><strong>Contextualizes within industry:</strong> "Against modern action games that pile on combo trees"—shows the reviewer knows the landscape</li>
<li><strong>Explains WHY the design exists:</strong> Not just "combat is restrictive," but "restraint is foundation for precisely calibrated difficulty"</li>
<li><strong>Connects systems to player learning:</strong> Shows how mechanical design shapes understanding and growth</li>
<li><strong>Distinguishes difficulty from unfairness:</strong> "Not unfair, but teaching you that limitations are power"</li>
</ul>`
            },

            goodExample2: {
                title: 'STRONG EXAMPLE #2: Portal 2',
                content: `<p><strong>Another strong gameplay analysis:</strong></p>

<p>"Portal 2's core mechanic is deceptively simple: two portals let you move through space in impossible ways. But the game isn't really about portals. It's about teaching your brain to think in portals. Early puzzles ease you in—move through one portal, solve. Mid-game, puzzles stack mechanics: portals plus momentum plus energy spheres plus light bridges, each adding a new dimension to problem-solving. Late-game, you're solving puzzles that would have seemed impossible at the start, not because you memorized rules, but because your brain has been rewired to see space differently. The design escalates cognitive demand while maintaining the illusion that the core mechanic remains unchanged. It's masterclass in mechanical tutorial design."</p>

<p><strong>Why this works:</strong></p>
<ul>
<li><strong>Understands the core gameplay:</strong> Not "portals work," but "portals teach you to think differently"</li>
<li><strong>Shows progression through examples:</strong> Early/mid/late game structure demonstrates how difficulty escalates</li>
<li><strong>Analyzes learning curve:</strong> Explains HOW the game teaches without saying "the tutorials are good"</li>
<li><strong>Uses sophisticated language precisely:</strong> "Mechanical tutorial design" means something specific</li>
</ul>`
            },

            weakExample: {
                title: 'WEAK EXAMPLES: What NOT to Do',
                content: `<p><strong>❌ Weak Example #1: Vague description</strong></p>

<p>"The gameplay in this game is really good. You fight enemies and solve puzzles. The combat feels smooth and the difficulty is fair. There are lots of attacks you can use and the bosses are challenging but not too hard. Overall the gameplay is fun and keeps you engaged."</p>

<p><strong>Problems:</strong></p>
<ul>
<li>Could describe nearly any action game—no specificity</li>
<li>"Smooth," "fair," "fun," "engaging"—feelings, not analysis</li>
<li>No explanation of HOW combat works or WHY it matters</li>
<li>No evidence or examples</li>
<li>Doesn't show understanding of game design principles</li>
</ul>

<p style="margin-top: 1.5rem;"><strong>❌ Weak Example #2: List-making instead of analysis</strong></p>

<p>"The game has these mechanics: jump, attack, dodge, special abilities, combo system, upgrade trees, boss battles, normal enemies, puzzles, and collectibles. You can use different weapons and armor. There are different difficulty settings. The combat is turn-based with a timing element. You progress through levels and gain experience points."</p>

<p><strong>Problems:</strong></p>
<ul>
<li>Reads like a feature list, not analysis</li>
<li>No understanding of how mechanics interact or create experience</li>
<li>Doesn't explain what makes this game's design interesting</li>
<li>No evidence of having thought critically about the mechanics</li>
</ul>

<p style="margin-top: 1.5rem;"><strong>❌ Weak Example #3: Preference instead of analysis</strong></p>

<p>"I really liked the combat. It was fun and made me want to keep playing. The boss fights were my favorite part. I didn't like the platforming sections though—they were annoying. Overall I had a good time and the gameplay was enjoyable."</p>

<p><strong>Problems:</strong></p>
<ul>
<li>All personal preference ("I liked," "my favorite," "I didn't like")</li>
<li>No explanation of WHY anything worked or didn't work</li>
<li>Could never convince someone who disagrees with you</li>
<li>Doesn't demonstrate understanding of game design</li>
</ul>

<p style="margin-top: 1.5rem;"><strong>❌ Weak Example #4: Misunderstanding difficulty vs. design</strong></p>

<p>"The game is really hard. Some bosses one-shot you and it's unfair. The difficulty spike in the second area is brutal and many players will probably quit. I died a lot which means the game doesn't balance difficulty well. Hard games can be good but this one just seems poorly designed."</p>

<p><strong>Problems:</strong></p>
<ul>
<li>Confuses "difficult" with "bad design"</li>
<li>Doesn't distinguish between punishment and learning</li>
<li>Assumes your experience = bad design (maybe it's designed to be challenging)</li>
<li>No analysis of whether difficulty serves a purpose</li>
</ul>`
            },
            
            explain: {
                title: 'Why This Analysis Works',
                content: `<h3>What professional gameplay analysis accomplishes:</h3>

<p><strong>1. Describes mechanics precisely, not vaguely.</strong> Not "the combat is good." Specific: "one attack, one dodge, a handful of abilities." This lets readers who've played the game recognize themselves and lets readers who haven't understand the constraints.</p>

<p><strong>2. Contextualizes within the industry.</strong> Show you know what other games do. This proves your analysis isn't naive and makes your claims credible.</p>

<p><strong>3. Explains the LOGIC of the design.</strong> Not "combat is restrictive" but "restriction is the foundation for precisely calibrated difficulty." This shows you understand WHY designers made these choices.</p>

<p><strong>4. Connects mechanics to player experience.</strong> How does the design shape what you learn? How does it make you feel? Show how systems create meaning.</p>

<p><strong>5. Distinguishes difficulty from unfairness.</strong> A hard game isn't bad design. A game that punishes without teaching is. Show you understand the difference.</p>

<h3>The key insight:</h3>

<p>Professional reviewers don't describe mechanics. They analyze what mechanics ACCOMPLISH—how they shape understanding, create challenge, build skill, express theme, or teach the player something about the world or themselves.</p>`
            },

            practice: {
                title: 'Practice: Analyze Your Game\'s Mechanics',
                content: `<h3>Your Turn</h3>

<div class="practice-prompt">
<p><strong>1. What are the core mechanics? (Be specific.)</strong></p>
<p><em>Weak: "You jump and attack"</em><br>
<em>Strong: "Move with limited directional control, attack with a single button that builds power meter, dodge with variable timing window"</em></p>
</div>

<div class="practice-prompt">
<p><strong>2. What does the game ask the player to master?</strong></p>
<p><em>Weak: "The combat is hard"</em><br>
<em>Strong: "Pattern recognition—boss attacks follow telegraphed sequences that reward reading tells and punish panic rolling"</em></p>
</div>

<div class="practice-prompt">
<p><strong>3. How does design create difficulty?</strong></p>
<p><em>Weak: "The game is tough"</em><br>
<em>Strong: "Difficulty comes from resource scarcity (limited health, limited special abilities) forcing tactical decisions, not from artificial enemy bullet-spam"</em></p>
</div>

<div class="practice-prompt">
<p><strong>4. What comparison contextualizes this?</strong></p>
<p><em>Example: "Unlike typical roguelikes that rely on randomness, this game uses hand-crafted runs" or "Similar to Dark Souls, but..."</em></p>
</div>

<div class="practice-prompt">
<p><strong>5. Choose ONE representative moment.</strong></p>
<p>Pick a specific boss, level, or mechanic that exemplifies your analysis. This is what you'll show in screenshots/video.</p>
</div>

<div class="practice-prompt">
<p><strong>6. Draft your gameplay paragraph.</strong></p>
<p>Structure: [CORE MECHANIC] + [HOW IT WORKS] + [WHY IT MATTERS] + [SPECIFIC EXAMPLE]</p>
</div>`
            }
        },

        {
            id: 'graphics',
            title: 'Graphics & Art Direction',
            description: 'Analyzing visual design and aesthetic choices',
            
            goodExample: {
                title: 'STRONG EXAMPLE #1: Return of the Obra Dinn',
                content: `<p><strong>Professional art direction analysis:</strong></p>

<p>"Every pixel in Return of the Obra Dinn serves the game's central mystery. By committing entirely to a monochrome, 1-bit aesthetic—the visual language of a 1980s Macintosh—designer Lucas Pope creates a world that feels both nostalgic and alien. The limitation isn't a stylistic choice that could be swapped out; it's fundamental to how the game tells its story. On a modern screen, this looks almost anachronistic. That anachronism is intentional. When you're deciphering a maritime mystery spanning centuries, visual simplification becomes a superpower. You notice what matters: posture, positioning, costume detail, environmental clues. The game's commitment to monochrome teaches your eye what to see. Color would distract. Monochrome directs."</p>

<p><strong>Why this works:</strong></p>
<ul>
<li><strong>Names the specific aesthetic and its source:</strong> Not just "pixel art," but "1-bit aesthetic, the visual language of a 1980s Macintosh"</li>
<li><strong>Argues form serves function:</strong> "The limitation isn't stylistic choice, it's fundamental to the story"</li>
<li><strong>Addresses potential criticism:</strong> "That anachronism is intentional"—predicts reader reaction and reframes it</li>
<li><strong>Connects visuals to gameplay:</strong> Shows how aesthetic affects what the player notices and understands</li>
<li><strong>Uses specific examples:</strong> "Posture, positioning, costume detail"—concrete proof the system works</li>
</ul>`
            },

            goodExample2: {
                title: 'STRONG EXAMPLE #2: Control (Remedy)',
                content: `<p><strong>Another strong visual analysis:</strong></p>

<p>"Control's Brutalist architecture isn't set dressing. It's the visual language of the game's supernatural authority structure. The Oldest House—the game's primary location—uses geometric severity, imposing concrete corridors, and impossible scale to make players feel small within an institution larger than understanding. This isn't immersive aesthetics for their own sake. Every architectural choice reinforces the game's themes: bureaucratic control, inhuman power, systems beyond comprehension. The color palette is intentionally muted—grays, blacks, cold blues—making the occasional vivid geometric portal feel like a breach in reality itself. By the game's visual logic, bright color = anomaly = danger. And the game understands that architecture teaches faster than exposition. You know the Oldest House is dangerous and incomprehensible not from cutscenes but from how its spaces make you feel."</p>

<p><strong>Why this works:</strong></p>
<ul>
<li><strong>Architecture analyzed as narrative device:</strong> Not just describing, but explaining how space tells story</li>
<li><strong>Visual logic connected to theme:</strong> Shows how every choice reinforces meaning</li>
<li><strong>Color analyzed functionally:</strong> Explains what color palette accomplishes (muted = normal, bright = anomaly)</li>
<li><strong>Shows visual communication:</strong> Demonstrates that atmosphere teaches without exposition</li>
</ul>`
            },

            weakExample: {
                title: 'WEAK EXAMPLES: What NOT to Do',
                content: `<p><strong>❌ Weak Example #1: Generic praise</strong></p>

<p>"The graphics are really beautiful. The game looks amazing and has great visuals. The characters are detailed and the environments look good. I really enjoyed looking at the game. The art style is cool and the colors are pretty. Overall the graphics are excellent and make the game fun to play."</p>

<p><strong>Problems:</strong></p>
<ul>
<li>"Beautiful," "amazing," "great," "pretty," "cool"—feelings, not analysis</li>
<li>Tells us nothing about what the game's visuals DO</li>
<li>Could describe any well-made game</li>
<li>Doesn't show understanding of how visuals serve the game</li>
</ul>

<p style="margin-top: 1.5rem;"><strong>❌ Weak Example #2: Technical description without purpose</strong></p>

<p>"The game uses a 1920x1080 resolution with a 60 FPS frame rate. The graphics have high polygon counts and detailed textures. The lighting engine uses dynamic shadows. The post-processing effects include bloom and chromatic aberration. The character models have 4K textures and realistic proportions."</p>

<p><strong>Problems:</strong></p>
<ul>
<li>Reads like a tech spec sheet</li>
<li>Doesn't explain what any of this MEANS for the game</li>
<li>No analysis of how visuals serve gameplay or story</li>
<li>Technical data ≠ critical analysis</li>
</ul>

<p style="margin-top: 1.5rem;"><strong>❌ Weak Example #3: Personal taste instead of analysis</strong></p>

<p>"The art style isn't my favorite. I think the character designs look weird and the environments are boring. The color palette is too dark and depressing. I wish the game had brighter colors and more interesting visual design. The graphics made me not want to play."</p>

<p><strong>Problems:</strong></p>
<ul>
<li>Pure personal preference—not analysis</li>
<li>Doesn't explain why the design exists or what it accomplishes</li>
<li>Assumes your taste = bad design</li>
<li>Doesn't understand visual language or intent</li>
</ul>

<p style="margin-top: 1.5rem;"><strong>❌ Weak Example #4: Missing the point of stylization</strong></p>

<p>"The graphics aren't realistic. The characters look like cartoons and the environments don't look like real places. The colors are too bright and saturated. For a serious game about important themes, the art style seems inappropriate. A more realistic visual approach would have been better."</p>

<p><strong>Problems:</strong></p>
<ul>
<li>Assumes "realistic" = good</li>
<li>Doesn't understand that stylization makes meaning</li>
<li>Confuses personal aesthetic preference with design analysis</li>
<li>Misses that the stylization probably serves the theme intentionally</li>
</ul>`
            },
            
            explain: {
                title: 'Why This Analysis Works',
                content: `<h3>What professional art analysis accomplishes:</h3>

<p><strong>1. Names the specific aesthetic and its context.</strong> Not just "pixel art," but what tradition it comes from and what that means. This shows deep knowledge.</p>

<p><strong>2. Argues form serves function.</strong> Don't just describe the art. Show what it accomplishes. Why THIS aesthetic for THIS game?</p>

<p><strong>3. Understands visual communication.</strong> How do colors guide attention? How does scale affect emotion? How does visual style shape understanding?</p>

<p><strong>4. Connects visuals to gameplay and narrative.</strong> Show how aesthetics aren't decoration—they're a design system that teaches and communicates.</p>

<p><strong>5. Evaluates stylistic choices against intent.</strong> A "ugly" art style might be intentional. Show you understand why it exists.</p>

<h3>The key insight:</h3>

<p>Professional reviewers don't describe how things look. They analyze what visual design COMMUNICATES and ACCOMPLISHES—how it shapes understanding, creates atmosphere, guides attention, or reinforces theme.</p>`
            },

            practice: {
                title: 'Practice: Analyze Your Game\'s Visuals',
                content: `<h3>Your Turn</h3>

<div class="practice-prompt">
<p><strong>1. What's the dominant visual language?</strong></p>
<p><em>Weak: "The game has good graphics"</em><br>
<em>Strong: "Cel-shading with bold outlines, bright primaries, exaggerated character proportions that evoke comic book aesthetics"</em></p>
</div>

<div class="practice-prompt">
<p><strong>2. Why that choice? What does it accomplish?</strong></p>
<p><em>Weak: "The art style looks cool"</em><br>
<em>Strong: "The cel-shading makes characters feel like animated storyboard panels, supporting a narrative that blends dark humor with genuine violence"</em></p>
</div>

<div class="practice-prompt">
<p><strong>3. What does visual design teach the player?</strong></p>
<p><em>Example: "Enemy silhouettes are always high-contrast, so you spot threats in chaos. Interactive objects shine subtly, teaching you to scan for solutions."</em></p>
</div>

<div class="practice-prompt">
<p><strong>4. How does this fit the genre or era?</strong></p>
<p><em>Example: "Most 2020 shooters are photorealistic. This game opted for stylization, making itself visually memorable in a crowded genre."</em></p>
</div>

<div class="practice-prompt">
<p><strong>5. Choose specific visual moments or details.</strong></p>
<p>Pick screenshots, color choices, character designs, or environmental details that exemplify your analysis.</p>
</div>

<div class="practice-prompt">
<p><strong>6. Draft your art analysis paragraph.</strong></p>
<p>Structure: [AESTHETIC] + [WHY THIS CHOICE] + [HOW IT GUIDES PLAYER] + [SPECIFIC EXAMPLE]</p>
</div>`
            }
        },

        {
            id: 'sound',
            title: 'Sound & Audio Design',
            description: 'Analyzing music, effects, and sonic storytelling',
            
            goodExample: {
                title: 'STRONG EXAMPLE #1: Outer Wilds',
                content: `<p><strong>Professional audio analysis:</strong></p>

<p>"The soundtrack to Outer Wilds doesn't accompany the game—it IS the game's language. Composer Andrew D. Huang created a musical system where melodies evolve as you learn. When you first encounter a space station, its theme is mysterious, fragmented, unsettling. As you solve its secrets and understand its history, the same theme resolves into clarity. The resolution feels like understanding itself made audible. The game trusts you to recognize this without explanation. This isn't typical video game music that plays while you do something else. It's narrative architecture in sound. The absence of music is equally powerful. Floating in your ship between stars, silence isn't emptiness—it's awe. Silence is the game saying 'this vastness is beyond description.' The game has taught you to feel meaning in absence."</p>

<p><strong>Why this works:</strong></p>
<ul>
<li><strong>Sound analyzed as primary system:</strong> Not decoration, but language and narrative</li>
<li><strong>Specific musical technique explained:</strong> Shows how theme resolution teaches understanding</li>
<li><strong>Silence analyzed:</strong> Shows understanding that what you DON'T hear matters</li>
<li><strong>Sound connected to player learning:</strong> Explains how audio shapes understanding</li>
<li><strong>Functional analysis:</strong> Shows how each choice serves the game's purpose</li>
</ul>`
            },

            goodExample2: {
                title: 'STRONG EXAMPLE #2: DOOM (2016)',
                content: `<p><strong>Another strong audio analysis:</strong></p>

<p>"DOOM's sound design is aggressive and immediate. Heavy synthesizers cut through the mix, percussion hits with visceral impact, and the bass shakes your chest. But this aggressiveness isn't chaotic—it's rhythmic. The music locks to your combat actions. Weapon shots sync to percussion hits. Glory kill animations peak at musical crescendos. The sound design doesn't respond to what you do—it ANTICIPATES what you'll do. This creates a feedback loop: the music drives your aggression, your actions confirm the beat, and the sound reinforces your sense of power. Mechanically, DOOM is about momentum and aggression. Sonically, the game tells you the same thing through every bass hit and synthesizer swell. Few games understand that sound design can articulate mechanical philosophy as clearly as systems can."</p>

<p><strong>Why this works:</strong></p>
<ul>
<li><strong>Describes sonic approach specifically:</strong> Names the instruments and emotional effect</li>
<li><strong>Analyzes music-mechanics relationship:</strong> Shows how rhythm locks to gameplay</li>
<li><strong>Explains the feedback loop:</strong> Demonstrates how sound reinforces mechanical design</li>
<li><strong>Connects to game philosophy:</strong> Shows how audio articulates the game's design intent</li>
</ul>`
            },

            weakExample: {
                title: 'WEAK EXAMPLES: What NOT to Do',
                content: `<p><strong>❌ Weak Example #1: Generic emotional description</strong></p>

<p>"The music is really good and makes you feel epic. The sound effects are cool and add to the atmosphere. The game's audio is immersive and emotional. I really liked the soundtrack. The songs are catchy and the sound design is amazing. Overall the audio makes the game more fun and engaging."</p>

<p><strong>Problems:</strong></p>
<ul>
<li>"Good," "epic," "cool," "amazing"—feelings, not analysis</li>
<li>"Catchy songs" tells us nothing about what the audio DOES</li>
<li>Could describe any game with decent audio</li>
<li>Doesn't show understanding of audio as design system</li>
</ul>

<p style="margin-top: 1.5rem;"><strong>❌ Weak Example #2: Surface-level description</strong></p>

<p>"The game has orchestral music with strings and brass. There are sound effects for footsteps, sword hits, and magic spells. The composer is John Williams and he's really famous. The soundtrack has 50 tracks. The game also has voice acting for characters. The audio quality is very high and clear."</p>

<p><strong>Problems:</strong></p>
<ul>
<li>Just listing facts about the audio</li>
<li>Doesn't explain what the audio ACCOMPLISHES</li>
<li>Mentions composer as if that explains quality (it doesn't)</li>
<li>Technical specs ≠ analysis</li>
<li>No understanding of how audio serves gameplay</li>
</ul>

<p style="margin-top: 1.5rem;"><strong>❌ Weak Example #3: Personal taste as analysis</strong></p>

<p>"The music isn't my style. I don't really like orchestral music and the soundtrack got boring. Some of the sound effects are too loud. The voice acting was annoying and the dialogue was repetitive. I muted the music sometimes because it wasn't interesting."</p>

<p><strong>Problems:</strong></p>
<ul>
<li>Pure personal preference—not analysis</li>
<li>Doesn't explain why design exists or what it accomplishes</li>
<li>Assumes your taste = bad design</li>
<li>No understanding of audio as functional system</li>
</ul>

<p style="margin-top: 1.5rem;"><strong>❌ Weak Example #4: Ignoring audio entirely</strong></p>

<p>"The game's audio is fine. There's a soundtrack and sound effects. The music is there. Voice acting exists. I didn't really pay attention to the audio much."</p>

<p><strong>Problems:</strong></p>
<ul>
<li>Dismissive of an entire design system</li>
<li>Shows lack of engagement with the game</li>
<li>Proves you didn't listen critically</li>
<li>Missing an entire dimension of analysis</li>
</ul>`
            },
            
            explain: {
                title: 'Why This Analysis Works',
                content: `<h3>What professional audio analysis accomplishes:</h3>

<p><strong>1. Treats sound as a design system, not decoration.</strong> Audio isn't background. It tells story, teaches mechanics, creates emotion, and communicates meaning.</p>

<p><strong>2. Analyzes specific techniques and their effects.</strong> Not "the music is beautiful" but "the main theme uses ascending intervals that resolve into clarity, making understanding audible."</p>

<p><strong>3. Connects sound to gameplay and narrative.</strong> Show how audio reinforces mechanics, shapes emotion, or advances story.</p>

<p><strong>4. Understands silence as design choice.</strong> What you DON'T hear is as important as what you do.</p>

<p><strong>5. Evaluates audio against game's purpose.</strong> Does the sound design serve the game's design philosophy? Does it work?</p>

<h3>The key insight:</h3>

<p>Audio is the most underanalyzed element of games. Professional reviewers treat it as a primary design system that communicates meaning through rhythm, melody, timbre, and silence.</p>`
            },

            practice: {
                title: 'Practice: Analyze Your Game\'s Audio',
                content: `<h3>Your Turn</h3>

<div class="practice-prompt">
<p><strong>1. What's the sonic identity?</strong></p>
<p><em>Weak: "The music is orchestral"</em><br>
<em>Strong: "Synthesized, minimalist soundtrack with sparse percussion and long ambient textures that emphasize isolation and vastness"</em></p>
</div>

<div class="practice-prompt">
<p><strong>2. How does audio communicate information?</strong></p>
<p><em>Example: "Enemy proximity is signaled by increasing tempo and lower register. Puzzle solutions unlock new musical layers, audibly confirming your understanding."</em></p>
</div>

<div class="practice-prompt">
<p><strong>3. What's the relationship between music and gameplay?</strong></p>
<p><em>Does music react to you? Guide attention? Create emotion? Show how audio and mechanics work together.</em></p>
</div>

<div class="practice-prompt">
<p><strong>4. What specific audio moments exemplify your analysis?</strong></p>
<p>Pick a boss theme, a quiet moment, a story beat, or a sound effect that was notably effective.</p>
</div>

<div class="practice-prompt">
<p><strong>5. Analyze silence deliberately.</strong></p>
<p><em>Where does the game withhold sound? What does silence communicate?</em></p>
</div>

<div class="practice-prompt">
<p><strong>6. Draft your audio analysis paragraph.</strong></p>
<p>Structure: [SONIC IDENTITY] + [HOW IT COMMUNICATES] + [GAMEPLAY CONNECTION] + [SPECIFIC MOMENT]</p>
</div>`
            }
        },

        {
            id: 'verdict',
            title: 'Verdict & Recommendation',
            description: 'Synthesizing analysis into a final judgment',
            
            goodExample: {
                title: 'STRONG EXAMPLE #1: A Short Hike',
                content: `<p><strong>Professional verdict:</strong></p>

<p>"A Short Hike is a game about exploration without pressure, about ambition tempered by contentment. It's a game that respects your time. The mountains you climb yield new vistas. The characters you meet have their own small stories. The ending isn't a climax—it's an arrival. In a medium often defined by escalation, longer playtimes, and 'value for money,' A Short Hike bucks almost every convention. It's a three-hour game that feels complete not because it's rushed, but because it knows exactly what it's saying and no more. Seek this one out if you value games that trust you to find meaning in small moments. Skip it if you need constant challenge, dramatic stakes, or dozens of hours of content. But if you've ever felt the pull of a mountain that isn't about reaching the summit—if climbing matters more than arriving—A Short Hike is made for you."</p>

<p><strong>Why this works:</strong></p>
<ul>
<li><strong>Synthesizes into a central thesis:</strong> Not separate sections, but one core idea: "exploration without pressure"</li>
<li><strong>Makes specific recommendations:</strong> "Seek this out if..." and "Skip if..."—clear about audience</li>
<li><strong>Contextualizes against convention:</strong> Shows why breaking norms matters</li>
<li><strong>Validates unconventional choices:</strong> Explains why brevity is a strength, not a limitation</li>
<li><strong>Ends with emotional resonance:</strong> Final line connects to human experience, not industry metrics</li>
</ul>`
            },

            goodExample2: {
                title: 'STRONG EXAMPLE #2: Elden Ring',
                content: `<p><strong>Another strong verdict:</strong></p>

<p>"Elden Ring succeeds because it trusts difficulty to tell story. Every boss you defeat teaches you something about the game world—about ambition, sacrifice, and the cost of power. The open world structure could have created bloat, but instead creates choice: you can face challenges in any order, retreat and train, approach from unexpected angles. This flexibility transforms frustration into agency. The game respects your time by letting you skip what doesn't interest you, revisit what captivates you, and move at your own pace. This isn't a game for everyone—it demands patience, perseverance, and willingness to fail repeatedly. But for players who find meaning in challenge, who see difficulty as communication from the designer, Elden Ring is essential. It's a game that understands that the hardest battles shape us most."</p>

<p><strong>Why this works:</strong></p>
<ul>
<li><strong>Connects all analysis to one thesis:</strong> "Difficulty tells story"</li>
<li><strong>Honest about limitations:</strong> "Not for everyone," "demands patience"</li>
<li><strong>Specific about audience:</strong> Shows exactly who will connect with this game</li>
<li><strong>Defends unconventional design:</strong> Explains why difficulty is a feature, not a bug</li>
</ul>`
            },

            weakExample: {
                title: 'WEAK EXAMPLES: What NOT to Do',
                content: `<p><strong>❌ Weak Example #1: Generic conclusion</strong></p>

<p>"In conclusion, this is a really good game. I had a lot of fun playing it and I recommend it to everyone. The gameplay, graphics, and audio are all great. If you like games, you should definitely try this one. It's a great game and I give it a thumbs up."</p>

<p><strong>Problems:</strong></p>
<ul>
<li>"Really good," "great," "recommend to everyone"—no specificity</li>
<li>Could describe any game</li>
<li>No synthesis of analysis</li>
<li>Reads like a social media review, not professional writing</li>
</ul>

<p style="margin-top: 1.5rem;"><strong>❌ Weak Example #2: Hedging instead of judgment</strong></p>

<p>"This game is kind of good? I think people might like it, but maybe not. It's pretty interesting but I'm not sure. Some players might enjoy it but others might not. Overall it's an okay game I guess. I don't really know if I would recommend it or not."</p>

<p><strong>Problems:</strong></p>
<ul>
<li>Complete lack of conviction</li>
<li>Hedging language ("kind of," "I think," "might," "maybe") suggests no actual analysis</li>
<li>No clear recommendation</li>
<li>Sounds uncertain about your own analysis</li>
</ul>

<p style="margin-top: 1.5rem;"><strong>❌ Weak Example #3: Recapping instead of synthesizing</strong></p>

<p>"So the gameplay was good and the graphics were pretty and the music was nice and the story was okay. The bosses were hard but fair and the levels were well-designed. The voice acting was decent. There were some bugs but overall it was a fun experience. I would say it's a 7 out of 10 game that is worth playing."</p>

<p><strong>Problems:</strong></p>
<ul>
<li>Just recaps each section—doesn't synthesize</li>
<li>No central thesis tying everything together</li>
<li>Contradictory signals ("good gameplay" then "7/10") suggest no real judgment</li>
<li>Numerical rating without context is meaningless</li>
</ul>

<p style="margin-top: 1.5rem;"><strong>❌ Weak Example #4: Dismissive judgment</strong></p>

<p>"This game isn't for serious gamers. It's too easy and the story is boring. If you're a hardcore player with actual skill, you should skip this. It's a casual game for casual players. It's not worth the time if you actually care about challenge. Most people won't find it interesting."</p>

<p><strong>Problems:</strong></p>
<ul>
<li>Gatekeeping ("hardcore" vs. "casual")</li>
<li>Assumes your taste = universal truth</li>
<li>Dismisses entire player categories</li>
<li>Lacks respect for different preferences</li>
<li>Doesn't understand that games can be designed for different audiences</li>
</ul>`
            },
            
            explain: {
                title: 'Why This Verdict Works',
                content: `<h3>What professional verdicts accomplish:</h3>

<p><strong>1. Synthesize into a thesis.</strong> Don't recap sections. Distill everything into one central idea about what this game IS.</p>

<p><strong>2. Make a specific recommendation.</strong> Not "everyone should play this." Instead: "If you value X, seek this out. If you need Y, skip it."</p>

<p><strong>3. Contextualize against convention.</strong> Show why design choices matter in context. What does this game do that's rare or important?</p>

<p><strong>4. Validate unconventional design.</strong> If the game breaks norms, defend why. Show you understand the philosophy.</p>

<p><strong>5. End with something readers remember.</strong> Not a score. Something that sticks—a line that resonates, a insight that matters.</p>

<h3>Structure of a strong verdict:</h3>

<p><strong>1. State your thesis in one sentence:</strong> What is this game fundamentally about?</p>
<p><strong>2. Acknowledge who it's for and who it isn't:</strong> Specific audiences, not universal appeal</p>
<p><strong>3. Defend unconventional choices:</strong> If the game breaks norms, explain why</p>
<p><strong>4. Explain why it matters:</strong> Beyond entertainment—what does this game accomplish?</p>
<p><strong>5. End with a memorable line:</strong> Something that makes readers feel the review, not just think it</p>`
            },

            practice: {
                title: 'Practice: Synthesize Your Verdict',
                content: `<h3>Your Turn</h3>

<div class="practice-prompt">
<p><strong>1. What's the ONE thing this game is about?</strong></p>
<p><em>Weak: "It has gameplay, graphics, sound"</em><br>
<em>Strong: "A game about precision and perseverance" or "A meditation on isolation" or "An experiment in emergent narrative"</em></p>
</div>

<div class="practice-prompt">
<p><strong>2. Who is this game made for?</strong></p>
<p><em>Weak: "Everyone should play it"</em><br>
<em>Strong: "Players who enjoy methodical puzzle-solving" or "Anyone interested in experimental narrative" or "Fans of precise, challenging boss encounters"</em></p>
</div>

<div class="practice-prompt">
<p><strong>3. Who is it NOT for? (Be honest.)</strong></p>
<p><em>Example: "If you need constant rewards," "If you want story told through dialogue," "If you need accessibility features"</em></p>
</div>

<div class="practice-prompt">
<p><strong>4. What's the most important thing readers should know?</strong></p>
<p>One sentence that summarizes why you're recommending (or not) this game.</p>
</div>

<div class="practice-prompt">
<p><strong>5. How does this game matter beyond itself?</strong></p>
<p><em>Does it advance the medium? Challenge conventions? Offer an alternative? Why does it matter?</em></p>
</div>

<div class="practice-prompt">
<p><strong>6. Draft your verdict paragraph.</strong></p>
<p>Structure: [CORE THESIS] + [WHO IT'S FOR] + [WHO IT'S NOT FOR] + [WHY IT MATTERS] + [MEMORABLE LINE]</p>
</div>`
            }
        }
    ]
};
