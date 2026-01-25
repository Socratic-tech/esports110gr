(function(){
  const $ = (id) => document.getElementById(id);

  const state = loadState() || defaultState();

  function toBullets(text) {
    const lines = (text || "").split("\n").map(l => l.trim()).filter(Boolean);
    if (!lines.length) return "<ul><li class='muted'>—</li></ul>";
    const lis = lines.map(l => `<li>${escapeHtml(l.replace(/^•\s*/,"").replace(/^[\-\*]\s*/,""))}</li>`).join("");
    return `<ul>${lis}</ul>`;
  }

  function buildPreviewHtml() {
    const req = window.REVIEW_STUDIO_DATA.requiredSections;
    const meta = state.meta;

    const parts = [];
    parts.push(`<h1>Video Game Review Plan / Outline</h1>`);
    parts.push(`<div class="meta">
      <div><strong>Name:</strong> ${escapeHtml(meta.studentName || "—")}</div>
      <div><strong>Game:</strong> ${escapeHtml(meta.gameTitle || "—")}</div>
      <div><strong>Platform:</strong> ${escapeHtml(meta.platform || "—")}</div>
      <div><strong>Reviewer angle:</strong> ${escapeHtml(meta.angle || "—")}</div>
      <div><strong>Last updated:</strong> ${escapeHtml(formatDate(meta.updatedAt))}</div>
    </div>`);

    req.forEach(id => {
      const sd = getSectionData(id);
      const ss = state.sections[id];

      parts.push(`<h2>${escapeHtml(sd.title)}</h2>`);
      parts.push(`<div class="small muted">${escapeHtml(sd.purpose)}</div>`);
      parts.push(`<div><strong>Notes</strong>${toBullets(ss.notes)}</div>`);
      parts.push(`<div><strong>Evidence / Visuals Plan</strong>${toBullets(ss.evidence)}</div>`);
      parts.push(`<div><strong>Personal Insight</strong><div>${escapeHtml(ss.insight || "—")}</div></div>`);
    });

    // Aggregate custom categories
    const custom = [];
    for (const id of req) {
      const arr = state.sections[id].customCategories || [];
      arr.forEach(x => { if (!custom.includes(x)) custom.push(x); });
    }
    parts.push(`<h2>Additional Categories (Optional)</h2>`);
    if (custom.length) {
      parts.push(`<ul>${custom.map(c => `<li>${escapeHtml(c)}</li>`).join("")}</ul>`);
    } else {
      parts.push(`<div class="muted">—</div>`);
    }

    // Required: Visual/Clip plan callout
    parts.push(`<h2>Visuals & Clip Plan (Required)</h2>`);
    parts.push(`<div class="muted">
      Make sure each section includes at least one planned clip or screenshot.
      Evidence is what turns opinions into a professional review.
    </div>`);

    return parts.join("\n");
  }

  function buildPlainText() {
    const req = window.REVIEW_STUDIO_DATA.requiredSections;
    const m = state.meta;

    let out = "";
    out += "VIDEO GAME REVIEW PLAN / OUTLINE\n";
    out += "Name: " + (m.studentName || "—") + "\n";
    out += "Game: " + (m.gameTitle || "—") + "\n";
    out += "Platform: " + (m.platform || "—") + "\n";
    out += "Reviewer angle: " + (m.angle || "—") + "\n";
    out += "Last updated: " + (m.updatedAt || "—") + "\n";
    out += "\n";

    for (const id of req) {
      const sd = getSectionData(id);
      const ss = state.sections[id];

      out += sd.title.toUpperCase() + "\n";
      out += sd.purpose + "\n\n";
      out += "NOTES:\n" + (ss.notes || "—") + "\n\n";
      out += "EVIDENCE / VISUALS PLAN:\n" + (ss.evidence || "—") + "\n\n";
      out += "PERSONAL INSIGHT:\n" + (ss.insight || "—") + "\n\n";
      out += "----------------------------------------\n\n";
    }
    return out;
  }

  // Minimal RTF generator (good enough for Canvas submission).
  function toRtf(text) {
    const esc = (s) =>
      (s ?? "")
        .replace(/\\/g, "\\\\")
        .replace(/{/g, "\\{")
        .replace(/}/g, "\\}")
        .replace(/\n/g, "\\par\n");

    return (
      "{\\rtf1\\ansi\\deff0\n" +
      "{\\fonttbl{\\f0 Times New Roman;}{\\f1 Tahoma;}}\n" +
      "\\fs24\\f1\n" +
      esc(text) +
      "\n}"
    );
  }

  function download(filename, content, mime) {
    const blob = new Blob([content], { type: mime });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
  }

  function init() {
    $("btnHome").addEventListener("click", () => go("index.html"));
    $("btnQuest").addEventListener("click", () => go("quest.html"));

    const html = buildPreviewHtml();
    $("relicPreview").innerHTML = html;

    // export hint
    const req = window.REVIEW_STUDIO_DATA.requiredSections;
    const incomplete = req.filter(id => !isSectionTrainComplete(state.sections[id]));
    $("exportHint").textContent = incomplete.length
      ? ("Heads up: Some sections may be incomplete: " + incomplete.map(id => getSectionData(id).title).join(", "))
      : "Looks good: all required sections have the minimum notes/evidence/insight.";

    $("btnExportRTF").addEventListener("click", () => {
      const name = (state.meta.studentName || "student").replace(/\s+/g, "_");
      const game = (state.meta.gameTitle || "game").replace(/\s+/g, "_");
      const filename = `Review_Outline_${name}_${game}.rtf`;
      const rtf = toRtf(buildPlainText());
      download(filename, rtf, "application/rtf");
      setStatus("Exported .RTF.", "Submit to Canvas.");
    });

    $("btnPrint").addEventListener("click", () => window.print());

    $("btnCopy").addEventListener("click", async () => {
      try {
        await navigator.clipboard.writeText(buildPlainText());
        setStatus("Copied outline to clipboard.", "Paste into Docs/Word if needed.");
      } catch {
        alert("Clipboard blocked by browser. Use Export .RTF instead.");
      }
    });

    $("btnDownloadJSON").addEventListener("click", () => {
      const name = (state.meta.studentName || "student").replace(/\s+/g, "_");
      const filename = `ReviewStudio2003_${name}_progress.json`;
      download(filename, JSON.stringify(state, null, 2), "application/json");
      setStatus("Downloaded progress JSON.", "Useful for backup.");
    });
  }

  init();
})();
