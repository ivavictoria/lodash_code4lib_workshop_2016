// _.merge
// _.pick
// _.get
// _.set

describe("About Object Methods", function() {

  //We shall contemplate truth by testing reality, via spec expectations.
  it("should recursively merge own enumerable properties of the source object(s)", function () {
    var users = {
      'data': [{ 'user': 'barney' }, { 'user': 'fred' }]
    };

    var ages = {
      'data': [{ 'age': 36 }, { 'age': 40 }]
    };

    expect(_.merge(users, ages)).toEqual({'data': [{'user': 'barney', 'age': 36}, {'user': 'fred', 'age': 40}]});
  });

  it("should create an object composed of the picked object properties", function () {
    var object = { 'user': 'fred', 'age': 40 };

    expect(_.pick(object, 'user')).toEqual({ 'user': 'fred' });
  });
});
