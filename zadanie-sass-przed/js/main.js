/***/
/*==========  Main Java Script  ==========*/

(function($) {
    "use strict"; // Start of use strict

    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 50)
        }, 1250, 'easeInOutExpo');
        event.preventDefault();
    });

    // Highlight the top nav as scrolling occurs
    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 51
    })

    // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a').click(function() {
        $('.navbar-toggle:visible').click();
    });

    // Offset for Main Navigation
    $('.t108-main-nav').affix({
        offset: {
            top: 100
        }
    })

    // Initialize WOW.js Scrolling Animations
    new WOW().init();

})(jQuery); // End of use strict

(function() {

    $('.btn-search').on('click', function(e) {

        e.preventDefault();
        $('#search').animate({width: 'toggle'}).focus();

    });

} () );

//Parallax
$(document).ready(function(){
   // cache the window object
   $window = $(window);
 
   $('section[data-type="background"]').each(function(){
     // declare the variable to affect the defined data-type
     var $scroll = $(this);
                     
      $(window).scroll(function() {
        // HTML5 proves useful for helping with creating JS functions!
        // also, negative value because we're scrolling upwards                            
        var yPos = -($window.scrollTop() / $scroll.data('speed'));
         
        // background position
        var coords = '40% '+ yPos + 'px';
 
        // move the background
        $scroll.css({ backgroundPosition: coords });   
      }); // end window scroll
   });  // end section function
}); // close out script

/* Create HTML5 element for IE */
document.createElement("section");

/* Create a map */
function init_map() {
    var var_location = new google.maps.LatLng(34.052932, -118.241444);

    var var_mapoptions = {
        center: var_location,
        zoom: 14
    };

    var var_marker = new google.maps.Marker({
        position: var_location,
        map: var_map,
        icon: 'images/maps-marker.png'
    });

    var var_map = new google.maps.Map(document.getElementById("map-container"),
        var_mapoptions);

    var_marker.setMap(var_map); 

}

google.maps.event.addDomListener(window, 'load', init_map);