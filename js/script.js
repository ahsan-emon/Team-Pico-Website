// work carousel 
$(document).ready(function(){
    $(".work-carousel").owlCarousel({
      center: true,
        // singleItem: true,
        margin: 20,
        loop: true,
        autoplay: true,
        smartSpeed: 1000,
        autoplayHoverPause: true,
        nav: false,
        dots: false,
        responsiveClass: true,
        responsive:{
          0:{
            items: 1,
          },
          576:{
            items: 2,
          },
          768:{
            items: 3,
          },
        }
    });
    });
  // about carousel 
  $(document).ready(function(){
    $(".about-carousel").owlCarousel({
      center: true,
        items: 1,
        singleItem: true,
        margin: 0,
        loop: true,
        autoplay: true,
        smartSpeed: 1000,
        autoplayHoverPause: true,
        nav: false,
        dots: false,
    });
    });
  // testimonial carousel 
  $(document).ready(function(){
    $(".testimonial-carousel").owlCarousel({
      center: true,
        margin: 20,
        loop: false,
        autoplay: false,
        smartSpeed: 1000,
        autoplayHoverPause: true,
        nav: true,
        navText: ["<i class='fas fa-arrow-left'></i>","<i class='fas fa-arrow-right'></i>"],
        dots: false,
        responsiveClass: true,
        responsive:{
          0:{
            items: 1,
          },
          576:{
            items: 2,
          },
          1200:{
            items: 3,
          },
          1800:{
            items: 4,
          },
        }
    });
    });
  // post carousel 
  $(document).ready(function(){
    $(".post-carousel").owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        smartSpeed: 1000,
        autoplayHoverPause: true,
        nav: false,
        dots: false,
        responsiveClass: true,
        responsive:{
          0:{
            items: 1,
          },
          576:{
            items: 2,
          },
          768:{
            items: 3,
          },
        }
    });
    });
    // mixitup 
    var mixer = mixitup('.mixCont');
    // counter js 
    $('.counter').counterUp({
        delay: 10,
        time: 2000
    });
    // wow js 
    new WOW().init();