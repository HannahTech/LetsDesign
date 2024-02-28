window.addEventListener("DOMContentLoaded", function () {
  const menu = document.querySelector(".menu");
  const container = document.querySelector(".container");
  const menuText = document.querySelector(".menu-text");
  const menuItems = document.querySelectorAll(".menu-items span");

  const containerOffsetTop = container.offsetTop - 200;

  let isMenuSticky = false;

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

  function toggleStickyMenu() {
    if (window.pageYOffset >= containerOffsetTop && !isMenuSticky) {
      menu.classList.add("sticky");
      isMenuSticky = true;
    } else if (window.pageYOffset < containerOffsetTop && isMenuSticky) {
      menu.classList.remove("sticky");
      isMenuSticky = false;
    }
  }

  function calculateScrollPercentage() {
    const scrollPercentage = (window.scrollY / window.innerHeight) * 100;
    return scrollPercentage;
  }

  function autoScroll() {
    const scrollPercentage = calculateScrollPercentage();

    const scrollThreshold = window.matchMedia("(orientation: portrait)").matches
      ? 7
      : 20;

    if (scrollPercentage < scrollThreshold) {
      window.scrollBy(0, 1);
      setTimeout(autoScroll, 10);
    }
  }
  setTimeout(autoScroll, 500);

  let ticking = false;

  window.addEventListener("scroll", function () {
    if (!ticking) {
      window.requestAnimationFrame(function () {
        handleScroll();
        ticking = false;
      });
      ticking = true;
    }
  });

  function handleScroll() {
    const scrollPercentage = calculateScrollPercentage();
    // console.log(scrollPercentage);

    const mainFontSize = 150 + scrollPercentage * 100;
    const opacity = 1 - scrollPercentage / 15;

    const textImage = document.querySelector(".text-container");
    const imageContainers = document.querySelectorAll(".image-container");

    imageContainers.forEach((container) => {
      const image = container.querySelector(".image");
      const imageText = container.querySelector(".text");

      if (window.matchMedia("(orientation: portrait)").matches) {
        if (opacity < 0.5) {
          image.style.width = "70%";
        } else {
          image.style.width = "55%";
        }
      } else {
        if (opacity < 0.5) {
          image.style.width = "50%";
        } else {
          image.style.width = "70%";
        }
      }
    });

    if (opacity >= 0) {
      textImage.style.display = "flex";
      textImage.style.fontSize = mainFontSize + "px";
      textImage.style.opacity = opacity;
    } else {
      textImage.style.display = "none";
    }

    if (scrollPercentage > scrollImage) {
      const backgroundPosition =
        initialPosition - 0.3 * (scrollPercentage - scrollImage);
      // window.innerWidth > responsibleWidth
      //   ? initialPosition - 0.3 * (scrollPercentage - scrollImage)
      //   : initialPosition + 10 - 0.3 * (scrollPercentage - scrollImage);
      moveBackgroundImage(luxuryImage, backgroundPosition);
    } else {
      luxuryImage.style.backgroundPositionX = initialPosition + "px";
    }
  }

  function moveBackgroundImage(element, position) {
    element.style.transform = "translateX(" + position + "%)";
  }

  window.addEventListener("scroll", toggleStickyMenu);
});

const verticalParts = document.querySelectorAll(".vertical-part");

const responsibleWidth = 950;
const luxuryImage = document.querySelector(".luxury-image");
const containerWidth = luxuryImage.offsetWidth;
const initialPosition = containerWidth - window.innerWidth + 45;
const scrollImage = window.innerWidth > responsibleWidth ? 60 : 45;

verticalParts.forEach((part) => {
  part.addEventListener("mouseenter", () => {
    verticalParts.forEach((otherPart) => {
      if (otherPart !== part) {
        otherPart.classList.add("blur");
        otherPart.classList.add("non-hover");
      }
    });
  });

  part.addEventListener("mouseleave", () => {
    verticalParts.forEach((otherPart) => {
      if (otherPart !== part) {
        otherPart.classList.remove("blur");
        otherPart.classList.remove("non-hover");
      }
    });
  });
});

var originalImages = [
  "url(images/heto/1.jpg)",
  "url(images/heto/2.jpg)",
  "url(images/heto/5.jpg)",
  "url(images/heto/5-2.jpg)",
  "url(images/heto/3.jpg)",
  "url(images/heto/4.jpg)",
  "url(images/med_chatbot.jpg)",
  "url(images/health.jpg)",
];

var hoverImages = [
  "url(images/heto/1-2.jpg)",
  "url(images/heto/2-2.jpg)",
  "url(images/heto/88.jpg)",
  "url(images/heto/77.jpg)",
  "url(images/heto/3-22.jpg)",
  "url(images/heto/66.jpg)",
  "url(images/med_chatbot-2.jpg)",
  "url(images/health-2.jpg)",
];

const projectsImages = document.querySelectorAll(".projects-image");

projectsImages.forEach((image, index) => {
  image.style.backgroundImage = originalImages[index];

  image.addEventListener("mouseenter", () => {
    image.style.transition = "background-image 1s";
    image.style.backgroundImage = hoverImages[index];
  });

  image.addEventListener("mouseleave", () => {
    image.style.transition = "background-image 1s";
    image.style.backgroundImage = originalImages[index];
  });
});

window.onbeforeunload = function () {
  window.scrollTo(0, 0);
};
