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
    var toppingsPrice;
    var toppingsTotalPrice = [];

    for (var i = 0; i < vegetableToppings.length; i++) {
        if (this.toppingType === vegetableToppings[i]) {
            toppingsPrice = 0.50;
            toppingsTotalPrice.push(toppingsPrice);
        }
    }
    for (var i = 0; i < meatToppings.length; i++) {
        if (this.toppingType === meatToppings[i]) {
            toppingsPrice = 1;
            toppingsTotalPrice.push(toppingsPrice);
        }
    }
    for ( var i = 0; i< toppingsTotalPrice.length; i++) {
        var total =+ toppingsTotalPrice[i];
        return total;
    }
}

function PizzaGrandTotal(pizzaOrderTotal, pizzaToppingTotal) {
    this.pizzaOrderTotal = pizzaOrderTotal;
    this.pizzaToppingTotal = pizzaToppingTotal;
}

PizzaGrandTotal.prototype.totalPrice = function() {
    return this.pizzaOrderTotal + this.pizzaToppingTotal;
}
