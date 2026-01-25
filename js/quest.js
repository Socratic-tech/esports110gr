/* --------------------------------------------------------------
   Review Studio 2003 Training Quest Engine
   Controls screen flow, module sequencing & draft storage
-------------------------------------------------------------- */

let currentModuleIndex = 0;
let currentScreen = "briefing";

const moduleSequence = ["briefing", "analysisLab", "draftConsole"];
const container = document.getElementById("screen-container");
const sidebar = document.getElementById("sidebar-modules");

function initQuest() {
    renderSidebar();
    renderScreen();
    updateButtons();
}

/* ---------------- SIDEBAR ---------------- */

function renderSidebar() {
    sidebar.innerHTML = "";

    MODULES.forEach((m, i) => {
        const li = document.createElement("li");
        li.textContent = m.name;
        li.className = (i === currentModuleIndex) ? "active" : "inactive";
        sidebar.appendChild(li);
    });
}

/* ---------------- SCREEN RENDERING ---------------- */

function renderScreen() {
    const mod = MODULES[currentModuleIndex];
    const screenType = currentScreen;

    let html = "";

    if (screenType === "briefing") {
        html = `
            <div class="screen active">
                <h2>${mod.briefing.title}</h2>
                <p>${mod.briefing.text}</p>
            </div>
        `;
    }

    else if (screenType === "analysisLab") {
        html = `
            <div class="screen active">
                <h2>${mod.analysisLab.title}</h2>

                <div class="artifact-box">
                    <h4>${mod.analysisLab.excerptLabel}</h4>
                    <div class="excerpt-box">
                        <div class="excerpt-header">Professional Excerpt</div>
                        <p>${mod.analysisLab.excerpt}</p>
                    </div>

                    <h4>Why This Works</h4>
                    <p>${mod.analysisLab.explanation}</p>
                </div>
            </div>
        `;
    }

    else if (screenType === "draftConsole") {
        const saved = localStorage.getItem(mod.draftConsole.storageKey) || "";

        html = `
            <div class="screen active">
                <h2>${mod.draftConsole.title}</h2>
                <p>${mod.draftConsole.instructions}</p>

                <div class="draft-console">
                    <textarea class="draft-input"
                              id="draftInput">${saved}</textarea>
                </div>
            </div>
        `;
    }

    container.innerHTML = html;

    /* Attach typing handler for storage */
    if (screenType === "draftConsole") {
        document.getElementById("draftInput").addEventListener("input", (e) => {
            localStorage.setItem(MODULES[currentModuleIndex].draftConsole.storageKey, e.target.value);
        });
    }
}

/* ---------------- BUTTON LOGIC ---------------- */

document.getElementById("nextBtn").addEventListener("click", () => {
    advance();
});

document.getElementById("backBtn").addEventListener("click", () => {
    retreat();
});

function advance() {
    const screenIndex = moduleSequence.indexOf(currentScreen);

    if (screenIndex < moduleSequence.length - 1) {
        currentScreen = moduleSequence[screenIndex + 1];
    } else {
        // Move to next module
        if (currentModuleIndex < MODULES.length - 1) {
            currentModuleIndex++;
            currentScreen = "briefing";
            renderSidebar();
        }
    }

    renderScreen();
    updateButtons();
}

function retreat() {
    const screenIndex = moduleSequence.indexOf(currentScreen);

    if (screenIndex > 0) {
        currentScreen = moduleSequence[screenIndex - 1];
    } else {
        // Move to previous module
        if (currentModuleIndex > 0) {
            currentModuleIndex--;
            currentScreen = "draftConsole";
            renderSidebar();
        }
    }

    renderScreen();
    updateButtons();
}

function updateButtons() {
    const screenIndex = moduleSequence.indexOf(currentScreen);

    document.getElementById("backBtn").style.visibility =
        (currentModuleIndex === 0 && currentScreen === "briefing") ? "hidden" : "visible";

    document.getElementById("nextBtn").textContent =
        (screenIndex === moduleSequence.length - 1 && currentModuleIndex === MODULES.length - 1)
            ? "Complete"
            : "Next";
}

initQuest();
