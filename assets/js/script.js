// Manipulação do menu responsivo
let navbar = document.querySelector('.header .navbar');
document.querySelector('#menu-btn').onclick = () => {
   navbar.classList.toggle('active');
}

window.onscroll = () => {
   navbar.classList.remove('active');
}

// Manipulação das abas de FAQ
document.querySelectorAll('.contact .row .faq .box h3').forEach(faqBox => {
   faqBox.onclick = () => {
      let faqContent = faqBox.parentElement; // Seleciona a div .box
      faqContent.classList.toggle('active'); // Adiciona ou remove a classe .active
   }
});

// Inicialização dos Swipers
var homeSwiper = new Swiper(".home-slider", {
   loop: true,
   effect: "coverflow",
   spaceBetween: 30,
   grabCursor: true,
   coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: false,
   },
   navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
   },
});

var gallerySwiper = new Swiper(".gallery-slider", {
   loop: true,
   effect: "coverflow",
   slidesPerView: "auto",
   centeredSlides: true,
   grabCursor: true,
   coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 100,
      modifier: 2,
      slideShadows: true,
   },
   pagination: {
      el: ".swiper-pagination",
   },
});

var reviewsSwiper = new Swiper(".reviews-slider", {
   loop: true,
   slidesPerView: "auto",
   grabCursor: true,
   spaceBetween: 30,
   pagination: {
      el: ".swiper-pagination",
   },
   breakpoints: {
      768: {
         slidesPerView: 1,
      },
      991: {
         slidesPerView: 2,
      },
   },
});
