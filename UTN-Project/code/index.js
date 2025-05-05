document.addEventListener('DOMContentLoaded', function () {
    let currentSlide = 0;
    const slides = document.querySelectorAll('.slide');
    const milisegundos = 10000;

    function showSlide() {
        slides.forEach(slide => slide.style.display = 'none');

        if (currentSlide >= slides.length) currentSlide = 0;
        if (currentSlide < 0) currentSlide = slides.length - 1;

        slides[currentSlide].style.display = 'block';
    }

    setInterval(function () {
        currentSlide++;
        showSlide();
    }, milisegundos);

    showSlide();
});