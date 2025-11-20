const gate = document.getElementById('soundGate');
const video = document.getElementById('bgVideo');
const bio = document.getElementById('typedBio');

// Intro
gate.addEventListener('click', () => {
  video.volume = 0.25;
  video.muted = false;
  video.play();
  gate.style.display = 'none';
});

// ANIMATION TYPE MACHINE A ÉCRIRE
const text = " ";
let i = 0;
let erase = false;

function typeEffect() {
  if (!erase) {
    bio.textContent = text.substring(0, i);
    i++;
    if (i > text.length) {
      erase = true;
      setTimeout(typeEffect, 1000);
      return;
    }
  } else {
    bio.textContent = text.substring(0, i);
    i--;
    if (i === 0) {
      erase = false;
    }
  }

  setTimeout(typeEffect, erase ? 60 : 90);
}

typeEffect();
