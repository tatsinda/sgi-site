(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.sticky-top').addClass('shadow-sm').css('top', '0px');
        } else {
            $('.sticky-top').removeClass('shadow-sm').css('top', '-100px');
        }
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });


    // Date and time picker
    $('.date').datetimepicker({
        format: 'L'
    });
    $('.time').datetimepicker({
        format: 'LT'
    });


    // Header carousel
    $(window).on("load", function () {
        console.log("✅ DOM complètement chargé !");

        setTimeout(function () {
            console.log("Nombre d'éléments après chargement :", $(".header-carousel .owl-carousel-item").length);

            if ($(".header-carousel .owl-carousel-item").length > 0) {
                var owl = $(".header-carousel");

                owl.owlCarousel({
                    autoplay: true,
                    autoplayHoverPause: true,
                    smartSpeed: 1000,
                    loop: true,
                    margin: 30,
                    dots: true,
                    nav: true,
                    navText: [
                        '<i class="bi bi-chevron-left"></i>',
                        '<i class="bi bi-chevron-right"></i>'
                    ],
                    responsive: {
                        0: { items: 1 },
                        576: { items: 1 },
                        768: { items: 1 },
                        992: { items: 1 },
                        1200: { items: 1 }
                    }
                });

                // Testimonials carousel
                $(".testimonial-carousel").owlCarousel({
                    autoplay: false,
                    smartSpeed: 1000,
                    center: true,
                    dots: false,
                    loop: true,
                    nav : true,
                    navText : [
                        '<i class="bi bi-arrow-left"></i>',
                        '<i class="bi bi-arrow-right"></i>'
                    ],
                    responsive: {
                        0:{
                            items:1
                        },
                        768:{
                            items:2
                        }
                    }
                });
                
                console.log("✅ Carousel initialisé avec succès !");
            } else {
                console.log("❌ Toujours aucun élément trouvé !");
            }
        }, 2000); // Attente supplémentaire
    });
    
})(jQuery);

