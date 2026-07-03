// ================================================
// THALAIVAR.AI — Dialogues Logic
// ================================================

const ALL_DIALOGUES = [
  { text: "நான் ஒருத்தன் சொன்னா நூறு பேர் கேப்பாங்க, நான் ஒரு கையை தூக்கினா நூறு கைகள் தூங்கும்!", movie: "Baasha", year: 1995 },
  { text: "கெட்டவங்களுக்கு ஆண்டவன் நிறைய கொடுப்பான், ஆனா கைவிட்ருவான். நல்லவங்கள ஆண்டவன் நிறைய சோதிப்பான், ஆனா கைவிடமாட்டான்.", movie: "Baasha", year: 1995 },
  { text: "என்னோட style-ஐ copy பண்ண முடியாது, என்னோட attitude-ஐ match பண்ண முடியாது!", movie: "Sivaji", year: 2007 },
  { text: "நான் ஒரு தடவை சொன்னா, நூறு தடவை சொன்னா மாதிரி!", movie: "Padayappa", year: 1999 },
  { text: "என் வழி, தனி வழி!", movie: "Padayappa", year: 1999 },
  { text: "சும்மா அதிருதுல்ல!", movie: "Sivaji", year: 2007 },
  { text: "கபாலி டா! யாருக்கும் பயமில்ல என்னால், ஆனா என்னால் எல்லாருக்கும் பயம்!", movie: "Kabali", year: 2016 },
  { text: "மகிழ்ச்சி!", movie: "Kabali", year: 2016 },
  { text: "நான் எப்ப வருவேன், எப்படி வருவேன்னு யாருக்கும் தெரியாது. ஆனா வர வேண்டிய நேரத்துல கரெக்டா வருவேன்.", movie: "Muthu", year: 1995 },
  { text: "நான் கொடுமைக்காரன் இல்ல, நியாயமான ஆள்!", movie: "Petta", year: 2019 },
  { text: "பார்க்கத்தான் நான் இப்படி இருப்பேன், ஆனா நான் நினைச்சா... நான் நினைச்சதே நடக்கும்!", movie: "Jailer", year: 2023 }
];

async function loadDialogues() {
  const grid = document.getElementById('dialoguesGrid');
  if (!grid) return;
  
  grid.innerHTML = ALL_DIALOGUES.map(d => `
    <div class="dialogue-card animate-fade-in">
      <div class="dialogue-text">${d.text}</div>
      <div class="dialogue-meta">
        <span class="movie-tag">${d.movie} (${d.year})</span>
        <button class="share-btn" onclick="shareDialogue('${d.text}')" title="Share">🔗</button>
      </div>
    </div>
  `).join('');
}

async function generateDialogue() {
  const resEl = document.getElementById('aiDialogueResult');
  if (!resEl) return;
  
  resEl.style.opacity = '0.5';
  resEl.innerHTML = "<em>Generating Thalaivar punch...</em>";
  
  try {
    // Attempt API fetch
    const data = await apiFetch('/dialogue/random');
    if (data && data.text) {
      resEl.innerHTML = `"${data.text}"`;
    } else {
      throw new Error("Fallback");
    }
  } catch (e) {
    // Fallback if backend is down
    setTimeout(() => {
      const random = ALL_DIALOGUES[Math.floor(Math.random() * ALL_DIALOGUES.length)];
      resEl.innerHTML = `"${random.text}"<br><span style="font-size:0.9rem; color:var(--gold-primary); font-style:normal; margin-top:10px; display:inline-block;">— ${random.movie}</span>`;
      resEl.style.opacity = '1';
    }, 800);
  }
}

function shareDialogue(text) {
  navigator.clipboard.writeText(`"${text}" - Superstar Rajinikanth`);
  showToast("Dialogue copied to clipboard!");
}

document.addEventListener('DOMContentLoaded', () => {
  loadDialogues();
});
