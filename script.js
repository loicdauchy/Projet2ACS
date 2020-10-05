window.onload = function(){
    console.log('Page chargée');
    var mymap = L.map('mapid').setView([46.668557, 5.553253],13);

     var tileStreets = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoiZGF1Y2h5bCIsImEiOiJja2Z3aW50bjMxMzl3MzdxcWgyeXhqbG9hIn0.ud4JzAnmTEO6yUC1YOnyqQ'
    }).addTo(mymap);

    tileStreets.addTo(mymap);

    var marker = L.marker([46.668557, 5.553253]).addTo(mymap);

    marker.bindPopup("<b>Burgers - Café & Bar</b><br>C'est ici !")
}