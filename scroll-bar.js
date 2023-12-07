// function​ btn go to top
window.onscroll = function () {

    var mybutton = document.getElementById("scroll-bar");

    if (document.documentElement.scrollTop > 200) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

// function change background color
const navbarElement = document.getElementById('changeBackground');

window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;

    if (scrollY > 100) {
        navbarElement.style.backgroundColor = '#FFF';
    } else {
        navbarElement.style.backgroundColor = '#000';
    }
});

// function change background color
const navbarChangeBackgroundColor = document.getElementById('navbarHome');

window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;

    if (scrollY > 50) {
        navbarChangeBackgroundColor.style.backgroundColor = '#FFF';

    } else {
        navbarChangeBackgroundColor.style.backgroundColor = '';
    }
});

// function​ for swiper (slider)

const swiperEl = document.querySelector('swiper-container');

const params = {
    centeredSlides: false,
    slidesPerGroupSkip: 1,
    grabCursor: true,
    keyboard: {
        enabled: true,
    },
    breakpoints: {
        769: {
            slidesPerView: 2,
            slidesPerGroup: 2,
        },
    },
    scrollbar: true,
    navigation: true,
    pagination: {
        clickable: true,
    },
};

Object.assign(swiperEl, params)

swiperEl.initialize();