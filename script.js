window.addEventListener("DOMContentLoaded", function () {
  const menu = document.querySelector(".menu");
  const container = document.querySelector(".container");
  const containerOffsetTop = container.offsetTop;
  let isMenuSticky = false;

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

    if (scrollPercentage < 20) {
      window.scrollBy(0, 1);
      setTimeout(autoScroll, 10);
    }
  }
  setTimeout(autoScroll, 2000);

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
    console.log(scrollPercentage);

    const mainFontSize = 100 + scrollPercentage * 100;
    const opacity = 1 - scrollPercentage / 15;

    const textImage = document.querySelector(".text-container");
    const imageContainers = document.querySelectorAll(".image-container");

    imageContainers.forEach((container) => {
      const image = container.querySelector(".image");

      if (opacity < 0.3) {
        image.style.width = "65%";
      } else {
        image.style.width = "100%";
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
        window.innerWidth > responsibleWidth
          ? initialPosition - 0.3 * (scrollPercentage - scrollImage)
          : initialPosition + 10 - 0.3 * (scrollPercentage - scrollImage);
      moveBackgroundImage(luxuryImage, backgroundPosition);
    } else {
      luxuryImage.style.backgroundPositionX = initialPosition + "px";
    }
  }

  function moveBackgroundImage(element, position) {
    element.style.transform = "translateX(" + position + "%)";
  }

  function isElementInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
      (rect.top >= 0 && rect.top + 250 <= window.innerHeight) ||
      (rect.bottom >= 0 && rect.bottom + 250 <= window.innerHeight)
    );
  }

  window.addEventListener("scroll", toggleStickyMenu);
});

const verticalParts = document.querySelectorAll(".vertical-part");

const responsibleWidth = 950;
const luxuryImage = document.querySelector(".luxury-image");
const containerWidth = luxuryImage.offsetWidth;
const initialPosition = containerWidth - window.innerWidth;
const scrollImage = window.innerWidth > responsibleWidth ? 35 : 45;

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

window.onbeforeunload = function () {
  window.scrollTo(0, 0);
};
