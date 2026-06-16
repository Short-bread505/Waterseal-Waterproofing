/* =========================================================
   WATERSEAL WATERPROOFING — interactions
   ========================================================= */
(function () {
  'use strict';

  /* ---- sticky header condensed state ---- */
  var header = document.querySelector('[data-header]');
  function onScroll() {
    if (window.scrollY > 30) header.setAttribute('data-scrolled', '');
    else header.removeAttribute('data-scrolled');
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ---- mobile nav ---- */
  var toggle = document.getElementById('navToggle');
  var mobileNav = document.getElementById('mobileNav');

  function setNav(open) {
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    header.classList.toggle('nav-open', open);
    if (open) {
      mobileNav.hidden = false;
      // next frame so the display change can animate if desired
      requestAnimationFrame(function () { mobileNav.classList.add('open'); });
    } else {
      mobileNav.classList.remove('open');
      mobileNav.hidden = true;
    }
  }
  toggle.addEventListener('click', function () {
    setNav(toggle.getAttribute('aria-expanded') !== 'true');
  });
  mobileNav.querySelectorAll('a').forEach(function (a) {
    a.addEventListener('click', function () { setNav(false); });
  });
  window.addEventListener('resize', function () {
    if (window.innerWidth > 760) setNav(false);
  });

  /* ---- reveal on scroll ---- */
  var reveals = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          e.target.classList.add('in');
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' });
    reveals.forEach(function (el) { io.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.add('in'); });
  }

  /* ---- animated stat counters ---- */
  var counters = document.querySelectorAll('.stat-num[data-count]');
  function animateCount(el) {
    var target = parseFloat(el.getAttribute('data-count'));
    var suffix = el.getAttribute('data-suffix') || '';
    var dur = 1400, start = null;
    function step(ts) {
      if (!start) start = ts;
      var p = Math.min((ts - start) / dur, 1);
      var eased = 1 - Math.pow(1 - p, 3);
      el.textContent = Math.round(target * eased) + suffix;
      if (p < 1) requestAnimationFrame(step);
      else el.textContent = target + suffix;
    }
    requestAnimationFrame(step);
  }
  if ('IntersectionObserver' in window) {
    var co = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { animateCount(e.target); co.unobserve(e.target); }
      });
    }, { threshold: 0.6 });
    counters.forEach(function (el) { co.observe(el); });
  } else {
    counters.forEach(function (el) {
      el.textContent = el.getAttribute('data-count') + (el.getAttribute('data-suffix') || '');
    });
  }

  /* ---- contact form (demo handler — wire to email/CRM before launch) ---- */
  var form = document.getElementById('quoteForm');
  var note = document.getElementById('formNote');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var ok = true;
      ['name', 'phone'].forEach(function (id) {
        var input = document.getElementById(id);
        var field = input.closest('.field');
        if (!input.value.trim()) { field.classList.add('invalid'); ok = false; }
        else field.classList.remove('invalid');
      });
      if (!ok) {
        note.textContent = 'Please add your name and phone so we can call you back.';
        note.style.color = '#e2574c';
        return;
      }
      var name = document.getElementById('name').value.trim().split(' ')[0];
      form.querySelector('button[type="submit"]').disabled = true;
      note.innerHTML = 'Thanks' + (name ? ', ' + name : '') +
        '! Your request has been noted — we’ll be in touch shortly. ' +
        'Need us now? <a href="tel:0418629185">Call 0418 629 185</a>.';
      note.style.color = '';
      form.querySelectorAll('input,select,textarea').forEach(function (el) { el.value = ''; });
    });
  }

  /* ---- current year ---- */
  var yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();
})();
