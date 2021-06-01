// limite d'execution de la fonction
var limitSlick = 0;

//fonction slick pour le parcours
function slickCourse(){

      if(limitSlick == 0){
      $('.slider-for').slick({
        arrows: false,
        fade: true,
        asNavFor: '.slider-nav',
      });

      $('.slider-nav').slick({
        slidesToShow: 5,
        slidesToScoll: 8,
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
              slidesToScroll: 8,
            }
          },
          {
            breakpoint: 728,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 8,
            }
          }]
        });
        
        limitSlick = 1;
      }

}

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

