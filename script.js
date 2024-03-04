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


    // This is to check for p5js skecth information
    window.addEventListener('message', function (event) {
        console.log("Message event received");
        console.log(event); // Log the entire event to inspect it
        if (event.data && event.data.completed) {
            console.log("Minigame completed!");
        } else {
            console.log("Received message:", event.data);
        }
    }, false);
});

function checkPagination(swiper) {
    const totalSlides = swiper.slides.length - swiper.loopedSlides * 2; 
    const currentIndex = swiper.realIndex + 1; // Ensuring human-based index counting
    const nextButton = document.querySelector('.swiper-button-next');
    const prevButton = document.querySelector('.swiper-button-prev');

    // Hide the next button if it's the first page. 
    if (currentIndex === 1) {
        if (prevButton) prevButton.style.display = 'none';
    } else {
        if (prevButton) prevButton.style.display = 'block';
    }

    //Commented out for now so we can figure out the game mechanics...
    // // If it's the minigame 8, remove the next button
    // if (currentIndex === 8) {
    //     if (nextButton) nextButton.style.display = 'none';
    // } else {
    //     if (nextButton) nextButton.style.display = 'block';
    // }

    // // If it's the minigame 12, remove the next button
    // if (currentIndex === 12) {
    //     if (nextButton) nextButton.style.display = 'none';
    // } else {
    //     if (nextButton) nextButton.style.display = 'block';
    // }
}

// This feature is from the Swiping Library for Image Swiping Gallery
var mySwiper = new Swiper('.mySwiper', {
    direction: 'horizontal',
    loop: true,

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    on: {
        init: function () {
            checkPagination(this);
        },
        slideChange: function () {
            checkPagination(this);
        }
    },

    // Enable swiping with mouse and touch
    simulateTouch: false,
    touchRatio: 1,
    grabCursor: true,
    slideToClickedSlide: true,

    // Speed of the transition between slides
    speed: 400,
});

// This is for generation of snowflakes
const maxSnowflakes = 100;      // Maximum number of snowflakes
const snowflakes = [];          // Array to store the snowflake elements

// Generates max number of snowflakes by creating the div elements 
function initializeSnowflakes() {
    for (let i = 0; i < maxSnowflakes; i++) {
        const snowflake = document.createElement('div');
        snowflake.classList.add('snowflake');
        resetSnowflake(snowflake);
        document.body.appendChild(snowflake);
        snowflakes.push(snowflake);

        // Instead of removing the snowflake, reset it
        snowflake.addEventListener('animationend', function () {
            resetSnowflake(snowflake);
        });
    }
}

function resetSnowflake(snowflake) {
    const maxSnowflakeSize = 55;
    snowflake.style.left = Math.random() * (window.innerWidth - maxSnowflakeSize) + 'px';
    snowflake.style.animationDuration = Math.random() * 3 + 2 + 's'; // Between 2 and 5 seconds
    snowflake.style.opacity = Math.random();
    snowflake.style.width = snowflake.style.height = Math.random() * 10 + 5 + 'px'; // Size between 5px and 15px
    snowflake.style.top = -Math.random() * 20 + 'px'; 
}

// Initialize snowflakes on page load
document.addEventListener('DOMContentLoaded', initializeSnowflakes);

// This is for the sounds
const audio = document.querySelector('audio');

playButton.addEventListener('click', function () {
    if (audio.paused) {
        audio.play();
        playIcon.classList.remove('fa-volume-xmark');
        playIcon.classList.add('fa-volume-off');
    } else {
        audio.pause();
        playIcon.classList.remove('fa-volume-off');
        playIcon.classList.add('fa-volume-xmark');
    }
});

// Selecting the swiper buttons
const prevButton = document.querySelector('.swiper-button-prev');
const nextButton = document.querySelector('.swiper-button-next');

// Selecting the audio element for the "pageflip" sound
const pageflipAudio = document.querySelector('audio[src="Sound/pageflip.mp3"]');

// Adding click event listeners to the swiper buttons
prevButton.addEventListener('click', function () {
    pageflipAudio.play();
});

nextButton.addEventListener('click', function () {
    pageflipAudio.play();
});