function printChessBoard(length, width, symbol) {
    const instruction = {
        status: "failed",
        reason: "Call the function with following parameters: length - length of a board (positive integer); width - width of a board (positive integer); symbol - symbol that will be used for drawing a board (must be a symbol of a string)"
    };
    
    if (checkInput(length, "length")
       || checkInput(width, "width")
       || checkInput(symbol, "symbol")) { //validateInput
        return instruction;
    }

    let chessBoard = "";
    for(let i = 0; i < width; i++) {
        if(i % 2) {
            chessBoard += " " + (`${symbol} `.repeat(length)) + "\n";
        } else {
            chessBoard += (`${symbol} `.repeat(length)) + "\n";
        }
    }
    
    return chessBoard;
}

function checkInput(argument, argumentName) {
    if(argumentName !== "symbol") {
        if (!isNumber(argument) || argument === 0) {
            return true;
        }
    } else {
        return !argument || argument.length !== 1;
    }
}
