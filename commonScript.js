let lastScrollTop = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', function () {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
        // Downscroll - hide the navbar
        navbar.style.top = '-168px';
    } else {
        // Upscroll - show the navbar
        navbar.style.top = '0';

        if (scrollTop > 0) {
            navbar.classList.add('navbar-bg');
        }
    }

    if (scrollTop === 0) {
        navbar.classList.remove('navbar-bg');
    }

    lastScrollTop = scrollTop;
});

const videos = document.querySelectorAll('.reactionVideo');

videos.forEach(video => {
    video.addEventListener('click', function () {
        videos.forEach(v => {
            if (v !== video) {
                v.pause();
            }
        });

        if (video.paused) {
            video.play();
        } else {
            video.pause();
        }
    });
});