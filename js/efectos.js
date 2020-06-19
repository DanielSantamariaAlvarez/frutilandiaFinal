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
window.addEventListener('load', function(){
    new Glider(document.querySelector('.carouselLista'), {
        draggable: true,
        rewind:true,
        dots: '.carouselIndicadores',
        autoplay: 2000,
        arrows: {
            prev: '.carouselAnterior',
            next: '.carouselSiguiente'
        },
        responsive: [
            {
                // screens greater than >= 800px
                breakpoint: 300,
                settings: {
                    // Set to `auto` and provide item width to adjust to viewport
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                // screens greater than >= 800px
                breakpoint: 450,
                settings: {
                    // Set to `auto` and provide item width to adjust to viewport
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                // screens greater than >= 1024px
                breakpoint: 800,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            }
        ]
    });
});


