// ================================================
// THALAIVAR.AI — Interactive Analytics Logic
// ================================================

Chart.defaults.color = '#A89B7A';
Chart.defaults.font.family = "'Outfit', sans-serif";

const TOOLTIP_STYLE = {
  backgroundColor: 'rgba(5,5,8,0.95)',
  titleColor: '#FFB800',
  bodyColor: '#F0E6C8',
  borderColor: 'rgba(255,184,0,0.4)',
  borderWidth: 1,
  padding: 12,
  bodyFont: { size: 13, weight: 'bold' }
};

const GRID = { color: 'rgba(255,255,255,0.05)' };

let decadeChart, topMoviesChart, scatterChart;

const FULL_DATA = {
  '1990s': {
    topLabels: ['Baasha', 'Padayappa', 'Muthu', 'Annamalai', 'Arunachalam'],
    topData: [40, 45, 30, 15, 20],
    scatterData: [
      { x: 9.6, y: 40, title: 'Baasha' },
      { x: 9.3, y: 45, title: 'Padayappa' },
      { x: 8.8, y: 30, title: 'Muthu' },
      { x: 8.9, y: 15, title: 'Annamalai' }
    ]
  },
  '2000s': {
    topLabels: ['Sivaji', 'Chandramukhi', 'Baba'],
    topData: [150, 65, 30],
    scatterData: [
      { x: 8.9, y: 150, title: 'Sivaji' },
      { x: 8.7, y: 65, title: 'Chandramukhi' },
      { x: 7.5, y: 30, title: 'Baba' }
    ]
  },
  '2010s': {
    topLabels: ['2.0', 'Enthiran', 'Kabali', 'Petta', 'Kaala'],
    topData: [800, 290, 286, 250, 150],
    scatterData: [
      { x: 7.9, y: 800, title: '2.0' },
      { x: 9.1, y: 290, title: 'Enthiran' },
      { x: 8.3, y: 286, title: 'Kabali' },
      { x: 8.9, y: 250, title: 'Petta' },
      { x: 8.1, y: 150, title: 'Kaala' }
    ]
  },
  '2020s': {
    topLabels: ['Jailer', 'Darbar', 'Vettaiyan', 'Annaatthe'],
    topData: [600, 250, 240, 150],
    scatterData: [
      { x: 9.0, y: 600, title: 'Jailer' },
      { x: 6.9, y: 250, title: 'Darbar' },
      { x: 8.5, y: 240, title: 'Vettaiyan' },
      { x: 6.0, y: 150, title: 'Annaatthe' }
    ]
  },
  'all': {
    topLabels: ['2.0', 'Jailer', 'Enthiran', 'Kabali', 'Sivaji'],
    topData: [800, 600, 290, 286, 150],
    scatterData: [
      { x: 9.6, y: 40, title: 'Baasha' },
      { x: 9.3, y: 45, title: 'Padayappa' },
      { x: 8.9, y: 150, title: 'Sivaji' },
      { x: 9.1, y: 290, title: 'Enthiran' },
      { x: 9.0, y: 600, title: 'Jailer' },
      { x: 8.3, y: 286, title: 'Kabali' }
    ]
  }
};

function initCharts() {

  // ── 1. Decade Box Office Line Chart ──
  const ctxDecade = document.getElementById('decadeChart');
  if (ctxDecade) {
    decadeChart = new Chart(ctxDecade, {
      type: 'line',
      data: {
        labels: ['1970s', '1980s', '1990s', '2000s', '2010s', '2020s'],
        datasets: [{
          label: 'Est. Box Office (₹ Crores)',
          data: [15, 80, 350, 800, 2500, 2000],
          borderColor: '#FFB800',
          backgroundColor: 'rgba(255,184,0,0.15)',
          borderWidth: 3, tension: 0.4, fill: true,
          pointBackgroundColor: '#FFD60A',
          pointRadius: 6, pointHoverRadius: 9
        }]
      },
      options: {
        responsive: true,
        animation: { duration: 2000, easing: 'easeOutQuart' },
        plugins: { legend: { display: false }, tooltip: TOOLTIP_STYLE },
        scales: { y: { grid: GRID }, x: { grid: GRID } }
      }
    });
  }

  // ── 2. Top Grossing Bar Chart ──
  const ctxTop = document.getElementById('topMoviesChart');
  if (ctxTop) {
    topMoviesChart = new Chart(ctxTop, {
      type: 'bar',
      data: {
        labels: FULL_DATA['all'].topLabels,
        datasets: [{
          label: 'Box Office (₹ Crores)',
          data: FULL_DATA['all'].topData,
          backgroundColor: ['#FFD60A', '#FFB800', '#CC9200', '#00E5FF', '#E50914'],
          borderRadius: 4
        }]
      },
      options: {
        responsive: true,
        animation: { duration: 1500, easing: 'easeOutBounce' },
        plugins: { legend: { display: false }, tooltip: TOOLTIP_STYLE },
        scales: { y: { grid: GRID }, x: { grid: { display: false } } }
      }
    });
  }

  // ── 3. Genre Distribution Doughnut Chart ──
  const ctxGenre = document.getElementById('genreChart');
  if (ctxGenre) {
    new Chart(ctxGenre, {
      type: 'doughnut',
      data: {
        labels: ['Action', 'Drama', 'Comedy', 'Sci-Fi', 'Thriller', 'Devotional', 'Musical'],
        datasets: [{
          data: [42, 28, 8, 5, 6, 5, 6],
          backgroundColor: ['#FFB800','#00E5FF','#E50914','#7B2FFF','#FF6B35','#00FF88','#FF3D8A'],
          borderColor: '#050508',
          borderWidth: 3,
          hoverOffset: 12
        }]
      },
      options: {
        responsive: true,
        animation: { duration: 2000, animateRotate: true },
        plugins: {
          legend: {
            display: true,
            position: 'bottom',
            labels: { color: '#C0B28F', padding: 15, font: { size: 12, weight: '600' } }
          },
          tooltip: TOOLTIP_STYLE
        },
        cutout: '60%'
      }
    });
  }

  // ── 4. Director Collaborations Horizontal Bar Chart ──
  const ctxDir = document.getElementById('directorChart');
  if (ctxDir) {
    new Chart(ctxDir, {
      type: 'bar',
      data: {
        labels: ['K. Balachander', 'SP. Muthuraman', 'Suresh Krissna', 'KS. Ravikumar', 'S. Shankar', 'Pa. Ranjith'],
        datasets: [{
          label: 'Films Together',
          data: [6, 5, 4, 3, 3, 2],
          backgroundColor: ['#FFD60A','#FFB800','#CC9200','#00E5FF','#7B2FFF','#FF6B35'],
          borderRadius: 4
        }]
      },
      options: {
        indexAxis: 'y',
        responsive: true,
        animation: { duration: 1800, easing: 'easeOutCubic' },
        plugins: { legend: { display: false }, tooltip: TOOLTIP_STYLE },
        scales: {
          x: { grid: GRID, ticks: { stepSize: 1 } },
          y: { grid: { display: false } }
        }
      }
    });
  }

  // ── 5. IMDb Trend Line Chart ──
  const ctxImdb = document.getElementById('imdbTrendChart');
  if (ctxImdb) {
    new Chart(ctxImdb, {
      type: 'line',
      data: {
        labels: [
          'Apoorva Raagangal','Mullum Malarum','Billa','Thillu Mullu',
          'Thalapathi','Baasha','Padayappa','Chandramukhi','Sivaji',
          'Enthiran','Kabali','Petta','Jailer','Vettaiyan'
        ],
        datasets: [{
          label: 'IMDb Rating',
          data: [8.5, 9.1, 8.9, 9.3, 9.4, 9.6, 9.3, 8.7, 8.9, 9.1, 8.3, 8.9, 9.0, 8.5],
          borderColor: '#00E5FF',
          backgroundColor: 'rgba(0,229,255,0.1)',
          borderWidth: 2.5, tension: 0.4, fill: true,
          pointBackgroundColor: '#FFD60A',
          pointRadius: 5, pointHoverRadius: 9
        }]
      },
      options: {
        responsive: true,
        animation: { duration: 2200, easing: 'easeOutSine' },
        plugins: { legend: { display: false }, tooltip: TOOLTIP_STYLE },
        scales: {
          y: { grid: GRID, min: 6, max: 10 },
          x: { grid: GRID, ticks: { maxRotation: 45, font: { size: 10 } } }
        }
      }
    });
  }

  // ── 6. IMDb Rating vs Box Office Scatter ──
  const ctxScatter = document.getElementById('scatterChart');
  if (ctxScatter) {
    scatterChart = new Chart(ctxScatter, {
      type: 'scatter',
      data: {
        datasets: [{
          label: 'Movies',
          data: FULL_DATA['all'].scatterData,
          backgroundColor: '#00E5FF',
          pointRadius: 8, pointHoverRadius: 12,
          pointHoverBackgroundColor: '#FFD60A'
        }]
      },
      options: {
        responsive: true,
        animation: { duration: 2000, easing: 'easeOutElastic' },
        plugins: {
          legend: { display: false },
          tooltip: {
            ...TOOLTIP_STYLE,
            callbacks: {
              label: (ctx) => {
                const item = ctx.raw;
                return `${item.title} — ⭐ ${item.x} | ₹${item.y}Cr`;
              }
            }
          }
        },
        scales: {
          x: { title: { display: true, text: 'IMDb Rating', color: '#A89B7A' }, grid: GRID },
          y: { title: { display: true, text: 'Box Office (₹ Crores)', color: '#A89B7A' }, grid: GRID }
        }
      }
    });
  }

  // ── 7. Career Timeline — Films per Decade Bar ──
  const ctxTimeline = document.getElementById('timelineChart');
  if (ctxTimeline) {
    new Chart(ctxTimeline, {
      type: 'bar',
      data: {
        labels: ['1970s', '1980s', '1990s', '2000s', '2010s', '2020s'],
        datasets: [{
          label: 'Films Released',
          data: [6, 7, 8, 3, 6, 6],
          backgroundColor: 'rgba(255,184,0,0.3)',
          borderColor: '#FFB800',
          borderWidth: 2,
          borderRadius: 4
        }]
      },
      options: {
        responsive: true,
        animation: { duration: 1600, easing: 'easeOutQuart' },
        plugins: { legend: { display: false }, tooltip: TOOLTIP_STYLE },
        scales: {
          y: { grid: GRID, ticks: { stepSize: 1 }, title: { display: true, text: 'No. of Films', color: '#A89B7A' } },
          x: { grid: { display: false } }
        }
      }
    });
  }

  // ── 8. Awards & Milestones Radar / Polar Chart ──
  const ctxAwards = document.getElementById('awardsChart');
  if (ctxAwards) {
    new Chart(ctxAwards, {
      type: 'polarArea',
      data: {
        labels: ['Filmfare Awards', 'Tamil Nadu State', 'National Awards', 'Vijay Awards', 'SIIMA Awards', 'Honorary'],
        datasets: [{
          data: [7, 9, 3, 6, 5, 4],
          backgroundColor: [
            'rgba(255,184,0,0.5)',
            'rgba(0,229,255,0.5)',
            'rgba(229,9,20,0.5)',
            'rgba(123,47,255,0.5)',
            'rgba(255,107,53,0.5)',
            'rgba(0,255,136,0.5)'
          ],
          borderColor: [
            '#FFB800','#00E5FF','#E50914','#7B2FFF','#FF6B35','#00FF88'
          ],
          borderWidth: 2
        }]
      },
      options: {
        responsive: true,
        animation: { duration: 2000, animateRotate: true },
        plugins: {
          legend: {
            display: true,
            position: 'bottom',
            labels: { color: '#C0B28F', padding: 12, font: { size: 11, weight: '600' } }
          },
          tooltip: TOOLTIP_STYLE
        },
        scales: {
          r: {
            grid: { color: 'rgba(255,255,255,0.08)' },
            ticks: { display: false }
          }
        }
      }
    });
  }
}

function updateCharts(decade) {
  const data = FULL_DATA[decade];
  if (!data) return;

  if (topMoviesChart) {
    topMoviesChart.data.labels = data.topLabels;
    topMoviesChart.data.datasets[0].data = data.topData;
    topMoviesChart.update();
  }

  if (scatterChart) {
    scatterChart.data.datasets[0].data = data.scatterData;
    scatterChart.update();
  }
}

document.addEventListener('DOMContentLoaded', () => {
  initCharts();

  const buttons = document.querySelectorAll('.control-btn');
  buttons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      buttons.forEach(b => b.classList.remove('active'));
      e.target.classList.add('active');
      updateCharts(e.target.dataset.decade);
    });
  });
});
