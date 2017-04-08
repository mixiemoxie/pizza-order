// Business Logic

// Pizza Constructor
function Pizza(size, quantity) {
  this.size = size;
  this.quantity = quantity;
  this.toppings = [];
};

// Prototype method for Cost
Pizza.prototype.price = function() {
  var price = 5;

  if (this.size === "extra-large") {
    price = price * 4;
  } else if (this.size === "large") {
    price = price * 3;
  } else if (this.size === "medium") {
    price = price * 2;
  }
  if (this.toppings.length > 0) {
    price += this.toppings.length;
  }

  price = price * this.quantity;

  return price;
};

// Front-End User Logic
$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();

    // Get input values from form
    var inputtedPizzaSize = $("select#size").val();
    var inputtedPizzaQuantity = $("select#amount").val();

    // Create new Pizza with new values
    var newPizza = new Pizza(inputtedPizzaSize, inputtedPizzaQuantity);

    $.each($("input[name='topping']:checked"), function() {
      newPizza.toppings.push($(this).val());
    });
    
    // Update html with pizza price
    $("#pizzaPrice").text(newPizza.price());
  });
});
