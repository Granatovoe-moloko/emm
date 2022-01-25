const menu = document.querySelector('.menu');
const buttonOpen = document.querySelector('.header__button-open');
const buttonClose = document.querySelector('.menu__button-close');
const newsCard = document.querySelectorAll('.news__card');

//меню

menu.classList.remove('menu--nojs');

buttonOpen.addEventListener('click', () => {
    menu.classList.toggle('menu--opened');
});

buttonClose.addEventListener('click', () => {
    menu.classList.toggle('menu--opened');
})

// видимый список новостей

const checkMedia = () => {

    const desktop = window.matchMedia('(min-width: 1920px)');
    const tablet = window.matchMedia('(min-width: 768px)');


    if(desktop.matches) {
        for (let i = 0; i < newsCard.length; i++)
        newsCard[i].classList.add('news__card--visible');
    }
    
    else if(tablet.matches) {
        newsCard[0].classList.add('news__card--visible');
        newsCard[1].classList.add('news__card--visible');
    }
    
    else {
        newsCard[0].classList.add('news__card--visible');
    }
}


window.addEventListener('resize', () => {
    if(window.innerWidth < 768) {
        for (let i = 0; i < newsCard.length; i++)
        newsCard[i].classList.remove('news__card--visible');
        newsCard[0].classList.add('news__card--visible');
    }

    else if(window.innerWidth >= 768 && window.innerWidth < 1920) {
        for (let i = 0; i < newsCard.length; i++)
        newsCard[i].classList.remove('news__card--visible');
        newsCard[0].classList.add('news__card--visible');
        newsCard[1].classList.add('news__card--visible');
    }

    else {
        for (let i = 0; i < newsCard.length; i++)
        newsCard[i].classList.add('news__card--visible');
    }
})

checkMedia();