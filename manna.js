// ── Manna Slot — works on both manna.html and index.html ──────────────

const categories = {
  love: {
    label: '❤ Love', color: '#b07070',
    symbols: ['❤', '✦', '☀'],
    verses: [
      { ref: '1 John 4:19',  text: 'We love because he first loved us.' },
      { ref: '1 Cor 16:14',  text: 'Let all that you do be done in love.' },
      { ref: '1 Cor 13:4',   text: 'Love is patient, love is kind.' },
      { ref: '1 John 4:8',   text: 'God is love.' },
      { ref: 'John 15:13',   text: 'Greater love has no one than this: to lay down one\'s life for one\'s friends.' },
      { ref: '1 Peter 4:8',  text: 'Love covers over a multitude of sins.' },
      { ref: 'Prov 10:12',   text: 'Hatred stirs up conflict, but love covers over all wrongs.' },
      { ref: '1 Cor 13:13',  text: 'And now these three remain: faith, hope and love. But the greatest of these is love.' },
      { ref: 'John 15:12',   text: 'My command is this: Love each other as I have loved you.' },
      { ref: 'Rom 12:10',    text: 'Be devoted to one another in love. Honor one another above yourselves.' },
    ]
  },
  peace: {
    label: '☁ Peace', color: '#7a9aaa',
    symbols: ['☁', '✝', '◇'],
    verses: [
      { ref: 'Phil 4:6',    text: 'Do not be anxious about anything, but in every situation, by prayer and petition, with thanksgiving, present your requests to God.' },
      { ref: 'John 14:27',  text: 'Peace I leave with you; my peace I give you.' },
      { ref: 'Ps 34:18',    text: 'The LORD is close to the brokenhearted.' },
      { ref: 'Matt 11:28',  text: 'Come to me, all you who are weary and burdened, and I will give you rest.' },
      { ref: 'Ps 46:1',     text: 'God is our refuge and strength, an ever-present help in trouble.' },
      { ref: 'Isa 41:10',   text: 'So do not fear, for I am with you.' },
      { ref: 'Phil 4:7',    text: 'And the peace of God, which transcends all understanding, will guard your hearts.' },
      { ref: 'Ps 23:1',     text: 'The LORD is my shepherd, I lack nothing.' },
      { ref: 'Ps 56:3',     text: 'When I am afraid, I put my trust in you.' },
      { ref: 'John 14:1',   text: 'Do not let your hearts be troubled. You believe in God; believe also in me.' },
    ]
  },
  hope: {
    label: '🌱 Hope', color: '#8aab8a',
    symbols: ['🌱', '✦', '☀'],
    verses: [
      { ref: 'Jer 29:11',   text: 'For I know the plans I have for you... plans to give you hope and a future.' },
      { ref: 'Rom 8:28',    text: 'In all things God works for the good of those who love him.' },
      { ref: 'Ps 107:1',    text: 'Give thanks to the LORD for He is good: His love endures forever.' },
      { ref: 'Lam 3:23',    text: 'They are new every morning; great is your faithfulness.' },
      { ref: 'Isa 40:31',   text: 'Those who wait on the Lord will find new strength.' },
      { ref: 'Rom 15:13',   text: 'May the God of hope fill you with all joy and peace.' },
      { ref: 'Ps 119:105',  text: 'Your word is a lamp for my feet, a light on my path.' },
      { ref: 'Heb 11:1',    text: 'Now faith is confidence in what we hope for and assurance about what we do not see.' },
      { ref: 'Ps 37:5',     text: 'Commit your way to the LORD; trust in him and he will do this.' },
      { ref: 'Rom 8:31',    text: 'If God is for us, who can be against us?' },
    ]
  },
  strength: {
    label: '⚡ Strength', color: '#c4a96a',
    symbols: ['⚡', '✝', '◆'],
    verses: [
      { ref: 'Phil 4:13',   text: 'I can do all things through Christ who strengthens me.' },
      { ref: 'Josh 1:9',    text: 'Be strong and courageous. Do not be afraid... the LORD your God will be with you.' },
      { ref: '2 Tim 1:7',   text: 'For God did not give us a spirit of timidity, but a spirit of power, of love and of self-discipline.' },
      { ref: 'Ps 27:1',     text: 'The LORD is my light and my salvation—whom shall I fear?' },
      { ref: 'Isa 40:29',   text: 'He gives power to the faint, and to him who has no might he increases strength.' },
      { ref: 'Ps 118:6',    text: 'The LORD is with me; I will not be afraid.' },
      { ref: 'Hab 3:19',    text: 'The Sovereign LORD is my strength.' },
      { ref: 'Ps 18:2',     text: 'The LORD is my rock, my fortress and my deliverer.' },
      { ref: 'Eph 6:10',    text: 'Finally, be strong in the Lord and in his mighty power.' },
      { ref: '1 Cor 16:13', text: 'Be on your guard; stand firm in the faith; be courageous; be strong.' },
    ]
  },
  wisdom: {
    label: '📖 Wisdom', color: '#a89880',
    symbols: ['📖', '✦', '◇'],
    verses: [
      { ref: 'Prov 3:5',    text: 'Trust in the LORD with all your heart.' },
      { ref: 'Ps 119:11',   text: 'I have hidden your word in my heart that I might not sin against you.' },
      { ref: 'John 8:32',   text: 'Then you will know the truth, and the truth will set you free.' },
      { ref: 'Ps 25:4',     text: 'Show me your ways, LORD, teach me your paths.' },
      { ref: 'Prov 3:6',    text: 'In all your ways submit to him, and he will make your paths straight.' },
      { ref: 'Ps 32:8',     text: 'I will instruct you and teach you in the way you should go.' },
      { ref: 'Ps 143:8',    text: 'Show me the way I should go, for to you I entrust my life.' },
      { ref: 'James 1:5',   text: 'If any of you lacks wisdom, you should ask God.' },
      { ref: 'Ps 16:11',    text: 'You make known to me the path of life.' },
      { ref: 'John 10:10',  text: 'I have come that they may have life, and have it to the full.' },
    ]
  }
};

const categoryKeys  = Object.keys(categories);
const reelSymbols   = ['✦', '✝', '☁', '❤', '◆', '◇', '☀', '🌱', '⚡', '📖'];
let lastCategory    = null;

function pickCategory() {
  const keys = categoryKeys.filter(k => k !== lastCategory);
  return keys[Math.floor(Math.random() * keys.length)];
}

function spinReel(inner, finalSymbol, delay) {
  return new Promise(resolve => {
    const ticks = 10 + Math.floor(Math.random() * 6);
    let count = 0;
    function tick() {
      inner.innerHTML = `<span>${reelSymbols[Math.floor(Math.random() * reelSymbols.length)]}</span>`;
      count++;
      if (count < ticks) {
        setTimeout(tick, 55 + count * 9);
      } else {
        setTimeout(() => {
          inner.innerHTML = `<span>${finalSymbol}</span>`;
          inner.classList.add('landed');
          setTimeout(() => inner.classList.remove('landed'), 400);
          resolve();
        }, delay);
      }
    }
    setTimeout(tick, delay * 0.3);
  });
}

// ── Wire up whichever slot exists on this page ──────────────────────

function initSlot({ btnId, ri1Id, ri2Id, ri3Id, displayId, catId, countId, leverEmojiId, leverLabelId, landedClass }) {
  const btn     = document.getElementById(btnId);
  const display = document.getElementById(displayId);
  const catEl   = document.getElementById(catId);
  const countEl = document.getElementById(countId);
  const ri      = [document.getElementById(ri1Id), document.getElementById(ri2Id), document.getElementById(ri3Id)];
  const emojiEl = leverEmojiId ? document.getElementById(leverEmojiId) : null;
  const labelEl = leverLabelId ? document.getElementById(leverLabelId) : null;

  if (!btn || !display) return;

  let spinning = false;
  let pulls    = 0;

  btn.addEventListener('click', async () => {
    if (spinning) return;
    spinning = true;
    btn.disabled = true;
    btn.classList.add('spinning');

    display.innerHTML = `<span class="${landedClass ? 'verse-spinning-inline' : 'verse-spinning'}">· · ·</span>`;
    if (catEl) catEl.style.display = 'none';

    const catKey = pickCategory();
    const cat    = categories[catKey];
    const verse  = cat.verses[Math.floor(Math.random() * cat.verses.length)];
    lastCategory = catKey;

    await Promise.all([
      spinReel(ri[0], cat.symbols[0], 0),
      spinReel(ri[1], cat.symbols[1], 200),
      spinReel(ri[2], cat.symbols[2], 400),
    ]);

    await new Promise(r => setTimeout(r, 280));

    // Inline vs standalone display
    if (landedClass) {
      display.innerHTML = `
        <div class="verse-result-inline" style="--cat-color:${cat.color}">
          <div class="verse-text-inline">"${verse.text}"</div>
          <div class="verse-ref-inline">${verse.ref}</div>
        </div>`;
    } else {
      display.innerHTML = `
        <div class="verse-result" style="--cat-color:${cat.color}">
          <div class="verse-text">"${verse.text}"</div>
          <div class="verse-ref">${verse.ref}</div>
        </div>`;
    }

    if (catEl) {
      catEl.textContent = cat.label;
      catEl.style.setProperty('--cat-color', cat.color);
      catEl.style.display = 'inline-block';
    }

    pulls++;
    if (countEl) countEl.textContent = pulls === 1 ? '1 word received' : `${pulls} words received`;

    spinning = false;
    btn.disabled = false;
    btn.classList.remove('spinning');
  });
}

// Inline slot (index.html)
initSlot({
  btnId: 'slotBtnInline', ri1Id: 'ri1', ri2Id: 'ri2', ri3Id: 'ri3',
  displayId: 'verseDisplayInline', catId: 'verseCatInline',
  countId: 'pullCountInline', leverEmojiId: 'leverEmoji',
  leverLabelId: 'leverLabel', landedClass: true
});

// Standalone slot (manna.html)
initSlot({
  btnId: 'slotBtn', ri1Id: 'reelInner1', ri2Id: 'reelInner2', ri3Id: 'reelInner3',
  displayId: 'verseDisplay', catId: 'verseCategory',
  countId: 'pullCount', leverEmojiId: null,
  leverLabelId: null, landedClass: false
});
