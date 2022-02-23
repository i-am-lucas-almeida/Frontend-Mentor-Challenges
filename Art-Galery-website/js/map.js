const latitude = '-23.5613';
const longitude = '-46.6560';

var map = L.map('map').setView([latitude, longitude], 12);

L.tileLayer('https://api.mapbox.com/styles/v1/andraia007/cky2g8t2939o014jm9czkpqzj/tiles/{z}/{x}/{y}?access_token={accessToken}', {

    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    minZoom: 14,
    maxZoom: 15,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoiYW5kcmFpYTAwNyIsImEiOiJja3kwdmwxcmcwNHhpMm5wZWNvdXFya3FmIn0.tnflXbqjSk2P8NPgX1oWDQ'

}).addTo(map);

map.removeControl(map.zoomControl);

var circle = L.circle([-23.5622, longitude], {
    color: '#D5966C',
    fillColor: '#D5966C',
    fillOpacity: 0.3,
    radius: 220,
}).addTo(map);

var popup = L.popup()
    .setLatLng([latitude, longitude])
    .setContent("Av. Paulista, 1578 - Bela Vista, São Paulo - SP")
    .openOn(map);
