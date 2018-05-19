jQuery(document).ready(function ($) {
    $('.safari__slider').slick({
        autoplay: false,
        slideToShow: 1,
    });
});

// map

  var map;
  const Italy = {
      lat: 43.158312, 
      lng: 12.198289  
        
  };
  const Spain = {
      lat: 39.514087, 
      lng: -3.348806
  };



  function initMap() {
      map = new google.maps.Map(document.getElementById('map'), {
          center: {
              lat: 39.776932, 
              lng: 8.664561
          },
          zoom: 6
      });
      var marker = new google.maps.Marker({
          position: Spain,
          map: map
      });
      var marker = new google.maps.Marker({
          position: Italy,
          map: map
      });
  }

    

  // AJAX

   const xhr = new XMLHttpRequest();
   xhr.open('GET', 'map.json', true);
   xhr.send();

   // Scroll    
       $('a[href*="#"]')
           .not('[href="#"]')
           .not('[href="#0"]')
           .click(function (event) {
               if (
                   location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
                   location.hostname == this.hostname
               ) {
                   var target = $(this.hash);
                   target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                   if (target.length) {
                       event.preventDefault();
                       var menuHeight = $("html").outerHeight(true);
                       $('html, body').animate({
                           scrollTop: target.offset().top - menuHeight - 40
                       }, 1000);
                   }
               }
           });