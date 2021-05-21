// Chargement de la carte a l'ouverture de la carousel
$( "#contact").one( "click", function() {
    map()
})  

// Fonction pour l'affichage de la carte Open Street Map
function map(){
        // On initialise la latitude et la longitude de mon adresse
        var lat = 43.61338172832005;
        var lon = 1.428061786849943;
    
        var macarte = null;
        // Fonction d'initialisation de la carte
        function initMap() {
            // Créer l'objet "macarte" et l'insèrer dans l'élément HTML qui a l'ID "map"
            macarte = L.map('map').setView([lat, lon], 11);
            // Leaflet ne récupère pas les cartes (tiles) sur un serveur par défaut. Nous devons lui préciser où nous souhaitons les récupérer. Ici, openstreetmap.fr
            L.tileLayer('https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png', {
                // Il est toujours bien de laisser le lien vers la source des données
                attribution: 'données © <a href="//osm.org/copyright">OpenStreetMap</a>/ODbL - rendu <a href="//openstreetmap.fr">OSM France</a>',
                minZoom: 12,
                maxZoom: 20
            }).addTo(macarte);
    
            var myIcon = L.icon({
                iconUrl: "assets/img/map/home2.png",
                iconSize: [50],
                iconAnchor: [25, 50],
                popupAnchor: [-3, -76],
            });
            
            var marker = L.marker([43.61338172832005, 1.428061786849943], { icon: myIcon }).addTo(macarte);
            // Nous ajoutons la popup. A noter que son contenu (ici la variable ville) peut être du HTML
            marker.bindPopup();
        }
        $( document ).ready(function() {
            // Fonction d'initialisation qui s'exécute lorsque le DOM est chargé
            initMap();
        });
}

