describe("2. Test task 2", function() {
	describe("envelopeAnalysis", function() {
        const instruction = {
            status: "failed",
            reason: "Two objects with properties 'length' and 'height' must be provided. Each of them must be a positive number"
        };

		it ("Can we put in the first envelope in the second, when the second is bigger?", function() {
			assert.equal(envelopeAnalysis({length: 7, height: 3}, {length: 10, height: 5}), 2);
		});
        
		it ("Can we put in the first envelope in the second, when the second is smaller?", function() {
			assert.notEqual(envelopeAnalysis({length: 7, height: 3}, {length: 10, height: 2}), 2);
		});
        
		it ("Can we put in the second envelope in the first, when the first is bigger?", function() {
			assert.equal(envelopeAnalysis({length: 10, height: 5}, {length: 7, height: 3}), 1);
		});
        
		it ("Can we put in the second envelope in the first, when the first is smaller?", function() {
			assert.notEqual(envelopeAnalysis({length: 7, height: 3}, {length: 10, height: 6}), 1);
		});
        
		it ("We can't put in one envelope into the other, if they're equal", function() {
			assert.notEqual(envelopeAnalysis({length: 7, height: 3}, {length: 7, height: 3}), 0);
		});
        
		it ("We can't put in one envelope into the other, if they're too different", function() {
			assert.equal(envelopeAnalysis({length: 10, height: 5}, {length: 4, height: 12}), 0);
		});
        
        it ("Instruction will be returned, if one envelope isn't specified", function() {
            assert.deepEqual(envelopeAnalysis({length: 15, height: 9}), instruction);
        });
        
        it ("Instruction will be returned, if envelope doesn't have 'width' or 'height' property", function() {
            assert.deepEqual(envelopeAnalysis({length: 15}, {length: 15, height: 10}), instruction);
        });
        
        it ("Instruction will be returned, if property 'width' or 'height' isn't a positive number", function() {
            assert.deepEqual(envelopeAnalysis({length: 15, height: -5}, {length: 15, height: 10}), instruction);
        });
        
        it ("Instruction will be returned, if property 'width' or 'height' isn't a number", function() {
            assert.deepEqual(envelopeAnalysis({length: 15, height: 9}, {length: "hello", height: 10}), instruction);
        });
        
        it ("Instruction will be returned, if first or second envelope isn't an object", function() {
            assert.deepEqual(envelopeAnalysis("I'm object", "No, me"), instruction);
        });

	});

	describe("isInputValid2", function() {
		it ("Validates an object with positive numeric properties 'length' and 'height", function() {
			assert.isTrue(isInputValid2({length: 7, height: 3}));
		});
        
        it ("Doesn't validate a value if it isn't an object", function() {
			assert.isFalse(isInputValid2(true));
		});
        
        it ("Doesn't validate an object if property 'height' wasn't specified", function() {
			assert.isFalse(isInputValid2({length: 7}));
		});
        
        it ("Doesn't validate an object if property 'length' wasn't specified", function() {
			assert.isFalse(isInputValid2({height: 7}));
		});
        
        
        for (let i = 0; i > -2; i--) {
            it ("Doesn't validate an object if property 'length' < 1", function() {
                assert.isFalse(isInputValid2({length: i, height: 7}));
		    });
            
            it ("Doesn't validate an object if property 'height' < 1", function() {
                assert.isFalse(isInputValid2({length: 10, height: i}));
		    });
        }
        
        it ("Doesn't validate an object if property 'length' isn't a number", function() {
            assert.isFalse(isInputValid2({length: null, height: 7}));
        });
        
        it ("Doesn't validate an object if property 'width' isn't a number", function() {
            assert.isFalse(isInputValid2({length: 14, height: ":]"}));
        });

	});
    
    describe("checkProperty", function() {
        it ("Doesn't validate a number that is less than 1", function() {
			assert.isFalse(checkProperty(-4));
		});
    });
    
    describe("compareEnvelopes", function() {
        it ("We can put in the second envelope in the first horizontally, if the first is bigger", function() {
			assert.isTrue(compareEnvelopes({length: 10, height: 5}, {length: 7, height: 3}));
		});
        
        it ("We can put in the second envelope in the first vertically, if the first is bigger", function() {
			assert.isTrue(compareEnvelopes({length: 10, height: 5}, {length: 4, height: 9}));
		});
        
        it ("We can't put in the second envelope in the first horizontally, if the first is smaller", function() {
			assert.isFalse(compareEnvelopes({length: 10, height: 5}, {length: 15, height: 8}));
		});
        
        it ("We can't put in the second envelope in the first vertically, if the first is smaller", function() {
			assert.isFalse(compareEnvelopes({length: 10, height: 5}, {length: 8, height: 17}));
		});
    });
    
    describe("deepCompare", function() {
        it ("We can put in the second envelope in the first, if the first is bigger", function() {
			assert.isTrue(deepCompare({length: 10, height: 5}, {length: 7, height: 3}));
		});
        
        it ("We can't put in the second envelope in the first, if the first is smaller", function() {
			assert.isFalse(deepCompare({length: 10, height: 5}, {length: 15, height: 8}));
		});
        
        it ("Function will return 'false' if length < height in any of envelopes", function() {
			assert.isFalse(deepCompare({length: 10, height: 5}, {length: 8, height: 17}));
		});
        
        it ("Function will return 'false' if length < height in any of envelopes", function() {
			assert.isFalse(deepCompare({length: 12, height: 21}, {length: 20, height: 10}));
		});
    });
});

