//Menú desplegable-------------------------------
$(".menu-toggle-btn").click(function(){
    $(this).toggleClass("fa-times");
    $(".navigation-menu").toggleClass("active");
});


//boton arriba -----------------------------------
$('.ir-arriba').click(function(){
    $('body, html').animate({
        scrollTop:'0px'
    }, 300);
});

$(window).scroll(function(){
    if($(this).scrollTop()>0){
        $('.ir-arriba').slideDown(300);
    }else{
        $('.ir-arriba').slideUp(300);
    }
});


//Carousel de fotos -------------------------------
$(".owl-carousel").owlCarousel({
    items: 2,
    margin:20,
    loop: true,
    center:true,
    dots: false,
    autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:true
});