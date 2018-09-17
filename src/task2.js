function envelopeAnalysis(envelope1, envelope2) {
    const instruction = {
        status: "failed",
        reason: "Two objects with properties 'length' and 'height' must be provided. Each of them must be a positive number"
    };
    
    let result = 0;
    
    if (!isInputValid2(envelope1) || !isInputValid2(envelope2)) {
        return instruction;
    }
    
    if (compareEnvelopes(envelope1, envelope2) || deepCompare(envelope1, envelope2)) {
        result = 1;
    } else if (compareEnvelopes(envelope2, envelope1) || deepCompare(envelope2, envelope1)) {
        result = 2;
    } else {
        result = 0;
    }
    
    return result;
}

function compareEnvelopes(env1, env2) {
    const firstCheck = env1.length > env2.length && env1.height > env2.height;
    const secondCheck = env1.length > env2.height && env1.height > env2.length;
    return firstCheck || secondCheck;
}

function deepCompare(env1, env2) {
    const a = env1.length;
    const b = env1.height;
    const p = env2.length;
    const q = env2.height;
    let condition1, condition2, equation;
    
    if (!(a > b && p > q)) {
        return false;
    }
    
    function exp(number) {
        return Math.pow(number, 2);
    }
    
    equation = (2 * p * q * a + (exp(p) - exp(q)) * Math.sqrt((exp(p) + exp(q) - exp(a)))) / (exp(p) + exp(q));
    
    condition1 = (p <= a && q <= b);
    condition2 = (p > a && b >= equation);
    
    return condition1 || condition2;
}

function isInputValid2(argument) {
    let isValid = true;
    
    if (typeof(argument) === "object" && argument !== null) {
        const lengthIsValid = checkProperty(argument.length);
        const heightIsValid = checkProperty(argument.height);
        
        if (!lengthIsValid || !heightIsValid) {
            isValid = false;
        }
    } else {
        isValid = false;
    }
    
    return isValid;
}

function checkProperty(property) {
    return isNumber(property) && (property > 0);
}
