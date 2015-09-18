function PizzaOrder(pizzaSize, pizzaQuantity) {
    this.pizzaSize = pizzaSize;
    this.pizzaQuantity = pizzaQuantity;
}

PizzaOrder.prototype.sizePrice = function() {
    var smallPizza = "small";
    var mediumPizza = "medium";
    var largePizza = "large";
    if (this.pizzaSize === smallPizza) {
        return 10;
    } else if (this.pizzaSize === mediumPizza) {
        return 15;
    } else {
        return 20;
    }
}

PizzaOrder.prototype.quantityPrice = function() {
    var total = this.pizzaQuantity * this.sizePrice(this.pizzaSize)
    return total;
}

function PizzaTopping(toppingType, toppingPrice) {
    this.toppingType = toppingType;
    this.toppingPrice = toppingPrice;
}
