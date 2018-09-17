function checkPalindrome(numberToCheck) {    
    if (!isNumber(numberToCheck) || numberToCheck <= 10) {
        return {
            status: "failed",
            reason: "Enter a number to check for palindrome. Number must be more than 10"
        };
    }
    
    let stringValue = String(numberToCheck);
    let i;
    let result = 0;
    
    for (i = 0; i < stringValue.length; i++) {
        let j = stringValue.length;
        
        while (j > i + 1) {
            const currentSlice = stringValue.slice(i, j);
            let reversedCurrentSlice = currentSlice.slice("").split("").reverse().join("");
            
            if (currentSlice === reversedCurrentSlice) {
                return result = currentSlice;
            }
            
            j--;
        }
    }
    return result;
}
