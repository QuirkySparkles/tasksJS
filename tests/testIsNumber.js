describe("isNumber", function() {

    it ("Should validate any number that >= 0", function() {
        assert.isTrue(isNumber(12));
    });

    it ("Should validate any number that >= 0", function() {
        assert.isTrue(isNumber(243.4353));
    });
    
    it ("Should validate any number that >= 0", function() {
        assert.isTrue(isNumber(0));
    });
    
    it ("Shouldn't validate a number that < 0", function() {
        assert.isFalse(isNumber(-4353));
    });
    
    it ("Shouldn't validate value that isn't a number", function() {
        assert.isFalse(isNumber("4321"));
    });
    
    it ("Shouldn't validate if value is omitted", function() {
        assert.isFalse(isNumber());
    });
    
    it ("Shouldn't validate if value is NaN", function() {
        assert.isFalse(isNumber(NaN));
    });
    
    it ("Shouldn't validate if value is Infinity or -Infinity", function() {
        assert.isFalse(isNumber(Infinity));
    });
});
