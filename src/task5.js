const ticketNumberLength = 6;

function luckyTickets(context) {
    const instruction = {
        status: "failed",
        reason: "Input an object with two string properties 'min' and 'max', with ticket format numbers. max > min, max <= 999999"
    };
    
    if (!isInputValid5(context)) {
        return instruction;
    }
    
    context.min = Number(context.min);
    context.max = Number(context.max);
    
    let currentValue = context.min;
    let simple = 0;
    let hard = 0;
    let result;
    
    while (currentValue <= context.max) {
        let currentTicket = String(currentValue);
        
        if (currentTicket.length < ticketNumberLength) {
            currentTicket = "0".repeat(ticketNumberLength - currentTicket.length) + currentTicket;
        }
        
        const ticketArray = currentTicket.split("").map(number => Number(number));
        
        simple += isLuckySimple(ticketArray);
        hard += isLuckyHard(ticketArray);

        currentValue++;
    }
    
    result = {
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

function isLuckySimple(ticket) {    
    const leftSide = ticket[0] + ticket[1] + ticket[2];
    const rightSide = ticket[3] + ticket[4] + ticket[5];

    return leftSide === rightSide;
}

function isLuckyHard(ticket) {
    let evenNumbers = 0;
    let oddNumbers = 0;
    
    ticket.forEach(number => {
        (number % 2) ? evenNumbers += number : oddNumbers += number;
    });

    return evenNumbers === oddNumbers;
}

function isInputValid5(context) {
    let isValid = true;
    
    if (!context || !("min" in context) || !("max" in context)) {
        return isValid = false;
    }
    
    if (typeof(context.min) !== "string" || typeof(context.max) !== "string") {
        return isValid = false;
    }
    
    if (context.min.length !== ticketNumberLength
        || context.max.length !== ticketNumberLength) {
        isValid = false;
    }
    
    const minNumber = Number(context.min);
    const maxNumber = Number(context.max);
        
    if (!isNumber(minNumber) || minNumber >= maxNumber || minNumber === 0) {
        isValid = false;
    }
    
    if (!isNumber(maxNumber) || maxNumber > 999999) {
        isValid = false;
    }
    
    return isValid;
}
