var usCoords = [37.09, -95.71];
var mapZoomLevel = 4.5
;

// Create the createMap function.
function createMap(ownerLayer, redLayer, blueLayer)
{

  // Create the tile layer that will be the background of our map.
  var streetmap = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  });

  var grayscale = L.tileLayer('https://stamen-tiles-{s}.a.ssl.fastly.net/toner-lite/{z}/{x}/{y}{r}.{ext}', {
    attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    subdomains: 'abcd',
    minZoom: 0,
    maxZoom: 20,
    ext: 'png'
  });
    // water color layer
    var waterColor = L.tileLayer('https://stamen-tiles-{s}.a.ssl.fastly.net/watercolor/{z}/{x}/{y}.{ext}', {
    attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    subdomains: 'abcd',
    minZoom: 1,
    maxZoom: 16,
    ext: 'jpg'
  });

  // Only one base layer can be shown at a time.
  var baseMaps = {
    "Street": streetmap,
    "Grayscale": grayscale,
    "Waterscale": waterColor
  };

  // Create an overlayMaps object to hold the bikeStations layer.
  var overlayMaps = {
    "Stations": ownerLayer,
    "Red State": redLayer,
    "Blue State": blueLayer,
    // "Gray State": grayLayer
  };

  // Create the map object with options.
  var myMap = L.map("map", {
    center: usCoords,
    zoom: mapZoomLevel,
    layers: [streetmap, ownerLayer, redLayer, blueLayer]
  });

  // Create a layer control, and pass it baseMaps and overlayMaps. Add the layer control to the map.
  L.control.layers(baseMaps, overlayMaps, {
    collapsed: false
  }).addTo(myMap);

}
// Create the createMarkers function.
function createMarkers(data)
{
   console.log(data);

  // Pull the "stations" property from response.data.
  // creates an array of stations that we can use to get the data that we need
  var stations = data[0].gunOwnership;
  console.log(stations)
  // Initialize an array to hold the bike markers.
var gunOwnersMarkers = [];
var redTeam = [];
var blueTeam = [];
// var grayTeam = [];

  // Loop through the stations array.
  for (var i = 0; i < 50; i++)
  {
     var station = stations[i];
    

      // For each station, create a marker, and bind a popup with the station's name.
      var totalMarker = L.marker([station.coordinate[0], station.coordinate[1]])
      .bindPopup(`<h2>State: ${station.State}</h2>
        <hr><b>Ownership Percentage: </b>${station.gunOwnership}%
        <b>Total: </b>${station.totalGuns}`)

     var markerColor;
  
    if ((station.State == "Arizona") || (station.State == "California") || (station.State == "Colorado") || (station.State == "Connecticut") || (station.State == "Delaware") || (station.State == "Georgia") || (station.State == "Hawaii") || (station.State == "Illinois")|| (station.State == "Maine")|| (station.State == "Maryland") || (station.State == "Massachusetts") || (station.State == "Michigan") || (station.State == "Minnesota") || (station.State == "Nevada") || (station.State == "New Hampshire") || (station.State == "New Jersey") || (station.State == "New Mexico") || (station.State == "New York") || (station.State == "Oregon") || (station.State == "Pennsylvania") || (station.State == "Rhode Island") || (station.State == "Vermont") || (station.State == "Virginia") || (station.State == "Washington") || (station.State == "Wisconsin"))
      markerColor = "blue";
    else
      markerColor = "red"; 
    
      var gunMarker = L.circle([station.coordinate[0], station.coordinate[1]],{
        fillOpacity: .30,
        color: markerColor,
        fillColor: markerColor,
        radius: 99999,
        weight:10
    })
    
    .bindPopup(`<h2>State: ${station.State}</h2>
       <hr><b>Ownership Percentage: </b>${station.gunOwnership}%
       <b>Total: </b>${station.totalGuns}`)

   
    // Add the marker to the bikeMarkers array.
    if ((station.State == "Arizona") || (station.State == "California") || (station.State == "Colorado") || (station.State == "Connecticut") || (station.State == "Delaware") || (station.State == "Georgia") || (station.State == "Hawaii") || (station.State == "Illinois")|| (station.State == "Maine")|| (station.State == "Maryland") || (station.State == "Massachusetts") || (station.State == "Michigan") || (station.State == "Minnesota") || (station.State == "Nevada") || (station.State == "New Hampshire") || (station.State == "New Jersey") || (station.State == "New Mexico") || (station.State == "New York") || (station.State == "Oregon") || (station.State == "Pennsylvania") || (station.State == "Rhode Island") || (station.State == "Vermont") || (station.State == "Virginia") || (station.State == "Washington") || (station.State == "Wisconsin"))
      redTeam.push(gunMarker);
    else
      blueTeam.push(gunMarker); 
    
    gunOwnersMarkers.push(totalMarker)


    var ownerLayer = L.layerGroup(gunOwnersMarkers);
    var redLayer = L.layerGroup(redTeam);
    var blueLayer = L.layerGroup(blueTeam);
  }
  // Create a layer group that's made from the gun owner markers array, and pass it to the createMap function.
  createMap(ownerLayer, redLayer, blueLayer);
}

// Perform an API call to the gun ownership json to get the station information. Call createMarkers when it completes.
d3.json("/gun_violenceDB/gunOwnership2022").then(createMarkers)
;