/* ==========================================================================
   Lightweight site interactions
   ========================================================================== */

(function () {
  function ready(callback) {
    if (document.readyState !== "loading") {
      callback();
      return;
    }

    document.addEventListener("DOMContentLoaded", callback);
  }

  ready(function () {
    var nav = document.getElementById("site-nav");
    if (nav) {
      var button = nav.querySelector("button");
      var hiddenLinks = nav.querySelector(".hidden-links");

      if (button && hiddenLinks) {
        button.addEventListener("click", function () {
          hiddenLinks.classList.toggle("hidden");
          button.classList.toggle("close");
        });
      }
    }

    var authorUrls = document.querySelector(".author__urls");

    function syncAuthorUrls() {
      if (!authorUrls) {
        return;
      }

      authorUrls.style.display = window.innerWidth > 925 ? "block" : "none";
    }

    syncAuthorUrls();
    window.addEventListener("resize", syncAuthorUrls, { passive: true });
  });
}());
