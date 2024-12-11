document.addEventListener('DOMContentLoaded', () => {
    const carouselInner = document.querySelector('.carousel-inner');
    const prevButton = document.querySelector('.carousel-prev');
    const nextButton = document.querySelector('.carousel-next');
    const products = document.querySelectorAll('.product');

    let currentIndex = 0;
    const visibleProducts = 3;
    const gap = 16; 

    const productWidth = products[0].offsetWidth + gap;

    nextButton.addEventListener('click', () => {
        if (currentIndex < products.length - visibleProducts) {
            currentIndex++;
            updateCarousel();
        }
    });

    prevButton.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
            updateCarousel();
        }
    });

    function updateCarousel() {
        const offset = -currentIndex * (productWidth);
        carouselInner.style.transform = `translateX(${offset}px)`;
    }
});