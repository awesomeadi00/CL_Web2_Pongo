document.addEventListener('DOMContentLoaded', () => {
    //This is to ensure there is smooth scrolling when clicked on the button
    document.querySelectorAll('.homeText a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            // Get the target class from the href attribute and finds the target element
            const targetClass = this.getAttribute('href');
            const targetElement = document.querySelector(targetClass);

            if (targetElement) {
                // Get the height of the navContainer and adjusts an offset position so that it scrolls to that point. 
                const navHeight = document.querySelector('.homeText').offsetHeight;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = targetElement.offsetTop;

                // Smooth scroll to the element with offset
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
});

// This feature is from the Swiping Library for Image Swiping Gallery
var mySwiper = new Swiper('.mySwiper', {
    direction: 'horizontal',
    loop: true,

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // Enable swiping with mouse and touch
    simulateTouch: true,
    touchRatio: 1,
    grabCursor: true,
    slideToClickedSlide: true,

    // Speed of the transition between slides
    speed: 400,
});