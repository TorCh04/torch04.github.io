'use strict';

/* ── Scroll reveal ─────────────────────────────────────────── */
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
);

document.querySelectorAll('.reveal, .reveal-stagger').forEach((el) => {
  revealObserver.observe(el);
});

/* ── Active nav link on scroll ─────────────────────────────── */
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

const sectionObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        navLinks.forEach((link) => link.classList.remove('active'));
        const active = document.querySelector(`.nav-link[href="#${entry.target.id}"]`);
        if (active) active.classList.add('active');
      }
    });
  },
  { threshold: 0.45 }
);

sections.forEach((s) => sectionObserver.observe(s));

/* ── Navbar scroll state ───────────────────────────────────── */
const navbar = document.getElementById('navbar');
if (navbar) {
  window.addEventListener(
    'scroll',
    () => { navbar.classList.toggle('scrolled', window.scrollY > 20); },
    { passive: true }
  );
}

/* ── Mobile hamburger ──────────────────────────────────────── */
const hamburger = document.getElementById('hamburger');
const navLinkList = document.getElementById('navLinks');

if (hamburger && navLinkList) {
  hamburger.addEventListener('click', () => {
    const isOpen = navLinkList.classList.toggle('is-open');
    hamburger.classList.toggle('is-open', isOpen);
    hamburger.setAttribute('aria-expanded', String(isOpen));
  });

  navLinkList.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      navLinkList.classList.remove('is-open');
      hamburger.classList.remove('is-open');
      hamburger.setAttribute('aria-expanded', 'false');
    });
  });
}
