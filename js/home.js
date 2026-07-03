// ================================================
// THALAIVAR.AI — Home Page Logic
// ================================================

// ── Movie Data (Static fallback) ──
const FEATURED_MOVIES = [
  { id: 1,  title: 'Baasha',     year: 1995, rating: 9.2, genre: 'Action', emoji: '🔫', color: '#1a1a2e' },
  { id: 2,  title: 'Muthu',      year: 1995, rating: 8.8, genre: 'Drama',  emoji: '🎭', color: '#1a2e1a' },
  { id: 3,  title: 'Padayappa',  year: 1999, rating: 9.0, genre: 'Action', emoji: '⚔️', color: '#2e1a1a' },
  { id: 4,  title: 'Sivaji',     year: 2007, rating: 8.6, genre: 'Thriller',emoji: '🎩', color: '#1a1a2e' },
  { id: 5,  title: 'Enthiran',   year: 2010, rating: 9.1, genre: 'Sci-Fi', emoji: '🤖', color: '#1a2a2e' },
  { id: 6,  title: 'Kabali',     year: 2016, rating: 8.3, genre: 'Drama',  emoji: '👓', color: '#2e2a1a' },
  { id: 7,  title: 'Petta',      year: 2019, rating: 8.9, genre: 'Action', emoji: '🧢', color: '#1a1a2e' },
  { id: 8,  title: 'Jailer',     year: 2023, rating: 9.0, genre: 'Action', emoji: '⛓️', color: '#2e1a2a' },
];

function renderFeaturedMovies(movies) {
  const grid = document.getElementById('featuredMovies');
  if (!grid) return;
  grid.innerHTML = movies.map(m => `
    <div class="movie-card" onclick="window.location.href='movies.html?id=${m.id}'" title="${m.title}">
      <div class="movie-poster-placeholder" style="background: linear-gradient(135deg, ${m.color}, #0a0a0f);">
        <span style="font-size:4rem;">${m.emoji}</span>
        <span style="font-size:0.7rem; color: var(--text-muted); letter-spacing:2px; text-transform:uppercase;">${m.genre}</span>
      </div>
      <div class="movie-info">
        <div class="movie-title">${m.title}</div>
        <div class="movie-meta">
          <span class="movie-year">${m.year}</span>
          <span class="movie-rating">⭐ ${m.rating}</span>
        </div>
      </div>
    </div>
  `).join('');
}

// ── Dialogues ──
const DIALOGUES = [
  { text: '"நான் ஒருத்தன் சொன்னா நூறு பேர் கேப்பாங்க,<br>நான் ஒரு கையை தூக்கினா நூறு கைகள் தூங்கும்!"', movie: 'Baasha (1995)' },
  { text: '"என்னோட style-ஐ copy பண்ண முடியாது,<br>என்னோட attitude-ஐ match பண்ண முடியாது!"', movie: 'Sivaji (2007)' },
  { text: '"நான் ஒரு தடவை சொன்னா, நூறு தடவை சொன்னா மாதிரி!"', movie: 'Padayappa (1999)' },
  { text: '"Kabali Da! யாருக்கும் பயமில்ல என்னால்,<br>ஆனா என்னால் எல்லாருக்கும் பயம்!"', movie: 'Kabali (2016)' },
  { text: '"Mind it! இது Rajinikanth style!"', movie: 'Muthu (1995)' },
  { text: '"நான் கொடுமைக்காரன் இல்ல, நியாயமான ஆள்!"', movie: 'Petta (2019)' },
  { text: '"என்னோட ஒரு கை போதும்,<br>உன்னோட எல்லாரையும் சமாளிக்க!"', movie: 'Jailer (2023)' },
  { text: '"Robot-ஓட strength ஒரு side,<br>Rajini-ஓட brain இன்னொரு side!"', movie: 'Enthiran (2010)' },
];

let currentDialogueIndex = 0;

function randomDialogue() {
  const btn = document.getElementById('randomDialogueBtn');
  const textEl = document.getElementById('dialogueText');
  const movieEl = document.getElementById('dialogueMovie');
  if (!textEl || !movieEl) return;

  // Button animation
  if (btn) { btn.style.transform = 'scale(0.95)'; setTimeout(() => btn.style.transform = '', 150); }

  textEl.style.opacity = '0';
  textEl.style.transform = 'translateY(10px)';

  setTimeout(() => {
    currentDialogueIndex = (currentDialogueIndex + 1) % DIALOGUES.length;
    const d = DIALOGUES[currentDialogueIndex];
    textEl.innerHTML = d.text;
    movieEl.textContent = `— ${d.movie}`;
    textEl.style.opacity = '1';
    textEl.style.transform = 'translateY(0)';
  }, 300);
}

// Make dialogueText transition smooth
document.addEventListener('DOMContentLoaded', () => {
  const textEl = document.getElementById('dialogueText');
  if (textEl) {
    textEl.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
  }

  // Load movies (try API first, fallback to static)
  loadFeaturedMovies();

  // Auto-rotate dialogue every 5 seconds
  setInterval(() => randomDialogue(), 6000);
});

async function loadFeaturedMovies() {
  // Try to get from Java API
  const data = await apiFetch('/movies/featured');
  renderFeaturedMovies(data || FEATURED_MOVIES);
}
