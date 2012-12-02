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
                37.7750,
                122.4183
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

//This will allow the map to be rendered on the screen
new google.maps.Map(document.getElementById("map-canvas"), myOptions);

//Used to fine the Geolocation of a request
if(google.loader.ClientLocation)
{
    visitor_lat = google.loader.ClientLocation.latitude;
    visitor_lon = google.loader.ClientLocation.longitude;
    visitor_city = google.loader.ClientLocation.address.city;
    visitor_region = google.loader.ClientLocation.address.region;
    visitor_country = google.loader.ClientLocation.address.country;
    visitor_countrycode = google.loader.ClientLocation.address.country_code;
//	document.getElementById('yourinfo').innerHTML = '<p>Lat/Lon: ' + visitor_lat + ' / ' + visitor_lon + '</p><p>Location: ' + visitor_city + ', ' + visitor_region + ', ' + visitor_country + ' (' + visitor_countrycode + ')</p>';
}
else
{
    // ClientLocation not found or not populated
    // so perform error handling
//	document.getElementById('yourinfo').innerHTML = '<p>Whoops!</p>';
}
