const initSlider = () => {
    const slider = document.getElementById('testimonials-slider');

    if (slider) {
        jQuery(slider).find('.slider-track').slick({
            slidesToShow: 2, 
            slidesToScroll: 1,
            prevArrow: jQuery(slider).find('.arrow-left'),
            nextArrow: jQuery(slider).find('.arrow-right'),
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 1, 
                        slidesToScroll: 1
                    }
                }
            ]
        });
    }
};
export {initSlider}