// ── Typewriter bio ──────────────────────────────────────────────────
const lines = [
  "Hi, I'm Suzy Huang. ☕",
  "",
  "M.S. Computer Eng. @ Cal State Fullerton(NOW!)",
  "M.S. Chemical Eng. @ NTHU, Taiwan",
  "B.S. Chemical Eng + Quantitative Finance. @ NTHU, Taiwan",
  "",
  "Ex-researcher @ NTHU · image processing & NDT.",
  "Ex-engineer @ ITRI · Physics AI & LLM eval.",
  "",
  "I love coffee, math, and a 15lbs calico cat",
  "who occasionally sits on my keyboard.",
  "",
  "Currently: chasing the perfect pour-over and expresso ☕",
  "and progressing my 1000 pieces puzzles",

  "and the MOST important!",
  "Exploring the phy-laws in medical images generation :)"
];

const bioEl   = document.getElementById('bio-text');
const navHint = document.getElementById('nav-hint');

let lineIdx = 0, charIdx = 0, fullText = '';

function typeNext() {
  if (lineIdx >= lines.length) {
    if (navHint) navHint.style.display = 'flex';
    return;
  }
  const line = lines[lineIdx];
  if (charIdx < line.length) {
    fullText += line[charIdx++];
    bioEl.innerHTML = renderBio(fullText);
    setTimeout(typeNext, 38);
  } else {
    fullText += '\n';
    bioEl.innerHTML = renderBio(fullText);
    lineIdx++; charIdx = 0;
    setTimeout(typeNext, line === '' ? 80 : 160);
  }
}

function renderBio(text) {
  return text
    .replace(/M\.S\.|B\.S\./g, '<span class="highlight">$&</span>')
    .replace(/Cal State Fullerton|ITRI|NTHU/g, '<span class="highlight">$&</span>')
    .replace(/18g|82°C|1:15|270ml|35s|40ml|110ml|120ml|2:30/g,
             '<span class="highlight">$&</span>')
    .replace(/15lbs/g, '<span class="highlight">15lbs</span>');
}

if (bioEl) setTimeout(typeNext, 600);

// ── News ticker — duplicate items for seamless loop ──────────────────
const track = document.getElementById('newsTickerTrack');
if (track) {
  // Clone all items and append so the scroll loops seamlessly
  const items = Array.from(track.children);
  items.forEach(item => track.appendChild(item.cloneNode(true)));
}

// ── Tooltip on sticker hover (simple) ───────────────────────────────
const tooltip = document.getElementById('tooltip');

if (tooltip) {
  document.querySelectorAll('.sticker-img').forEach(img => {
    const tip = img.dataset.tip;
    if (!tip) return;
    img.addEventListener('mouseenter', e => {
      tooltip.textContent = tip;
      tooltip.classList.add('show');
      moveTip(e);
    });
    img.addEventListener('mousemove', moveTip);
    img.addEventListener('mouseleave', () => tooltip.classList.remove('show'));
  });
}

function moveTip(e) {
  tooltip.style.left = (e.clientX + 14) + 'px';
  tooltip.style.top  = (e.clientY - 28) + 'px';
}

// ── Story popup on sticker click ─────────────────────────────────────
const popup     = document.getElementById('storyPopup');
const popupText = document.getElementById('storyText');
const popupClose= document.getElementById('storyClose');

if (popup) {
  // Open on click
  document.querySelectorAll('.sticker-img[data-story]').forEach(img => {
    img.style.cursor = 'pointer';
    img.addEventListener('click', e => {
      e.stopPropagation();
      // hide tooltip
      if (tooltip) tooltip.classList.remove('show');

      popupText.textContent = img.dataset.story;

      // Position near the click, keep inside viewport
      const vw = window.innerWidth, vh = window.innerHeight;
      let x = e.clientX + 16, y = e.clientY - 20;
      popup.style.display = 'block';
      const pw = popup.offsetWidth, ph = popup.offsetHeight;
      if (x + pw > vw - 12) x = e.clientX - pw - 16;
      if (y + ph > vh - 12) y = vh - ph - 12;
      if (y < 8) y = 8;
      popup.style.left = x + 'px';
      popup.style.top  = y + 'px';
      popup.classList.add('show');
    });
  });

  // Close button
  popupClose.addEventListener('click', e => {
    e.stopPropagation();
    popup.classList.remove('show');
  });

  // Click outside closes
  document.addEventListener('click', () => popup.classList.remove('show'));
}

// ── Wobble on sticker click ──────────────────────────────────────────
document.querySelectorAll('.sticker-img, .sticker-emoji, .sticker-linkedin, .sticker-email').forEach(el => {
  el.addEventListener('mousedown', () => {
    el.style.transform = `rotate(calc(var(--rot, 0deg) + 8deg)) scale(0.93)`;
  });
  el.addEventListener('mouseup', () => {
    el.style.transform = '';
  });
});
