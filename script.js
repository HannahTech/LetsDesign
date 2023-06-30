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

  window.addEventListener("scroll", toggleStickyMenu);
});

const verticalParts = document.querySelectorAll(".vertical-part");

const responsibleWidth = 950;
const luxuryImage = document.querySelector(".luxury-image");
const containerWidth = luxuryImage.offsetWidth;
const initialPosition = containerWidth - window.innerWidth + 15;
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
  "url(images/heto/3.jpg)",
  "url(images/heto/4.jpg)",
  "url(images/heto/5.jpg)",
  "url(images/heto/6.jpg)",
  "url(images/heto/6.jpg)",
  "url(images/heto/5.jpg)",
  "url(images/heto/4.jpg)",
  "url(images/heto/3.jpg)",
  "url(images/heto/2.jpg)",
  "url(images/heto/1.jpg)",
];

var imageSelectors = [
  ":nth-child(1)",
  ":nth-child(2)",
  ":nth-child(3)",
  ":nth-child(4)",
  ":nth-child(5)",
  ":nth-child(6)",
  ":nth-child(7)",
  ":nth-child(8)",
  ":nth-child(9)",
  ":nth-child(10)",
  ":nth-child(11)",
  ":nth-child(12)",
];

function hoverImages() {
  var images = document.querySelectorAll(".several-projects .image");
  var delay = 250;

  for (var i = 0; i < images.length; i++) {
    (function (index) {
      setTimeout(function () {
        var imageName = originalImages[index].split("/").pop().split(".")[0];

        images[index].style.backgroundImage =
          "url(images/heto/" + imageName + "-2.jpg)";
      }, delay * index);
    })(i);
  }
}

function resetImages() {
  var images = document.querySelectorAll(".several-projects .image");
  for (var i = 0; i < images.length; i++) {
    images[i].style.backgroundImage = originalImages[i];
  }
}

var images = document.querySelectorAll(".several-projects .image");
for (var i = 0; i < images.length; i++) {
  images[i].classList.add("image" + imageSelectors[i]);
}

window.onbeforeunload = function () {
  window.scrollTo(0, 0);
};
