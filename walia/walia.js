(function () {
  const chipsWrap = document.getElementById('waliaCultivos');
  window.MEH_TRANSLATIONS.es.walia.cultivos.forEach((_, i) => {
    const chip = document.createElement('div');
    chip.className = 'walia-chip';
    chip.dataset.i18n = `walia.cultivos.${i}`;
    chipsWrap.appendChild(chip);
  });
  if (window.MEH_I18N) window.MEH_I18N.applyTranslations();

  const form = document.getElementById('waliaForm');
  const sentMsg = document.getElementById('waliaSentMsg');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const t = window.MEH_I18N ? window.MEH_I18N.t : (k) => k;
    const nombre = document.getElementById('w-nombre').value;
    const email = document.getElementById('w-email').value;
    const telefono = document.getElementById('w-telefono').value;
    const mensaje = document.getElementById('w-mensaje').value;
    const body = `${t('mail.nombre')}: ${nombre}\n${t('mail.email')}: ${email}\n${t('mail.telefono')}: ${telefono}\n\n${mensaje}`;
    window.location.href = `mailto:gerencia@mateoehijo.com?subject=${encodeURIComponent(t('walia.consultaSubject'))}&body=${encodeURIComponent(body)}`;
    sentMsg.hidden = false;
  });
})();
