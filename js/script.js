const menu = document.querySelector('.menu');
const buttonOpen = document.querySelector('.header__button-open');
const buttonClose = document.querySelector('.menu__button-close');
const newsCards = document.querySelectorAll('.news__card');
const newsBackButton = document.querySelector('.news__button--back');
const newsForwardButton = document.querySelector('.news__button--forward');
const newsContainer = document.querySelector('.news__card-wrapper');


//меню

menu.classList.remove('menu--nojs');

buttonOpen.addEventListener('click', () => {
    menu.classList.toggle('menu--opened');
});

buttonClose.addEventListener('click', () => {
    menu.classList.toggle('menu--opened');
})

// видимый список новостей
let startTranslate = 0;

const scrollNews = () => {
    
    
    let newWidth = document.querySelector('.news__image').offsetWidth;
    
    newsForwardButton.addEventListener('click', () => {
        if(startTranslate <= newsContainer.offsetWidth) {
            startTranslate += (newWidth + 20);
            for (let i = 0; i < newsCards.length; i++)
            newsCards[i].style.transform = `translate(${'-' + startTranslate +'px'})`; 
        }
    });

    newsBackButton.addEventListener('click', () => {
        if(startTranslate > 0) {
            startTranslate -= (newWidth + 20);
            for (let i = 0; i < newsCards.length; i++)
            newsCards[i].style.transform = `translate(${'-' +  startTranslate + 'px'})`; 
        }
    });
}



scrollNews();