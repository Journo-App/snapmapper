var locationMarker = null
  , latlon;

if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
        function (position) {
            if (locationMarker) {
                return;
            }

            console.log("initial position found");

            latlon = '' + position.coords.latitude + ',' + position.coords.longitude;

            loadmap(latlon);

        },
        function (error) {
            console.log("oh shit: ", error);
        },
        {
            timeout: (5 * 1000),
            maximumAge: (1000 * 60 * 15),
            enableHighAccuracy: true
        }
    );
}



function loadmap(latlon) {
    $('#map_canvas').gmap({'center': latlon }).bind('init', function () {
        $('#map_canvas').gmap('addMarker', { 'foo': 'bar', 'position': '37.810733, -122.270651' });
        $('#map_canvas').gmap('addMarker', { 'foo': 'baz', 'position': '58.3426606750, 18.0736160278' });
        $('#map_canvas').gmap('find', 'markers', { 'property': 'foo', 'value': 'bar' }, function(marker, found) {
            marker.setVisible(found);
        });
    });
}
