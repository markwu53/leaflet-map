var map;

angular.module("carmap", [ "ui.bootstrap" ]).controller("myController", function($scope, $http, $modal) {
    $scope.tripHeaders = [ "Pickup Time", "Trip Duration in seconds", "Trip Miles", "Passenger Count", "Pickup Location", "Dropoff Location", "Route" ];
    $scope.getTripDetail = function(medallion, pickupTime) {
        $http({
            url : "trip-data?vin=" + medallion + "&pickupTime=" + pickupTime
        }).error(function(error) {
            alert("error");
        }).success(function(json) {
            var kmlData = atob(json.Row[0].Cell[0].$);
            var runLayer = omnivore.kml.parse(kmlData);
            map.fitBounds(runLayer.getBounds());
            runLayer.addTo(map);
        });
    };
    $scope.queryButton = function(medallion) {
        $http({
            url: "vin-data?vin=" + medallion
        }).error(function(error) {
            alert("error");
        }).success(function(json) {
            $scope.vinData = $.parseJSON(atob(json.Row[0].Cell[0].$));
            $(".result-vin").show();
            /*
            $.each($scope.vinData, function(date, trips) {
                logback(date);
                $.each(trips, function(index, trip) { logback(trip["trip:pickup_datetime"]); });
            });
            */
        });
    };
    function logback(value) {
        $http({ "url" : "logback?value=" + value });
    }
});

$(document).ready(function() {
    L.mapbox.accessToken = 'pk.eyJ1IjoibWFya3d1NTMiLCJhIjoiY2lnNDk5YW1tMmg1M3VqbHZzcXRocjR0cCJ9.p1U0uW9MVHQ09RDb0sI00Q';
    map = L.mapbox.map('map', 'markwu53.cig49999a2h79t9kvlnpu37n5', { center: [39.87, -83.05], zoom: 9 });
});
