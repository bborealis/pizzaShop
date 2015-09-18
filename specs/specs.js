describe('PizzaOrder', function() {
    it("creates a new order size", function() {
        var testPizzaOrder = new PizzaOrder("large", 1);
        expect(testPizzaOrder.pizzaSize).to.equal("large");
    });

    it("creates a new order quantity", function() {
        var testPizzaOrder = new PizzaOrder("large", 1);
        expect(testPizzaOrder.pizzaQuantity).to.equal(1)
    });

    it("determines the correct price based on size", function() {
        var testPizzaOrder = new PizzaOrder("small", 1);
        expect(testPizzaOrder.sizePrice()).to.equal(10);
    });

    it("calculates the total pizza price based on quantity and price", function() {
        var testPizzaOrder = new PizzaOrder("large", 2);
        expect(testPizzaOrder.quantityPrice()).to.equal(40);
    });
});

describe("PizzaTopping", function() {
    it("creates a new topping", function() {
        var testPizzaTopping = new PizzaTopping("pineapple");
        expect(testPizzaTopping.toppingType).to.equal("pineapple");
    });

    it("creates a new topping price", function() {
        var testPizzaTopping = new PizzaTopping("Pineapple");
        expect(testPizzaTopping.toppingPrice()).to.equal(0.50);
    });

    it("creates multiple toppings and calculates price", function() {
        var testPizzaTopping1 = new PizzaTopping("Pineapple");
        var testPizzaTopping2 = new PizzaTopping("Pepperoni");
        expect(testPizzaTopping1.toppingPrice()).to.equal(0.50);
        expect(testPizzaTopping2.toppingPrice()).to.equal(1);
        expect(testPizzaTopping1.toppingPrice() + testPizzaTopping2.toppingPrice()).to.equal(1.50);
    });
});

describe("PizzaTotalPrice", function() {
    it("calculates the order with toppings", function() {
        var testPizzaOrder = new PizzaOrder("large", 1);
        var testPizzaTopping = new PizzaTopping("Pineapple");
        expect(testPizzaOrder.quantityPrice() + testPizzaTopping.toppingPrice()).to.equal(20.50);
    });

    it("calculates multiple pizza orders and toppings", function() {
        var testPizzaOrder = new PizzaOrder("large", 1);
        var testPizzaTopping1 = new PizzaTopping("Pineapple");
        var testPizzaTopping2 = new PizzaTopping("Pepperoni");
        expect(testPizzaOrder.quantityPrice() + testPizzaTopping1.toppingPrice() + testPizzaTopping2.toppingPrice()).to.equal(21.50);
    });

    it("calcualtes multiple pizza orders and toppings using totalPrice()", function() {
        var testPizzaGrandTotal = new PizzaGrandTotal(20, 1.50);
        expect(testPizzaGrandTotal.totalPrice()).to.equal(21.50);
    });
    it("calcualtes multiple pizza orders and toppings using totalPrice()", function() {
        var testPizzaOrder = new PizzaOrder("large", 1);
        var testPizzaTopping1 = new PizzaTopping("pineapple");
        var testPizzaTopping2 = new PizzaTopping("pepperoni");
        var testPizzaGrandTotal = new PizzaGrandTotal(20, 1.50);
        expect(testPizzaGrandTotal.totalPrice()).to.equal(21.50);
    });

});
