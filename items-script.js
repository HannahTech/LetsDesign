window.addEventListener("DOMContentLoaded", function () {
  const menuText = document.querySelector(".menu-text");
  const menuItems = document.querySelectorAll(".menu-items span");

  menuText.addEventListener("click", function () {
    window.location.href = "services.html";
  });

  menuItems.forEach((item) => {
    item.addEventListener("click", function () {
      const text = this.textContent.trim().toLowerCase();
      const page = getPageName(text);
      window.location.href = `${page}.html`;
    });
  });

  document.querySelector(".menu-icon").addEventListener("click", function () {
    document.querySelector(".menu-popup").style.display =
      document.querySelector(".menu-popup").style.display === "block"
        ? "none"
        : "block";
  });

  document.querySelectorAll(".menu-item").forEach(function (item) {
    item.addEventListener("click", function () {
      const text = this.textContent.trim().toLowerCase();
      const page = getPageName(text);
      window.location.href = `${page}.html`;
    });
  });

  function getPageName(text) {
    switch (text) {
      case "about us":
        return "about";
      case "contact":
        return "contact";
      case "our work":
        return "work";
      default:
        return "index";
    }
  }
});
