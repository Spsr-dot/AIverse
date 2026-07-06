/**
 * AIVerse - Dark Mode Toggle
 * Saves user preference in localStorage
 */

(function () {
  'use strict';

  const STORAGE_KEY = 'aiverse-theme';
  const DARK = 'dark';
  const LIGHT = 'light';

  /**
   * Get the saved theme from localStorage, or default to light
   */
  function getSavedTheme() {
    return localStorage.getItem(STORAGE_KEY) || LIGHT;
  }

  /**
   * Apply theme to the document and update toggle icon
   */
  function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem(STORAGE_KEY, theme);
    updateToggleIcon(theme);
  }

  /**
   * Update the moon/sun icon on the toggle button
   */
  function updateToggleIcon(theme) {
    const toggleBtn = document.querySelector('.theme-toggle');
    if (!toggleBtn) return;

    const icon = toggleBtn.querySelector('i');
    if (icon) {
      if (theme === DARK) {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
      } else {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
      }
    }
  }

  /**
   * Toggle between light and dark themes
   */
  function toggleTheme() {
    const current = getSavedTheme();
    const next = current === DARK ? LIGHT : DARK;
    applyTheme(next);
  }

  /**
   * Initialize dark mode on page load
   */
  function init() {
    const savedTheme = getSavedTheme();
    applyTheme(savedTheme);

    const toggleBtn = document.querySelector('.theme-toggle');
    if (toggleBtn) {
      toggleBtn.addEventListener('click', toggleTheme);
    }
  }

  // Run when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
