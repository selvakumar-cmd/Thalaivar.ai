// ================================================
// THALAIVAR.AI — Main JS (Shared Utilities)
// ================================================

// ── Navigation Toggle ──
function toggleNav() {
  const links = document.getElementById('navLinks');
  links && links.classList.toggle('open');
}

// ── Toast Notification ──
function showToast(message, icon = '⭐') {
  let container = document.getElementById('toastContainer');
  if (!container) {
    container = document.createElement('div');
    container.id = 'toastContainer';
    document.body.appendChild(container);
  }
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `<span>${icon}</span><span>${message}</span>`;
  container.appendChild(toast);
  setTimeout(() => toast.remove(), 3200);
}

// ── Animate Numbers (Count Up) ──
function animateCountUp(el, target, suffix = '', duration = 2000) {
  let start = 0;
  const step = target / (duration / 16);
  const timer = setInterval(() => {
    start = Math.min(start + step, target);
    el.textContent = Math.floor(start) + suffix;
    if (start >= target) clearInterval(timer);
  }, 16);
}

// ── Intersection Observer for animations ──
function initScrollAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        // Count up stats
        const nums = entry.target.querySelectorAll('[data-count]');
        nums.forEach(el => {
          const val = parseInt(el.dataset.count);
          animateCountUp(el, val);
        });
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.card, .section-title, .hero-stats').forEach(el => {
    if (!el.style.opacity) {
      el.style.opacity = '0';
      el.style.transform = 'translateY(20px)';
      el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    }
    observer.observe(el);
  });
}

// ── Count up stats in hero ──
function initHeroStats() {
  const statNums = document.querySelectorAll('.hero-stat-num[data-count]');
  statNums.forEach(el => {
    const target = parseInt(el.dataset.count);
    const suffix = el.dataset.suffix || '';
    setTimeout(() => animateCountUp(el, target, suffix, 2000), 600);
  });
  // Static suffix items
  document.querySelectorAll('.hero-stat-num[data-suffix]:not([data-count])').forEach(el => {
    el.textContent = el.textContent + el.dataset.suffix;
  });
}

// ── Active nav link highlight ──
function setActiveNav() {
  const current = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(a => {
    a.classList.remove('active');
    const href = a.getAttribute('href');
    if (href === current || (current === '' && href === 'index.html')) {
      a.classList.add('active');
    }
  });
}

// ── Smooth Scroll for anchor links ──
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(a.getAttribute('href'));
    if (target) target.scrollIntoView({ behavior: 'smooth' });
  });
});

// ── API Base URL ──
window.API_BASE = 'http://localhost:8080/api';

// ── Fetch helper ──
async function apiFetch(endpoint) {
  try {
    const res = await fetch(`${window.API_BASE}${endpoint}`);
    if (!res.ok) throw new Error('API Error');
    return await res.json();
  } catch (e) {
    // Return null if backend not running (frontend demo mode)
    return null;
  }
}

// ── Init ──
document.addEventListener('DOMContentLoaded', () => {
  setActiveNav();
  initHeroStats();
  setTimeout(initScrollAnimations, 100);
});
