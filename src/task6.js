function numericSequence(n, m) {
    const instruction = {
        status: "failed",
        reason: "Input a length of the sequence as the first parameter and a value of max square as the second."
    }
    
    console.log(n + " " + m);
    
    if (validateNums(n, m)) {
        return instruction;
    }

    let result = [];
    let i = 1;
    
    while(i <= n) {
        (i * i > m) ? result.push(i) : result;
        i++;
    }
    
    return result.join(", ");
}

function validateNums (n, m) {
    return (
        !n || !m
        || typeof(n) !== "number"
        || typeof(m) !== "number"
        || !isFinite(n)
        || n < 0
    );
}
