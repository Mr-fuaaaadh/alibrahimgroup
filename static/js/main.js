/** ==========================================================================================

  Project :   Al Ibrahim Group - Responsive Multi-purpose HTML5 Template
  Version :   Bootstrap 4.1.1
  Author :    Themetechmount

========================================================================================== */


/** ===============

1. Preloader
2. TopSearch
3. Fixed-header
4. Menu
5. Number rotator
6. Enables menu toggle
7. Skillbar
8. Tab
9. Accordion
10. Isotope
11. Prettyphoto
12. owlCarousel
    .. Testimonial slide
    .. Blog slide
    .. Team slide
    .. Team2 slide
    .. Post slide
    .. Clients-logo
    .. Clients-logo2
    .. Portfolio-slide

13. One Page setting

14. Back to top 

 =============== */



(function($) {

   'use strict'


/*------------------------------------------------------------------------------*/
/* Preloader
/*------------------------------------------------------------------------------*/
// makes sure the whole site is loaded
 $(window).on("load",function() {
        // will first fade out the loading animation
     $("#preloader").fadeOut();
        // will fade out the whole DIV that covers the website.
     $("#status").fadeOut(9000);
})


/*------------------------------------------------------------------------------*/
/* TopSearch
/*------------------------------------------------------------------------------*/

    
    jQuery( ".ttm-header-search-link a" ).addClass('sclose');   
    
    jQuery( ".ttm-header-search-link a" ).on("click", function(e) {  
  
        jQuery(".field.searchform-s").focus();  
        
        if (jQuery('.ttm-header-search-link a').hasClass('sclose')) {   
            jQuery( ".ttm-header-search-link a i" ).removeClass('ti-search')
            .addClass('ti-close');
            jQuery(this).removeClass('sclose').addClass('open');    
            jQuery(".ttm-search-overlay").addClass('st-show');                  
        } else {
            jQuery(this).removeClass('open').addClass('sclose');
            jQuery( ".ttm-header-search-link a i" ).removeClass('ti-close').addClass('ti-search');  
            jQuery(".ttm-search-overlay").removeClass('st-show');   
        }   
        event.preventDefault(); 
    });


/*------------------------------------------------------------------------------*/
/* Fixed-header
/*------------------------------------------------------------------------------*/


    $(window).scroll(function(){
        

        if ( matchMedia( 'only screen and (min-width: 1200px)' ).matches ) 
        {
            if ($(window).scrollTop() >= 50 ) {

                $('.ttm-stickable-header').addClass('fixed-header');
                $('.ttm-stickable-header').addClass('visible-title');

            }
            else {

                $('.ttm-stickable-header').removeClass('fixed-header');
                $('.ttm-stickable-header').removeClass('visible-title');

            }
        }
    });






/*------------------------------------------------------------------------------*/
/* Animation on scroll: Number rotator
/*------------------------------------------------------------------------------*/
    
    $("[data-appear-animation]").each(function() {
        var self      = $(this);
        var animation = self.data("appear-animation");
        var delay     = (self.data("appear-animation-delay") ? self.data("appear-animation-delay") : 0);
        
        if( $(window).width() > 959 ) {
            self.html('0');
            self.waypoint(function(direction) {
                if( !self.hasClass('completed') ){
                    var from     = self.data('from');
                    var to       = self.data('to');
                    var interval = self.data('interval');
                    self.numinate({
                        format: '%counter%',
                        from: from,
                        to: to,
                        runningInterval: 2000,
                        stepUnit: interval,
                        onComplete: function(elem) {
                            self.addClass('completed');
                        }
                    });
                }
            }, { offset:'85%' });
        } else {
            if( animation == 'animateWidth' ) {
                self.css('width', self.data("width"));
            }
        }
    });

     jQuery(".ttm-circle-box").each(function () {

        var circle_box = jQuery(this);
        var fill_val = circle_box.data("fill");
        var emptyFill_val = circle_box.data("emptyfill");
        var thickness_val = circle_box.data("thickness");
        var linecap_val = circle_box.data("linecap")
        var fill_gradient = circle_box.data("gradient");
        var startangle_val = (-Math.PI / 4) * 1.5;
        if (fill_gradient != "") {
            fill_gradient = fill_gradient.split("|");
            fill_val = { gradient: [fill_gradient[0], fill_gradient[1]] };
        }
        if (typeof jQuery.fn.circleProgress == "function") {
            var digit = circle_box.data("digit");
            var before = circle_box.data("before");
            var after = circle_box.data("after");
            var digit = Number(digit);
            var short_digit = digit / 100;
            var size_val = circle_box.data("size");
            jQuery(".ttm-circle", circle_box)
                .circleProgress({ value: 0, duration: 8000, size: size_val, startAngle: startangle_val, 
                    thickness: thickness_val, linecap:linecap_val, emptyFill: emptyFill_val, fill: fill_val })
                .on("circle-animation-progress", function (event, progress, stepValue) {
                    
                    circle_box.find(".ttm-fid-number").html(before + Math.round(stepValue * 100) + after);
                });
        }
        circle_box.waypoint(
            function (direction) {

                if (!circle_box.hasClass("completed")) {
                    if (typeof jQuery.fn.circleProgress == "function") {
                        jQuery(".ttm-circle", circle_box).circleProgress({ value: short_digit });
                    }
                    circle_box.addClass("completed");
                }
            },
            { offset: "90%" }
        );
    });



/*------------------------------------------------------------------------------*/
/* Skillbar
/*------------------------------------------------------------------------------*/

jQuery('.progress').each(function(){
    jQuery(this).find('.progress-bar').animate({
        width:jQuery(this).attr('data-value')
    },6000);
});


/*------------------------------------------------------------------------------*/
/* Tab
/*------------------------------------------------------------------------------*/ 

$('.ttm-tabs').each(function() {
    $(this).children('.content-tab').children().hide();
    $(this).children('.content-tab').children().first().show();
    $(this).find('.tabs').children('li').on('click', function(e) {  
        var liActive = $(this).index(),
            contentActive = $(this).siblings().removeClass('active').parents('.ttm-tabs').children('.content-tab').children().eq(liActive);
        contentActive.addClass('active').fadeIn('slow');
        contentActive.siblings().removeClass('active');
        $(this).addClass('active').parents('.ttm-tabs').children('.content-tab').children().eq(liActive).siblings().hide();
        e.preventDefault();
    });
});


/*------------------------------------------------------------------------------*/
/* Accordion
/*------------------------------------------------------------------------------*/

/*https://www.antimath.info/jquery/quick-and-simple-jquery-accordion/*/
$('.toggle').eq(0).addClass('active').find('.toggle-content').css('display','block');
$('.accordion .toggle-title').on("click", function(){
    $(this).siblings('.toggle-content').slideToggle('fast');
    $(this).parent().toggleClass('active');
    $(this).parent().siblings().children('.toggle-content:visible').slideUp('fast');
    $(this).parent().siblings().children('.toggle-content:visible').parent().removeClass('active');
});


/*------------------------------------------------------------------------------*/
/* Isotope
/*------------------------------------------------------------------------------*/

$(window).on("load",function(){

    var $container = $('#isotopeContainer');

    // filter items when filter link is clicked
    $('#filters a').on("click", function(){
      var selector = $(this).attr('data-filter');
      $container.isotope({ filter: selector });
      return false;
    });

    var $optionSets = $('#filters li'),
        $optionLinks = $optionSets.find('a');

        $optionLinks.on("click", function(){
            var $this = $(this);
            // don't proceed if already selected
            if ( $this.hasClass('selected') ) {
              return false;
            }
            var $optionSet = $this.parents('#filters');
            $optionSet.find('.selected').removeClass('selected');
            $this.addClass('selected');

            // make option object dynamically, i.e. { filter: '.my-filter-class' }
            var options = {},
                key = $optionSet.attr('data-option-key'),
                value = $this.attr('data-option-value');
            // parse 'false' as false boolean
            value = value === 'false' ? false : value;
            options[ key ] = value;
            if ( key === 'layoutMode' && typeof changeLayoutMode === 'function' ) {
              // changes in layout modes need extra logic
              changeLayoutMode( $this, options )
            } else {
              // otherwise, apply new options
              $container.isotope( options );
            }

            return false;
        });
   });

    
/*------------------------------------------------------------------------------*/
/* Prettyphoto
/*------------------------------------------------------------------------------*/
jQuery(document).on("ready", function(){

 // Normal link
jQuery('a[href*=".jpg"], a[href*=".jpeg"], a[href*=".png"], a[href*=".gif"]').each(function(){
    if( jQuery(this).attr('target')!='_blank' && !jQuery(this).hasClass('prettyphoto') && !jQuery(this).hasClass('modula-lightbox') ){
        var attr = $(this).attr('data-gal');
        if (typeof attr !== typeof undefined && attr !== false && attr!='prettyPhoto' ) {
            jQuery(this).attr('data-rel','prettyPhoto');
        }
    }
});     


jQuery('a[data-gal^="prettyPhoto"]').prettyPhoto();
jQuery('a.ttm_prettyphoto').prettyPhoto();
jQuery('a[data-gal^="prettyPhoto"]').prettyPhoto();
jQuery("a[data-gal^='prettyPhoto']").prettyPhoto({hook: 'data-gal'})

});
    

/*------------------------------------------------------------------------------*/
/* owlCarousel
/*------------------------------------------------------------------------------*/

// ===== Testimonial slide ==== 

    $(".testimonial-slide").owlCarousel({  
        loop:true,
        margin:0,
        smartSpeed: 3000,
        autoplay: 4000,
        nav: $('.testimonial-slide').data('nav'),
        dots: $('.testimonial-slide').data('dots'),                     
        responsive:{
            0:{
                items:1,
                nav:false
                
            },
            600:{
                items:1,
                nav:false
                
            },
            1000:{
                items:1,
                nav:false
               
            }
        }
    });

  // ===== Testimonial-2 ==== 

    $(".testimonial-slide2").owlCarousel({  
        loop:true,
        margin:0,
        smartSpeed: 3000,
        autoplay: 4000,
        nav: $('.testimonial-slide2').data('nav'),
        dots: $('.testimonial-slide2').data('dots'),                     
        responsive:{
            0:{
                items:1,
                nav:false,
                dots:false
            },
            600:{
                items:2,
                nav:false,
                dots:false
            },
            1000:{
                items:2,
                nav:false,
                loop:false,
                dots:false
            }
        }
    });

  // ===== Testimonial-3 ==== 

    $(".testimonial-slide3").owlCarousel({  
        loop:true,
        margin:0,
        smartSpeed: 3000,
        autoplay:false,
        nav: $('.testimonial-slide').data('nav'),
        dots: $('.testimonial-slide').data('dots'),                     
        responsive:{
            0:{
                items:1,
                nav:false,
                dots:false
                
            },
            600:{
                items:1,
                nav:false,
                dots:false
                
            },
            1000:{
                items:1,
                nav:true,
                dots:false
               
            }
        }
    });


// ===== Blog slide ==== 

    $(".blog-slide").owlCarousel({  
        autoplay: false,
        loop:true,
        margin:0,
        smartSpeed: 3000,
        nav: $('.testimonial-slide').data('nav'),
        dots: $('.testimonial-slide').data('dots'),                     
        responsive:{
            0:{
                items:1,
                nav:true
            },
            600:{
                items:1,
                nav:true
            },
            1000:{
                items:1,
                nav:false,
                loop:true
            }
        }
    });


// ===== Team slide ==== 

    $(".team-slide").owlCarousel({  
        loop:true,
        margin:0,
        nav: false,
        dots: false,                     
        autoplay: false,
        smartSpeed: 3000,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
            },
            475:{
                items:2,
            },
            1000:{
                items:2,
            }
        }
    });


// ===== Team2 slide ====   

    $(".team2-slide").owlCarousel({  
        loop:true,
        margin:0,
        nav: false,
        dots: false,  
        smartSpeed: 3000,                   
        autoplay: false,
        responsive:{
            0:{
                items: 1
            },
            480:{
                items:2
            },
            768:{
                items:3
            },
            1200:{
                items:4
            }
        }
    });

// ===== Team3 slide ==== 

    $(".team3-slide").owlCarousel({  
        loop:true,
        margin:0,
        nav: false,
        dots: false,                     
        autoplay: false,
        smartSpeed: 3000,
        responsiveClass:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            991:{
                items:3
            },
            1000:{
                items:3
            }
        }
    });


// ===== Post slide ==== 

    $(".post-slide").owlCarousel({  
        loop:true,
        margin:0,
        nav: false,
        dots: false,                     
        autoplay: false,
        smartSpeed: 3000,
        responsiveClass:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            991:{
                items:3
            },
            1000:{
                items:3
            }
        }
    });


    $(".post-img-slide").owlCarousel({  
        loop:true,
        margin:0,
        nav: false,
        dots: true,                     
        autoplay: true,
        responsiveClass:true,                     
        responsive:{
            0:{
                items:1,
                nav:true
            },
            600:{
                items:1,
                nav:true
            },
            1000:{
                items:1,
                nav:false,
                loop:true
            }
        }
    });


// ===== Clients-logo ====

$(".clients-logo").owlCarousel({ 
    autoplay: true,
    nav: false,
    dots:false,                     
    margin: 0,
    loop:true,
    smartSpeed: 3000,
    responsiveClass:true,
    responsive:{
        0:{
            items:1
        },
        480:{
            items:2
        },
        768:{
            items:3
        },
        991:{
            items:5
        }
        
    }    
});


// ===== Clients-logo2 ==== 

$(".clients-logo2").owlCarousel({ 
    autoplay: true,
    nav: false,
    dots:false,                     
    margin: 0,
    loop:true,
    smartSpeed: 3000,
    responsiveClass:true,
    responsive:{
        0:{
            items:1
        },
        480:{
            items:2
        },
        768:{
            items:3
        },
        991:{
            items:4
        }
        
    }    
});


// ===== Portfolio-slide ==== 
$(".portfolio-slide").owlCarousel({ 
    autoplay: false,
    nav: false,
    dots:false,                     
    margin: 0,
    loop:true,
    smartSpeed: 3000,
    responsiveClass:true,
    responsive:{
        0:{
            items:1
        },
        480:{
            items:2
        },
        991:{
            items:3
        },
        1000:{
            items:4
        }
    }    
});

$(".portfolio-slide2").owlCarousel({ 
    autoplay: true,
    nav: false,
    dots:false,                     
    margin: 0,
    loop:true,
    smartSpeed: 3000,
    responsiveClass:true,
    responsive:{
        0:{
            items:1
        },
        480:{
            items:2
        },
        991:{
            items:2
        },
        1000:{
            items:2
        }
    }    
});



/*------------------------------------------------------------------------------*/
/* One Page setting
/*------------------------------------------------------------------------------*/  
jQuery(document).on("ready", function($) {
  // Scroll to the desired section on click
  // Make sure to add the `data-scroll` attribute to your `<a>` tag.
  // Example: 
  // `<a data-scroll href="#my-section">My Section</a>` will scroll to an element with the id of 'my-section'.
  function scrollToSection(event) {
    event.preventDefault();
    var $section = $($(this).attr('href')); 
    $('html, body').animate({
      scrollTop: $section.offset().top
    }, 500);
  }
  $('[data-scroll]').on('click', scrollToSection);
}(jQuery));



/*------------------------------------------------------------------------------*/
/* Back to top
/*------------------------------------------------------------------------------*/

// ===== Scroll to Top ==== 
jQuery('#totop').hide();
$(window).on("scroll",function() {
    "use strict";
    if (jQuery(this).scrollTop() >= 100) {        // If page is scrolled more than 50px
        jQuery('#totop').fadeIn(200);    // Fade in the arrow
        jQuery('#totop').addClass('top-visible');
    } else {
        jQuery('#totop').fadeOut(200);   // Else fade out the arrow
        jQuery('#totop').removeClass('top-visible');
    }
});
jQuery('#totop').on("click", function() {      // When arrow is clicked
    jQuery('body,html').animate({
        scrollTop : 0                       // Scroll to top of body
    }, 500);
    return false;
});


 $(function() {

    });

})(jQuery);


