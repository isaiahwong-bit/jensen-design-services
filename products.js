/* ============================================
   Products Page - Script
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {

  // --- Mobile menu toggle ---
  const navToggle = document.getElementById('navToggle');
  const navMenu = document.getElementById('navMenu');

  if (navToggle) {
    navToggle.addEventListener('click', () => {
      navToggle.classList.toggle('active');
      navMenu.classList.toggle('active');
      document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
    });

    navMenu.querySelectorAll('.nav__link').forEach(link => {
      link.addEventListener('click', () => {
        navToggle.classList.remove('active');
        navMenu.classList.remove('active');
        document.body.style.overflow = '';
      });
    });
  }

  // --- Expandable product items ---
  document.querySelectorAll('[data-expandable]').forEach(item => {
    const header = item.querySelector('.product-item__header');
    const toggle = item.querySelector('.product-item__toggle');

    const expand = () => {
      const wasExpanded = item.classList.contains('expanded');
      item.classList.toggle('expanded');

      // Smooth scroll into view if expanding
      if (!wasExpanded) {
        setTimeout(() => {
          item.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }, 100);
      }
    };

    if (header) header.addEventListener('click', expand);
  });

  // --- Quick Jump active state on scroll ---
  const quickJumpLinks = document.querySelectorAll('.quick-jump__link');
  const productSections = document.querySelectorAll('.product-section[id]');

  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.id;
        quickJumpLinks.forEach(link => {
          link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
        });
      }
    });
  }, {
    root: null,
    rootMargin: '-120px 0px -60% 0px',
    threshold: 0
  });

  productSections.forEach(section => sectionObserver.observe(section));

  // --- Smooth scroll for quick jump links ---
  quickJumpLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const target = document.querySelector(link.getAttribute('href'));
      if (target) {
        const offset = 120; // Account for sticky nav + quick jump
        const top = target.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    });
  });

  // --- Back to top button ---
  const backToTop = document.getElementById('backToTop');
  if (backToTop) {
    window.addEventListener('scroll', () => {
      backToTop.classList.toggle('visible', window.scrollY > 500);
    }, { passive: true });

    backToTop.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // --- Scroll animations ---
  const animateElements = document.querySelectorAll('.product-item, .product-compact-card, .tech-banner__item');
  animateElements.forEach(el => el.classList.add('fade-in'));

  const fadeObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        // Stagger animation
        setTimeout(() => {
          entry.target.classList.add('visible');
        }, index * 50);
        fadeObserver.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.05,
    rootMargin: '0px 0px -30px 0px'
  });

  animateElements.forEach(el => fadeObserver.observe(el));
});
