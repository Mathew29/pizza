// back end
var pizzas = [];

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







// user interface
var pizza = new Pizza();

function displayOrderDetails() {
  var orderList = $("ul#order-list");
  var htmlForOrderInfo = "";
  for(var i = 0; i < pizzas.length; i++){
    htmlForOrderInfo += "<li id=" + i + ">" + pizzas[i]size.name + " " + pizzas[i].toppings.length + " topping pizza</li>";
  };
  orderList.html(htmlForOrderInfo);
};

function attachListeners() {
 $("#")
};

$(document).ready(function() {
  attachListeners();
  $("form#make-pizza").submit(function(event) {
    event.preventDefault();
    var selectedSize = $("#size option:selected").text();
    var inputtedToppings = $("input:checkbox[name=add-toppings]:checked").val();
    var size = new Size(selectedSize, $("#size").val());
    var topping = []


    });


  });

});
