(function(){
  const $ = (id) => document.getElementById(id);

  const saveBadge = $("saveBadge");
  const statusText = $("statusText");

  function refreshProgressCard(state) {
    const required = window.REVIEW_STUDIO_DATA.requiredSections;
    const doneCount = required.filter(id => state.sections[id].done).length;
    $("completedCount").textContent = String(doneCount);
    $("requiredCount").textContent = String(required.length);

    const next = required.find(id => !state.sections[id].done);
    $("nextUnlock").textContent = next ? getSectionData(next).title : "All Complete";

    const pct = Math.round((doneCount / required.length) * 100);
    $("miniBarFill").style.width = pct + "%";
  }

  function ensureState() {
    let state = loadState();
    if (!state) state = defaultState();
    return state;
  }

  function applyMetaToInputs(state) {
    $("studentName").value = state.meta.studentName || "";
    $("gameTitle").value = state.meta.gameTitle || "";
    $("platform").value = state.meta.platform || "";
    $("angle").value = state.meta.angle || "";
  }

  function readMetaFromInputs(state) {
    state.meta.studentName = $("studentName").value.trim();
    state.meta.gameTitle = $("gameTitle").value.trim();
    state.meta.platform = $("platform").value.trim();
    state.meta.angle = $("angle").value.trim();
  }

  function init() {
    const state = ensureState();
    applyMetaToInputs(state);
    refreshProgressCard(state);

    const saveExists = hasSave();
    saveBadge.textContent = saveExists ? "Found" : "Not Found";
    statusText.textContent = saveExists ? "Save detected" : "Ready";

    $("btnStart").addEventListener("click", () => {
      let state = defaultState();
      readMetaFromInputs(state);
      saveState(state);
      setStatus("New quest created.", "Progress saved locally.");
      go("quest.html");
    });

    $("btnResume").addEventListener("click", () => {
      const s = loadState();
      if (!s) {
        setStatus("No save found. Start a new quest.", "Local Save: Not Found");
        return;
      }
      go("quest.html");
    });

    $("btnRelic").addEventListener("click", () => go("relic.html"));

    $("btnReset").addEventListener("click", () => {
      if (!confirm("Reset all progress on this device?")) return;
      resetState();
      setStatus("Progress reset.", "Local Save: Not Found");
      saveBadge.textContent = "Not Found";
      const state = defaultState();
      applyMetaToInputs(state);
      refreshProgressCard(state);
    });

    $("menuHelp").addEventListener("click", () => {
      alert(
        "Review Studio 2003\n\n" +
        "1) Complete each section in Quest mode (Learn → Deconstruct → Train)\n" +
        "2) Export your Relic as .RTF in the Relic screen\n" +
        "3) Submit to Canvas\n\n" +
        "Tip: Evidence plans (clips/screenshots) make your review credible."
      );
    });

    // Autosave meta edits after a short pause
    let t = null;
    ["studentName","gameTitle","platform","angle"].forEach(id => {
      $(id).addEventListener("input", () => {
        clearTimeout(t);
        t = setTimeout(() => {
          const s = ensureState();
          readMetaFromInputs(s);
          saveState(s);
          setStatus("Saved.", "Local Save: Found");
          saveBadge.textContent = "Found";
          refreshProgressCard(s);
        }, 400);
      });
    });
  }

  init();
})();
