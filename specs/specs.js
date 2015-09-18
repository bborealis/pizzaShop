describe('PizzaOrder', function() {
    it("creates a new order size", function() {
        var testPizzaOrder = new PizzaOrder("large",1);
        expect(testPizzaOrder.pizzaSize).to.equal("large");
    });

    it("creates a new order quantity", function() {
        var testPizzaOrder = new PizzaOrder("large",1);
        expect(testPizzaOrder.pizzaQuantity).to.equal(1)
    });

    it("determines the correct price based on size", function() {
        var testPizzaOrder = new PizzaOrder("small",1);
        expect(testPizzaOrder.sizePrice()).to.equal(10);
    });

    it("calculates the total pizza price based on quantity and price", function() {
        var testPizzaOrder = new PizzaOrder("large",2);
        expect(testPizzaOrder.quantityPrice()).to.equal(40);
    });
});

describe("PizzaTopping", function() {
    it("creates a new topping", function() {
        var testPizzaTopping = new PizzaTopping("pineapple");
        expect(testPizzaTopping.toppingType).to.equal("pineapple");
    });

    it("creates a new topping price", function() {
        var testPizzaTopping = new PizzaTopping("pineapple");
        expect(testPizzaTopping.toppingPrice()).to.equal(0.50);
    });

//    it("creates multiple toppings and calculates price")
});
