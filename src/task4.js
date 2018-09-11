function checkPalindrome(numberToCheck) {    
    if (!isNumber(numberToCheck) || numberToCheck < 10) {
        return {
            status: "failed",
            reason: "Enter a number to check for palindrome"
        };
    }
    
    let stringValue = String(numberToCheck);
    
    for(let i = 0; i < stringValue.length; i++) {
        let j = stringValue.length;
        while(j > i + 1) {
            const currentSlice = stringValue.slice(i, j);
            let firstPart = currentSlice.slice(0, currentSlice.length / 2).split("").reverse().join("");
            let secondPart = currentSlice.slice(currentSlice.length / 2);
            
            if (currentSlice.length % 2) {        
                secondPart = secondPart.slice(1);
            } 
            
            if (firstPart === secondPart) {
                return currentSlice;
            }
            
            j--;
        }
    }
    return 0;
}
