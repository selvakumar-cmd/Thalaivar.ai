// ================================================
// THALAIVAR.AI — Interactive Analytics Logic
// ================================================

Chart.defaults.color = '#A89B7A';
Chart.defaults.font.family = "'Outfit', sans-serif";

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
  // 1. Decade Chart (Static overall trend)
  const ctxDecade = document.getElementById('decadeChart');
  if (ctxDecade) {
    decadeChart = new Chart(ctxDecade, {
      type: 'line',
      data: {
        labels: ['1970s', '1980s', '1990s', '2000s', '2010s', '2020s'],
        datasets: [{
          label: 'Est. Box Office (Crores)',
          data: [15, 80, 350, 800, 2500, 2000],
          borderColor: '#FFB800',
          backgroundColor: 'rgba(255, 184, 0, 0.2)',
          borderWidth: 3,
          tension: 0.4,
          fill: true,
          pointBackgroundColor: '#FFD60A',
          pointRadius: 6,
          pointHoverRadius: 8
        }]
      },
      options: {
        responsive: true,
        animation: { duration: 2000, easing: 'easeOutQuart' },
        plugins: {
          legend: { display: false },
          tooltip: {
            backgroundColor: 'rgba(0,0,0,0.8)',
            titleColor: '#FFB800',
            bodyFont: { size: 14, weight: 'bold' },
            padding: 12,
            borderColor: 'rgba(255,184,0,0.5)',
            borderWidth: 1
          }
        },
        scales: {
          y: { grid: { color: 'rgba(255, 255, 255, 0.05)' } },
          x: { grid: { color: 'rgba(255, 255, 255, 0.05)' } }
        }
      }
    });
  }

  // 2. Top Movies Bar Chart
  const ctxTop = document.getElementById('topMoviesChart');
  if (ctxTop) {
    topMoviesChart = new Chart(ctxTop, {
      type: 'bar',
      data: {
        labels: FULL_DATA['all'].topLabels,
        datasets: [{
          label: 'Box Office (Crores)',
          data: FULL_DATA['all'].topData,
          backgroundColor: ['#FFD60A', '#FFB800', '#CC9200', '#FF3D3D', '#A89B7A'],
          borderRadius: 4
        }]
      },
      options: {
        responsive: true,
        animation: { duration: 1500, easing: 'easeOutBounce' },
        plugins: {
          legend: { display: false },
          tooltip: {
            backgroundColor: 'rgba(0,0,0,0.8)',
            titleColor: '#FFB800',
            bodyFont: { size: 14, weight: 'bold' },
            padding: 12
          }
        },
        scales: {
          y: { grid: { color: 'rgba(255, 255, 255, 0.05)' } },
          x: { grid: { display: false } }
        }
      }
    });
  }

  // 3. Scatter Chart (Rating vs Box Office)
  const ctxScatter = document.getElementById('scatterChart');
  if (ctxScatter) {
    scatterChart = new Chart(ctxScatter, {
      type: 'scatter',
      data: {
        datasets: [{
          label: 'Movies',
          data: FULL_DATA['all'].scatterData,
          backgroundColor: '#00E5FF',
          pointRadius: 8,
          pointHoverRadius: 12,
          pointHoverBackgroundColor: '#FFD60A'
        }]
      },
      options: {
        responsive: true,
        animation: { duration: 2000, easing: 'easeOutElastic' },
        plugins: {
          legend: { display: false },
          tooltip: {
            backgroundColor: 'rgba(0,0,0,0.9)',
            titleColor: '#00E5FF',
            bodyFont: { size: 14, weight: 'bold' },
            padding: 12,
            callbacks: {
              label: (ctx) => {
                const item = ctx.raw;
                return `${item.title} — Rating: ${item.x} | BO: ₹${item.y}Cr`;
              }
            }
          }
        },
        scales: {
          x: { title: { display: true, text: 'IMDb Rating', color: '#A89B7A' }, grid: { color: 'rgba(255,255,255,0.05)' } },
          y: { title: { display: true, text: 'Box Office (Crores)', color: '#A89B7A' }, grid: { color: 'rgba(255,255,255,0.05)' } }
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
  
  // Filter Logic
  const buttons = document.querySelectorAll('.control-btn');
  buttons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      buttons.forEach(b => b.classList.remove('active'));
      e.target.classList.add('active');
      const decade = e.target.dataset.decade;
      updateCharts(decade);
    });
  });
});
