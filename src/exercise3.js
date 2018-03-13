var applyMap = function() {
  // Your future job begins here ...
  var inputValues = [12, 26, 42]
  function map1(value) {
    return value + 10
  }
  function map2(value) {
    return value * 3
  }
  var inputMaps = [map1, map2]

  var applyMap = function(inputValues, inputMaps) {
  if (inputValues === undefined || inputMaps === undefined) {
  var output = [];
  return output;
  }
  else {
    var output = [];
    var mapping = [];
    for (var i = 0; i < inputMaps.length; i++) {
      mapping = inputValues.map(inputMaps[i]);
      output.push(mapping);
    }
    return output;
  }  
 }

module.exports = {
  title: 'Exercise 3',
  run: applyMap
}
