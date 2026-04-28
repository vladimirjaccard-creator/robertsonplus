document.addEventListener('DOMContentLoaded', () => {

  /* ─────────────────────────────────────────────────────────
     Custom cursor — cross symbol tracks the mouse pointer.
     Rotates 45° on hover over interactive elements.
  ───────────────────────────────────────────────────────── */
  const cursor = document.getElementById('cursor');
  let mouseX = -100, mouseY = -100;
  let rafId = null;

  const moveCursor = () => {
    cursor.style.left = mouseX + 'px';
    cursor.style.top  = mouseY + 'px';
    rafId = null;
  };

  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    if (!rafId) rafId = requestAnimationFrame(moveCursor);
    cursor.classList.remove('is-hidden');
  });

  document.addEventListener('mouseleave', () => cursor.classList.add('is-hidden'));
  document.addEventListener('mouseenter', () => cursor.classList.remove('is-hidden'));

  const interactiveSelector = 'a, button, input, textarea, select, label, [role="button"]';

  document.querySelectorAll(interactiveSelector).forEach(el => {
    el.addEventListener('mouseenter', () => cursor.classList.add('is-hovering'));
    el.addEventListener('mouseleave', () => cursor.classList.remove('is-hovering'));
  });

  document.addEventListener('mousedown', () => cursor.classList.add('is-clicking'));
  document.addEventListener('mouseup',   () => cursor.classList.remove('is-clicking'));


  /* ─────────────────────────────────────────────────────────
     Sticky header shadow on scroll
  ───────────────────────────────────────────────────────── */
  const header = document.getElementById('site-header');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }, { passive: true });


  /* ─────────────────────────────────────────────────────────
     Mobile navigation toggle
  ───────────────────────────────────────────────────────── */
  const navToggle  = document.getElementById('nav-toggle');
  const mobileNav  = document.getElementById('mobile-nav');

  if (navToggle && mobileNav) {
    navToggle.addEventListener('click', () => {
      const isOpen = mobileNav.classList.toggle('open');
      navToggle.setAttribute('aria-expanded', String(isOpen));
      mobileNav.setAttribute('aria-hidden', String(!isOpen));
    });

    mobileNav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mobileNav.classList.remove('open');
        navToggle.setAttribute('aria-expanded', 'false');
        mobileNav.setAttribute('aria-hidden', 'true');
      });
    });
  }


  /* ─────────────────────────────────────────────────────────
     Smooth scroll for all internal anchor links
  ───────────────────────────────────────────────────────── */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const target = document.querySelector(anchor.getAttribute('href'));
      if (target) {
        e.preventDefault();
        const navH = header ? header.offsetHeight : 0;
        const top  = target.getBoundingClientRect().top + window.scrollY - navH;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    });
  });


  /* ─────────────────────────────────────────────────────────
     Scroll reveal — staggered fade-in on section content
  ───────────────────────────────────────────────────────── */
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        const delay = entry.target.dataset.delay || 0;
        setTimeout(() => {
          entry.target.classList.add('visible');
        }, Number(delay));
        revealObserver.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.12,
    rootMargin: '0px 0px -40px 0px'
  });

  document.querySelectorAll('.reveal').forEach((el, i) => {
    el.dataset.delay = (i % 4) * 80;
    revealObserver.observe(el);
  });


  /* ─────────────────────────────────────────────────────────
     Contact form — prevent default, show confirmation
  ───────────────────────────────────────────────────────── */
  const form = document.getElementById('contact-form');

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const btn = form.querySelector('button[type="submit"]');
      const original = btn.textContent;

      btn.textContent = 'Enquiry received — we will be in touch.';
      btn.disabled = true;
      btn.style.background = '#526163';

      setTimeout(() => {
        btn.textContent = original;
        btn.disabled = false;
        btn.style.background = '';
        form.reset();
      }, 5000);
    });
  }

});
