const STORAGE_KEY = "review_studio_2003_state_v1";

function defaultState() {
  const data = window.REVIEW_STUDIO_DATA;
  const sections = {};
  for (const s of data.sections) {
    sections[s.id] = {
      unlocked: s.id === data.requiredSections[0],
      done: false,
      step: 0, // 0 learn, 1 deconstruct, 2 train
      deconChecks: Array(s.deconstruct.length).fill(false),
      notes: "",
      evidence: "",
      insight: "",
      customCategories: []
    };
  }
  return {
    meta: {
      studentName: "",
      gameTitle: "",
      platform: "",
      angle: "",
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    },
    currentSectionId: data.requiredSections[0],
    sections
  };
}

function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    // very light shape check
    if (!parsed || !parsed.meta || !parsed.sections) return null;
    return parsed;
  } catch {
    return null;
  }
}

function saveState(state) {
  state.meta.updatedAt = new Date().toISOString();
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  return true;
}

function resetState() {
  localStorage.removeItem(STORAGE_KEY);
}

function hasSave() {
  return !!localStorage.getItem(STORAGE_KEY);
}

function getSectionData(id) {
  return window.REVIEW_STUDIO_DATA.sections.find(s => s.id === id);
}

function countBullets(text) {
  const lines = (text || "").split("\n").map(l => l.trim()).filter(Boolean);
  // accept bullets with •, -, * or plain lines
  return lines.length;
}

function isSectionTrainComplete(sectionState) {
  const bulletsOk = countBullets(sectionState.notes) >= 3;
  const evidenceOk = countBullets(sectionState.evidence) >= 1;
  const insightOk = (sectionState.insight || "").trim().length >= 10;
  return bulletsOk && evidenceOk && insightOk;
}

function unlockNextIfEligible(state, currentId) {
  const required = window.REVIEW_STUDIO_DATA.requiredSections;
  const idx = required.indexOf(currentId);
  if (idx === -1) return;
  if (idx === required.length - 1) return;
  const nextId = required[idx + 1];
  state.sections[nextId].unlocked = true;
}

function markDoneAndUnlock(state, sectionId) {
  state.sections[sectionId].done = true;
  unlockNextIfEligible(state, sectionId);
}
