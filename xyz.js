// script.js — Typewriter bio + logique existante

// --- Utils ---
const sleep = (ms) => new Promise(res => setTimeout(res, ms));

// --- TYPEWRITER BIO ---
document.addEventListener('DOMContentLoaded', () => {
  const bioEl = document.getElementById('typedBio');
  if (!bioEl) return;

  // Phrases de la bio (modifie-les comme tu veux)
  const phrases = [
    "cs2 enjoyer",
  ];

  // Réglages
  const typeSpeed = 80;      // ms entre chaque lettre (taper)
  const deleteSpeed = 40;    // ms entre chaque lettre (supprimer)
  const pauseAfterTyping = 1200; // pause après avoir tapé la phrase complète
  const pauseAfterDeleting = 300; // pause après suppression complète

  // On ajoute un curseur visuel (simple) en JS (ajout d'un span)
  let cursor = document.createElement('span');
  cursor.className = 'bio-cursor';
  cursor.style.marginLeft = '6px';
  cursor.style.display = 'inline-block';
  cursor.style.width = '8px';
  cursor.style.height = '18px';
  cursor.style.verticalAlign = 'middle';
  cursor.style.background = 'white';
  cursor.style.opacity = '0.9';
  cursor.style.borderRadius = '2px';
  cursor.style.transition = 'opacity 220ms ease-in-out';
  bioEl.appendChild(cursor);

  // Clignotement du curseur
  setInterval(() => {
    cursor.style.opacity = cursor.style.opacity === '0' ? '0.9' : '0';
  }, 550);

  // Core loop: tape -> pause -> supprime -> pause -> next phrase
  (async function loop() {
    let i = 0;
    while (true) {
      const phrase = phrases[i % phrases.length];
      // Taper
      await typePhrase(bioEl, phrase, typeSpeed);
      await sleep(pauseAfterTyping);
      // Supprimer
      await deletePhrase(bioEl, deleteSpeed);
      await sleep(pauseAfterDeleting);
      i++;
    }
  })();

  // Fonction pour taper une phrase (lettre par lettre)
  async function typePhrase(el, text, speed) {
    // Garde le texte existant vide avant de taper
    // On n'efface pas le curseur car il est un enfant séparé
    el.textContent = ''; // reset pour éviter concaténation
    for (let j = 0; j < text.length; j++) {
      el.textContent = text.slice(0, j + 1);
      await sleep(speed + Math.floor(Math.random() * 30)); // petit random pour naturel
    }
  }

  // Fonction pour supprimer la phrase (lettre par lettre)
  async function deletePhrase(el, speed) {
    let text = el.textContent || '';
    for (let j = text.length; j >= 0; j--) {
      el.textContent = text.slice(0, j - 1 >= 0 ? j - 1 : 0);
      await sleep(speed + Math.floor(Math.random() * 20));
    }
  }
});

// --- EXISTING GATE & VIDEO LOGIC (conservé) ---
const gate = document.getElementById('soundGate');
const video = document.getElementById('bgVideo');

if (gate && video) {
  gate.addEventListener('click', () => {
    video.volume = 0.25;
    video.muted = false;
    video.play();
    gate.style.display = 'none';
  });
}

// --- COPY USERNAME LOGIC (safe checks) ---
const copyBtn = document.getElementById('copyUsername');
const copyNotif = document.getElementById('copyNotif');
const username = "XYZ";

if (copyBtn) {
  copyBtn.addEventListener('click', (e) => {
    e.preventDefault();
    navigator.clipboard.writeText(username).then(() => {
      if (copyNotif) {
        copyNotif.style.opacity = '1';
        setTimeout(() => {
          copyNotif.style.opacity = '0';
        }, 1500);
      }
    }).catch(() => {
      // fallback: nothing (ou tu peux afficher un message)
    });
  });
}
