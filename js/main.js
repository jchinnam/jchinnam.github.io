/**
* Template Name: MyResume - v2.1.0
* Template URL: https://bootstrapmade.com/free-html-bootstrap-template-my-resume/
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/
!(function($) {
  "use strict";

  // Activate smooth scroll on page load with hash links in the url
  $(document).ready(function() {
    if (window.location.hash) {
      var initial_nav = window.location.hash;
      if ($(initial_nav).length) {
        var scrollto = $(initial_nav).offset().top;
        $('html, body').animate({
          scrollTop: scrollto
        }, 1500, 'easeInOutExpo');
      }
    }
  });

  // Init AOS
  function aos_init() {
    AOS.init({
      duration: 1000,
      once: true
    });
  }

  // Initiate aos_init() function on load
  $(window).on('load', function() {
    aos_init();
  });

  // Hide scroll indicator arrow when scrolling
  $(window).on('scroll', function() {
    var scrollTop = $(window).scrollTop();
    var scrollIndicator = $('.scroll-indicator');
    
    if (scrollTop > 50) {
      scrollIndicator.fadeOut(300);
    } else {
      scrollIndicator.fadeIn(300);
    }
  });

})(jQuery);
