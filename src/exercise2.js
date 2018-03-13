var mapCustomer = function(customer) {
  // Your future job begins here ...
  var input = {
  firstname: 'Jack',
  lastname: 'Smith',
  products: [{ label: 'shoes', price: 89 }, { label: 'book', price: 14 }, { label: 'smartphone', price: 499 }]
  }

  var mapCustomer = function(input) {
    if (input != {}) {
      var output = Object.assign({}, input);
      var sum = 0;
      for (var i = 0; i < output.products.length; i++) {
        sum += output.products[i].price;
      }
    output.moneySpent = Number(sum);
    return output;
    }  else {
      var output = {
        firstname: 'John',
        lastname: 'Doe',
        products: [],
        moneySpent: 0
      };
      return output;
    }
  }
}

module.exports = {
  title: 'Exercise 2',
  run: mapCustomer
}
