function task1() {
    let inputParams = document.getElementById("task1").value.split(", ");
    const length = +inputParams[0];
    const width = +inputParams[1];
    const symbol = inputParams[2];
    const result = printChessBoard(length, width, symbol);
    showResult(result);
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
    const result = envelopeAnalysis(envelope1, envelope2);
    showResult(result);
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
    const currentTriangle = new Triangle(triangle[0], +triangle[1], +triangle[2], +triangle[3]);
    const p = (currentTriangle.a + currentTriangle.b + currentTriangle.c) / 2;
    const triangleArea = Math.sqrt(p * (p - currentTriangle.a) * (p - currentTriangle.b) * (p - currentTriangle.c));
    
    if (!triangleArea) {
        document.getElementById("result").innerHTML = "This triangle doesn't exist!";
        return;
    }
    
    task3Triangles.push(currentTriangle);
    addedTriangles.push(triangle[0]);
    info.innerHTML = addedTriangles.join(", ");
}

function task3() {
    const result = sortTriangles(task3Triangles);
    showResult(result);
    task3Triangles = [];
    addedTriangles = [];
    const info = document.getElementById("triangle-info");
}

function task4() {
    const number = document.getElementById("task4").value;
    const result = checkPalindrome(+number);
    showResult(result);
}

function task5() {
    let range = document.getElementById("task5").value.split(", ");
    const context = {
        min: +range[0],
        max: +range[1]
    };
    const result = luckyTickets(context);
    showResult(result);
}

function task6() {
    let input = document.getElementById("task6").value.split(", ");
    const result = numericSequence(+input[0], +input[1]);
    showResult(result);
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
    const result = fiboRange(context);
    showResult(result);
}
