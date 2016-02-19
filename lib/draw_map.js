function drawMap () {
  var map = L.map('map').setView([39.946951, -75.143720], 13);
    L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    _.each(clean_beer, function(beer) {
      L.marker([beer.lat, beer.long]).addTo(map).bindPopup(
        beer.name + "<br/>" + beer.street_address);
    });
}
