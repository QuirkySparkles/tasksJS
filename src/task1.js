function printChessBoard(length, width, symbol) {
    const instruction = {
        status: "failed",
        reason: "Call the function with following parameters: length - length of a board (positive integer); width - width of a board (positive integer); symbol - symbol that will be used for drawing a board (must be a symbol of a string)"
    };
    
    if (!isInputValid1(length, "length")
       || !isInputValid1(width, "width")
       || !isInputValid1(symbol, "symbol")) {
        return instruction;
    }

    let chessBoard = "";
    let i = 0;
    const line = (`${symbol} `.repeat(length)) + "\n";
    
    while (i < width) {
        chessBoard += (i % 2) ? ("  " + line) : line;
        i++;
    }
    
    return chessBoard;
}

function isInputValid1(argument, argumentName) {
    let isValid = true;
    
    if (argumentName !== "symbol") {
        if (!isNumber(argument) || argument === 0) {
            isValid = false;
        }
    } else {
        if (!argument || argument.length !== 1) {
            isValid = false;
        }
    }
    
    return isValid;
}
