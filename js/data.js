/* --------------------------------------------------------------
   Review Studio 2003 Training Quest Data
   Contains all module content, excerpts & instructions
-------------------------------------------------------------- */

const MODULES = [
    {
        id: "intro",
        name: "Introduction",
        briefing: {
            title: "MODULE: INTRODUCTION — ROLE: Junior Reviewer",
            text: `
                Professional reviewers use the introduction to establish critical focus.
                The introduction is not a plot summary—it's a positioning statement that
                tells the reader what this review will evaluate and why.
                
                Your objective in this module is to understand how professional writers
                frame their perspective and prepare the reader for the analysis ahead.
            `
        },
        analysisLab: {
            title: "ANALYSIS LAB — Introduction",
            excerptLabel: "Captured professional review excerpt (archived for training purposes)",
            excerpt: `
                “From its opening minutes, *Sky Sentinel Omega* signals its intention:
                fast, tactical engagements supported by a clean visual language that
                never obscures player decision-making. The question isn’t whether the
                game is impressive — it’s whether its systems hold up after the first
                wave of spectacle.”
            `,
            explanation: `
                This introduction works because it sets a clear evaluative focus:
                <strong>systems durability, tactical clarity, and sustained design intent</strong>.
                It does not summarize the plot or list features. Instead, it frames the
                criteria the reviewer will analyze. This is what you must model.
            `
        },
        draftConsole: {
            title: "Draft Console — Introduction",
            instructions: `
                Enter preliminary notes for your introduction. Include:
                • A positioning statement  
                • A high-level critical focus  
                • One personal insight you intend to explore  

                Your notes are saved locally in this browser only.
            `,
            storageKey: "intro_notes"
        }
    },

    {
        id: "gameplay",
        name: "Gameplay",
        briefing: {
            title: "MODULE: GAMEPLAY ANALYSIS — STATUS: Training Simulation",
            text: `
                Gameplay analysis focuses on systems, mechanics, player agency, and 
                the quality of decision-making the game enables.

                Professional reviewers avoid generic statements like “the gameplay is fun.”
                Instead, they discuss systems, friction points, learning curves, pacing,
                and moment-to-moment player experience.
            `
        },
        analysisLab: {
            title: "ANALYSIS LAB — Gameplay",
            excerptLabel: "Captured professional review excerpt (archived for training purposes)",
            excerpt: `
                “Each encounter in *Sky Sentinel Omega* balances precision with controlled
                unpredictability. Enemies telegraph intentions clearly, giving players
                meaningful space to plan, adapt, and commit. The result is a combat loop
                that rewards timing and positional awareness without ever feeling rigid.”
            `,
            explanation: `
                This passage succeeds because it names <strong>specific design behaviors</strong>:
                telegraphing, planning windows, adaptability, and feedback loops.
                It explains what the system does and how it shapes player experience.
            `
        },
        draftConsole: {
            title: "Draft Console — Gameplay",
            instructions: `
                Enter gameplay analysis notes. Include:
                • One system or mechanic you want to examine  
                • What player decisions or abilities it affects  
                • One personal insight from your own experience  

                Your notes are saved locally in this browser only.
            `,
            storageKey: "gameplay_notes"
        }
    },

    {
        id: "graphics",
        name: "Graphics",
        briefing: {
            title: "MODULE: GRAPHICS — VISUAL ANALYSIS TRAINING",
            text: `
                Visual evaluation is not about resolution or “looking cool.” Professionals
                assess clarity, style, composition, communication, readability, and 
                alignment between visuals and gameplay purpose.
            `
        },
        analysisLab: {
            title: "ANALYSIS LAB — Graphics",
            excerptLabel: "Captured professional review excerpt (archived for training purposes)",
            excerpt: `
                “The game's interface uses restrained shapes and desaturated tones, 
                allowing action elements to stand out without overwhelming the player. 
                Environmental silhouettes read instantly, making spatial information 
                accessible even during chaotic encounters.”
            `,
            explanation: `
                This analysis highlights <strong>readability, silhouette clarity, contrast, and UI restraint</strong>.
                It ties visuals to functional outcomes, not personal preference.
            `
        },
        draftConsole: {
            title: "Draft Console — Graphics",
            instructions: `
                Enter visual analysis notes. Include:
                • One visual design choice worth analyzing  
                • How it impacts readability or interpretation  
                • One personal insight about the game's visual intent  

                Your notes are saved locally in this browser only.
            `,
            storageKey: "graphics_notes"
        }
    },

    {
        id: "sound",
        name: "Sound",
        briefing: {
            title: "MODULE: SOUND — AUDIO EVALUATION TRAINING",
            text: `
                Audio analysis focuses on clarity, spatial cues, thematic consistency,
                emotional tone, and feedback precision. Sound is a core component of 
                player information systems, not just atmosphere.
            `
        },
        analysisLab: {
            title: "ANALYSIS LAB — Sound",
            excerptLabel: "Captured professional review excerpt (archived for training purposes)",
            excerpt: `
                “Audio cues in *Sky Sentinel Omega* do more than decorate encounters — 
                they telegraph danger gradients with distinct pitch shifts and spatial 
                separation. Even before enemies appear, players can detect direction
                and urgency through layered frequency patterns.”
            `,
            explanation: `
                This paragraph identifies <strong>functional audio behaviors</strong>: pitch signaling, spatial 
                layering, and informational sound design. Professional reviewers analyze 
                how audio shapes player decisions.
            `
        },
        draftConsole: {
            title: "Draft Console — Sound",
            instructions: `
                Enter audio analysis notes. Include:
                • A sound element that communicates information  
                • What player behaviors it supports or shapes  
                • One personal insight from your own listening  

                Your notes are saved locally in this browser only.
            `,
            storageKey: "sound_notes"
        }
    },

    {
        id: "verdict",
        name: "Verdict",
        briefing: {
            title: "MODULE: VERDICT — SYNTHESIS TRAINING",
            text: `
                The verdict synthesizes your major analytical claims into a clear, 
                professional conclusion. It is not simply “I liked it” or “I didn’t.”
                
                A professional verdict answers one question:
                <strong>What does your analysis ultimately reveal about the game’s design intent and execution?</strong>
            `
        },
        analysisLab: {
            title: "ANALYSIS LAB — Verdict",
            excerptLabel: "Captured professional review excerpt (archived for training purposes)",
            excerpt: `
                “While *Sky Sentinel Omega* occasionally leans too heavily on scripted spectacle, 
                its core systems remain sharp and expressive throughout. Its commitment to 
                tactical clarity makes it a reliable, skill-driven experience that stands 
                above many genre contemporaries.”
            `,
            explanation: `
                This verdict synthesizes major findings: clarity, system durability, expressive play, 
                and comparative strength. It concludes with a grounded, analytical claim rather than a score.
            `
        },
        draftConsole: {
            title: "Draft Console — Verdict",
            instructions: `
                Enter verdict notes. Include:
                • The central insight your review will leave readers with  
                • How gameplay, visuals, or audio support that insight  
                • One personal takeaway from your critical process  

                Your notes are saved locally in this browser only.
            `,
            storageKey: "verdict_notes"
        }
    }
];
