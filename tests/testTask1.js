describe("1. Test task 1", function() {
	describe("printChessBoard", function() {
		const instruction = {
    		status: "failed",
    		reason: "Call the function with following parameters: length - length of a board (positive integer); width - width of a board (positive integer); symbol - symbol that will be used for drawing a board (must be a symbol of a string)"
		};

		it ("Is chess board 2x2 with '*' printing?", function() {
			assert.equal(printChessBoard(2, 2, "*"), "* * \n  * * \n");
		});

		it ("Is chess board 3x3 with '$' printing?", function() {
			assert.equal(printChessBoard(3, 3, "$"), "$ $ $ \n  $ $ $ \n$ $ $ \n");
		});

        for (let i = 0; i > -2; i--) {
            it ("Is instruction returned if length is " + i, function() {
			     assert.deepEqual(printChessBoard(i, 5, "*"), instruction);
		    });
            
            it ("Is instruction returned if width is " + i, function() {
			     assert.deepEqual(printChessBoard(4, i, "*"), instruction);
		    });
        }

		it ("Is instruction returned if symbol isn't a string?", function() {
			assert.deepEqual(printChessBoard(4, 4, 5), instruction);
		});
        
		it ("Is instruction returned if symbol isn't specified?", function() {
			assert.deepEqual(printChessBoard(4, 9), instruction);
		});
	});
    
	describe("isInputValid1", function() {
            
        for (let i = 2; i < 4; i++) {
            it ("Should validate positive values of length and width. Current input: length = " + i, function() {
			     assert.isTrue(isInputValid1(i, "length"));
		    });
            
            it ("Should validate positive values of length and width. Current input: width = " + i, function() {
			     assert.isTrue(isInputValid1(i, "width"));
		    });
        }

        for (let i = 0; i > -2; i--) {
            it ("Shouldn't validate values of length and width that are less than 1. Current input: length = " + i, function() {
			     assert.isFalse(isInputValid1(i, "length"));
		    });
            
            it ("Shouldn't validate values of length and width that are less than 1. Current input: width = " + i, function() {
			     assert.isFalse(isInputValid1(i, "width"));
		    });
        }
        
        it ("Shouldn't validate an empty value of length.", function() {
			 assert.isFalse(isInputValid1("", "length"));
        });
        
        it ("Shouldn't validate an empty value of width.", function() {
			 assert.isFalse(isInputValid1("", "width"));
        });
        
        it ("Should validate a single string symbol. Current input: symbol = '?'", function() {
			 assert.isTrue(isInputValid1("?", "symbol"));
        });

        it ("Shouldn't validate an empty string.", function() {
			 assert.isFalse(isInputValid1("", "symbol"));
        });
        
        it ("Shouldn't validate a string with length > 1", function() {
            assert.isFalse(isInputValid1("??", "symbol"));
        });
        
        it ("Shouldn't validate if symbol isn't a string", function() {
            assert.isFalse(isInputValid1(5, "symbol"));
        });
	});
});
