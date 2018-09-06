function envelopeAnalysis(envelope1, envelope2) {
    const instruction = {
        status: "failed",
        reason: "Two objects with properties 'length' and 'height' must be provided. Each of them must be a positive number"
    };
    
    for(let i = 0; i < 2; i++) {
        if (!checkArgument(arguments[i])) {
            return instruction;
        }
    }
    
    if (compareEnvelopes(envelope1, envelope2)) {
        return 1;
    } else if (compareEnvelopes(envelope2, envelope1)) {
        return 2;
    } else {
        return 0;
    }
}

function checkArgument(argument) {
    if (typeof(argument) === "object" && argument !== null) {
        const lengthIsValid = checkProperty(argument.length);
        const heightIsValid = checkProperty(argument.height);
        if (!lengthIsValid || !heightIsValid) {
            return false;
        }
    } else {
        return false;
    }
    return true;
}

function checkProperty(property) {
    return property && typeof(property) === "number" && property > 0;
}

function compareEnvelopes(env1, env2) {
    const firstCheck = env1.length > env2.length && env1.height > env2.height;
    const secondCheck = env1.length > env2.height && env1.height > env2.length;
    return firstCheck || secondCheck;
}
