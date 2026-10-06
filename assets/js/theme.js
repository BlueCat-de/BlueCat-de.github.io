/* Theme toggle: persists the choice and flips the data-theme attribute. */

(function () {
  var root = document.documentElement;
  var button = document.querySelector(".theme-toggle");

  function apply(theme) {
    if (theme === "light") {
      root.setAttribute("data-theme", "light");
    } else {
      root.removeAttribute("data-theme");
    }
    if (button) {
      button.setAttribute(
        "aria-label",
        theme === "light" ? "Switch to dark theme" : "Switch to light theme"
      );
    }
  }

  apply(root.getAttribute("data-theme") === "light" ? "light" : "dark");

  if (button) {
    button.addEventListener("click", function () {
      var next = root.getAttribute("data-theme") === "light" ? "dark" : "light";
      apply(next);
      try {
        localStorage.setItem("theme", next);
      } catch (e) {}
    });
  }
})();
