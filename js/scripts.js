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

function PizzaTopping(toppingType) {
    this.toppingType = toppingType;
    //    this.toppingPrice = toppingPrice;
}

PizzaTopping.prototype.toppingPrice = function() {

    var vegetableToppings = ["pineapple", "mushroom", "onion", "olive", "tomato"];
    var meatToppings = ["pepperoni", "sausage", "bbq chicken"];

    for (var i = 0; i < vegetableToppings.length; i++) {
        if (this.toppingType === vegetableToppings[i]) {
            return 0.50;
        }
    }
    for (var i = 0; i < meatToppings.length; i++) {
        if (this.toppingType === vegetableToppings[i]) {
            return 1;
        }
    }

}
