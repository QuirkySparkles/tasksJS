function fiboRange(context) {
    
    if (!isInputValid7(context)) {
        return {
            status: "failed",
            reason: "Enter an object with following numeric properties: 'min' and 'max' or 'length'"
        };
    }
    
    let fibo = [1, 1];
    
    return (context.max) ? getFiboRange(context, fibo) : getFiboLength(context, fibo); 
}

function getFiboRange({min, max}, fibo) {
    let minValue = (min === 1) ? 0 : -1;

    while (fibo[fibo.length - 1] <= max) {
        fibo.push(fibo[fibo.length - 1] + fibo[fibo.length - 2]);

        if (fibo[fibo.length - 1] >= min && minValue === -1) {
            minValue = fibo.length - 1;
        }
    }

    fibo.pop();
    
    return (minValue <= 0) ? fibo : fibo.slice(minValue);
}

function getFiboLength({length}, fibo) {
    let result = [];
    
    if (length === 1) {
        result = [1, 1];
    }

    while (true) {
        fibo.push(fibo[fibo.length - 1] + fibo[fibo.length - 2]);

        if (String(fibo[fibo.length - 1]).length === length) {
            result.push(fibo[fibo.length - 1]);
            continue;
        }

        if (String(fibo[fibo.length - 1]).length > length) {
            break;
        }
    }
    
    return result;
}

function isInputValid7(parameter) {
    let isValid = true;
    
    if (!parameter) {
        return isValid = false;
    }
    
    const isMinMax = (
        ("min" in parameter)
        && ("max" in parameter)
        && !("length" in parameter)
    );
    const isLength = (
        !("min" in parameter)
        && !("max" in parameter)
        && ("length" in parameter)
    );
    
    if (!isMinMax && !isLength) {
        isValid = false;
    }
    
    for (let key in parameter) {
       if (!isNumber(parameter[key]) || parameter[key] === 0) {
           isValid = false;
       }
    }
    
    if (parameter.length) {
        isValid = (parameter.length % Math.floor(parameter.length)) ? false : isValid;
    }

    if (parameter.min > parameter.max) {
        isValid = false;
    }
    
    return isValid;
}
