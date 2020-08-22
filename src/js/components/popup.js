$(function(){
    function togglePopup() {
        $('.popup').toggleClass('--is-open');
        
    }
    $('.js-popup').on('click', function(){
        togglePopup();
        $('#info').hide();
    });

    $('.js-close-popup').on('click', function(){
        event.preventDefault();
        togglePopup();
        $('#order').show();
        $('#info').hide();
    });

    $('#order').on('submit', function(){
        $('#order').hide();
        $('#info').show();
        return false;
    });

    $('#info').on('submit', function(){
        $('#info').hide();
        togglePopup();
        event.preventDefault();
        return false;
    });
});