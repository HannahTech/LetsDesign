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

  window.addEventListener("scroll", function () {
    const menu = document.querySelector(".menu");
    if (window.scrollY > 10) {
      menu.classList.add("scrolled");
    } else {
      menu.classList.remove("scrolled");
    }
  });
});

function openWindow(image1, image2, description) {
  var width = window.innerWidth * 0.6;
  var height = window.innerHeight * 0.6;
  var left = (window.innerWidth - width) / 2;
  var top = (window.innerHeight - height) / 2;

  var windowFeatures = `width=${width},height=${height},top=${top},left=${left},menubar=no,location=no,resizable=yes,scrollbars=yes,status=no`;

  var popup = window.open("", "Image Window", windowFeatures);

  var html = `
<html>
<head>
<title>Project Details</title>
<style>
body {
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f0f0f0;
  font-family: "Helvetica";
  font-size: 1.5em;
  line-height:1.5;
  font-weight: 100;
}
.popup-content {
  text-align: center;
  width: 80%;
}
.popup-content img {
  width: 300px;
  margin:20px;
  height: auto;
}
@media (orientation: portrait) {
  body{
height:auto;
  }
  .popup-content{
    width: 90%
  }
  .popup-content img {
    width: 150px;
    margin:10px;
    height: auto;
  }
}
</style>
</head>
<body>
<div class="popup-content">
  <img src="images/${image1}">
  <img src="images/${image2}">
  <p>${description}</p>
</div>
</body>
</html>
`;

  popup.document.write(html);
  popup.document.close();
}
