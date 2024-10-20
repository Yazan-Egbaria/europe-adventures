var swiper = new Swiper(".mySwiper", {
    autoplay: {
    delay: 3500,
    disableOnInteraction: false,
    },
    speed:1000,
   slidesPerView: 1,
   dynamicBullets: true,
   spaceBetween: 30,
   loop: true,
   pagination: {
     el: ".swiper-pagination",
     clickable: true,
   },
   navigation: {
     nextEl: ".swiper-button-next",
     prevEl: ".swiper-button-prev",
   },
   pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
  },
 });