describe("4. Test task 4", function() {
	describe("checkPalindrome", function() {
        const instruction = {
            status: "failed",
            reason: "Enter a number to check for palindrome. Number must be more than 10"
        };

		it ("Should find first palindrome in number 7455129811", function() {
			assert.equal(checkPalindrome(74551298), 55);
		});
        
        it ("Should find palindrome in number 4387781243", function() {
			assert.equal(checkPalindrome(4387781243), 8778);
		});
        
        it ("Should find palindrome in number 30123321", function() {
			assert.equal(checkPalindrome(30123321), 123321);
		});
        
        it ("Shouldn't find palindrome in number 1932473945", function() {
			assert.equal(checkPalindrome(1932473945), 0);
		});
        
        it ("Shouldn't find palindrome in number 415", function() {
			assert.equal(checkPalindrome(415), 0);
		});
        
        it ("Should find palindrome in number 11", function() {
			assert.equal(checkPalindrome(11), 11);
		});
        
        it ("Should return instruction if number to check <= 10", function() {
			assert.deepEqual(checkPalindrome(9), instruction);
		});
        
        it ("Should return instruction if number to check <= 10", function() {
			assert.deepEqual(checkPalindrome(10), instruction);
		});
        
        it ("Should return instruction if number to check <= 10", function() {
			assert.deepEqual(checkPalindrome(-1221), instruction);
		});
        
        it ("Should return instruction if argument isn't a number", function() {
			assert.deepEqual(checkPalindrome("№№№"), instruction);
		});
        
        it ("Should return instruction if argument is Infinity", function() {
			assert.deepEqual(checkPalindrome(Infinity), instruction);
		});
        
        it ("Should return instruction if argument is NaN", function() {
			assert.deepEqual(checkPalindrome(NaN), instruction);
		});
    });
});