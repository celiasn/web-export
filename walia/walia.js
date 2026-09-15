(function () {
  const CULTIVOS = ['Uva de mesa', 'Pitahaya', 'Cítricos', 'Cereza', 'Arándanos', 'Kiwi', 'Berries', 'Otros cultivos'];
  const chipsWrap = document.getElementById('waliaCultivos');
  CULTIVOS.forEach((name) => {
    const chip = document.createElement('div');
    chip.className = 'walia-chip';
    chip.textContent = name;
    chipsWrap.appendChild(chip);
  });

  const form = document.getElementById('waliaForm');
  const sentMsg = document.getElementById('waliaSentMsg');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const nombre = document.getElementById('w-nombre').value;
    const email = document.getElementById('w-email').value;
    const telefono = document.getElementById('w-telefono').value;
    const mensaje = document.getElementById('w-mensaje').value;
    const body = `Nombre: ${nombre}\nEmail: ${email}\nTeléfono: ${telefono}\n\n${mensaje}`;
    window.location.href = `mailto:gerencia@mateoehijo.com?subject=${encodeURIComponent('Consulta WALIA')}&body=${encodeURIComponent(body)}`;
    sentMsg.hidden = false;
  });
})();
