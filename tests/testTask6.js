describe("6. Test task 6", function() {
	describe("numericSequence", function() {
        const instruction = {
            status: "failed",
            reason: "Input a length of the sequence as the first parameter and a value of max square as the second."
        };

		it ("Should return a string of correct sequence for values 6 and 25", function() {
			assert.equal(numericSequence(6, 25), "5, 6, 7, 8, 9, 10");
		});
        
		it ("Should return a string of correct sequence for values 4 and 50", function() {
			assert.equal(numericSequence(4, 50), "8, 9, 10, 11");
		});
        
		it ("Should return instruction if one of the arguments isn't a number", function() {
			assert.deepEqual(numericSequence("10", 44), instruction);
		});
        
		it ("Should return instruction if one of the arguments isn't a number", function() {
			assert.deepEqual(numericSequence(17, [20]), instruction);
		});
        
		it ("Should return instruction if one of the arguments isn't a positive number", function() {
			assert.deepEqual(numericSequence(15, -20), instruction);
		});
        
		it ("Should return instruction if first argument <= 0", function() {
			assert.deepEqual(numericSequence(0, 21), instruction);
		});
        
		it ("Should return instruction if first argument <= 0", function() {
			assert.deepEqual(numericSequence(-7, 21), instruction);
		});
        
		it ("Should return instruction if first argument isn't integer", function() {
			assert.deepEqual(numericSequence(7.4, 21), instruction);
		});
        
		it ("Should return instruction if any of arguments isn't a correct number", function() {
			assert.deepEqual(numericSequence(Infinity, 21), instruction);
		});
        
		it ("Should return instruction if any of arguments isn't a correct number", function() {
			assert.deepEqual(numericSequence(4, NaN), instruction);
		});
    });
});