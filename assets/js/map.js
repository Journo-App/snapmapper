// Get the map container node.
var mapContainer = $( "#map" );

// Create the new Goole map controller using our
// map (pass in the actual DOM object). Center it
// above the first Geolocated IP address.
map = new google.maps.Map(
        mapContainer[ 0 ],
        {
            zoom: 11,
            center: new google.maps.LatLng(
                40.700683,
                -73.925972
                ),
            mapTypeId: google.maps.MapTypeId.ROADMAP
        }
);



if (navigator.geolocation) {
    var locationMarker = null;

        // Get the location of the user's browser using the
        // native geolocation service. When we invoke this method
        // only the first callback is requied. The second
        // callback - the error handler - and the third
        // argument - our configuration options - are optional.
        navigator.geolocation.getCurrentPosition(
                function( position ){

                // Check to see if there is already a location.
                // There is a bug in FireFox where this gets
                // invoked more than once with a cahced result.
                if (locationMarker){
                return;
                }

                // Log that this is the initial position.
                console.log( "Initial Position Found" );

                // Add a marker to the map using the position.
                locationMarker = addMarker(
                    position.coords.latitude,
                    position.coords.longitude,
                    "Initial Position"
                    );

                },
        function( error ){
            console.log( "Something went wrong: ", error );
        },
        {
            timeout: (5 * 1000),
            maximumAge: (1000 * 60 * 15),
            enableHighAccuracy: true
        }
    );

}
