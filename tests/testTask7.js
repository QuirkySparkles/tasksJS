describe("7. Test task 7", function() {
	describe("fiboRange", function() {
        const instruction = {
            status: "failed",
            reason: "Enter an object with following numeric properties: 'min' and 'max' or 'length'"
        };
        
		it ("Should return an array of Fibo numbers with specified amount of digits", function() {
			assert.deepEqual(fiboRange({length: 1}), [1, 1, 2, 3, 5, 8]);
		});
        
		it ("Should return an array of Fibo numbers with specified amount of digits", function() {
			assert.deepEqual(fiboRange({length: 4}), [1597, 2584, 4181, 6765]);
		});
        
		it ("Should return an array of Fibo numbers from specified range", function() {
			assert.deepEqual(fiboRange({min: 4, max: 60}), [5, 8, 13, 21, 34, 55]);
		});
        
		it ("Should return an array of Fibo numbers from specified range", function() {
			assert.deepEqual(fiboRange({min: 80, max: 400}), [89, 144, 233, 377]);
		});
        
		it ("Should return the instruction if any property of object isn't a number", function() {
			assert.deepEqual(fiboRange({min: [], max: 4}), instruction);
		});
        
		it ("Should return the instruction if any property of object isn't a number", function() {
			assert.deepEqual(fiboRange({min: 45, max: "pokemon"}), instruction);
		});
        
		it ("Should return the instruction if argument isn't an object", function() {
			assert.deepEqual(fiboRange(null), instruction);
		});
        
		it ("Should return the instruction if properties 'min', 'max' and 'length' were specified concurrently", function() {
			assert.deepEqual(fiboRange({min: 45, max: 956, length: 6}), instruction);
		});
    });
    
	describe("isInputValid7", function() {
		it ("Should validate if a value is an object with positive numeric property 'length'", function() {
			assert.isTrue(isInputValid7({length: 8}));
		});
        
		it ("Should validate if a value is an object with positive numeric properties 'min' and 'max', max > min", function() {
			assert.isTrue(isInputValid7({min: 26, max: 5435}));
		});
        
		it ("Shouldn't validate if a value isn't specified", function() {
			assert.isFalse(isInputValid7());
		});
        
		it ("Shouldn't validate if properties 'min', 'max' and 'length' were specified concurrently", function() {
			assert.isFalse(isInputValid7({min: 216, max: 2485, length: 4}));
		});
        
		it ("Shouldn't validate if only property 'min' or 'max' was specified", function() {
			assert.isFalse(isInputValid7({min: 216}));
		});
        
		it ("Shouldn't validate if only property 'min' or 'max' was specified", function() {
			assert.isFalse(isInputValid7({max: 686}));
		});
        
		it ("Shouldn't validate if properties 'max' and length are present", function() {
			assert.isFalse(isInputValid7({max: 686, length: 4}));
		});
        
		it ("Shouldn't validate if properties 'min' and length are present", function() {
			assert.isFalse(isInputValid7({max: 126, length: 7}));
		});
        
		it ("Shouldn't validate if object doesn't have property 'length' or 'min' and 'max'", function() {
			assert.isFalse(isInputValid7({bo: 14, om: 72}));
		});
        
		it ("Shouldn't validate if object doesn't have property 'length' or 'min' and 'max'", function() {
			assert.isFalse(isInputValid7({}));
		});
        
		it ("Shouldn't validate if any of object properties isn't a positive number", function() {
			assert.isFalse(isInputValid7({length: 0}));
		});
        
		it ("Shouldn't validate if any of object properties isn't a positive number", function() {
			assert.isFalse(isInputValid7({min: -4, max: 18}));
		});
        
		it ("Shouldn't validate if any of object properties isn't a positive number", function() {
			assert.isFalse(isInputValid7({min: "max", max: 18}));
		});
        
		it ("Shouldn't validate if any of object properties isn't a positive number", function() {
			assert.isFalse(isInputValid7({min: 14, max: [18]}));
		});
        
		it ("Shouldn't validate if property 'length' isn't an integer", function() {
			assert.isFalse(isInputValid7({length: 42.1254}));
		});
        
		it ("Shouldn't validate if 'min' > 'max'", function() {
			assert.isFalse(isInputValid7({min: 54, max: 32}));
		});
    });
    
	describe("getFiboRange", function() {
		it ("Should return an array of Fibo numbers from specified range", function() {
			assert.deepEqual(getFiboRange({min: 7, max: 70}, [1, 1]), [8, 13, 21, 34, 55]);
		});
        
		it ("Should return an array of Fibo numbers from specified range", function() {
			assert.deepEqual(getFiboRange({min: 1, max: 10}, [1, 1]), [1, 1, 2, 3, 5, 8]);
		});
    });
    
	describe("getFiboLength", function() {
		it ("Should return an array of Fibo numbers with specified number of digits", function() {
			assert.deepEqual(getFiboLength({length: 2}, [1, 1]), [13, 21, 34, 55, 89]);
		});
        
		it ("Should return an array of Fibo numbers with specified number of digits", function() {
			assert.deepEqual(getFiboLength({length: 3}, [1, 1]), [144, 233, 377, 610, 987]);
		});
    });
});
