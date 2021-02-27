
//business logic
function Customer(name) {
  this.name = name;
}

function Pizza(size, toppings) {
  this.size = size;
  this.toppings = toppings;
}

Pizza.prototype.pizzaCost = function() {
	price = 0
	sizePrice = {"S":10,"M":13.5,"L":16,"XL":18}
  toppings = this.toppings
	for (let key in sizePrice) {
		if ((this.size === key) && (toppings.length > 2)) {
    toppings = (toppings.length - 2)*2
		price += sizePrice[key] + toppings
		return price
    }
  }
}

Pizza.prototype.receipt = function() {
  return "1 " + this.size + " pizza with " + this.toppings
}

//let testPizza = new Pizza("S", ["mushroom", "cheese", "tomato", "banana"])

//console.log(testPizza.pizzaCost())
//console.log(testPizza.toppings.length)


//UI logic
$(document).ready(function() {
  $("form#new-order").submit(function(event) {
    event.preventDefault();
    const inputtedName = $("input#name").val();
    //console.log(inputtedName)
    $("input:checkbox[name=pizzaTopping]:checked").each(function() {
      const pizzaTopping = $(this).val();
      //console.log(pizzaTopping)
    });
    const pizzaSize = $(".form-select option:selected").text();
    //alert(pizzaSize)
    const newOrder = new Customer
  });
});