function luckyTickets(context) {
    const instruction = {
        status: "failed",
        reason: "Input an object with two positive numeric properties: 'min' and 'max', max > min, max <= 999999"
    };
    
    if (!validateInput(context)) {
        return instruction;
    }
    
    let currentVal = context.min;
    let simple = 0;
    let hard = 0;
    
    while(currentVal < context.max) {
        // simple method
        let currTicket = String(currentVal);
        
        if (currTicket.length < 6) {
            currTicket = "0".repeat(6 - currTicket.length) + currTicket;
        }
        
        currTicket = currTicket.split("").map(number => +number);
        
        if (currTicket[0] + currTicket[1] + currTicket[2]
            === currTicket[3] + currTicket[4] + currTicket[5]) {
            simple++;
        }
        
        // hard method
        let evenNumbers = 0;
        let oddNumbers = 0;
        currTicket.forEach(number => {
            (number % 2) ? evenNumbers += number : oddNumbers += number;
        });
        
        if (evenNumbers === oddNumbers) {
            hard++;
        }
        currentVal++;
    }
    
    let result = {
        simple,
        hard
    };
    
    if (simple === hard) {
        result.winner = "No winner";
    } else {
        result.winner = (simple > hard) ? "simple" : "hard";
    }
    
    return result;
}

function validateInput(context) {
    if (!context || !("min" in context) || !("max" in context)) {
        return false;
    }
        
    if (typeof(context.min) !== "number"
        || context.min < 0
        || isNaN(context.min)
        || !isFinite(context.min)
        || context.min >= context.max) {
        return false;
    }
    
    if (typeof(context.max) !== "number"
        || context.max > 999999
        || isNaN(context.max)
        || !isFinite(context.max)) {
        return false;
    }
    return true;
}
