// Banner Section //
var swiper = new Swiper(".banner-swiper", {
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
    delay: 10000,
    disableOnInteraction: false,
  },
  loop: true,
  loopFillGroupWithBlank: true,
  slidesPerView: 1,
  spaceBetween: 0,

});



// Client review //
var swiper = new Swiper(".review-swiper", {
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
    clickable: true,
  },
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  loop: true,
  loopFillGroupWithBlank: true,
  slidesPerView: 3,
  spaceBetween: 30,
  breakpoints: {
    200: {
      slidesPerView: 1,
    },
    640: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

// trending Product //
var swiper = new Swiper(".trending-product-swiper", {
  slidesPerView: "auto",
  autoplay: {
    delay: 5000,
  },
  loop: true,
  loopFillGroupWithBlank: false,
  slidesPerView: 10,
  spaceBetween: 10,
  // centeredSlides: true,
  breakpoints: {
    200: {
      slidesPerView: 3,
    },
    640: {
      slidesPerView: 3,
    },
    768: {
      slidesPerView: 5,
    },
    1024: {
      slidesPerView: 7,
    },
    1600: {
      slidesPerView: 8,
    },
  },
});