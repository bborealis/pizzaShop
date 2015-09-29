////////////////////////PizzaOrder Constructor\\\\\\\\\\\\\\\\\\\\\\\\\\\\
function PizzaOrder(pizzaSize, pizzaQuantity, pizzaGrandTotal) {
    this.pizzaSize = pizzaSize;
    this.pizzaQuantity = pizzaQuantity;
    this.pizzaGrandTotal = pizzaGrandTotal;
}
/////////////////////////PizzaOrder prototype\\\\\\\\\\\\\\\\\\\\\\\\\\\\
PizzaOrder.prototype.sizePrice = function() {

    if (this.pizzaSize === "small") {
        return 10;
    } else if (this.pizzaSize === "medium") {
        return 15;
    } else {
        return 20;
    }
}

PizzaOrder.prototype.quantityPrice = function() {
    var total = this.pizzaQuantity * this.sizePrice()
    return total;
}

PizzaOrder.prototype.pizzaOrderDescription = function() {
        var newOrderSingle = ("You ordered : " + this.pizzaQuantity + " " + this.pizzaSize + " pizza");
        var newOrderMult = ("You ordered : " + this.pizzaQuantity + " " + this.pizzaSize + " pizzas");
        if (this.pizzaQuantity === "1") {
            return newOrderSingle;
        } else {
            return newOrderMult;
        }
    }


    ////////////////PizzaTopping Constructor\\\\\\\\\\\\\\\\\\\\\\\\\\\\
function PizzaTopping(toppingType) {
    this.toppingType = toppingType;
}
/////////////////PizzaTopping prototype\\\\\\\\\\\\\\\\\\\\\\\\\\\\
PizzaTopping.prototype.toppingPrice = function() {

    var vegetableToppings = ["Pineapple", "Mushroom", "Onion", "Olive", "Tomato"];
    var meatToppings = ["Pepperoni", "Sausage", "BBQ Chicken"];
    var toppingsPrice;
    var toppingsTotalPrice = [];


    if (this.toppingType === "None") {
        toppingsPrice = 0;
        toppingsTotalPrice.push(toppingsPrice);
    }

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

    for (var i = 0; i < toppingsTotalPrice.length; i++) {
        var total = +toppingsTotalPrice[i];
        return total;
    }
}

PizzaTopping.prototype.toppingForEachPizza = function() {
    var allPizzaToppingPrice = this.toppingPrice() * PizzaOrder.quantityPrice();
    return allPizzaToppingPrice;
    console.log("all toppings :" + allPizzaToppingPrice);
}

PizzaTopping.prototype.toppingDescription = function() {
        var newToppingSingle = ("Toppings include: " + this.toppingType);
        return newToppingSingle;
    }
    ////////////////PizzaGrandTotal Constructor\\\\\\\\\\\\\\\\\\\\\\\\\\\\
function PizzaGrandTotal(pizzaOrderTotal, pizzaToppingTotal) {
    this.pizzaOrderTotal = pizzaOrderTotal;
    this.pizzaToppingTotal = pizzaToppingTotal;
}
///////////////PizzaGrandTotal prototype\\\\\\\\\\\\\\\\\\\\\\\\\\\\
PizzaGrandTotal.prototype.totalPrice = function() {
    if (PizzaTopping.toppingPrice === 0) {
        return this.pizzaOrderTotal
    } else {
        return this.pizzaOrderTotal + this.pizzaToppingTotal;
    }
}

PizzaGrandTotal.prototype.totalDescription = function() {
        var newGrandTotal = ("Your total is: $" + this.totalPrice());
        return newGrandTotal;
     }
    //////////////begin jQuery\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
$(document).ready(function() {

    $("form#new-pizza-order").submit(function(event) {
        event.preventDefault();

        var sizeSelection = $("#new-pizza-size option:selected").val();
        var quantitySelection = $("#new-pizza-quantity option:selected").val();
        var toppingSelection = $("#new-pizza-topping option:selected").val();

        var pizzaSizeArray = {
            small: "small",
            medium: "medium",
            large: "large"
        }

        var inputtedPizzaSize = pizzaSizeArray[sizeSelection]

        var pizzaQuantityArray = {
            one: "1",
            two: "2",
            three: "3",
            four: "4",
            five: "5",
            six: "6",
            seven: "7",
            eight: "8",
            nine: "9",
            ten: "10"
        }

        var inputtedPizzaQuantity = pizzaQuantityArray[quantitySelection];

        var pizzaToppingArray = {
            none: "None",
            pineapple: "Pineapple",
            mushroom: "Mushroom",
            onion: "Onion",
            olive: "Olive",
            tomato: "Tomato",
            pepperoni: "Pepperoni",
            sausage: "Sausage",
            bbq_chicken: "BBQ Chicken"
        }

        var inputtedPizzaTopping = pizzaToppingArray[toppingSelection];

        var newPizzaOrder = new PizzaOrder(inputtedPizzaSize, inputtedPizzaQuantity);
        var newPizzaTopping = new PizzaTopping(inputtedPizzaTopping);

        var calculatedPizzaOrderTotal = newPizzaOrder.quantityPrice(inputtedPizzaSize);
        console.log("base price of pizza: " + calculatedPizzaOrderTotal);
        var calculatedPizzaToppingTotal = newPizzaTopping.toppingPrice(inputtedPizzaTopping) * inputtedPizzaQuantity;
        console.log("pizza topping: " + pizzaToppingArray[toppingSelection]);
        console.log("total price of toppings: " + calculatedPizzaToppingTotal);
        var newPizzaGrandTotal = new PizzaGrandTotal(calculatedPizzaOrderTotal, calculatedPizzaToppingTotal);
        console.log("Total price message: " + newPizzaGrandTotal.totalDescription());


        $("ul#order").append("<li>" + newPizzaOrder.pizzaOrderDescription() + "</li>" + "<li>" + newPizzaTopping.toppingDescription() + "</li>" + "<li>" + newPizzaGrandTotal.totalDescription() + "</li>");

    });
});
