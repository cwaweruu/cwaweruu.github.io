/* ============================================================
   main.js — Navigation, Animations, Filters
   ============================================================ */

document.addEventListener('DOMContentLoaded', function () {

  // ── Page Load Animation ──────────────────────────────────
  setTimeout(function () {
    document.body.classList.add('loaded');
  }, 50);

  // ── Active Nav Link ──────────────────────────────────────
  var path = window.location.pathname.split('/').pop() || 'index.html';
  var navLinks = document.querySelectorAll('.nav__link');
  navLinks.forEach(function (link) {
    var href = link.getAttribute('href');
    if (href === path || (path === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });

  // ── Scroll: Nav shadow ───────────────────────────────────
  var nav = document.querySelector('.nav');
  if (nav) {
    window.addEventListener('scroll', function () {
      if (window.scrollY > 10) {
        nav.classList.add('scrolled');
      } else {
        nav.classList.remove('scrolled');
      }
    }, { passive: true });
  }

  // ── Mobile Hamburger ─────────────────────────────────────
  var hamburger = document.querySelector('.nav__hamburger');
  var mobileNav = document.querySelector('.nav__mobile');
  if (hamburger && mobileNav) {
    hamburger.addEventListener('click', function () {
      hamburger.classList.toggle('open');
      mobileNav.classList.toggle('open');
    });
    // Close on link click
    mobileNav.querySelectorAll('.nav__link').forEach(function (link) {
      link.addEventListener('click', function () {
        hamburger.classList.remove('open');
        mobileNav.classList.remove('open');
      });
    });
  }

  // ── Scroll Reveal ─────────────────────────────────────────
  var reveals = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && reveals.length > 0) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    reveals.forEach(function (el) { observer.observe(el); });
  } else {
    // Fallback: show all
    reveals.forEach(function (el) { el.classList.add('visible'); });
  }

  // ── Project Filter ────────────────────────────────────────
  var filterBtns = document.querySelectorAll('.filter-btn');
  var projectCards = document.querySelectorAll('.project-card');
  if (filterBtns.length > 0) {
    filterBtns.forEach(function (btn) {
      btn.addEventListener('click', function () {
        // Update active button
        filterBtns.forEach(function (b) { b.classList.remove('active'); });
        btn.classList.add('active');

        var filter = btn.getAttribute('data-filter');
        projectCards.forEach(function (card) {
          if (filter === 'all' || card.getAttribute('data-category') === filter) {
            card.classList.remove('hidden');
          } else {
            card.classList.add('hidden');
          }
        });
      });
    });
  }

  // ── Stagger reveal for grid items ─────────────────────────
  var staggerGroups = document.querySelectorAll('.stagger-group');
  staggerGroups.forEach(function (group) {
    var items = group.querySelectorAll('.reveal');
    items.forEach(function (item, i) {
      item.style.transitionDelay = (0.08 * i) + 's';
    });
  });

});
