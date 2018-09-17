describe("5. Test task 5", function() {
	describe("luckyTickets", function() {
        const instruction = {
            status: "failed",
            reason: "Input an object with two string properties 'min' and 'max', with ticket format numbers. max > min, max <= 999999"
        };

		it ("Should find correct amount of lucky tickets for both methods in full range", function() {
			assert.deepEqual(luckyTickets({min: "000001", max: "999999"}), {simple: 55251, hard: 25080, winner: "simple"});
		});
        
		it ("Should find correct amount of lucky tickets for both methods in range: 000001 - 000002", function() {
			assert.deepEqual(luckyTickets({min: "000001", max: "000002"}), {simple: 0, hard: 0, winner: "No winner"});
		});
        
		it ("Should return instruction if input value isn't a string", function() {
			assert.deepEqual(luckyTickets({min: "003001", max: 999999}), instruction);
		});
        
		it ("Should return instruction if input value isn't in a ticket format", function() {
			assert.deepEqual(luckyTickets({min: "6201", max: "124999"}), instruction);
		});
        
		it ("Should return instruction if min value > max value", function() {
			assert.deepEqual(luckyTickets({min: "627135", max: "429911"}), instruction);
		});
    });
    
    describe("isInputValid5", function() {
		it ("Should validate an object with two string properties 'min' and 'max', each of them is a six-digit positive number, max > min", function() {
			assert.isTrue(isInputValid5({min: "053101", max: "923519"}));
		});
        
		it ("Shouldn't validate an object with omitted property 'min' or 'max'", function() {
			assert.isFalse(isInputValid5({min: "053101"}));
		});
        
		it ("Shouldn't validate an object with omitted property 'min' or 'max'", function() {
			assert.isFalse(isInputValid5({max: "053101"}));
		});
        
		it ("Shouldn't validate if property 'min' or 'max' isn't a string", function() {
			assert.isFalse(isInputValid5({min: 120034, max: "453101"}));
		});
        
		it ("Shouldn't validate if property 'min' or 'max' isn't a string", function() {
			assert.isFalse(isInputValid5({min: "021034", max: 353801}));
		});
        
		it ("Shouldn't validate if property 'min' or 'max' isn't a string with length = 6", function() {
			assert.isFalse(isInputValid5({min: "1034", max: "353801"}));
		});
        
		it ("Shouldn't validate if property 'min' or 'max' isn't a string with length = 6", function() {
			assert.isFalse(isInputValid5({min: "000034", max: "3801"}));
		});
        
		it ("Shouldn't validate if converted to number property 'min' <= 0", function() {
			assert.isFalse(isInputValid5({min: "000000", max: "300801"}));
		});

		it ("Shouldn't validate if converted to number property 'min' <= 0", function() {
			assert.isFalse(isInputValid5({min: "-00001", max: "210801"}));
		});
        
		it ("Shouldn't validate if converted to number property 'min' > 'max'", function() {
			assert.isFalse(isInputValid5({min: "543256", max: "123633"}));
		});
        
		it ("Shouldn't validate if converted to number property 'min' > 'max'", function() {
			assert.isFalse(isInputValid5({min: "543256", max: "123633"}));
		});
        
		it ("Shouldn't validate if converted to number property 'max' > 999999", function() {
			assert.isFalse(isInputValid5({min: "123256", max: "3564241"}));
		});
    });
    
    describe("isLuckySimple", function() {
		it ("Should return true if sum of first three digits is equal to sum of last three digits", function() {
			assert.isTrue(isLuckySimple([1, 2, 3, 2, 3, 1]));
		});
        
		it ("Should return true if sum of first three digits is equal to sum of last three digits", function() {
			assert.isTrue(isLuckySimple([4, 7, 2, 5, 1, 7]));
		});
        
		it ("Should return true if sum of first three digits is equal to sum of last three digits", function() {
			assert.isTrue(isLuckySimple([9, 0, 8, 4, 6, 7]));
		});
        
		it ("Should return false if sum of first three digits isn't equal to sum of last three digits", function() {
			assert.isFalse(isLuckySimple([3, 1, 5, 2, 9, 4]));
		});
        
		it ("Should return false if sum of first three digits isn't equal to sum of last three digits", function() {
			assert.isFalse(isLuckySimple([0, 6, 5, 9, 2, 6]));
		});   
    });
        
    describe("isLuckyHard", function() {
		it ("Should return true if sum of odd numbers is equal to sum of even numbers", function() {
			assert.isTrue(isLuckyHard([4, 0, 5, 8, 0, 7]));
		});
        
		it ("Should return true if sum of odd numbers is equal to sum of even numbers", function() {
			assert.isTrue(isLuckyHard([4, 9, 0, 2, 4, 1]));
		});
        
		it ("Should return true if sum of odd numbers is equal to sum of even numbers", function() {
			assert.isTrue(isLuckyHard([0, 0, 1, 4, 2, 5]));
		});
        
		it ("Should return false if sum of odd numbers isn't equal to sum of even numbers", function() {
			assert.isFalse(isLuckyHard([5, 3, 1, 8, 5, 2]));
		});
        
		it ("Should return false if sum of odd numbers isn't equal to sum of even numbers", function() {
			assert.isFalse(isLuckyHard([5, 2, 6, 4, 9, 9]));
		});
    });
});
    