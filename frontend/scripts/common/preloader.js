const preloader = document.querySelector('.preloader');

setTimeout(() => {
    preloader.style.opacity = 0;
}, 600);

setTimeout(() => {
    preloader.remove();
}, 1200);