let current = 0;
let tab = 'learn';
const status = document.getElementById('status');

function renderSidebar() {
  const ul = document.getElementById('sections');
  ul.innerHTML = '';
  SECTIONS.forEach((s, i) => {
    const li = document.createElement('li');
    li.textContent = s.title;
    li.onclick = () => { current = i; render(); };
    ul.appendChild(li);
  });
}

function render() {
  const s = SECTIONS[current];
  document.getElementById('sectionTitle').textContent = s.title;
  document.getElementById('sectionPurpose').textContent = s.purpose;

  document.getElementById('learnList').innerHTML = s.learn.map(l => `<li>${l}</li>`).join('');
  document.getElementById('sampleText').textContent = s.sample;
  document.getElementById('deconstructList').innerHTML = s.deconstruct.map(d => `<li>${d}</li>`).join('');

  document.querySelectorAll('.tabpanel').forEach(p => p.classList.add('hidden'));
  document.getElementById(tab).classList.remove('hidden');

  document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
  document.querySelector(`.tab[data-tab='${tab}']`).classList.add('active');
}

document.querySelectorAll('.tab').forEach(t => {
  t.onclick = () => { tab = t.dataset.tab; render(); };
});

document.getElementById('next').onclick = () => {
  if (current < SECTIONS.length - 1) current++;
  render();
};

document.getElementById('prev').onclick = () => {
  if (current > 0) current--;
  render();
};

renderSidebar();
render();
