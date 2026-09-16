// Shared behaviour for every top-level page: nav scroll state, mobile menu,
// Productos dropdown/footer population, contact-form "asunto" prefill and
// the privacy modal. Requires products-data.js to be loaded first.
(function () {
  const PRODUCTS = window.MEH_PRODUCTS || [];

  // --- Nav scroll state ---
  const navbar = document.getElementById('navbar');
  if (navbar) {
    const updateNavState = () => navbar.classList.toggle('solid', window.scrollY > 200);
    window.addEventListener('scroll', updateNavState, { passive: true });
    updateNavState();
  }

  // --- Mobile menu toggle ---
  const navToggle = document.getElementById('navToggle');
  const navMenu = document.getElementById('navMenu');
  if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
      const open = navMenu.classList.toggle('open');
      navToggle.setAttribute('aria-expanded', open);
    });
    navMenu.querySelectorAll('a').forEach((a) => {
      a.addEventListener('click', () => navMenu.classList.remove('open'));
    });
  }

  // --- Populate Productos dropdown (nav) + footer ---
  const productosDropdown = document.getElementById('productosDropdown');
  const footerProductos = document.getElementById('footerProductos');
  PRODUCTS.forEach((item) => {
    if (productosDropdown) {
      const a1 = document.createElement('a');
      a1.href = item.href;
      a1.textContent = item.label;
      productosDropdown.appendChild(a1);
    }
    if (footerProductos) {
      const a2 = document.createElement('a');
      a2.href = item.href;
      a2.className = 'footer-link';
      a2.textContent = item.label;
      footerProductos.appendChild(a2);
    }
  });

  // --- Contact form: pre-select "Asunto" from nav/footer/CTA links ---
  const asuntoSelect = document.getElementById('asunto');
  if (asuntoSelect) {
    document.querySelectorAll('[data-asunto]').forEach((link) => {
      link.addEventListener('click', () => {
        asuntoSelect.value = link.getAttribute('data-asunto');
      });
    });
    const asuntoParam = new URLSearchParams(window.location.search).get('asunto');
    if (asuntoParam && Array.from(asuntoSelect.options).some((o) => o.value === asuntoParam)) {
      asuntoSelect.value = asuntoParam;
    }
  }

  // --- Privacy modal ---
  const privacyModal = document.getElementById('privacyModal');
  if (privacyModal) {
    const openPrivacy = (e) => { e.preventDefault(); privacyModal.hidden = false; };
    const openPrivacy1 = document.getElementById('openPrivacy');
    const openPrivacy2 = document.getElementById('openPrivacy2');
    const closePrivacy = document.getElementById('closePrivacy');
    if (openPrivacy1) openPrivacy1.addEventListener('click', openPrivacy);
    if (openPrivacy2) openPrivacy2.addEventListener('click', openPrivacy);
    if (closePrivacy) closePrivacy.addEventListener('click', () => { privacyModal.hidden = true; });
    privacyModal.addEventListener('click', (e) => {
      if (e.target === privacyModal) privacyModal.hidden = true;
    });
  }
})();
