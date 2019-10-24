var owl = $('.owl-carousel');
owl.owlCarousel({
    items:1,
    loop:true,
    margin:0,
    nav:true,
    dots:true,
    autoplay:true,
    autoplayTimeout:4000,
    smartSpeed: 700,
    autoplayHoverPause:true
});
$('.play').on('click',function(){
    owl.trigger('autoplay.play.owl',[4000])
})
$('.stop').on('click',function(){
    owl.trigger('autoplay.stop.owl')
})

$(document).ready(function() {
    $('#burger').bind('click', function () {
        $('#burger, #burger-content').toggleClass('show');
    });
});
$('.continue').click(function(){
    $('#burger-content').toggleClass('show');
});


$(document).ready(function() {
    $('.main-search-icon').bind('click', function () {
        $('.search-line-input, .close-header-icon').toggleClass('show');
    });
});




( function( $ ) {
    $( document ).ready(function() {
        $('#menu-left-acide li.has-sub>a').on('click', function(){
            $(this).removeAttr('href');
            var element = $(this).parent('li');
            if (element.hasClass('open')) {
                element.removeClass('open');
                element.find('li').removeClass('open');
                element.find('ul').slideUp();
            }
            else {
                element.addClass('open');
                element.children('ul').slideDown();
                element.siblings('li').children('ul').slideUp();
                element.siblings('li').removeClass('open');
                element.siblings('li').find('li').removeClass('open');
                element.siblings('li').find('ul').slideUp();
            }
        });
    });
} )( jQuery );

