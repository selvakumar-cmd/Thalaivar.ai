// ================================================
// THALAIVAR.AI — Mega Database (1975-2026)
// ================================================

let allMovies = [];
let currentFilter = 'all';

// Comprehensive Database with Director & Runtime
const MOCK_MOVIES = [
  // 1970s
  { id: 1, title: 'Apoorva Raagangal', year: 1975, rating: 8.5, era: '1970s', genre: 'Drama', color: '#111', emoji: '🎬', director: 'K. Balachander', runtime: '140 mins' },
  { id: 2, title: 'Moondru Mudichu', year: 1976, rating: 8.2, era: '1970s', genre: 'Drama', color: '#111', emoji: '🎭', director: 'K. Balachander', runtime: '143 mins' },
  { id: 3, title: '16 Vayathinile', year: 1977, rating: 8.8, era: '1970s', genre: 'Drama', color: '#151515', emoji: '🧑‍🌾', director: 'Bharathiraja', runtime: '138 mins' },
  { id: 4, title: 'Bairavi', year: 1978, rating: 7.9, era: '1970s', genre: 'Action', color: '#220000', emoji: '⚔️', director: 'M. Bhaskar', runtime: '130 mins' },
  { id: 5, title: 'Mullum Malarum', year: 1978, rating: 9.1, era: '1970s', genre: 'Drama', color: '#001100', emoji: '🌸', director: 'J. Mahendran', runtime: '143 mins' },
  { id: 6, title: 'Ninaithale Inikkum', year: 1979, rating: 8.4, era: '1970s', genre: 'Musical', color: '#222200', emoji: '🎸', director: 'K. Balachander', runtime: '135 mins' },
  
  // 1980s
  { id: 7, title: 'Billa', year: 1980, rating: 8.9, era: '1980s', genre: 'Action', color: '#220000', emoji: '🕶️', director: 'R. Krishnamurthy', runtime: '145 mins' },
  { id: 8, title: 'Thillu Mullu', year: 1981, rating: 9.3, era: '1980s', genre: 'Comedy', color: '#222', emoji: '😂', director: 'K. Balachander', runtime: '136 mins' },
  { id: 9, title: 'Moondru Mugam', year: 1982, rating: 8.7, era: '1980s', genre: 'Action', color: '#330000', emoji: '👮', director: 'A. Jagannathan', runtime: '142 mins' },
  { id: 10, title: 'Nallavanukku Nallavan', year: 1984, rating: 8.5, era: '1980s', genre: 'Drama', color: '#112211', emoji: '🤝', director: 'SP. Muthuraman', runtime: '140 mins' },
  { id: 11, title: 'Sri Raghavendrar', year: 1985, rating: 8.6, era: '1980s', genre: 'Devotional', color: '#332200', emoji: '🕉️', director: 'SP. Muthuraman', runtime: '150 mins' },
  { id: 12, title: 'Velaikkaran', year: 1987, rating: 8.3, era: '1980s', genre: 'Action', color: '#111', emoji: '👔', director: 'SP. Muthuraman', runtime: '135 mins' },
  { id: 13, title: 'Rajadhi Raja', year: 1989, rating: 8.1, era: '1980s', genre: 'Action', color: '#220011', emoji: '👑', director: 'R. Sundarrajan', runtime: '148 mins' },

  // 1990s
  { id: 14, title: 'Thalapathi', year: 1991, rating: 9.4, era: '1990s', genre: 'Drama', color: '#220000', emoji: '⚔️', director: 'Mani Ratnam', runtime: '157 mins' },
  { id: 15, title: 'Mannan', year: 1992, rating: 8.4, era: '1990s', genre: 'Drama', color: '#001122', emoji: '🏭', director: 'P. Vasu', runtime: '145 mins' },
  { id: 16, title: 'Annamalai', year: 1992, rating: 8.9, era: '1990s', genre: 'Action', color: '#002200', emoji: '🥛', director: 'Suresh Krissna', runtime: '162 mins' },
  { id: 17, title: 'Veera', year: 1994, rating: 8.1, era: '1990s', genre: 'Comedy', color: '#222', emoji: '🎭', director: 'Suresh Krissna', runtime: '155 mins' },
  { id: 18, title: 'Baasha', year: 1995, rating: 9.6, era: '1990s', genre: 'Action', color: '#110000', emoji: '🔫', director: 'Suresh Krissna', runtime: '165 mins' },
  { id: 19, title: 'Muthu', year: 1995, rating: 8.8, era: '1990s', genre: 'Drama', color: '#002211', emoji: '🐎', director: 'K. S. Ravikumar', runtime: '166 mins' },
  { id: 20, title: 'Arunachalam', year: 1997, rating: 8.6, era: '1990s', genre: 'Action', color: '#221100', emoji: '💰', director: 'C. Sundar', runtime: '158 mins' },
  { id: 21, title: 'Padayappa', year: 1999, rating: 9.3, era: '1990s', genre: 'Action', color: '#220000', emoji: '⛰️', director: 'K. S. Ravikumar', runtime: '178 mins' },

  // 2000s
  { id: 22, title: 'Baba', year: 2002, rating: 7.5, era: '2000s', genre: 'Action', color: '#111', emoji: '🤙', director: 'Suresh Krissna', runtime: '150 mins' },
  { id: 23, title: 'Chandramukhi', year: 2005, rating: 8.7, era: '2000s', genre: 'Thriller', color: '#220011', emoji: '🐍', director: 'P. Vasu', runtime: '166 mins' },
  { id: 24, title: 'Sivaji', year: 2007, rating: 8.9, era: '2000s', genre: 'Thriller', color: '#000022', emoji: '🎩', director: 'S. Shankar', runtime: '185 mins' },

  // 2010s
  { id: 25, title: 'Enthiran', year: 2010, rating: 9.1, era: '2010s', genre: 'Sci-Fi', color: '#001122', emoji: '🤖', director: 'S. Shankar', runtime: '165 mins' },
  { id: 26, title: 'Lingaa', year: 2014, rating: 6.8, era: '2010s', genre: 'Action', color: '#221100', emoji: '🏰', director: 'K. S. Ravikumar', runtime: '174 mins' },
  { id: 27, title: 'Kabali', year: 2016, rating: 8.3, era: '2010s', genre: 'Drama', color: '#111', emoji: '👓', director: 'Pa. Ranjith', runtime: '152 mins' },
  { id: 28, title: 'Kaala', year: 2018, rating: 8.1, era: '2010s', genre: 'Drama', color: '#000', emoji: '☂️', director: 'Pa. Ranjith', runtime: '162 mins' },
  { id: 29, title: '2.0', year: 2018, rating: 7.9, era: '2010s', genre: 'Sci-Fi', color: '#220000', emoji: '🦅', director: 'S. Shankar', runtime: '148 mins' },
  { id: 30, title: 'Petta', year: 2019, rating: 8.9, era: '2010s', genre: 'Action', color: '#000011', emoji: '🧢', director: 'Karthik Subbaraj', runtime: '171 mins' },

  // 2020s
  { id: 31, title: 'Darbar', year: 2020, rating: 6.9, era: '2020s', genre: 'Action', color: '#220000', emoji: '🚨', director: 'A.R. Murugadoss', runtime: '159 mins' },
  { id: 32, title: 'Annaatthe', year: 2021, rating: 6.0, era: '2020s', genre: 'Drama', color: '#221100', emoji: '🔥', director: 'Siva', runtime: '163 mins' },
  { id: 33, title: 'Jailer', year: 2023, rating: 9.0, era: '2020s', genre: 'Action', color: '#111', emoji: '⛓️', director: 'Nelson Dilipkumar', runtime: '168 mins' },
  { id: 34, title: 'Lal Salaam', year: 2024, rating: 6.5, era: '2020s', genre: 'Drama', color: '#220000', emoji: '🏏', director: 'Aishwarya Rajinikanth', runtime: '152 mins' },
  { id: 35, title: 'Vettaiyan', year: 2024, rating: 8.5, era: '2020s', genre: 'Action', color: '#001122', emoji: '🎯', director: 'T. J. Gnanavel', runtime: '160 mins' },
  { id: 36, title: 'Coolie', year: 2025, rating: 'TBA', era: '2020s', genre: 'Action', color: '#332200', emoji: '⛓️', director: 'Lokesh Kanagaraj', runtime: 'TBA' },
  { id: 37, title: 'Thalaivar 172', year: 2026, rating: 'TBA', era: '2020s', genre: 'Action', color: '#111', emoji: '❓', director: 'TBA', runtime: 'TBA' }
];

async function loadMovies() {
  allMovies = MOCK_MOVIES;
  renderMovies(allMovies);
}

function renderMovies(movies) {
  const grid = document.getElementById('moviesGrid');
  if (!grid) return;
  
  if (movies.length === 0) {
    grid.innerHTML = '<div style="grid-column: 1/-1; text-align:center; padding: 3rem; color: var(--text-muted); font-size:1.5rem; letter-spacing:2px;">NO MATCHES FOUND</div>';
    return;
  }
  
  grid.innerHTML = movies.map(m => `
    <div class="movie-card animate-fade-in" style="animation-duration: 0.5s;">
      <!-- Poster Area -->
      <div class="movie-poster-placeholder" style="background: linear-gradient(180deg, ${m.color}, #050508); position: relative;">
        <span>${m.emoji}</span>
        <div style="position:absolute; top:10px; right:10px; background:rgba(0,0,0,0.8); padding:4px 8px; border-radius:4px; font-weight:800; font-size:0.8rem; border:1px solid var(--gold-primary);">
          ⭐ ${m.rating}
        </div>
      </div>
      
      <!-- Info Area -->
      <div class="movie-info">
        <span class="genre-badge">${m.genre}</span>
        <div class="movie-title">${m.title}</div>
        
        <div class="movie-meta-grid">
          <div class="meta-item">
            <span class="meta-icon">🎬</span>
            <span>${m.director}</span>
          </div>
          <div class="meta-item">
            <span class="meta-icon">⏳</span>
            <span>${m.runtime}</span>
          </div>
          <div class="meta-item">
            <span class="meta-icon">📅</span>
            <span>${m.year}</span>
          </div>
        </div>
        
        <button class="btn-details" onclick="showToast('Loading details for ${m.title}...', '🎬')">View Details</button>
      </div>
    </div>
  `).join('');
}

function filterMovies() {
  const query = document.getElementById('searchInput')?.value.toLowerCase() || '';
  
  const filtered = allMovies.filter(m => {
    const matchesSearch = m.title.toLowerCase().includes(query) || 
                          m.year.toString().includes(query) || 
                          m.genre.toLowerCase().includes(query) ||
                          m.director.toLowerCase().includes(query);
    const matchesEra = currentFilter === 'all' || m.era === currentFilter;
    
    return matchesSearch && matchesEra;
  });
  
  renderMovies(filtered);
}

document.addEventListener('DOMContentLoaded', () => {
  loadMovies();
  
  document.getElementById('searchInput')?.addEventListener('input', filterMovies);
  
  const pills = document.querySelectorAll('#genreFilters .pill');
  pills.forEach(pill => {
    pill.addEventListener('click', (e) => {
      pills.forEach(p => p.classList.remove('active'));
      e.target.classList.add('active');
      currentFilter = e.target.dataset.era;
      filterMovies();
    });
  });
});
