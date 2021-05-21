// Fonction pour la slide Parcours
$( "#parcours").one( "click", function() {
  $('.slider-for').slick({
    arrows: false,
    fade: true,
    asNavFor: '.slider-nav',

  });
  $('.slider-nav').slick({
    slidesToShow: 5,
    slidesToScoll: 5,
    asNavFor: '.slider-for',
    dots: false,
    arrows: true,
    centerMode: true,
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        }
      },
      {
        breakpoint: 728,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
]
  });
})

// Hover sur les titres de la slide
$( ".nav-title" ).hover(
  function() {
    $( this ).addClass( "text-danger" );
  }, function() {
    $( this ).removeClass( "text-danger" );
  }
);

// Fonction de fermeture en cas de click en dehors de la collapse
$(document).click(function(e) {
	if (!$(e.target).is('body')) {
    	$('.collapse').collapse('hide');	    
    }
});

