function toggleMenu(){
    $('span:first-child').toggleClass('--first');
    $('span:last-child').toggleClass('--short');
    $('span:last-child').toggleClass('--last');
    $('.nav__menu').slideToggle();
}

$('.js-nav-button').click(function(){
    toggleMenu();
});