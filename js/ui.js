function setStatus(leftText, rightText) {
  const left = document.getElementById("statusLeft");
  const right = document.getElementById("statusRight");
  if (left) left.textContent = leftText ?? "";
  if (right && rightText != null) right.textContent = rightText;
}

function escapeHtml(s) {
  return (s ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
}

function go(url) {
  window.location.href = url;
}

function formatDate(iso) {
  try { return new Date(iso).toLocaleString(); }
  catch { return iso; }
}
