// _.compact
// _.difference
// _.flatten
// _.flattenDeep
//_.intersection
// _.union
// _.uniq

describe("About Array Methods", function() {

  //We shall contemplate truth by testing reality, via spec expectations.
  it("should create an array with all falsey values removed", function () {
    var array = [0, 1, false, 2, '', 3];

    expect(_.compact(array)).toEqual([1, 2,3]);
  });

  it("should create an array of unique array values not included in the other provided arrays", function () {
    var array1 = [1, 2, 3];
    var array2 = [4, 2];

    expect(_.difference(array1, array2)).toEqual([1, 3]);
  });

  it("should flatten a nested array", function () {
    //If isDeep is true the array is recursively flattened, otherwise it’s only flattened a single level
    var array = [1, [2, 3, [4]]];
    expect(_.flatten(array)).toEqual([1, 2, 3, [4]]);
    expect(_.flatten(array, true)).toEqual([1, 2, 3, 4]);
    expect(_.flattenDeep(array)).toEqual([1, 2, 3, 4]);
  });

  it("create an array of unique values that are included in all of the provided arrays", function () {
    var array1 = [1, 2];
    var array2 = [4, 2];
    var array3 = [2, 1];

    expect(_.intersection(array1, array2, array2)).toEqual([2])
  });

  it("create an array of unique values, in order, from all of the provided arrays", function () {
    var array1 = [1, 2];
    var array2 = [4, 2];
    var array3 = [2, 1];

    expect(_.union(array1, array2, array2)).toEqual([1, 2, 4])
  });

  it("create a duplicate-free version of an array", function () {
    var array1 = [2, 1, 2];

    expect(_.uniq(array1)).toEqual([2, 1])
  });

  it("create an array of unique values, in order, from all of the provided arrays", function () {
    var array1 = [1, 2];
    var array2 = [4, 2];
    var array3 = [2, 1];

    expect(_.union(array1, array2, array2)).toEqual([1, 2, 4])
  });
});
