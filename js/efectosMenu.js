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
    margin:20,
    loop: true,
    center:true,
    resized:true,
    dots: false,
    autoplay:true,
    autoplayTimeout:4000,
    autoplayHoverPause:true,
    responsiveClass:true,
    responsive:{
        0:{
            items:3
        },
        400:{
            items:4
        },
        800:{
            items:5
        }
    }
});
