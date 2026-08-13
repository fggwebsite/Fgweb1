const lenis = new Lenis({
  duration: 1.2,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  smoothWheel: true,
  wheelMultiplier: 1,
  touchMultiplier: 1.5,
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}
requestAnimationFrame(raf);

// Mobile nav toggle
const navToggle = document.getElementById('nav-toggle');
const siteNav = document.getElementById('site-nav');

navToggle.addEventListener('click', () => {
  navToggle.classList.toggle('is-open');
  siteNav.classList.toggle('is-open');
  const expanded = navToggle.getAttribute('aria-expanded') === 'true';
  navToggle.setAttribute('aria-expanded', String(!expanded));
});

// Close mobile menu after clicking a link
document.querySelectorAll('.site-header__nav a').forEach(link => {
  link.addEventListener('click', () => {
    navToggle.classList.remove('is-open');
    siteNav.classList.remove('is-open');
    navToggle.setAttribute('aria-expanded', 'false');
  });
});