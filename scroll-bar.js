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

// function​ for slider
$(document).ready(function () {
    $(".slider").slick({
        autoplay: true,
        autoplaySpeed: 1500,
        arrows: true,
        prevArrow: '<button type="button" class="slick-prev">-</button>',
        nextArrow: '<button type="button" class="slick-next">-</button>',
        centerMode: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
        {
                breakpoint: 1200, // Adjust breakpoint as needed
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 992, // Adjust breakpoint as needed
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 768, // Adjust breakpoint as needed
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 600, // Adjust breakpoint as needed
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
});