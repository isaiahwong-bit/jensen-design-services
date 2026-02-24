/* ============================================
   Category Page - Rendering Logic
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {
  const data = window.FOAMICO_PRODUCTS;
  if (!data) return;

  // Determine category from URL path or query parameter
  // Vercel rewrites /products/mobile → /products/category?cat=mobile
  // but browser URL stays as /products/mobile, so window.location.search is empty.
  // Parse from path first, fall back to query param.
  const params = new URLSearchParams(window.location.search);
  const pathSegments = window.location.pathname.replace(/\/$/, '').split('/');
  const lastSegment = pathSegments[pathSegments.length - 1];
  const categorySlug = params.get('cat') || (data.categories[lastSegment] ? lastSegment : null);

  if (!categorySlug || !data.categories[categorySlug]) {
    renderNotFound();
    initMobileMenu();
    initBackToTop();
    return;
  }

  const category = data.categories[categorySlug];

  // Set page meta
  document.title = category.metaTitle;
  const metaDesc = document.getElementById('metaDesc');
  if (metaDesc) metaDesc.setAttribute('content', category.metaDescription);

  // Render page hero
  document.getElementById('categoryTag').textContent = 'FOAMICO ' + category.title;
  document.getElementById('categoryTitle').textContent = category.title;
  document.getElementById('categoryDesc').textContent = category.description;
  document.getElementById('breadcrumbCurrent').textContent = category.title;

  // Render category navigation
  renderCategoryNav(categorySlug);

  // Render hero images
  renderHeroImages(category.heroImages);

  // Render products
  const products = data.products.filter(p => p.category === categorySlug);

  renderSubsections(category, products);

  // Accessories CTA at bottom
  if (categorySlug === 'accessories') {
    renderAccessoriesCTA();
  }

  // Initialize interactions
  initExpandableItems();
  initScrollAnimations();
  initMobileMenu();
  initBackToTop();
});

// ---- Category Navigation ----
function renderCategoryNav(currentSlug) {
  const data = window.FOAMICO_PRODUCTS;
  const nav = document.getElementById('categoryNav');
  if (!nav) return;

  const order = ['mainstations', 'satellites', 'boosters', 'automatic', 'mobile', 'prediluted', 'accessories'];

  nav.innerHTML = order.map(slug => {
    const cat = data.categories[slug];
    const isActive = slug === currentSlug ? ' active' : '';
    return '<a href="/products/' + slug + '" class="quick-jump__link' + isActive + '">' + cat.title + '</a>';
  }).join('');
}

// ---- Hero Images ----
function renderHeroImages(images) {
  const section = document.getElementById('heroImages');
  const grid = document.getElementById('heroImageGrid');
  if (!section || !grid) return;

  if (!images || images.length === 0) {
    section.style.display = 'none';
    return;
  }

  grid.innerHTML = images.map(function(img) {
    return '<img src="' + img.src + '" alt="' + img.alt + '" loading="lazy">';
  }).join('');
}

// ---- Product Subsections ----
function renderSubsections(category, products) {
  var container = document.querySelector('#categoryContent .container');
  if (!container) return;
  var data = window.FOAMICO_PRODUCTS;

  var html = category.subsections.map(function(subId) {
    var sub = data.subsections[subId];
    if (!sub) return '';
    var subProducts = products.filter(function(p) { return p.subsection === subId; });

    // Subsection header
    var badgeHTML = '';
    if (sub.badgeLabel) {
      badgeHTML = '<span class="product-subsection__badge ' + (sub.badgeClass || '') + '">' + sub.badgeLabel + '</span>';
    }

    var headerHTML = '<h3 class="product-subsection__title">' + badgeHTML + ' ' + sub.title + '</h3>';

    // Products
    var productsHTML = '';
    if (sub.layout === 'expandable') {
      productsHTML = renderExpandableProducts(subProducts);
    } else {
      productsHTML = renderCompactGrid(subProducts);
    }

    return '<div class="product-subsection">' + headerHTML + productsHTML + '</div>';
  }).join('');

  container.innerHTML = html;
}

// ---- Expandable Product Items ----
function renderExpandableProducts(products) {
  var items = products.map(function(p) {
    var tagsHTML = p.tags.map(function(t) { return '<span>' + t + '</span>'; }).join('');

    var specsHTML = p.specs.map(function(s) {
      return '<div class="spec"><span class="spec-label">' + s.label + '</span><span class="spec-value">' + s.value + '</span></div>';
    }).join('');

    var featuresHTML = '';
    if (p.features && p.features.length > 0) {
      var featureItems = p.features.map(function(f) { return '<li>' + f + '</li>'; }).join('');
      featuresHTML = '<div class="product-item__features"><h5>Key Features</h5><ul>' + featureItems + '</ul></div>';
    }

    return '<div class="product-item fade-in" data-expandable>' +
      '<div class="product-item__header">' +
        '<div class="product-item__visual" style="background: ' + p.visual.bgColor + '; color: ' + p.visual.color + ';">' + p.visual.svg + '</div>' +
        '<div class="product-item__info">' +
          '<h4>' + p.name + '</h4>' +
          '<p>' + p.description + '</p>' +
          '<div class="product-item__tags">' + tagsHTML + '</div>' +
        '</div>' +
        '<button class="product-item__toggle" aria-label="Expand details">' +
          '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 9l-7 7-7-7"/></svg>' +
        '</button>' +
      '</div>' +
      '<div class="product-item__details">' +
        '<div class="product-item__specs">' + specsHTML + '</div>' +
        featuresHTML +
        '<a href="../index.html#contact" class="btn btn--primary">Enquire About This Product</a>' +
      '</div>' +
    '</div>';
  }).join('');

  return '<div class="product-list">' + items + '</div>';
}

// ---- Compact Product Grid ----
function renderCompactGrid(products) {
  var cards = products.map(function(p) {
    return '<div class="product-compact-card fade-in">' +
      '<h4>' + p.name + '</h4>' +
      '<p>' + p.description + '</p>' +
      '<span class="product-compact-tag">' + p.tag + '</span>' +
      '<a href="../index.html#contact" class="product-compact-link">Enquire</a>' +
    '</div>';
  }).join('');

  return '<div class="product-grid-compact">' + cards + '</div>';
}

// ---- Accessories CTA (appended after products) ----
function renderAccessoriesCTA() {
  var container = document.querySelector('#categoryContent .container');
  if (!container) return;

  container.insertAdjacentHTML('beforeend',
    '<div class="accessories-cta">' +
      '<p>Need a specific part or accessory not listed here? We stock genuine FOAMICO replacement components and can source any item from the full catalogue.</p>' +
      '<a href="../index.html#contact" class="btn btn--primary btn--lg">Contact Us for Parts</a>' +
    '</div>');
}

// ---- Not Found ----
function renderNotFound() {
  var heroImages = document.getElementById('heroImages');
  if (heroImages) heroImages.style.display = 'none';

  var quickJump = document.getElementById('quickJump');
  if (quickJump) quickJump.style.display = 'none';

  var container = document.querySelector('#categoryContent .container');
  if (container) {
    container.innerHTML =
      '<div class="category-not-found">' +
        '<h2>Category Not Found</h2>' +
        '<p>The product category you\'re looking for doesn\'t exist.</p>' +
        '<a href="../products.html" class="btn btn--primary">View All Products</a>' +
      '</div>';
  }
}

// ---- Expandable Items Interaction ----
function initExpandableItems() {
  document.querySelectorAll('[data-expandable]').forEach(function(item) {
    var header = item.querySelector('.product-item__header');
    if (header) {
      header.addEventListener('click', function() {
        var wasExpanded = item.classList.contains('expanded');
        item.classList.toggle('expanded');
        if (!wasExpanded) {
          setTimeout(function() {
            item.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
          }, 100);
        }
      });
    }
  });
}

// ---- Scroll Animations ----
function initScrollAnimations() {
  var elements = document.querySelectorAll('.product-item, .product-compact-card');
  var observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry, index) {
      if (entry.isIntersecting) {
        setTimeout(function() {
          entry.target.classList.add('visible');
        }, index * 50);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.05, rootMargin: '0px 0px -30px 0px' });

  elements.forEach(function(el) { observer.observe(el); });
}

// ---- Mobile Menu ----
function initMobileMenu() {
  var navToggle = document.getElementById('navToggle');
  var navMenu = document.getElementById('navMenu');
  if (!navToggle) return;

  navToggle.addEventListener('click', function() {
    navToggle.classList.toggle('active');
    navMenu.classList.toggle('active');
    document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
  });

  navMenu.querySelectorAll('.nav__link').forEach(function(link) {
    link.addEventListener('click', function() {
      navToggle.classList.remove('active');
      navMenu.classList.remove('active');
      document.body.style.overflow = '';
    });
  });
}

// ---- Back to Top ----
function initBackToTop() {
  var backToTop = document.getElementById('backToTop');
  if (!backToTop) return;

  window.addEventListener('scroll', function() {
    backToTop.classList.toggle('visible', window.scrollY > 500);
  }, { passive: true });

  backToTop.addEventListener('click', function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}
