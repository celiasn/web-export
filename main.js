(function () {
  const PRODUCTOS = [
    'Invernaderos tradicionales',
    'Invernaderos inteligentes (WALIA)',
    'Malla antihierba',
    'Invernaderos túnel y multitúnel',
    'Instalaciones de riego',
    'Cubrimientos de pantano',
    'Cercados',
    'Proyectos llave en mano',
    'Mantenimientos agrícolas',
  ];

  const CATALOG = [
    { image: 'images/cat-invernaderos-tradicionales.jpg', title: 'Invernaderos tradicionales' },
    { image: 'images/cat-walia.jpg', title: 'Invernaderos inteligentes (WALIA)' },
    { image: 'images/cat-malla-antihierba.jpg', title: 'Malla antihierba' },
    { image: 'images/cat-tunel.jpg', title: 'Invernaderos túnel y multitúnel' },
    { image: 'images/cat-riego.jpg', title: 'Instalaciones de riego' },
    { image: 'images/cat-pantano.jpg', title: 'Cubrimientos de pantano' },
    { image: 'images/cat-cercados.jpg', title: 'Cercados' },
    { image: 'images/cat-llave-en-mano.jpg', title: 'Proyectos llave en mano' },
    { image: 'images/cat-mantenimientos.jpg', title: 'Mantenimientos agrícolas' },
  ];

  // --- Nav scroll state ---
  const navbar = document.getElementById('navbar');
  function updateNavState() {
    navbar.classList.toggle('solid', window.scrollY > 200);
  }
  window.addEventListener('scroll', updateNavState, { passive: true });
  updateNavState();

  // --- Mobile menu toggle ---
  const navToggle = document.getElementById('navToggle');
  const navMenu = document.getElementById('navMenu');
  navToggle.addEventListener('click', () => {
    const open = navMenu.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', open);
  });
  navMenu.querySelectorAll('a').forEach((a) => {
    a.addEventListener('click', () => navMenu.classList.remove('open'));
  });

  // --- Populate Productos dropdown (nav + footer) ---
  const productosDropdown = document.getElementById('productosDropdown');
  const footerProductos = document.getElementById('footerProductos');
  PRODUCTOS.forEach((label) => {
    const a1 = document.createElement('a');
    a1.href = '#servicios';
    a1.textContent = label;
    productosDropdown.appendChild(a1);

    const a2 = document.createElement('a');
    a2.href = '#servicios';
    a2.className = 'footer-link';
    a2.textContent = label;
    footerProductos.appendChild(a2);
  });

  // --- Carousel ---
  const track = document.getElementById('carouselTrack');
  const dotsWrap = document.getElementById('carouselDots');
  let slide = 0;

  CATALOG.forEach((item, i) => {
    const slideEl = document.createElement('div');
    slideEl.className = 'carousel-slide';
    slideEl.innerHTML = `
      <img src="${item.image}" alt="${item.title}">
      <div class="carousel-caption"><span>${item.title}</span></div>
    `;
    track.appendChild(slideEl);

    const dot = document.createElement('span');
    dot.addEventListener('click', () => goToSlide(i));
    dotsWrap.appendChild(dot);
  });

  function renderCarousel() {
    track.style.transform = `translateX(-${slide * 100}%)`;
    dotsWrap.querySelectorAll('span').forEach((dot, i) => {
      dot.classList.toggle('active', i === slide);
    });
  }
  function goToSlide(i) { slide = i; renderCarousel(); }

  document.getElementById('prevSlide').addEventListener('click', () => {
    slide = (slide - 1 + CATALOG.length) % CATALOG.length;
    renderCarousel();
  });
  document.getElementById('nextSlide').addEventListener('click', () => {
    slide = (slide + 1) % CATALOG.length;
    renderCarousel();
  });
  renderCarousel();

  // --- Contact form: pre-select "Asunto" from nav/footer links ---
  const asuntoSelect = document.getElementById('asunto');
  document.querySelectorAll('[data-asunto]').forEach((link) => {
    link.addEventListener('click', () => {
      asuntoSelect.value = link.getAttribute('data-asunto');
    });
  });

  // --- Contact form submit -> mailto ---
  const form = document.getElementById('contactForm');
  const formSentMsg = document.getElementById('formSentMsg');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const asunto = asuntoSelect.value || 'Consulta';
    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    const telefono = document.getElementById('telefono').value;
    const mensaje = document.getElementById('mensaje').value;
    const body = `Nombre: ${nombre}\nEmail: ${email}\nTeléfono: ${telefono}\n\n${mensaje}`;
    window.location.href = `mailto:gerencia@mateoehijo.com?subject=${encodeURIComponent(asunto)}&body=${encodeURIComponent(body)}`;
    formSentMsg.hidden = false;
  });

  // --- Privacy modal ---
  const privacyModal = document.getElementById('privacyModal');
  function openPrivacy(e) { e.preventDefault(); privacyModal.hidden = false; }
  document.getElementById('openPrivacy').addEventListener('click', openPrivacy);
  document.getElementById('openPrivacy2').addEventListener('click', openPrivacy);
  document.getElementById('closePrivacy').addEventListener('click', () => { privacyModal.hidden = true; });
  privacyModal.addEventListener('click', (e) => {
    if (e.target === privacyModal) privacyModal.hidden = true;
  });
})();
