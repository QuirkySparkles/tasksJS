function showResult(result) {
    console.log(result);
    
    if(Array.isArray(result)) {
        document.getElementById("result").innerHTML = result.join(", ");
        return;
        
    } else if (typeof(result) === "object") {
        if (result.reason) {
            document.getElementById("instruction").innerHTML = result.reason;
        } else {
            document.getElementById("result").innerHTML = `Simple method = ${result.simple}; Hard method = ${result.hard}; Winner = ${result.winner}.`
        }
        return;
        
    } else {
        document.getElementById("result").innerHTML = result;
    }
}
