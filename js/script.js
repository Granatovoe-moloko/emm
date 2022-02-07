

const swiper = new Swiper('.js-swiper', {
    slidesPerView: 1,
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

swiper;

const menu = $('.js-menu');
const buttonOpen = $('.js-header-button-open');
const buttonClose = $('.js-menu-button-close');

//меню

menu.removeClass('js-menu-nojs');

buttonOpen.on('click', function() {
    menu.toggleClass('js-menu-opened')
});

buttonClose.on('click', function() {
    menu.toggleClass('js-menu-opened');
});



