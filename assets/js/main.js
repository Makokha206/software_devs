 /*  Mobile nav toggle */
let toggler = document.querySelector(".mobile-nav-toggle");
let navList = document.getElementById("navList");

toggler.onclick = function(){

  navList.classList.toggle("navbar-mobile");
}


 /*slider */
 var swiper = new Swiper('.testimonials-slider', {
    speed: 600,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    }
  })

