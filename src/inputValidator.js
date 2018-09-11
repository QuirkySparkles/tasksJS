function isNumber(value) {
    if (!value || typeof(value) !== "number") {
        return false;
    }
    
    if (isNaN(value) || !isFinite(value) || value < 0) {
        return false;
    }
    
    return true;
}
