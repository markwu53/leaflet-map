var map = L.map('map').setView([51.505, -0.09], 13);
//var map = L.mapbox.map('map', 'mapbox.streets').setView([40, -74], 9);

/*
L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 18,
    id: 'your.mapbox.project.id',
    accessToken: 'your.mapbox.public.access.token'
}).addTo(map);
*/

//https://a.tiles.mapbox.com/v4/markwu53.cig49999a2h79t9kvlnpu37n5/page.html?access_token=pk.eyJ1IjoibWFya3d1NTMiLCJhIjoiY2lnNDk5YW1tMmg1M3VqbHZzcXRocjR0cCJ9.p1U0uW9MVHQ09RDb0sI00Q#4/38.00/-97.00
//L.tileLayer('https://api.tiles.mapbox.com/v4/markwu53.cig49999a2h79t9kvlnpu37n5/3/40/0.png?access_token=pk.eyJ1IjoibWFya3d1NTMiLCJhIjoiY2lnNDk5YW1tMmg1M3VqbHZzcXRocjR0cCJ9.p1U0uW9MVHQ09RDb0sI00Q', {
//L.tileLayer('https://a.tiles.mapbox.com/v4/markwu53.cig49999a2h79t9kvlnpu37n5/page.html?access_token=pk.eyJ1IjoibWFya3d1NTMiLCJhIjoiY2lnNDk5YW1tMmg1M3VqbHZzcXRocjR0cCJ9.p1U0uW9MVHQ09RDb0sI00Q#4/38.00/-97.00' , {
//L.tileLayer('https://api.tiles.mapbox.com/v4/markwu53.cig49999a2h79t9kvlnpu37n5/0/0/0.png', {
//L.tileLayer('https://a.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
//L.tileLayer('https://a.tiles.mapbox.com/v4/{id}/page.html?access_token={accessToken}#4/38.00/-97.00', {
L.tileLayer('https://api.mapbox.com/v4/{id}/0/0/0.png?access_token={accessToken}', {
	//https://a.tiles.mapbox.com/v4/markwu53.cig49999a2h79t9kvlnpu37n5/page.html?access_token=pk.eyJ1IjoibWFya3d1NTMiLCJhIjoiY2lnNDk5YW1tMmg1M3VqbHZzcXRocjR0cCJ9.p1U0uW9MVHQ09RDb0sI00Q#4/38.00/-97.00
        attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>'
        ,maxZoom: 18
        ,id: 'markwu53.cig49999a2h79t9kvlnpu37n5'
        //,id: 'mapbox.streets'
        ,accessToken: 'pk.eyJ1IjoibWFya3d1NTMiLCJhIjoiY2lnNDk5YW1tMmg1M3VqbHZzcXRocjR0cCJ9.p1U0uW9MVHQ09RDb0sI00Q'
    	,z: '0'
    	,x: '0'
    	,y: '0'
}).addTo(map);

/*
{"type":"FeatureCollection","features":[{"type":"Feature","properties":{"id":"marker-cig4999xz2h7bt9kvpx0gkugi","title":"Welcome to Mapbox!","description":"","marker-size":"medium","marker-color":"#3887be","marker-symbol":"embassy"},"geometry":{"coordinates":[-97,38],"type":"Point"},"id":"cig499a2v000ot9kv4s5qct52"}],"id":"markwu53.cig49999a2h79t9kvlnpu37n5"}
*/