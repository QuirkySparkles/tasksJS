function triangleValidation(currentTriangle) {
    let isValid = true;
    const {a, b, c} = currentTriangle;
    const p = (a + b + c) / 2;
    const triangleArea = Math.sqrt(p * (p - a) * (p - b) * (p - c));
    let outputField = {};
    
    if (document.getElementById("result")) {
        outputField = document.getElementById("result");
    }
    
    if (!triangleArea || a <= 0 || b <= 0 || c <= 0) {
        outputField.innerHTML = "This triangle doesn't exist!";
        isValid = false;
    }
    
    if (!currentTriangle.vertices.trim()) {
        outputField.innerHTML = "Enter a name for triangle!";
        isValid = false;
    }
    
    return isValid;
}
