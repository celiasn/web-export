// Detail page: turns the quick-nav into real tabs. Only one product panel
// is visible at a time, driven by the URL hash so links from the homepage
// nav/footer/carousel (productos.html#slug) open straight into that panel.
(function () {
  const panels = Array.from(document.querySelectorAll('.prod-panel'));
  const quicknav = document.getElementById('prodQuicknav');
  if (!panels.length || !quicknav) return;

  panels.forEach((panel) => {
    const chip = document.createElement('a');
    chip.className = 'prod-chip';
    chip.href = `#${panel.id}`;
    chip.textContent = panel.dataset.label || panel.id;
    chip.dataset.target = panel.id;
    quicknav.appendChild(chip);
  });
  const chips = Array.from(quicknav.querySelectorAll('.prod-chip'));

  function activate(slug, { scroll = false } = {}) {
    const target = panels.some((p) => p.id === slug) ? slug : panels[0].id;
    panels.forEach((p) => p.classList.toggle('is-active', p.id === target));
    chips.forEach((c) => c.classList.toggle('active', c.dataset.target === target));
    if (scroll) quicknav.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  window.addEventListener('hashchange', () => activate(location.hash.slice(1), { scroll: true }));
  activate(location.hash.slice(1));
})();
