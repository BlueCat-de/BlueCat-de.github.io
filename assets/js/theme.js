/* Follow the system preference until the visitor chooses a theme. */
(function () {
  var root = document.documentElement;
  var button = document.querySelector('.theme-toggle');
  var preference = window.matchMedia('(prefers-color-scheme: light)');
  var choice;
  try { choice = localStorage.getItem('theme'); } catch (e) {}
  if (choice !== 'light' && choice !== 'dark') choice = null;

  function apply(theme) {
    if (theme === 'light') root.setAttribute('data-theme', 'light');
    else root.removeAttribute('data-theme');
    if (button) {
      button.setAttribute('aria-label', theme === 'light' ? 'Switch to dark theme' : 'Switch to light theme');
      button.setAttribute('aria-pressed', String(theme === 'dark'));
    }
  }
  apply(choice || (preference.matches ? 'light' : 'dark'));
  preference.addEventListener('change', function (event) {
    if (!choice) apply(event.matches ? 'light' : 'dark');
  });
  if (button) button.addEventListener('click', function () {
    choice = root.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
    apply(choice);
    try { localStorage.setItem('theme', choice); } catch (e) {}
  });
})();
