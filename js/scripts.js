
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
      alert(price);
    } else if ((this.size === key) && (pizzaToppings.length > 1)) {
      price = sizePrice[key];
      alert(price + ((pizzaToppings.length -1)*2))
     }
    }
  }  


Pizza.prototype.receipt = function() {
  return "1 " + this.size + " pizza with " + this.toppings
}

//let testPizza = new Pizza("S", ["mushroom", "cheese", "tomato", "banana"])

//console.log(testPizza.pizzaCost())
//console.log(testPizza.toppings.length)

pizzaToppings = []
//UI logic
$(document).ready(function() {
  $("form#new-order button").click(function(event) {
    event.preventDefault();

    //show basic receipt
    if ($(this).attr("value") == "button-one") {
    const inputtedName = $("input#name").val();
    //console.log(inputtedName)
  $("input:checkbox[name=pizzaTopping]:checked").each(function() {
      pizzaToppings.push($(this).val());
    });
    const pizzaSize = $(".form-select option:selected").text();
    //alert(pizzaSize)
    let customer = new Customer(inputtedName);
    let newPizza = new Pizza(pizzaSize);
    //alert(pizzaToppings.length)
    newPizza.pizzaCost()
    $("form#new-order").submit();
  }
  //collect customer address then show receipt
  if ($(this).attr("value") == "button-two") {
    const inputtedName = $("input#name").val();
    //console.log(inputtedName)
  $("input:checkbox[name=pizzaTopping]:checked").each(function() {
      pizzaToppings.push($(this).val());
    });
    const pizzaSize = $(".form-select option:selected").text();
    //alert(pizzaSize)
    let customer = new Customer(inputtedName);
    let newPizza = new Pizza(pizzaSize);
    //alert(pizzaToppings.length)
    newPizza.pizzaCost()
    $("form#new-order").submit();
  }


  //save pizza, show 1 in cart, hide customer name input, collect new pizza information
  if ($(this).attr("value") == "button-three") {
    const inputtedName = $("input#name").val();
    //console.log(inputtedName)
  $("input:checkbox[name=pizzaTopping]:checked").each(function() {
      pizzaToppings.push($(this).val());
    });
    const pizzaSize = $(".form-select option:selected").text();
    //alert(pizzaSize)
    let customer = new Customer(inputtedName);
    let newPizza = new Pizza(pizzaSize);
    //alert(pizzaToppings.length)
    newPizza.pizzaCost()
    $("form#new-order").submit();
  }

  });
});