describe("About Applying What We Have Learnt", function () {

  it("should test out some stuff", function () {
    var map = L.map('map').setView([39.946951, -75.143720], 13);
    L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    _.each(clean_beer, function(beer) {
      L.marker([beer.lat, beer.long]).addTo(map).bindPopup("beers");
    });

    expect(true).toEqual(true);
    alert('hello')
    beer_data = _.cloneDeep(clean_beer)
    alert(_.isEqual(beer_data, clean_beer))
    if (_.isEqual(beer_data, clean_beer)) {
      alert('EQUAL')
    } else {
      alert("NOT EQUQAL")
    }
  });


});