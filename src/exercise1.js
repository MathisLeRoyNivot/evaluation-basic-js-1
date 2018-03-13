var removeNegativeValue = function(values) {
  // Your future job begins here ...
  var arrNumbers=[34, -5, 9, 18, 0, -7, 32];
  var result = arrNumbers.filter(
    function (value) {
      return (typeof value === 'string');
    });
    return result
  // return arrNumbers.filter(typeof value === 'string');
  var arrNumbers1=[34, -5, 9, 18, 0, -7, 32];
  const result1 = arrNumbers1.filter(number => number < 0);
  return result1;
}

module.exports = {
  title: 'Exercise 1',
  run: removeNegativeValue
}
