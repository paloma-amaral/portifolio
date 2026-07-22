/**
 * Inline script injected in <head> to prevent theme flash (FOUC).
 * Must use vanilla JS — no React or imports.
 */
export const themeScript = `
(function () {
  try {
    var saved = localStorage.getItem('portfolio-theme');
    var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    var theme = saved || (prefersDark ? 'dark' : 'light');
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
    } else {
      document.documentElement.classList.remove('dark');
      document.documentElement.classList.add('light');
    }
  } catch (e) {}
})();
`.trim();
