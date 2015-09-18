describe('PizzaOrder', function() {
    it("creates a new order size", function() {
        var testPizzaOrder = new PizzaOrder("large","1")
        expect(testPizzaOrder.pizzaSize).to.equal("large");
    });

});
