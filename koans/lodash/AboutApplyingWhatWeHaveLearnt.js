describe("About Applying What We Have Learnt", function () {

  it("should test out some stuff", function () {
    var map = L.map('map').setView([39.946951, -75.143720], 13);
    L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    expect(true).toEqual(true);
  });
});