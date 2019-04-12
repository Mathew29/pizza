// back end
var pizzas = [];

function Pizza(size,) {
  this.size = size
}

function Size(name, price) {
  this.name = name
  this.price
}

function Toppings(name, price) {
  this.name = name,
  this.price = price
}

Pizza.prototype.addToppings = function(toppings) {
  var topOnPizza = []
  toppings.forEach(function(toppping) {
    topOnPizza.push(topping);
  });
  this.toppings = topOnPizza;
}

Pizza.prototpe.getPrice = function() {
  price = parseInt(this.size.price)
  this.toppings.forEach(function(topping) {
    price ++ (parseInt(top.price)/100)
  })
  return price;
}
