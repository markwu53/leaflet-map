
//L.map('map').setView([41, -74], 9).addLayer(L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'));
var map = L.map('map').setView([40.71, -74], 13);

L.tileLayer('https://{s}.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
	dummy: 'dummy'
	,attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery <a href="http://mapbox.com">Mapbox</a>'
	,accessToken: 'pk.eyJ1IjoibWFya3d1NTMiLCJhIjoiY2lnNDk5YW1tMmg1M3VqbHZzcXRocjR0cCJ9.p1U0uW9MVHQ09RDb0sI00Q'
	//,id: 'markwu53.cig49999a2h79t9kvlnpu37n5'
	,id: 'markwu53.npk4do36'
}).addTo(map);

/*
L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery � <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 18,
    id: 'your.mapbox.project.id',
    accessToken: 'your.mapbox.public.access.token'
}).addTo(map);
*/

var marker = L.marker([40.72, -74]).addTo(map);

var circle = L.circle([40.71, -74], 500, {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5
}).addTo(map);

var polygon = L.polygon([
	[40.68, -74],
	[40.71, -74],
	[40.695, -74.05]
]).addTo(map);

marker.bindPopup("<b>Hello world!</b><br>I am a popup.");//.openPopup();
circle.bindPopup("I am a circle.");
polygon.bindPopup("I am a polygon.");

map.on('click', function(e) {
	L.popup()
        .setLatLng(e.latlng)
        .setContent("You clicked the map at " + e.latlng.toString())
        .openOn(map);
});