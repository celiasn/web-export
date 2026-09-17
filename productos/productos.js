// Detail page: turns the quick-nav into real tabs. Only one product panel
// is visible at a time, driven by the URL hash so links from the homepage
// nav/footer/carousel (productos.html#s-slug) open straight into that panel.
// The hash is prefixed with "s-" so it never matches a panel's own id -
// otherwise the browser's native jump-to-anchor would scroll straight past
// the page header on first load, before this script gets a chance to run.
(function () {
  const panels = Array.from(document.querySelectorAll('.prod-panel'));
  const quicknav = document.getElementById('prodQuicknav');
  if (!panels.length || !quicknav) return;

  panels.forEach((panel) => {
    const chip = document.createElement('a');
    chip.className = 'prod-chip';
    chip.href = `#s-${panel.id}`;
    chip.textContent = panel.dataset.label || panel.id;
    chip.dataset.target = panel.id;
    quicknav.appendChild(chip);
  });
  const chips = Array.from(quicknav.querySelectorAll('.prod-chip'));

  function slugFromHash() {
    return location.hash.replace(/^#?s-/, '');
  }

  function activate(slug, { scroll = false } = {}) {
    const target = panels.some((p) => p.id === slug) ? slug : panels[0].id;
    panels.forEach((p) => p.classList.toggle('is-active', p.id === target));
    chips.forEach((c) => c.classList.toggle('active', c.dataset.target === target));
    if (scroll) quicknav.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  window.addEventListener('hashchange', () => activate(slugFromHash(), { scroll: true }));
  activate(slugFromHash());
})();
