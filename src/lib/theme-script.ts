/*
 * Script inline no <head>: aplica tema e perfil de visitante antes do primeiro
 * render (evita flash). Vanilla JS, sem imports.
 */
export const themeScript = `
(function () {
  var root = document.documentElement;
  try {
    var saved = localStorage.getItem('portfolio-theme');
    var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    var theme = saved || (prefersDark ? 'dark' : 'light');
    root.classList.add(theme);
    root.classList.remove(theme === 'dark' ? 'light' : 'dark');
  } catch (e) {}
  try {
    var p = sessionStorage.getItem('portfolio-profile');
    if (p === 'cliente' || p === 'recrutador') root.setAttribute('data-profile', p);
  } catch (e) {}
})();
`.trim();
