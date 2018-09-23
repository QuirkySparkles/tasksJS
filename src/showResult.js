function showResult(result) {
    console.log(result);
    document.getElementById("instruction").innerHTML = "";
    
    if (Array.isArray(result)) {
        document.getElementById("result").innerHTML = "Result: " + result.join(", ");
        return;
        
    } else if (typeof(result) === "object") {
        if (result.reason) {
            document.getElementById("instruction").innerHTML = result.reason;
        } else {
            document.getElementById("result").innerHTML = `Result: Simple method = ${result.simple}; Hard method = ${result.hard}; Winner = ${result.winner}.`
        }
        return;
        
    } else {
        document.getElementById("result").innerHTML = "Result: " + result;
    }
}
