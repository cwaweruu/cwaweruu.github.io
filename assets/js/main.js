/* main.js */
document.addEventListener('DOMContentLoaded', function () {

  // Page load animation
  setTimeout(function () { document.body.classList.add('ready'); }, 40);

  // Active nav link
  var page = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav__link').forEach(function (a) {
    if (a.getAttribute('href') === page) a.classList.add('active');
  });

  // Scroll: nav shadow
  var nav = document.querySelector('.nav');
  window.addEventListener('scroll', function () {
    nav && nav.classList.toggle('scrolled', window.scrollY > 8);
  }, { passive: true });

  // Hamburger
  var ham = document.querySelector('.nav__ham');
  var drawer = document.querySelector('.nav__drawer');
  if (ham && drawer) {
    ham.addEventListener('click', function () {
      ham.classList.toggle('open');
      drawer.classList.toggle('open');
    });
    drawer.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () {
        ham.classList.remove('open');
        drawer.classList.remove('open');
      });
    });
  }

  // Scroll reveal
  var revealEls = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && revealEls.length) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add('on'); io.unobserve(e.target); }
      });
    }, { threshold: 0.1 });
    revealEls.forEach(function (el) { io.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add('on'); });
  }

  // Project filter
  document.querySelectorAll('.f-btn').forEach(function (btn) {
    btn.addEventListener('click', function () {
      document.querySelectorAll('.f-btn').forEach(function (b) { b.classList.remove('active'); });
      btn.classList.add('active');
      var filter = btn.dataset.filter;
      document.querySelectorAll('.proj-card').forEach(function (c) {
        c.classList.toggle('hidden', filter !== 'all' && c.dataset.cat !== filter);
      });
    });
  });

});
