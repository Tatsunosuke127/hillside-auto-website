/* ============================================
   Main JavaScript
   ============================================ */

(function () {
  'use strict';

  // --- Header scroll effect ---
  var header = document.querySelector('.header');
  if (header) {
    window.addEventListener('scroll', function () {
      header.classList.toggle('header--scrolled', window.scrollY > 10);
    }, { passive: true });
  }

  // --- Mobile menu toggle ---
  var hamburger = document.querySelector('.header__hamburger');
  var mobileMenu = document.querySelector('.mobile-menu');
  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', function () {
      var isActive = hamburger.classList.toggle('active');
      mobileMenu.classList.toggle('active', isActive);
      document.body.style.overflow = isActive ? 'hidden' : '';
    });

    // Close menu on nav link click
    mobileMenu.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        hamburger.classList.remove('active');
        mobileMenu.classList.remove('active');
        document.body.style.overflow = '';
      });
    });
  }

  // --- Smooth scroll for anchor links ---
  document.querySelectorAll('a[href^="#"]').forEach(function (link) {
    link.addEventListener('click', function (e) {
      var targetId = this.getAttribute('href');
      if (targetId === '#') return;
      var target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        var headerHeight = header ? header.offsetHeight : 0;
        var top = target.getBoundingClientRect().top + window.scrollY - headerHeight;
        window.scrollTo({ top: top, behavior: 'smooth' });
      }
    });
  });

  // --- Intersection Observer for fade-in ---
  var fadeEls = document.querySelectorAll('.fade-in');
  if (fadeEls.length > 0 && 'IntersectionObserver' in window) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

    fadeEls.forEach(function (el) {
      observer.observe(el);
    });
  }

  // --- Accordion ---
  document.querySelectorAll('.accordion__header').forEach(function (header) {
    header.addEventListener('click', function () {
      var accordion = this.parentElement;
      var body = accordion.querySelector('.accordion__body');
      var isActive = accordion.classList.contains('active');

      // Close other accordions in same group
      var group = accordion.closest('.accordion-group');
      if (group) {
        group.querySelectorAll('.accordion.active').forEach(function (item) {
          if (item !== accordion) {
            item.classList.remove('active');
            item.querySelector('.accordion__body').style.maxHeight = null;
          }
        });
      }

      accordion.classList.toggle('active', !isActive);
      if (!isActive) {
        body.style.maxHeight = body.scrollHeight + 'px';
      } else {
        body.style.maxHeight = null;
      }
    });
  });

  // --- Scroll to top button ---
  var scrollTopBtn = document.querySelector('.scroll-top');
  if (scrollTopBtn) {
    window.addEventListener('scroll', function () {
      scrollTopBtn.classList.toggle('visible', window.scrollY > 500);
    }, { passive: true });

    scrollTopBtn.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // --- Headline reveal (char-by-char JA / word-by-word EN) ---
  var headlineReveals = document.querySelectorAll('.headline-reveal');
  if (headlineReveals.length > 0) {
    headlineReveals.forEach(function (el) {
      // Skip if already split (defensive)
      if (el.dataset.split === '1') return;

      var splitMode = el.hasAttribute('data-lang-en') ? 'word' : 'char';
      var idx = 0;
      var newNodes = [];

      Array.prototype.forEach.call(el.childNodes, function (node) {
        if (node.nodeType === 1 && node.tagName === 'BR') {
          newNodes.push(node.cloneNode(false));
          return;
        }
        if (node.nodeType !== 3) {
          newNodes.push(node.cloneNode(true));
          return;
        }
        var text = node.textContent;
        var parts = splitMode === 'word'
          ? text.split(/(\s+)/)
          : Array.from(text);

        parts.forEach(function (p) {
          if (p === '') return;
          if (/^\s+$/.test(p)) {
            newNodes.push(document.createTextNode(p));
            return;
          }
          var span = document.createElement('span');
          span.textContent = p;
          span.style.setProperty('--delay', (idx * 30) + 'ms');
          idx++;
          newNodes.push(span);
        });
      });

      el.innerHTML = '';
      newNodes.forEach(function (n) { el.appendChild(n); });
      el.dataset.split = '1';
    });

    if ('IntersectionObserver' in window) {
      var revealObs = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('in');
            revealObs.unobserve(entry.target);
          }
        });
      }, { threshold: 0.2 });
      headlineReveals.forEach(function (el) { revealObs.observe(el); });
    } else {
      headlineReveals.forEach(function (el) { el.classList.add('in'); });
    }

    // Re-trigger when language switches (the previously hidden h1 needs to animate)
    document.addEventListener('hillside:langchange', function () {
      setTimeout(function () {
        headlineReveals.forEach(function (el) {
          if (el.offsetParent !== null) el.classList.add('in');
        });
      }, 50);
    });
  }

  // --- Active nav link ---
  var currentPath = window.location.pathname.replace(/\/$/, '') || '/';
  var fileName = currentPath.split('/').pop() || 'index.html';
  document.querySelectorAll('.header__nav a, .mobile-menu__nav a').forEach(function (link) {
    var href = link.getAttribute('href');
    if (href === fileName || (fileName === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });
})();
