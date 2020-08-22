$(function(){
    var sliders = $('.swiper-container');
    sliders.each(function(){
    /* eslint-disable-next-line*/
    var swiper = new Swiper(this, {
            slidesPerView: $(this).data('slide'),
            spaceBetween: $(this).data('space'),
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            breakpoints: {
                320: {
                    slidesPerView: 1,
                    spaceBetween: 0,
                },
                768: {
                    slidesPerView: 'auto',
                    spaceBetween: 16,
                },
                1200: {
                    slidesPerView: $(this).data('slide'),
                    spaceBetween: $(this).data('space'),
                }
            }
        });
    });
});