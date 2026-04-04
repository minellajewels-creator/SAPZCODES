/* ============================================================
   SAPZCODES — main.js
   ============================================================ */

// ── CURSOR ─────────────────────────────────────────────────
const cur  = document.getElementById('cur');
const ring = document.getElementById('ring');
let mx = 0, my = 0, rx = 0, ry = 0;

document.addEventListener('mousemove', e => {
  mx = e.clientX; my = e.clientY;
  cur.style.left = mx + 'px';
  cur.style.top  = my + 'px';
});

(function tick() {
  rx += (mx - rx) * .11;
  ry += (my - ry) * .11;
  ring.style.left = rx + 'px';
  ring.style.top  = ry + 'px';
  requestAnimationFrame(tick);
})();

document.querySelectorAll('a, button, .mc, .fc_, .cc, .sr, .fp, .sic, .sb').forEach(el => {
  el.addEventListener('mouseenter', () => document.body.classList.add('hov'));
  el.addEventListener('mouseleave', () => document.body.classList.remove('hov'));
});

// ── HAMBURGER ──────────────────────────────────────────────
function togM() {
  document.getElementById('hb').classList.toggle('op');
  document.getElementById('mob').classList.toggle('op');
}

// ── NAVBAR SCROLL ──────────────────────────────────────────
window.addEventListener('scroll', () => {
  document.getElementById('nv').classList.toggle('sc', scrollY > 36);
});

// ── ACTIVE NAV LINK ────────────────────────────────────────
(function() {
  const page = location.pathname.split('/').pop().replace('.html','') || 'index';
  document.querySelectorAll('.nl a, .mm a').forEach(a => {
    const href = a.getAttribute('href').replace('.html','');
    if (href === page) a.classList.add('on');
  });
})();

// ── SCROLL REVEAL ──────────────────────────────────────────
const io = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) { e.target.classList.add('vis'); io.unobserve(e.target); }
  });
}, { threshold: .1 });

document.querySelectorAll('.fu').forEach(el => io.observe(el));

// ── PREVENT DEFAULT ON # ───────────────────────────────────
document.querySelectorAll('a[href="#"]').forEach(a =>
  a.addEventListener('click', e => e.preventDefault())
);
