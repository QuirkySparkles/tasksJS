function checkPalindrome(toCheck) {    
    if (!validateNumber(toCheck)) {
        return {
            status: "failed",
            reason: "Enter a number to check for palindrome"
        };
    }
    
    let stringValue = String(toCheck);
    
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

function validateNumber(number) {
    if (!number || typeof(number) !== "number") {
        return false;
    }
    
    if (isNaN(number) || !isFinite(number) || number < 10) {
        return false;
    }
    
    return true;
}
