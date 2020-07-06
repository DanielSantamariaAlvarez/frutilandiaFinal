//Menú desplegable-------------------------------
$(".menu-toggle-btn").click(function(){
    $(this).toggleClass("fa-times");
    $(".navigation-menu").toggleClass("activi");
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
    dots: false,
    autoplay:true,
    autoplayTimeout:2000,
    autoplayHoverPause:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        }
    }
});






    //Contacto -------------------------------------------------------------------
    (function() {
        'use strict';
        window.addEventListener('load', function() {
            var forms = document.getElementsByClassName('formulario');
            var validation = Array.prototype.filter.call(forms, function(form) {
                form.addEventListener('submit', function(event) {
                    if (form.checkValidity() === false) {
                        event.preventDefault();
                        event.stopPropagation();
                    }
                    form.classList.add('was-validated');
                }, false);
            });
        }, false);
    })();  