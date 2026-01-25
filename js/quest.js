(function(){
  const $ = (id) => document.getElementById(id);

  let state = loadState() || defaultState();
  let currentId = state.currentSectionId || window.REVIEW_STUDIO_DATA.requiredSections[0];

  const TABS = ["learn","decon","train"];

  function renderHeader() {
    $("hdrName").textContent = state.meta.studentName || "—";
    $("hdrGame").textContent = state.meta.gameTitle || "—";
  }

  function renderQuestList() {
    const container = $("questList");
    container.innerHTML = "";

    const required = window.REVIEW_STUDIO_DATA.requiredSections;

    for (const id of required) {
      const sd = getSectionData(id);
      const ss = state.sections[id];

      const div = document.createElement("div");
      div.className = "quest-item" +
        (ss.done ? " done" : "") +
        (!ss.unlocked ? " locked" : "");
      div.tabIndex = ss.unlocked ? 0 : -1;

      div.innerHTML = `
        <div class="qi-title">${escapeHtml(sd.title)}</div>
        <div class="qi-sub">${ss.done ? "Completed" : (ss.unlocked ? "In progress" : "Locked")}</div>
      `;

      const goTo = () => {
        if (!ss.unlocked) return;
        currentId = id;
        state.currentSectionId = id;
        saveState(state);
        renderAll();
      };

      div.addEventListener("click", goTo);
      div.addEventListener("keydown", (e) => { if (e.key === "Enter") goTo(); });
      container.appendChild(div);
    }
  }

  function setActiveTab(tabName) {
    // tab buttons
    $("tabLearn").classList.toggle("active", tabName === "learn");
    $("tabDecon").classList.toggle("active", tabName === "decon");
    $("tabTrain").classList.toggle("active", tabName === "train");

    // panels
    $("panelLearn").classList.toggle("hidden", tabName !== "learn");
    $("panelDecon").classList.toggle("hidden", tabName !== "decon");
    $("panelTrain").classList.toggle("hidden", tabName !== "train");

    $("stepName").textContent = tabName === "learn" ? "Learn" : tabName === "decon" ? "Deconstruct" : "Train";
    $("crumbs").textContent = `Section • ${$("stepName").textContent}`;

    const idx = TABS.indexOf(tabName);
    const pct = idx === 0 ? 33 : idx === 1 ? 66 : 100;
    $("stepBar").style.width = pct + "%";
  }

  function renderSection() {
    const sd = getSectionData(currentId);
    const ss = state.sections[currentId];

    $("sectionTitle").textContent = sd.title;
    $("sectionPurpose").textContent = sd.purpose;

    const badge = $("unlockBadge");
    badge.textContent = ss.unlocked ? (ss.done ? "COMPLETED" : "UNLOCKED") : "LOCKED";
    badge.classList.toggle("unlocked", ss.unlocked);

    // Learn
    const learnList = $("learnList");
    learnList.innerHTML = "";
    sd.learn.forEach(item => {
      const li = document.createElement("li");
      li.textContent = item;
      learnList.appendChild(li);
    });
    $("sampleText").textContent = sd.sample;

    // Deconstruct
    const checks = $("deconChecks");
    checks.innerHTML = "";
    sd.deconstruct.forEach((label, idx) => {
      const wrap = document.createElement("label");
      wrap.className = "check";
      const checked = !!ss.deconChecks[idx];
      wrap.innerHTML = `
        <input type="checkbox" ${checked ? "checked" : ""} data-idx="${idx}">
        <div>
          <div><strong>${escapeHtml(label)}</strong></div>
          <div class="tiny muted">Check when you can point to it in the sample or your draft.</div>
        </div>
      `;
      checks.appendChild(wrap);
    });

    checks.querySelectorAll("input[type=checkbox]").forEach(cb => {
      cb.addEventListener("change", (e) => {
        const idx = Number(e.target.getAttribute("data-idx"));
        ss.deconChecks[idx] = e.target.checked;
        autosave("Deconstruct saved.");
      });
    });

    // Train
    $("notesBox").value = ss.notes || "";
    $("evidenceBox").value = ss.evidence || "";
    $("insightBox").value = ss.insight || "";

    const checklist = sd.trainChecklist.map(x => `<div>• ${escapeHtml(x)}</div>`).join("");
    $("trainChecklist").innerHTML = checklist;

    // set tab from saved step
    const tab = TABS[ss.step] || "learn";
    setActiveTab(tab);
  }

  function autosave(msg) {
    $("autosave").textContent = "Saving…";
    saveState(state);
    $("autosave").textContent = "Saved";
    setStatus(msg || "Saved.", "Progress saved locally.");
    setTimeout(() => { $("autosave").textContent = "Idle"; }, 600);
  }

  function validateTrain() {
    const ss = state.sections[currentId];
    const ok = isSectionTrainComplete(ss);
    return ok;
  }

  function syncTrainInputsToState() {
    const ss = state.sections[currentId];
    ss.notes = $("notesBox").value;
    ss.evidence = $("evidenceBox").value;
    ss.insight = $("insightBox").value.trim();
  }

  function nextStep() {
    const ss = state.sections[currentId];
    if (!ss.unlocked) return;

    if (ss.step < 2) {
      ss.step += 1;
      autosave("Step advanced.");
      setActiveTab(TABS[ss.step]);
      return;
    }

    // finishing Train step -> must validate
    syncTrainInputsToState();

    if (!validateTrain()) {
      alert(
        "Almost there.\n\n" +
        "To complete this section, you need:\n" +
        "- At least 3 note bullets/lines\n" +
        "- At least 1 evidence plan line (clip/screenshot)\n" +
        "- A personal insight sentence"
      );
      autosave("Train saved (not complete).");
      return;
    }

    // Mark done, unlock next
    markDoneAndUnlock(state, currentId);
    autosave("Section completed! Next section unlocked.");

    // Move to next required if exists
    const required = window.REVIEW_STUDIO_DATA.requiredSections;
    const idx = required.indexOf(currentId);
    if (idx < required.length - 1) {
      const nextId = required[idx + 1];
      currentId = nextId;
      state.currentSectionId = nextId;
      state.sections[nextId].step = 0;
      autosave("Moved to next section.");
    } else {
      alert("All required sections completed! Open the Relic to export your outline.");
    }

    renderAll();
  }

  function backStep() {
    const ss = state.sections[currentId];
    if (!ss.unlocked) return;

    if (ss.step > 0) {
      ss.step -= 1;
      autosave("Step moved back.");
      setActiveTab(TABS[ss.step]);
      return;
    }

    // go to previous section if available
    const required = window.REVIEW_STUDIO_DATA.requiredSections;
    const idx = required.indexOf(currentId);
    if (idx > 0) {
      const prevId = required[idx - 1];
      if (!state.sections[prevId].unlocked) return;
      currentId = prevId;
      state.currentSectionId = prevId;
      autosave("Moved to previous section.");
      renderAll();
    }
  }

  function renderAll() {
    renderHeader();
    renderQuestList();
    renderSection();
  }

  function initNav() {
    $("btnHome").addEventListener("click", () => go("index.html"));
    $("btnRelic").addEventListener("click", () => go("relic.html"));

    $("tabLearn").addEventListener("click", () => {
      state.sections[currentId].step = 0; autosave("Switched to Learn."); setActiveTab("learn");
    });
    $("tabDecon").addEventListener("click", () => {
      state.sections[currentId].step = 1; autosave("Switched to Deconstruct."); setActiveTab("decon");
    });
    $("tabTrain").addEventListener("click", () => {
      state.sections[currentId].step = 2; autosave("Switched to Train."); setActiveTab("train");
    });

    $("btnNext").addEventListener("click", nextStep);
    $("btnBack").addEventListener("click", backStep);

    $("btnSave").addEventListener("click", () => {
      syncTrainInputsToState();
      autosave("Saved manually.");
    });

    // Autosave on input (Train)
    let t = null;
    ["notesBox","evidenceBox","insightBox"].forEach(id => {
      $(id).addEventListener("input", () => {
        clearTimeout(t);
        t = setTimeout(() => {
          syncTrainInputsToState();
          autosave("Autosaved.");
        }, 450);
      });
    });

    $("btnAddCategory").addEventListener("click", () => {
      const ss = state.sections[currentId];
      const val = $("customCategory").value.trim();
      if (!val) return;
      if (!ss.customCategories.includes(val)) ss.customCategories.push(val);
      $("customCategory").value = "";
      autosave("Custom category added.");
      alert("Added category: " + val + "\n\nNote: It will appear in the export under 'Additional Categories'.");
    });
  }

  renderAll();
  initNav();
})();
