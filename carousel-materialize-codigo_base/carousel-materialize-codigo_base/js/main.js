document.addEventListener('DOMContentLoaded', () => {

    const elemntosCarousel = document.querySelectorAll('.carousel');

    M.Carousel.init(elemntosCarousel, {
        duration: 1500,
        dist: -20/*-30*/,
        shift: 5,
        padding: 5,
        numVisible: 3,
        noWrap: false,
        indicators:true,
    });

});