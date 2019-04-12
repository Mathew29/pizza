// back end
function PizzaOrder(){
  this.pizzas = [],
  this.currentId - 0
}

function Pizza(size, toppings) {
  this.size = size,
  this.addToppings(toppings)
}

function Size(name, price) {
  this.name = name,
  this.price = price
}

function Toppings(name, price) {
  this.name = name,
  this.price = price
}

Pizza.prototype.addToppings = function(toppings) {
  var topOnPizza = [];
  toppings.forEach(function(toppping) {
    topOnPizza.push(topping);
  });
  this.toppings = topOnPizza;
}

Pizza.prototype.getPrice = function() {
  price = parseInt(this.size.price)
  this.toppings.forEach(function(topping) {
    price += (parseInt(topping.price)/100)
  });
  return price;
}

PizzaOrder.prototype.addId = function(pizza) {
  pizza.id = this.assignId();
  this.pizzas.push(pizza);
}

PizzaOrder.prototype.assignId = function() {
  this.currentId += 1;
  return this.currentId;
}





// user interface
var pizzaOrder = new PizzaOrder();

function displayOrderDetails() {
  var orderList = $("ul#order-list");
  var htmlForOrderInfo = "";
  htmlForOrderInfo.pizzas.forEach(function(pizza) {
    htmlForOrderInfo += "<li id=" + pizza.id + ">" + pizza.size.name + " " + pizza.toppings.length + "</li>";
  })
  orderList.html(htmlForOrderInfo);
};
// function showOrder(orderId) {
//   var
// }
//
// function attachListeners() {
//  $("#")
// };

$(document).ready(function() {
  // attachListeners();
  $("form#make-pizza").submit(function(event) {
    event.preventDefault();
    var selectedSize = $("#size option:selected").text();
    var inputtedToppings = $("input:checkbox[name=add-toppings]:checked").val();

    var size = new Size(selectedSize, $("#size").val());
    var topping = []





  });

});
