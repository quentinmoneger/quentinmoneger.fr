// Fonction pour le formulaire de contact
$('#send').click(function() {
  $.post( './controller/contact.php', {
    name: $('#form').find('input[name=name]').val(),
    email: $('#form').find('input[name=email]').val(), 
    phone: $('#form').find('input[name=phone]').val(),  
    message: $('#form').find('textarea[name=message]').val()
  },
  function(resultJson) {
    var result = JSON.parse(resultJson);
   if (result['success'] == true) {
    $('#alert').prepend(result['message']),
    $('#form').find('input[name=name]').val(''),
    $('#form').find('input[name=email]').val(''), 
    $('#form').find('input[name=phone]').val(''),  
    $('#form').find('textarea[name=message]').val('')
   }
   if (result['success'] == false) {
   $('#alert').prepend(result['message']);
   }
 });
});

// Déclenchement des scripts js a lécoute du changement de slide
$('#myCarousel').on('slide.bs.carousel', function onSlide (ev) {
  var id = ev.relatedTarget.id;
  switch (id) {
    case "carousel-course":
      slickCourse();
      break;
    case "carousel-contact":
      map();
      break;
    default:
  }
})

// Fonction pour remettre dans l'ordre les infos sensibles
 $( ".reverse" ).each(function( index ) {
  str = $( this ).text().split("").reverse().join("")
  $( this ).html(str)
});

// Fonction de smootth scroll pour l'ancre
function scrollToTop() {
  var position =
      document.body.scrollTop || document.documentElement.scrollTop;
  if (position) {
      window.scrollBy(0, -Math.max(1, Math.floor(position / 10)));
      scrollAnimation = setTimeout("scrollToTop()", 30);
  } else clearTimeout(scrollAnimation);
}

// Fonction pour choisir le favicon en fonction du thème
function applyIcon (type) {
  var link = document.querySelector("link[rel*='icon']") || document.createElement('link');
  link.type = 'image/x-icon';
  link.rel = 'shortcut icon';

  if (type === "dark") {
      link.href = './assets/img/faviconwhite.png';
  }

  if(type === "light"){
      link.href = './assets/img/faviconblack.png';
  }

  document.getElementsByTagName('head')[0].appendChild(link);
}

var dmQuery = window.matchMedia("(prefers-color-scheme: dark)");
var lmQuery = window.matchMedia("(prefers-color-scheme: light)");

if(dmQuery.matches){
  applyIcon("dark");
}
if(lmQuery.matches){
  applyIcon("light");
}
