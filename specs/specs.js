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
        var testPizzaTopping = new PizzaTopping("pineapple",0.50);
        expect(testPizzaTopping.toppingType).to.equal("pineapple");
    });

    it("creates a new topping price", function() {
        var testPizzaTopping = new PizzaTopping("pinapple",0.50);
        expect(testPizzaTopping.toppingPrice).to.eql(0.50);
    });
});
