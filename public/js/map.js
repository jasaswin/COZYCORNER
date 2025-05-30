

	// mapboxgl.accessToken = mapToken;
  //   const map = new mapboxgl.Map({
  //  container: 'map', // container ID
  //    center: listing.geometry.coordinates, // starting position [lng, lat]
  //    style: 'mapbox://styles/mapbox/streets-v9', 
  //    zoom: 9 // starting zoom
  //   });

   
  //   // Create a new marker.
  //   const marker = new mapboxgl.Marker({color : "red"})
  //   .setLngLat(listing.geometry.coordinates) //listing/geomertyu / coordinatre
  //   .setPopup(new mapboxgl.Popup({offset: 25})
    
  //   .setHTML(`<h4>${listing.title}</h4><p>Exact location provided after booking!</p>`))
  //   .addTo(map);
 


//   // listing.geometry.coordinates is [lng, lat]
// // Leaflet uses [lat, lng], so reverse it:
// const coordinates = [listing.geometry.coordinates[1], listing.geometry.coordinates[0]];

// // Initialize the map
// const map = L.map('map').setView(coordinates, 9);

// // Add OpenStreetMap tiles
// L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
//   attribution: '&copy; OpenStreetMap contributors'
// }).addTo(map);

// // Add a red marker with popup
// L.marker(coordinates, { icon: L.icon({
//     iconUrl: 'https://maps.gstatic.com/mapfiles/api-3/images/spotlight-poi2.png',
//     iconSize: [27, 43], // Customize if needed
//     iconAnchor: [13, 41],
//     popupAnchor: [0, -30]
// })})
// .bindPopup(`<h4>${listing.title}</h4><p>Exact location provided after booking!</p>`)
// .addTo(map);



// Ensure the page has the 'listing' and 'coordinates' variables from show.ejs
if (typeof listing !== "undefined" && Array.isArray(coordinates)) {
    // Initialize the map centered on the listing location
    const map = L.map('map').setView(coordinates, 9);

    // Add OpenStreetMap tiles
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap contributors',
    }).addTo(map);

    // Create custom icon
    const customIcon = L.icon({
        iconUrl: 'https://maps.gstatic.com/mapfiles/api-3/images/spotlight-poi2.png',
        iconSize: [27, 43],
        iconAnchor: [13, 41],
        popupAnchor: [0, -30],
    });

    // Add marker with popup
    L.marker(coordinates, { icon: customIcon })
        .addTo(map)
        .bindPopup(`<h4>${listing.title}</h4><p>Exact location provided after booking!</p>`)
        .openPopup();
} else {
    console.error("Map data is missing or invalid.");
}
