function task1() {
    let inputParams = document.getElementById("task1").value.split(", ");
    const length = +inputParams[0];
    const width = +inputParams[1];
    const symbol = inputParams[2];
    return printChessBoard(length, width, symbol);
}

function task2() {
    let envelopeValues1 = document.getElementById("task2.1").value.split(", ");
    let envelopeValues2 = document.getElementById("task2.2").value.split(", ");
    const envelope1 = {
        length: +envelopeValues1[0],
        height: +envelopeValues1[1]
    };
    const envelope2 = {
        length: +envelopeValues2[0],
        height: +envelopeValues2[1]
    }
    
    console.log(envelopeAnalysis(envelope1, envelope2));
}

let task3Triangles = [];
let addedTriangles = [];

function getTriangle(cancel) {
    const info = document.getElementById("triangle-info");
    if (cancel) {
        task3Triangles.pop();
        addedTriangles.pop();
        info.innerHTML = addedTriangles.join(", ");
        return;
    }
    
    class Triangle {
        constructor(vertices, a, b, c) {
            this.vertices = vertices;
            this.a = a;
            this.b = b;
            this.c = c;
        }
    }
    
    if (!document.getElementById("task3").value) {
        return;
    }
    
    let triangle = document.getElementById("task3").value.split(", ");
    document.getElementById("task3").value = "";
    addedTriangles.push(triangle[0]);
    task3Triangles.push(new Triangle(triangle[0], +triangle[1], +triangle[2], +triangle[3]));
    info.innerHTML = addedTriangles.join(", ");
}

function task3() {
    console.log(sortTriangles(task3Triangles));
    task3Triangles = [];
    addedTriangles = [];
    const info = document.getElementById("triangle-info");
}

function task4() {
    const number = document.getElementById("task4").value;
    console.log(checkPalindrome(+number));
}

function task5() {
    let range = document.getElementById("task5").value.split(", ");
    const context = {
        min: +range[0],
        max: +range[1]
    };
    console.log(luckyTickets(context));
}

function task6() {
    let input = document.getElementById("task6").value.split(", ");
    console.log(numericSequence(+input[0], +input[1]));
}

function task7() {
    let input = document.getElementById("task7").value.split(", ");
        
    if (input[0].trim() === "") {
        console.log(fiboRange());
        return;
    }
    
    let context = {};
    if (input.length > 1) {
        context.min = +input[0];
        context.max = +input[1];
    } else {
        context.length = +input[0];
    }
    console.log(fiboRange(context));
}
