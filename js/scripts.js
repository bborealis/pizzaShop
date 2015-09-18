function PizzaOrder(pizzaSize, pizzaQuantity, pizzaPrice) {
    this.pizzaSize = pizzaSize;
    this.pizzaQuantity = pizzaQuantity;
    this.pizzaPrice = pizzaPrice;
}

PizzaOrder.prototype.quantityPrice = function() {
    var total = this.pizzaQuantity * this.pizzaPrice;
    return total;

}

function PizzaTopping(toppingType, toppingPrice) {
    this.toppingType = toppingType;
    this.toppingPrice = toppingPrice;
}
