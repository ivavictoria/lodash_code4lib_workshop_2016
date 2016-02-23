// _.forEach
// _.map
// _.reduce
// _.filter
// _.find

describe("About Collection Methods", function() {

  //We shall contemplate truth by testing reality, via spec expectations.
  it("should iterate over elements of collection invoking iteratee for each element", function () {
    // https://lodash.com/docs#forEach
    var array = [1, 2, 3, 4];
    var accumulate = 0;

    _.forEach(array, function (n) {
      accumulate += 1;
    });

    expect(accumulate).toEqual(FILL_ME_IN);

    var obj = {'a': 1, 'b': 2};
    var keys = [];

    _.forEach(obj, function (n, key) {
      keys.push(key);
    });

    expect(keys).toEqual(FILL_ME_IN);
  });

  it("should create an array of values by running each element in collection through iteratee", function () {
    // https://lodash.com/docs#map

    function timesThree(n) {
      return n * 3;
    }

    var array = [1, 2, 3];
    var map = _.map(array, function (n) {
      return n* 3;
    });

    expect(map).toEqual(FILL_ME_IN);
    // A more idiomatic way of writing the same thing
    expect(_.map(array, timesThree)).toEqual(FILL_ME_IN);

    // Mapping an object (order not guaranteed)
    expect(_.map({'a': 1 , 'b': 2}, timesThree)).toEqual(FILL_ME_IN);

    var users = [
      { 'user': 'barney' },
      { 'user': 'fred' }
    ];

    // callback property shorthand
    expect(_.map(users, 'user')).toEqual(FILL_ME_IN);
  });

  it("should reduce collection to a value", function () {
    // https://lodash.com/docs#reduce
    var value = _.reduce([1, 2], function(total, n) {
      return total + n;
    });

    expect(value).toEqual(FILL_ME_IN);
  });

  it("should return an array of all elements predicate returns truthy for", function () {
    // https://lodash.com/docs#filter
    var evens = _.filter([4, 5, 6], function(n) {
      return n % 2 === 0;
    });

    expect(evens).toEqual(FILL_ME_IN);

    var users = [
      { 'user': 'barney', 'age': 36, 'active': true },
      { 'user': 'fred',   'age': 40, 'active': false },
      { 'user': 'pebbles', 'age': 1, 'active': true}
    ];

    var underForty = _.filter(users, function (user) {
      return user.age < 40;
    });

    expect(underForty).toEqual(FILL_ME_IN);

    // _.matches callback shorthand
    expect(_.filter(users, {'age':36})).toEqual(FILL_ME_IN)
  });

  it("should return the FIRST element predicate returns truthy for", function () {
    // https://lodash.com/docs#find
    var users = [
      { 'user': 'barney', 'age': 36, 'active': true },
      { 'user': 'fred',   'age': 40, 'active': false },
      { 'user': 'pebbles', 'age': 1, 'active': true}
    ];

    var firstUnderForty = _.find(users, function (user) {
      return user.age < 40;
    });

    expect(firstUnderForty).toEqual(FILL_ME_IN);

    // _.matches callback shorthand
    expect(_.find(users, {'active': true})).toEqual(FILL_ME_IN);
  });
});
