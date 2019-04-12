// back end
  var pizzas = [];

function Pizza(size, topping) {
  this.size = size,
  this.addToppings(topping),
  this.currentId = 0
}

function Size(name, price) {
  this.name = name,
  this.price = price
}

function Toppings(name, price) {
  this.name = name,
  this.price = price
}

Pizza.prototype.addToppings = function(topping) {
  var topOnPizza = [];
  topping.forEach(function(toppings) {
    topOnPizza.push(toppings);
  })
  this.topping = topOnPizza;
}

Pizza.prototype.getPrice = function() {
  price = parseInt(this.size.price)
  this.topping.forEach(function(toppings) {
    price += (parseInt(toppings.price)/100)
  });
  return price.toFixed(2);
}

Pizza.prototype.addId = function(pizza) {
  pizza.id = this.assignId();
  this.pizzas.push(pizza);
}

Pizza.prototype.assignId = function() {
  this.currentId += 1;
  return this.currentId;
}

Pizza.prototype.findPizza = function(id) {
  for (var i=0; i< this.pizzas.length; i++) {
    if (this.pizzas[i]) {
      if (this.pizzas[i].id == id) {
        return this.pizzas[i];
      }
    }
  };
  return false;
}

Pizza.prototype.deletePizza = function(id) {
  for (var i=0; i< this.pizzas.length; i++) {
    if (this.pizzas[i]) {
      if (this.pizzas[i].id == id) {
        delete this.pizzas[i];
        return true;
      }
    }
  };
  return false;
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
  // var pizza = Pizza.findPizza(pizzaId);
  $("#pizza-details").show();
  ("$.size").html(pizzas[pizzaId].size.name);
  var toppingString = "";
  pizzas[pizzaId].toppings.forEach(function(topping) {
    toppingString += topping.name + ", ";
  });
  toppingString = toppingString.slice(0,toString.length-1);
  ("$.toppings").html(toppingString);
  ("$.price").html(pizzas[pizzaId].getPrice());
  var buttons = $("#buttons");
  buttons.empty();
  buttons.append("<button class='deleteButton' id=" + pizza.id + ">Delete Pizza</button>");
}

function attachListeners() {
 $("ul#order-list").on("click", "li", function() {
   showContact(this.id);
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
    var size = new Size(selectedSize, $("#size").val()); //get the name and value of the size of the pizzas
    var topping = []
    $("input:checkbox[name=add-topping]:checked").each(function() {
      topping.push(new Toppings(this.value,$(this).attr("class"))); //this.value gets the name of toppings, and attr gets the values from the class
    });
    var newPizza = (new Pizza(size, topping));
    pizzaOrder.pizzas.push(newPizza)
    displayOrderDetails(pizzaOrder);

  });

});
