describe("About Applying What We Have Learnt", function () {
  afterEach(function () {
    if (_.isEqual(beer_data, clean_beer)) {
      drawMap();
    }
  })

  it("should test out some stuff", function () {
    
    beer_data = _.cloneDeep(clean_beer)
    expect(true).toEqual(true);

  });

});