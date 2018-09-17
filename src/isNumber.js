function isNumber(value) {
    let isValid = true;
    
    if (typeof(value) !== "number" || (!value && value !== 0)) {
        isValid = false;
    }
    
    if (isNaN(value) || !isFinite(value) || value < 0) {
        isValid = false;
    }
    
    return isValid;
}
