describe("About Applying What We Have Learnt", function () {

  it("should filter items with no scores", function () {
    // Create a function named filterNoScores that returns an array
    // of objects that have at least one of ba_score, local_score, OR
    // beer_avg_score
    // Tip: use _.filter
    function filterNoScores (data) {
      // FILL IN FUNCTION
      return FILL_ME_IN;
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
      return FILL_ME_IN;
    }

    expect(splitLatLong(_.cloneDeep(beer_data_2))).toEqual(beer_data_3);
  });

  it("capitalize the city value", function () {
    // Create a function named capitalizeCity that returns an array
    // of objects the city property capitalized
    // Tip: use _.map and _.capitalize
    function capitalizeCity (data) {
      // FILL IN FUNCTION
      return  FILL_ME_IN;
    }

    expect(capitalizeCity(_.cloneDeep(beer_data_3))).toEqual(beer_data_4);
  });

  it("removes whitespace from street address", function () {
    // Create a function named trimStreetAddress that returns an array
    // of objects with whitespace removed from the steet_address property
    // Tip: use _.map and _.trim
    function trimStreetAddress (data) {
      // FILL IN FUNCTION
      return FILL_ME_IN;
    }

    expect(trimStreetAddress(_.cloneDeep(beer_data_4))).toEqual(beer_data_5);
  });

  it("nest all scores into one scores object property", function () {
    // Create a function named nestScores that returns an array
    // of objects with all three beer scores inside of a new object
    // named scores and "unsets" the old properties.
    // Tip: use _.map and _.unset
    function nestScores (data) {
      // FILL IN FUNCTION
      return FILL_ME_IN;
    }

    expect(nestScores(_.cloneDeep(beer_data_5))).toEqual(clean_beer_data);
  });

  it("should remove falsely values and return unique", function () {
    // Complete this exercise to show a surprise on the test page!
    // use _.compact and _.uniq
    var ary = [false, 0, 0, true, true];
    var final = FILL_ME_IN;

    expect(final).toEqual([true]);
    if (_.isEqual(final, [true])) {
      drawMap();
    }
  });

  it("should return an array of the top 5 objects by BA score", function () {
    // Try using chaining! https://lodash.com/docs#_
    // Tip: Use _.sortBy, _.reverse, _.take, and _.value

    var top5 = FILL_ME_IN;
    expect(top5).toEqual(top_5_by_ba_score);
  });

  it("should calculate the number of breweries", function () {
    // Try using chaining! https://lodash.com/docs#_
    // Tip: _.filter and _.size

    var number_of_breweries = FILL_ME_IN;
    expect(number_of_breweries).toEqual(9);
  });

  it("should calculate the avg BA score", function () {
    // Try using chaining! https://lodash.com/docs#_
    // Tip: _.map and _.mean

    var average_ba_score = FILL_ME_IN;
    expect(average_ba_score).toEqual(76.66037735849056);
  });

  it("should find the most common zipcode", function () {
    // Try using chaining! https://lodash.com/docs#_
    // Tip: _.map, _.countBy, _.toPairs, _.sortBy (use our sorting function),
    // _.take, _.fromPairs, _.keys, and _.first!!! Whew!

    function sortPairs (p) {
	     return -p[1];
     }

     var most_common_zip = FILL_ME_IN;
     expect(most_common_zip).toEqual("19147");
  });

  // Congratulations! You made it to then end!
});
