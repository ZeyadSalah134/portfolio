/**
 * theme.js
 * Theme engine: Light Mode & Dark Mode with smooth transition,
 * localStorage persistence, system preference synchronization,
 * and no layout shifts or page reloads.
 */
(function () {
  const STORAGE_KEY = 'zeyad-salah-theme';

  function getSystemPreference() {
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }

  function getStoredTheme() {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored === 'light' || stored === 'dark') return stored;
    } catch (_) {
      // In case localStorage is blocked in private browsing
    }
    return getSystemPreference();
  }

  function applyTheme(theme, persist = false) {
    const root = document.documentElement;
    root.setAttribute('data-theme', theme);
    root.style.colorScheme = theme;

    if (persist) {
      try {
        localStorage.setItem(STORAGE_KEY, theme);
      } catch (_) {}
    }

    // Update all theme toggle button states & aria labels
    const toggles = document.querySelectorAll('.theme-toggle-btn');
    toggles.forEach(toggle => {
      toggle.setAttribute('aria-pressed', theme === 'dark' ? 'true' : 'false');
      toggle.setAttribute(
        'aria-label',
        theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'
      );
      toggle.setAttribute(
        'title',
        theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'
      );
    });
  }

  // Initialize immediately before paint
  const currentTheme = getStoredTheme();
  applyTheme(currentTheme, false);

  // Expose API globally
  window.zsTheme = {
    get: () => document.documentElement.getAttribute('data-theme') || currentTheme,
    set: (theme) => applyTheme(theme, true),
    toggle: () => {
      const current = window.zsTheme.get();
      const next = current === 'dark' ? 'light' : 'dark';
      applyTheme(next, true);
    }
  };

  // Listen to system changes if user hasn't set explicit preference
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
    try {
      if (localStorage.getItem(STORAGE_KEY)) return;
    } catch (_) {}
    applyTheme(e.matches ? 'dark' : 'light', false);
  });

  // Attach click listener to theme toggles when DOM is ready
  document.addEventListener('DOMContentLoaded', () => {
    const toggles = document.querySelectorAll('.theme-toggle-btn');
    toggles.forEach(btn => {
      btn.addEventListener('click', () => {
        window.zsTheme.toggle();
      });
    });
  });
})();
