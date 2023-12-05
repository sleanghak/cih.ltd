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
window.onscroll = function () {

    var myBackground = document.getElementById("changeBackground");

    if (document.documentElement.scrollTop > 0) {
        myBackground.style.backgroundColor = "white";
    } else {
        myBackground.style.backgroundColor = "black";
    }
}


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