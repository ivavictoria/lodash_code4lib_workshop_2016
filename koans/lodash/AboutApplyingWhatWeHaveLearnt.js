describe("About Applying What We Have Learnt", function () {

  it("should filter items with no scores", function () {
    // Create a function named filterNoScores that returns an array
    // of objects that have at least one of ba_score, local_score, OR
    // beer_avg_score
    // Tip: use _.filter
    function filterNoScores (data) {
      // FILL IN FUNCTION
      return _.filter(_.cloneDeep(data), function (obj) {
	       if (obj.ba_score || obj.place_score || obj.beer_avg_score) {
           return obj;
         }
       });
    }

    expect(filterNoScores(_.cloneDeep(beer_data_1))).toEqual(beer_data_2);
  });

  it("should split latitude and longitude", function () {
    // Create a function named splitLatLong that returns an array
    // of objects with separate properties named lat and long and removes
    // the original property "lat_long"
    // Tip: use _.map, _.split, _.toNumber, _.unset
    function splitLatLong (data) {
      // FILL IN FUNCTION
      return _.map(_.cloneDeep(data), function (obj) {
      	l_a = _.split(obj.lat_long, ',');
        obj.lat = _.toNumber(l_a[0]);
        obj.long = _.toNumber(l_a[1]);

      	_.unset(obj, 'lat_long');
      	return obj;
      });
    }

    expect(splitLatLong(_.cloneDeep(beer_data_2))).toEqual(beer_data_3);
  });

  it("capitalize the city value", function () {
    // Create a function named capitalizeCity that returns an array
    // of objects the city property capitalized
    // Tip: use _.map and _.capitalize
    function capitalizeCity (data) {
      // FILL IN FUNCTION
      return  _.map(_.cloneDeep(data), function (obj) {
        obj.city = _.capitalize(obj.city);
        return obj;
      });
    }

    expect(capitalizeCity(_.cloneDeep(beer_data_3))).toEqual(beer_data_4);
  });

  it("removes whitespace from street address", function () {
    // Create a function named trimStreetAddress that returns an array
    // of objects with whitespace removed from the steet_address property
    // Tip: use _.map and _.trim
    function trimStreetAddress (data) {
      // FILL IN FUNCTION
      return _.map(_.cloneDeep(data), function (obj) {
	        obj.street_address = _.trim(obj.street_address);
          return obj;
        });
    }

    expect(trimStreetAddress(_.cloneDeep(beer_data_4))).toEqual(beer_data_5);
  });

  it("nest all scores into one scores object property", function () {
    // Create a function named trimStreetAddress that returns an array
    // of objects with whitespace removed from the steet_address property
    // Tip: use _.map and _.trim
    function trimStreetAddress (data) {
      // FILL IN FUNCTION
      return _.map(_.cloneDeep(data), function (obj) {
        obj.scores = {};
        obj.scores.ba_score = obj.ba_score;
        obj.scores.place_score = obj.place_score;
        obj.scores.beer_avg_score = obj.beer_avg_score;

        _.unset(obj, 'ba_score');
        _.unset(obj, 'place_score');
        _.unset(obj, 'beer_avg_score');

        return obj;
      });
    }

    expect(trimStreetAddress(_.cloneDeep(beer_data_5))).toEqual(clean_beer_data);
  });




  // Methods to test?
  // _.capitalize (_.map over array)
  // phone number manipulation
  it("should test out some stuff", function () {

    beer_data = _.cloneDeep(clean_beer_data);
    expect(true).toEqual(true);
    if (_.isEqual(beer_data, clean_beer_data)) {
      drawMap();
    }
  });

});
