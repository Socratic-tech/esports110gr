// Content for the Training Quest
window.ReviewQuestContent = {
  placements: [
    "Introduction",
    "Gameplay",
    "Graphics",
    "Sound",
    "Verdict/Rating",
    "Multiplayer/Replayability (optional)",
    "Story/Characters (optional)"
  ],
  sections: [
    {
      key: "intro",
      label: "Introduction",
      observe: {
        do: [
          "Hook the audience with a clear thesis (what kind of game is this and who is it for?)",
          "Establish context: developer/publisher, release moment, genre lineage",
          "State your play conditions (hours, platform, difficulty, solo/co-op)",
          "Tease one standout moment (avoid spoilers; label if needed)"
        ],
        pattern: "Pros earn trust fast: a thesis + context + play conditions. They tell you why their opinion is informed.",
        evidenceCue: "Show a quick clip that matches your thesis (combat, traversal, or a key vibe shot).",
        example: [
          "From the first hour, it’s clear this is a game obsessed with momentum—fast inputs, quick recoveries, and a loop that dares you to push one more room.",
          "That focus makes it a great fit for players who love tight systems, but it also means the quieter moments can feel like speed bumps.",
          "After 12 hours on PC (controller, normal difficulty), the best parts are undeniable—even if the rough edges show when the pace slows."
        ]
      },
      practice: {
        prompts: [
          { id:"thesis", label:"Thesis (1–2 lines)", help:"What kind of game is it? Who is it for?" },
          { id:"context", label:"Context (dev/publisher/genre lineage)", help:"Mention comparable games or a genre tradition." },
          { id:"conditions", label:"Play conditions", help:"Hours, platform, difficulty, solo/co-op, performance mode." },
          { id:"standout", label:"Standout moment (no spoilers or warn)", help:"One moment that captures the vibe or your main point." }
        ]
      }
    },
    {
      key: "gameplay",
      label: "Gameplay",
      observe: {
        do: [
          "Describe the core loop (minute-to-minute actions)",
          "Evaluate controls and feel (responsiveness, camera, accessibility)",
          "Explain progression and rewards (skills, upgrades, economy, unlocks)",
          "Judge challenge and balance (fairness, spikes, AI, repetition)",
          "Compare to similar games to clarify what’s unique"
        ],
        pattern: "Pros break gameplay into systems. They don’t say ‘fun’—they say *why* it’s fun (or not).",
        evidenceCue: "Plan 2 clips: one showing the loop at its best, one showing a friction point (AI, balance, camera, etc.).",
        example: [
          "The loop is simple: scout a space, commit to an approach, and recover fast enough to keep pressure on the system instead of waiting for cooldowns.",
          "When it clicks, the controls make you feel clever—inputs chain smoothly and mistakes are yours, not the game’s.",
          "But the balance wobbles in the midgame, where a few upgrades trivialize encounters that should demand adaptation."
        ]
      },
      practice: {
        prompts: [
          { id:"coreLoop", label:"Core loop (minute-to-minute)", help:"What do players do repeatedly?" },
          { id:"controls", label:"Controls & feel", help:"Responsiveness, camera, accessibility options." },
          { id:"progression", label:"Progression & rewards", help:"Upgrades, skill trees, loot, economy." },
          { id:"challenge", label:"Challenge & balance", help:"Difficulty curve, fairness, AI." },
          { id:"variety", label:"Variety & evolution", help:"Does it change over time or repeat?" },
          { id:"comparison", label:"Comparison point", help:"Similar game + what differs here." }
        ]
      }
    },
    {
      key: "graphics",
      label: "Graphics",
      observe: {
        do: [
          "Separate art direction from raw fidelity",
          "Evaluate readability (UI clarity, visual noise, enemy tells)",
          "Call out highlights (environments, animation, lighting, VFX)",
          "Report technical performance honestly (FPS, loading, bugs)"
        ],
        pattern: "Pros don’t only say ‘looks good.’ They talk about style + clarity + performance.",
        evidenceCue: "Include 1 beauty shot and 1 technical proof (frame drop, pop-in, bug, load time).",
        example: [
          "The art direction does most of the heavy lifting—bold silhouettes and high contrast make even chaotic fights readable.",
          "Animation sells impact, especially in transitions where momentum is visible, not just implied.",
          "Performance is mostly stable, but a few dense areas dip enough to disrupt timing-based play."
        ]
      },
      practice: {
        prompts: [
          { id:"style", label:"Art style & direction", help:"Realistic/stylized; what vibe does it build?" },
          { id:"readability", label:"Readability & UI clarity", help:"Can players parse action quickly?" },
          { id:"highlights", label:"Visual highlights", help:"Environments, animation, effects, character design." },
          { id:"performance", label:"Performance / bugs", help:"FPS, load times, glitches (be specific)." },
          { id:"settings", label:"Settings used", help:"Platform/mode/resolution/perf mode." }
        ]
      }
    },
    {
      key: "sound",
      label: "Sound",
      observe: {
        do: [
          "Evaluate music’s role (mood, tension, identity, repetition)",
          "Analyze sound effects as feedback (impact, cues, spatial info)",
          "Note voice acting quality (if applicable)",
          "Mention mix/accessibility (volume balance, subtitles, audio options)"
        ],
        pattern: "Pros treat audio as gameplay feedback, not background decoration.",
        evidenceCue: "Plan a clip where sound changes player behavior (timing cues, danger tells, stealth audio).",
        example: [
          "The soundtrack knows when to disappear, letting ambience carry tension instead of forcing a constant musical push.",
          "Sound effects are functional: attacks have distinct ‘weight’ and enemy cues are reliable enough to play by ear.",
          "A few mix issues bury dialogue in busy scenes, which hurts character moments that should land."
        ]
      },
      practice: {
        prompts: [
          { id:"music", label:"Music", help:"Memorable themes? mood support? repetition?" },
          { id:"sfx", label:"Sound effects / feedback", help:"Impact, cues, spatial audio." },
          { id:"voice", label:"Voice acting (if any)", help:"Standouts or weak points." },
          { id:"mix", label:"Audio mix & accessibility", help:"Clarity, balance, subtitle/audio options." }
        ]
      }
    },
    {
      key: "verdict",
      label: "Verdict/Rating",
      observe: {
        do: [
          "Summarize strongest pros and clearest cons",
          "Explain who should play it (specific audience) and who should skip",
          "Justify the rating with criteria (not vibes)",
          "End with a punchy final line"
        ],
        pattern: "Pros don’t just score. They explain the score and the audience fit.",
