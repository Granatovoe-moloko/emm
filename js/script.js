

const swiper = new Swiper('.js-swiper', {

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  slidesPerView: 1,
  spaceBetween: 0,
  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 768px
    768: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    // when window width is >= 1920px
    1920: {
      slidesPerView: 3,
      spaceBetween: 30
    }

  }
});


const menu = $('.js-menu');
const buttonOpen = $('.js-header-button-open');
const buttonClose = $('.js-menu-button-close');

//меню

menu.removeClass('js-menu-nojs');

buttonOpen.on('click', function () {
  menu.toggleClass('js-menu-opened')
});

buttonClose.on('click', function () {
  menu.toggleClass('js-menu-opened');
});



