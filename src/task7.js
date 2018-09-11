function fiboRange(context) {
    if(!validateCondition(context)) {
        return {
            status: "failed",
            reason: "Enter an object with following numeric properties: 'min' and 'max' or 'length'"
        };
    }
        
    let fibo = [1, 1];
    
    if (context.max) {
        let minValue = -1;
        while (fibo[fibo.length - 1] < context.max) {
            fibo.push(fibo[fibo.length - 1] + fibo[fibo.length - 2]);
            if (fibo[fibo.length - 1] > context.min && minValue === -1) {
                minValue = fibo.length - 1;
            }
        }
        fibo.pop();
        return (minValue <= 1) ? fibo : fibo.slice(minValue);
        
    } else {
        let result = [];
        if (context.length === 1) {
            result = [1, 1];
        }
        
        while(true) {
            fibo.push(fibo[fibo.length - 1] + fibo[fibo.length - 2]);
            
            if (String(fibo[fibo.length - 1]).length === context.length) {
                result.push(fibo[fibo.length - 1]);
                continue;
            }
            
            if (String(fibo[fibo.length - 1]).length > context.length) {
                break;
            }
        }
        return result;
    }
}

function validateCondition(parameter) {
    if (!parameter) {
        return false;
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
        return false;
    }
    
    for(let key in parameter) {
       if (!isNumber(parameter[key]) || parameter[key] === 0) {
           return false;
       }
    }

    if (parameter.min > parameter.max) {
        return false;
    }
    
    return true;
}
