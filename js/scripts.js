//back end
function Pizza(size, toppings) {
  this.size = size;
  this.toppings = [];
}

Pizza.prototype.price = function() {
  var price = 8;
  if (this.size === "Extra Large" ) {
    price += 18;
  } else if (this.size === "Large") {
    price += 15;
  } else if (this.size === "Medium") {
    price += 12;
  } else if (this.size === "Small") {
    price += 10;
  } else if (this.size === "Mini") {
    price += 8;
  } else {
    price += 0;
  }
  if (this.toppings.length >= 5) {
    price += 9;
  } else if (this.toppings.length >= 2) {
    price += 4;
  } else if (this.toppings.length >= 0) {
    price += 2;
  } else {
    price += 0;
  }
  return price;
}

// user interface

$(document).ready(function() {
  $("form#make-pizza").submit(function(event) {
    event.preventDefault();
    var inputtedSize = $("select#size").val();
    var inputtedPizza = new Pizza(inputtedSize);
    $.each($("input[name='add-topping']:checked"), function() {
      inputtedPizza.toppings.push($(this).val());
    });
    $("ul#order-list").empty();
    $("ul#order-list").append("<li><button type='submit' class='btn btn-danger'><span class='order'>" + "The Pizza Confirmation" + "</span></button> </li>");
    $(".order").on("click", function() {
      $("#pizza-details").show();
      $(".size").text(inputtedPizza.size);
      $(".toppings").text(inputtedPizza.toppings);
      $(".price").text(inputtedPizza.price());
    });


  });
});
