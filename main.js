// Homepage-only behaviour: product carousel and contact-form submission.
// Shared nav/footer/modal behaviour lives in common.js.
(function () {
  const PRODUCTS = window.MEH_PRODUCTS || [];

  // --- Carousel ---
  const track = document.getElementById('carouselTrack');
  const dotsWrap = document.getElementById('carouselDots');
  if (track && dotsWrap) {
    let slide = 0;

    PRODUCTS.forEach((item, i) => {
      const slideEl = document.createElement('div');
      slideEl.className = 'carousel-slide';
      slideEl.innerHTML = `
        <a href="${item.href}" class="carousel-slide-link">
          <img src="${item.image}" data-i18n-attr='{"alt":"${item.labelKey}"}'>
          <div class="carousel-caption" data-i18n-attr='{"data-more-label":"home.carouselMore"}'><span data-i18n="${item.labelKey}"></span></div>
        </a>
      `;
      track.appendChild(slideEl);

      const dot = document.createElement('span');
      dot.addEventListener('click', () => goToSlide(i));
      dotsWrap.appendChild(dot);
    });
    if (window.MEH_I18N) window.MEH_I18N.applyTranslations();

    function renderCarousel() {
      track.style.transform = `translateX(-${slide * 100}%)`;
      dotsWrap.querySelectorAll('span').forEach((dot, i) => {
        dot.classList.toggle('active', i === slide);
      });
    }
    function goToSlide(i) { slide = i; renderCarousel(); }

    document.getElementById('prevSlide').addEventListener('click', () => {
      slide = (slide - 1 + PRODUCTS.length) % PRODUCTS.length;
      renderCarousel();
    });
    document.getElementById('nextSlide').addEventListener('click', () => {
      slide = (slide + 1) % PRODUCTS.length;
      renderCarousel();
    });
    renderCarousel();
  }

  // --- Contact form submit -> mailto ---
  const form = document.getElementById('contactForm');
  if (form) {
    const asuntoSelect = document.getElementById('asunto');
    const formSentMsg = document.getElementById('formSentMsg');
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const t = window.MEH_I18N ? window.MEH_I18N.t : (k) => k;
      const selectedOption = asuntoSelect.options[asuntoSelect.selectedIndex];
      const asunto = (selectedOption && selectedOption.textContent) || t('mail.consultaFallback');
      const nombre = document.getElementById('nombre').value;
      const email = document.getElementById('email').value;
      const telefono = document.getElementById('telefono').value;
      const mensaje = document.getElementById('mensaje').value;
      const body = `${t('mail.nombre')}: ${nombre}\n${t('mail.email')}: ${email}\n${t('mail.telefono')}: ${telefono}\n\n${mensaje}`;
      window.location.href = `mailto:gerencia@mateoehijo.com?subject=${encodeURIComponent(asunto)}&body=${encodeURIComponent(body)}`;
      formSentMsg.hidden = false;
    });
  }
})();
