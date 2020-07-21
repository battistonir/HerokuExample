// Depencies - DOM Elements & Starting Data =====================
// next button
var nextEl = document.querySelector(".next");
// previous button
// image carousel
var imageCarousel = document.querySelector(".carouselbox");

// array of images
var images = [
  "https://www.syfy.com/sites/syfy/files/styles/1200x680_hero/public/2020/07/legends-hero.jpg",
  "https://cdn.pocket-lint.com/r/s/1200x/assets/images/147767-tv-feature-what-order-should-you-watch-all-the-star-wars-films-image1-1wdfjceytb.jpg",
  "https://gamespot1.cbsistatic.com/uploads/original/1591/15918215/3678305-8340208246-lego-.jpg",
];

var index = 0;
var currentImage = index;

// Helper Function ==============================================
function init() {
  imageCarousel.style.backgroundImage = `url(${images[index]})`;
  imageCarousel.style.backgroundSize = "100% 100%";
}

function goToImage(currentImage) {
  imageCarousel.style.backgroundImage = `url(${images[currentImage]})`;
}

function clickNext() {
  console.log("you clicked next");
  if (currentImage < images.length) {
    currentImage = index + 1;
    goToImage(currentImage);
  } else {
    currentImage = 0;
    goToImage(currentImage);
  }
}

// User Interactions ===========================================
// a user clicks next
nextEl.addEventListener("click", clickNext);
// a user clicks previous

// Run init
init();
