function printChessBoard(length, width, symbol) {
    if (checkInput(length, "length")
       || checkInput(width, "width")
       || checkInput(symbol, "symbol")) { //validateInput
        console.log({
            status: "failed",
            reason: "Call the function with following parameters: length - length of a board (positive integer); width - width of a board (positive integer); symbol - symbol that will be used for drawing a board (must be a symbol of a string)"
        });
        return;
    }

    let chessBoard = "";
    for(let i = 0; i < width; i++) {
        if(i % 2) {
            chessBoard += " " + (`${symbol} `.repeat(length)) + "\n";
        } else {
            chessBoard += (`${symbol} `.repeat(length)) + "\n";
        }
    }
    console.log(chessBoard);
    return chessBoard;
}

function checkInput(argument, argumentName) {
    if(argumentName !== "symbol") {
        return (!argument
                || typeof(argument) !== "number"
                || argument <= 0
                || !isFinite(argument)
                || isNaN(argument)
               );
    } else {
        return !argument || argument.length !== 1;
    }
}
