
function createMap(bikeStations) 
{
 // Create the tile layer that will be the background of our map.
tiles = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);
    

  // Create a baseMaps object to hold the streetmap layer.
  let baseMaps = {
    "Street Map": streetmap
  };

  // Create an overlayMaps object to hold the killed layer.
  let killedOverlayMaps = {
    "killed": killed
  };

   // Create an overlayMaps object to hold the injured layer.
   let injuredOverlayMaps = {
    "injured": injured
  };
 
  mapObject = L.map('map').setView([37.8, -96], 4);
  //vs
   // Create the map object with options.
  let map = L.map("map-id", {
      center: [40.73, -74.0059],
      zoom: 12,
      layers: [streetmap, bikeStations]});

  // Create a layer control, and pass it baseMaps and overlayMaps. Add the layer control to the map.
  L.control.layers(baseMaps, killedOverlayMap, injuredOverlayMaps, {
    collapsed: false
  }).addTo(map);
}

function createMarkers(response) {

    // Pull the "stations" property from response.data. // ok but where am I getting this data? The json file, ok, now how do I pull from it? 
    let Incidents = data_complete;
  
    // Initialize an array to hold bike markers.
    let incidents = [];
  
    // Loop through the stations array.
    for (let index = 0; index < stations.length; index++) {
      let station = stations[index];
  
      // For each station, create a marker, and bind a popup with the station's name.
      let bikeMarker = L.marker([station.lat, station.lon])
        .bindPopup("<h3>" + station.name + "<h3><h3>Capacity: " + station.capacity + "</h3>");
  
      // Add the marker to the bikeMarkers array.
      bikeMarkers.push(bikeMarker);
    }
  
    // Create a layer group that's made from the bike markers array, and pass it to the createMap function.
    createMap(L.layerGroup(bikeMarkers));
  }
  
  
  // Perform an API call to the Citi Bike API to get the station information. Call createMarkers when it completes.
  d3.json("https://gbfs.citibikenyc.com/gbfs/en/station_information.json").then(createMarkers);
  