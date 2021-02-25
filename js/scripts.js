
//business logic
function Customer(name) {
  this.name = name;
  this.waitTime = 30;
}

function Pizza(size, toppings) {
  this.size = size;
  this.toppings = toppings;
}

Pizza.prototype.cost = function() {
	sizePrice = {"S":10,"M":13.5,"L":16,"XL":18}
	for (let key in sizePrice) {
		if (this.size === key) {
			return sizePrice[key]
  }
 }
}

Pizza.prototype.receipt = function() {
 return "1 " + this.size + " pizza with " + this.toppings
}

let testPizza = new Pizza("S", ["mushroom", "cheese"])

console.log(testPizza.cost())

//console.log(testPizza.receipt())