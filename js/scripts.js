// back end
function Pizza (size, toppings) {
  this.pizzas = []
  this.size = size,
  this.topping = toppings,
  this.currentId = 0
}

function Toppings (name, price) {
  this.name = name,
  this.price = price
}

function Size(name,price) {
  this.name = name,
  this.price = price
}

Pizza.prototype.addId = function(pizza) {
  pizza.id = this.assignId();
  this.contacts.push(pizza);
}

Pizza.prototype.assignId = function() {
  this.currentId += 1;
  return this.currentId;
}

Pizza.prototype.findPizza = function(id) {
  for (var i=0; i< this.pizza.length; i++) {
    if (this.pizza[i]) {
      if (this.pizza[i].id == id) {
        return this.pizza[i];
      }
    }
  };
  return false;
}
Pizza.prototype.deletePizza = function(id) {
  for (var i=0; i< this.pizza.length; i++) {
    if (this.pizza[i]) {
      if (this.pizza[i].id == id) {
        delete this.pizza[i];
        return true;
      }
    }
  };
  return false;
}

Pizza.prototype.addToppings = function(toppings){
  var pizzaTop = [];
  toppings.forEach(function(top){
    pizzaTop.push(top);
  })
  this.toppings = toPizza;
}

Pizza.prototype.getPrice = function() {
  price = parseInt(this.size.price);
  this.toppings.forEach(function(top){
    price += (parseInt(top.price)/100);
  })
  return price.toFixed(2);
}

// user interface
var pizzaOrder = new Pizza();

function displayOrderDetails(pizzaToDisplay) {
  var orderList = $("ul#order-list");
  var htmlForOrderInfo = "";
  pizzaToDisplay.pizzas.forEach(function(pizza) {
    htmlForOrderInfo += "<li id=" + pizza.id + ">" + pizza.size.name + " " + pizza.topping.length + "Toppings</li>";
  })
  orderList.html(htmlForOrderInfo);
};
function showPizza(pizzaId) {
  var pizza = Pizza.findPizza(pizzaId);
  $("#pizza-details").show();
  ("$.size").html(pizza.size.name);
  var toppingString = "";
  pizza.toppings.forEach(function(topping) {
    toppingString += toppings.name + ", ";
  });
  toppingString = toppingString.slice(0,toString.length-1);
  ("$.toppings").html(toppingString);
  ("$.price").html(pizza.getPrice());
  var buttons = $("#buttons");
  buttons.empty();
  buttons.append("<button class='deleteButton' id=" + pizza.id + ">Delete</button>");
}

function attachListeners() {
 $("ul#order-list").on("click", "li", function() {
   showPizza(this.id);
 });
 $("#buttons").on("click", ".deleteButton", function() {
   Pizza.deletePizza(this.id);
   $("#pizza-details").hide();
   displayOrderDetails(pizzaOrder);
 })
};

$(document).ready(function() {
  attachListeners();
  $("form#make-pizza").submit(function(event) {
    event.preventDefault();
    var selectedSize = $("#size option:selected").text();
    var size = new Size(selectedSize,$("#size").val()); //get the name and value of the size of the pizzas
    var toppings = [];
    $("input:checkbox[name=add-topping]:checked").each(function() {
      toppings.push(new Toppings(this.value,$(this).attr("class"))); //this.value gets the name of toppings, and attr gets the values from the class
    });
    var newPizza = (new Pizza(size, toppings));
    pizzaOrder.pizzas.push(newPizza)
    displayOrderDetails(pizzaOrder);

  });

});
