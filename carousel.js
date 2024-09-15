$(document).ready(function () {
    $('.mustWatchCarousel').owlCarousel({
        items: 3,
        loop: true,
        margin: 10,
        nav: false,
        autoplay: true,
        autoplayHoverPause: true,
        autoplayTimeout: 5000,
        autoplaySpeed: 5000,
        smartSpeed: 5000,
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 2,
            },
            1000: {
                items: 3,
            }
        }
    });

    $('.brandsCarousel').owlCarousel({
        items: 5,
        loop: true,
        margin: 50,
        rtl: true,
        nav: false,
        autoplay: true,
        autoplayHoverPause: true,
        autoplayTimeout: 3000,
        autoplaySpeed: 3000,
        smartSpeed: 3000,
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 3,
            },
            1000: {
                items: 5,
            }
        }
    });
});