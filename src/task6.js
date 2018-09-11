function numericSequence(n, m) {
    const instruction = {
        status: "failed",
        reason: "Input a length of the sequence as the first parameter and a value of max square as the second."
    }
    
    if (!isNumber(n) || (n === 0) || !isNumber(m)) {
        return instruction;
    }

    let result = [];
    let i = 1;
    
    while(result.length < n) {
        if (i * i >= m) {
            result.push(i);
        }
        i++;
    }
    
    return result.join(", ");
}
