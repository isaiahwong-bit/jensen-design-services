/* ============================================
   Jensen Design & Service - Main Script
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {

  // --- Navigation scroll effect ---
  const nav = document.getElementById('nav');
  const handleScroll = () => {
    if (window.scrollY > 80) {
      nav.classList.add('nav--scrolled');
    } else {
      nav.classList.remove('nav--scrolled');
    }
  };
  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();

  // --- Mobile menu toggle ---
  const navToggle = document.getElementById('navToggle');
  const navMenu = document.getElementById('navMenu');

  if (navToggle) {
    navToggle.addEventListener('click', () => {
      navToggle.classList.toggle('active');
      navMenu.classList.toggle('active');
      document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
    });

    // Close menu on link click
    navMenu.querySelectorAll('.nav__link').forEach(link => {
      link.addEventListener('click', () => {
        navToggle.classList.remove('active');
        navMenu.classList.remove('active');
        document.body.style.overflow = '';
      });
    });
  }

  // --- Active nav link on scroll ---
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav__link');

  const observerOptions = {
    root: null,
    rootMargin: '-20% 0px -80% 0px',
    threshold: 0
  };

  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.id;
        navLinks.forEach(link => {
          link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
        });
      }
    });
  }, observerOptions);

  sections.forEach(section => sectionObserver.observe(section));

  // --- Hero stat counter animation ---
  const statNumbers = document.querySelectorAll('.hero__stat-number[data-count]');
  let statAnimated = false;

  const animateStats = () => {
    if (statAnimated) return;
    statAnimated = true;

    statNumbers.forEach(el => {
      const target = parseInt(el.dataset.count);
      const duration = 2000;
      const start = performance.now();

      const updateCount = (now) => {
        const elapsed = now - start;
        const progress = Math.min(elapsed / duration, 1);
        // Ease out cubic
        const eased = 1 - Math.pow(1 - progress, 3);
        const current = Math.round(target * eased);
        el.textContent = current;

        if (progress < 1) {
          requestAnimationFrame(updateCount);
        }
      };

      requestAnimationFrame(updateCount);
    });
  };

  // Trigger stat animation when hero is in view
  const heroObserver = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
      animateStats();
      heroObserver.disconnect();
    }
  }, { threshold: 0.3 });

  const heroSection = document.getElementById('home');
  if (heroSection) heroObserver.observe(heroSection);

  // --- Product category filtering ---
  const filterBtns = document.querySelectorAll('.filter-btn');
  const productCards = document.querySelectorAll('.product-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const filter = btn.dataset.filter;

      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      productCards.forEach(card => {
        const category = card.dataset.category;
        if (filter === 'all' || category === filter) {
          card.classList.remove('hidden');
          card.style.animation = 'fadeScale 0.4s ease forwards';
        } else {
          card.classList.add('hidden');
        }
      });
    });
  });

  // --- Product modal ---
  const modal = document.getElementById('productModal');
  const modalOverlay = document.getElementById('modalOverlay');
  const modalClose = document.getElementById('modalClose');
  const modalBody = document.getElementById('modalBody');

  const productData = {
    b1080: {
      title: 'B 1080-3F Mainstation',
      description: 'The B 1080-3F is a high-capacity centralised foam cleaning station designed for large-scale food processing facilities. It provides reliable, consistent cleaning with multiple chemical connections for versatile applications.',
      specs: [
        { label: 'Type', value: 'Mainstation' },
        { label: 'Chemicals', value: '3 connections' },
        { label: 'Capacity', value: 'High volume' },
        { label: 'Application', value: 'Large facilities' }
      ]
    },
    b810: {
      title: 'B 810-3F Mainstation',
      description: 'Versatile mainstation system featuring three chemical connections. The B 810-3F is ideal for medium to large food and beverage operations requiring consistent foam cleaning performance.',
      specs: [
        { label: 'Type', value: 'Mainstation' },
        { label: 'Chemicals', value: '3 connections' },
        { label: 'Capacity', value: 'Medium-High' },
        { label: 'Application', value: 'Medium-large facilities' }
      ]
    },
    b630: {
      title: 'B 630-3F Mainstation',
      description: 'A compact mainstation unit that delivers reliable cleaning performance with a reduced physical footprint. Perfect for facilities where space is at a premium without compromising on cleaning capability.',
      specs: [
        { label: 'Type', value: 'Mainstation' },
        { label: 'Chemicals', value: '3 connections' },
        { label: 'Capacity', value: 'Medium' },
        { label: 'Application', value: 'Compact facilities' }
      ]
    },
    b270: {
      title: 'B 270-3F Mainstation',
      description: 'Entry-level mainstation unit designed for small food production environments that require professional-grade foam cleaning. Affordable entry point into the FOAMICO system.',
      specs: [
        { label: 'Type', value: 'Mainstation' },
        { label: 'Chemicals', value: '3 connections' },
        { label: 'Capacity', value: 'Standard' },
        { label: 'Application', value: 'Small facilities' }
      ]
    },
    satellite: {
      title: 'Satellite Units',
      description: 'FOAMICO satellite stations are remote cleaning points connected to your central mainstation. They extend your cleaning reach across the entire facility with precise chemical dosing and pressure control at every point of use.',
      specs: [
        { label: 'Models', value: '13 available' },
        { label: 'Type', value: 'Remote Station' },
        { label: 'Connection', value: 'Mainstation link' },
        { label: 'Application', value: 'Distributed cleaning' }
      ]
    },
    booster: {
      title: 'Booster Units',
      description: 'Pressure boosting systems designed to extend the reach of your FOAMICO cleaning system. Available in multiple configurations from the compact B 050-27 to the high-capacity B 1080-27, ensuring optimal pressure at every point.',
      specs: [
        { label: 'Models', value: '17 available' },
        { label: 'Type', value: 'Pressure Booster' },
        { label: 'Range', value: 'B 050 to B 1080' },
        { label: 'Application', value: 'Extended reach' }
      ]
    },
    automatic: {
      title: 'Automatic Systems',
      description: 'Fully automated cleaning stations including the AMS 300 and ASU 450 series. These systems provide set-and-forget cleaning cycles with programmable parameters for consistent, repeatable results.',
      specs: [
        { label: 'Models', value: '6 available' },
        { label: 'Type', value: 'Automated Station' },
        { label: 'Series', value: 'AMS 300 / ASU 450' },
        { label: 'Application', value: 'Automated cleaning' }
      ]
    },
    prediluted: {
      title: 'Prediluted Systems',
      description: 'Pre-mixed chemical delivery systems that ensure consistent cleaning results every time. Simplify your chemical management with precisely diluted solutions ready for immediate use.',
      specs: [
        { label: 'Models', value: '5 available' },
        { label: 'Type', value: 'Pre-mixed Delivery' },
        { label: 'Mixing', value: 'Factory precise' },
        { label: 'Application', value: 'Consistent dosing' }
      ]
    },
    mobile: {
      title: 'Mobile Units',
      description: 'Portable cleaning stations for flexible deployment across your facility. Take professional FOAMICO cleaning anywhere it is needed without permanent installation.',
      specs: [
        { label: 'Models', value: '6 available' },
        { label: 'Type', value: 'Portable Station' },
        { label: 'Mobility', value: 'Fully mobile' },
        { label: 'Application', value: 'Flexible cleaning' }
      ]
    },
    'pre-pressure': {
      title: 'Pre-Pressure Booster',
      description: 'Pre-pressure booster units optimise water pressure before chemical injection, ensuring the best possible cleaning performance throughout your system.',
      specs: [
        { label: 'Models', value: '4 available' },
        { label: 'Type', value: 'Pre-Pressure' },
        { label: 'Function', value: 'Pressure optimisation' },
        { label: 'Application', value: 'System enhancement' }
      ]
    }
  };

  const openModal = (productKey) => {
    const product = productData[productKey];
    if (!product) return;

    modalBody.innerHTML = `
      <h2>${product.title}</h2>
      <p>${product.description}</p>
      <div class="modal-specs">
        ${product.specs.map(s => `
          <div class="modal-spec">
            <div class="modal-spec-label">${s.label}</div>
            <div class="modal-spec-value">${s.value}</div>
          </div>
        `).join('')}
      </div>
      <a href="products.html" class="btn btn--primary btn--full">View Full Product Range</a>
    `;

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  };

  document.querySelectorAll('.product-card__btn').forEach(btn => {
    btn.addEventListener('click', () => openModal(btn.dataset.product));
  });

  if (modalOverlay) modalOverlay.addEventListener('click', closeModal);
  if (modalClose) modalClose.addEventListener('click', closeModal);

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
  });

  // --- Contact form ---
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const formData = new FormData(contactForm);
      const data = Object.fromEntries(formData);

      // Show success message
      const wrapper = contactForm.closest('.contact__form-wrapper');
      wrapper.innerHTML = `
        <div style="text-align: center; padding: 3rem 1rem;">
          <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="#22c55e" stroke-width="1.5" style="margin-bottom: 1.5rem;">
            <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
          </svg>
          <h3 style="font-size: 1.5rem; font-weight: 700; margin-bottom: 0.5rem; color: #0F1629;">Message Sent!</h3>
          <p style="color: #64748b; line-height: 1.6;">Thank you for your enquiry. John from Jensen Design & Service will be in touch shortly.</p>
          <p style="color: #64748b; margin-top: 1rem;">You can also call us directly at <a href="tel:0412663675" style="color: #0066FF; font-weight: 600;">0412 663 675</a></p>
        </div>
      `;
    });
  }

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
  const fadeElements = document.querySelectorAll('.about__story-card, .product-card, .support__help-card, .contact__info-card');

  fadeElements.forEach(el => el.classList.add('fade-in'));

  const fadeObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        fadeObserver.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });

  fadeElements.forEach(el => fadeObserver.observe(el));

  // --- CSS animation keyframes ---
  const style = document.createElement('style');
  style.textContent = `
    @keyframes fadeScale {
      from { opacity: 0; transform: scale(0.95); }
      to { opacity: 1; transform: scale(1); }
    }
  `;
  document.head.appendChild(style);
});
