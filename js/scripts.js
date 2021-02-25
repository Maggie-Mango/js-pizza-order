
//business logic
function Customer(name) {
  this.name = name;
  this.waitTime = 30;
}

function Pizza(size, toppings) {
  this.size = size;
  this.toppings = toppings;
}


Pizza.prototype.order = function() {
  return this.toppings + this.size + this.amount
}

let testPizza = new Pizza(1, ["mushroom", "cheese"])
console.log(testPizza.toppings)