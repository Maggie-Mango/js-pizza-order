
//business logic
function Customer(name) {
  this.name = name;
}

function Pizza(size) {
  this.size = size;
}

Pizza.prototype.pizzaCost = function() {
	price = 0
	sizePrice = {"SM":10,"M":13.5,"L":16,"XL":18}
	for (let key in sizePrice) {
		if ((this.size === key) && (pizzaToppings.length === 1)) {
      price = sizePrice[key];
      return price;
    } else if ((this.size === key) && (pizzaToppings.length > 1)) {
      price = sizePrice[key];
      return price + ((pizzaToppings.length -1)*2)
      }
    }
  } 

Pizza.prototype.receipt = function() {
  return "1 " + this.size + " pizza with " + this.toppings
}
//global
pizzaToppings = []
pizzaCost = 0
//UI logic
//Pick-up button
$(document).ready(function() {
  $("form#new-order button").click(function(event) {
    event.preventDefault(); 
    
    //new order
    if ($(this).attr("value") == "button-three") {
      const inputtedName = $("input#name").val();
    $("input:checkbox[name=pizzaTopping]:checked").each(function() {
        pizzaToppings.push($(this).val());
      });
      const pizzaSize = $(".form-select option:selected").text();
      let newPizza = new Pizza(pizzaSize);
      pizzaCost += newPizza.pizzaCost()
      $("#cart").text("Added to cart. Total: $"+pizzaCost);
    }

    //order pick-up
    if ($(this).attr("value") == "button-one") {
    const inputtedName = $("input#name").val();
  $("input:checkbox[name=pizzaTopping]:checked").each(function() {
      pizzaToppings.push($(this).val());
    });
    const pizzaSize = $(".form-select option:selected").text();
    let customer = new Customer(inputtedName);
    let newPizza = new Pizza(pizzaSize);
    pizzaCost += newPizza.pizzaCost()
    $("#cost").text("$"+pizzaCost+" (Ca$happ: $maggsauce)");
    $(".pizza-size").hide();
    $(".toppings").hide();
    $(".receipt").show();
    $("#order").hide();
    $("#address").hide();
    $(".button-hide").hide();
  }


  //Delivery button
  if ($(this).attr("value") == "button-two") {
  $(".address").show();
  $("#order").hide();
  $(".toppings").hide();
  $(".pizza-size").hide();
  $(".button-hide").hide();
}
  //address button
  if ($(this).attr("value") == "button-address") {
    const inputtedName = $("input#name").val();
    $("input:checkbox[name=pizzaTopping]:checked").each(function() {
        pizzaToppings.push($(this).val());
    });
    const pizzaSize = $(".form-select option:selected").text();
    let customer = new Customer(inputtedName);
    let newPizza = new Pizza(pizzaSize);
    pizzaCost += newPizza.pizzaCost()
    $(".address").hide();
    $(".receipt").show();
    $("#cost").text("$"+pizzaCost+" (Ca$happ: $maggsauce)");
}

  });
});