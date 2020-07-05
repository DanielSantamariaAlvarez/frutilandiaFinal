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
    $(function() {

        $("#contactForm input,#contactForm textarea").jqBootstrapValidation({
          preventSubmit: true,
          submitError: function($form, event, errors) {
            // additional error messages or events
          },
          submitSuccess: function($form, event) {
            event.preventDefault(); // prevent default submit behaviour
            // get values from FORM
            var name = $("input#name").val();
            var email = $("input#email").val();
            var phone = $("input#phone").val();
            var asunto = $("input#asunto").val();
            var message = $("textarea#message").val();
            var firstName = name; // For Success/Failure Message
            // Check for white space in name for Success/Fail message
            if (firstName.indexOf(' ') >= 0) {
              firstName = name.split(' ').slice(0, -1).join(' ');
            }
            $this = $("#sendMessageButton");
            $this.prop("disabled", true); // Disable submit button until AJAX call is complete to prevent duplicate messages
            $.ajax({
              url: "contact.php",
              type: "POST",
              data: {
                name: name,
                phone: phone,
                email: email,
                asunto: asunto,
                message: message
    
              },
              cache: false,
              success: function() {
                // Success message
                $('#success').html("<div class='alert alert-success'>");
                $('#success > .alert-success').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
                  .append("</button>");
                $('#success > .alert-success')
                  .append("<strong>Su mensaje fué enviado. </strong>");
                $('#success > .alert-success')
                  .append('</div>');
                //clear all fields
                $('#contactForm').trigger("reset");
              },
              error: function() {
                // Fail message
                $('#success').html("<div class='alert alert-danger'>");
                $('#success > .alert-danger').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
                  .append("</button>");
                $('#success > .alert-danger').append($("<strong>").text("Disculpe " + firstName + ", el mensaje no pudo ser enviado por un problema de conexión con el servidor, revise la conexión a internet e intentelo nuevamente."));
                $('#success > .alert-danger').append('</div>');
                //clear all fields
                //$('#contactForm').trigger("reset");
              },
              complete: function() {
                setTimeout(function() {
                  $this.prop("disabled", false); // Re-enable submit button when AJAX call is complete
                }, 1000);
              }
            });
          },
          filter: function() {
            return $(this).is(":visible");
          },
        });
      
        $("a[data-toggle=\"tab\"]").click(function(e) {
          e.preventDefault();
          $(this).tab("show");
        });
      });
      
      /*When clicking on Full hide fail/success boxes */
      $('#name').focus(function() {
        $('#success').html('');
      });
      