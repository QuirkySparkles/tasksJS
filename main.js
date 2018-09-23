function injectEventListeners() {
    let i;
    let elementId;
    const eventListeners = [null, task1, task2, task3, task4, task5, task6, task7];
    const triangleManagement = document.getElementsByClassName("manage-triangles");
    
    for (i = 1; i < 8; i++) {
        elementId = `t${i}-button`;
        document.getElementById(elementId).addEventListener("click", eventListeners[i]);
        elementId = "";
        document.querySelector(`li:nth-child(${i})`).addEventListener("click", displayTask.bind(null,`t${i}`));
    }

    triangleManagement.item(0).addEventListener("click", getTriangle.bind(null, ""));
    triangleManagement.item(1).addEventListener("click", getTriangle.bind(null, "cancel"));
}

injectEventListeners();
displayTask("t1");

function task1() {
    let inputParams = document.getElementById("task1").value.split(", ");
    const length = parseInt(inputParams[0]);
    const width = parseInt(inputParams[1]);
    const symbol = inputParams[2];
    const result = printChessBoard(length, width, symbol);
    
    if (typeof(result) === "string") {
        document.querySelector(".board-result").innerHTML = "Result: \n" + result;
    } else {
        showResult(result);
    }
}

function task2() {
    let envelopeValues1 = document.getElementById("task2.1").value.split(", ");
    let envelopeValues2 = document.getElementById("task2.2").value.split(", ");
    const envelope1 = {
        length: parseFloat(envelopeValues1[0]),
        height: parseFloat(envelopeValues1[1])
    };
    const envelope2 = {
        length: parseFloat(envelopeValues2[0]),
        height: parseFloat(envelopeValues2[1])
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
    
    let vertices = document.getElementById("vertices");
    let aSide = document.getElementById("a-side");
    let bSide = document.getElementById("b-side");
    let cSide = document.getElementById("c-side");
    const currentTriangle = new Triangle(vertices.value, parseFloat(aSide.value), parseFloat(bSide.value), parseFloat(cSide.value));
    const {a, b, c} = currentTriangle;
    const p = (a + b + c) / 2;
    const triangleArea = Math.sqrt(p * (p - a) * (p - b) * (p - c));
    
    vertices.value = "";
    aSide.value = "";
    bSide.value = "";
    cSide.value = "";
    
    if (!triangleArea || a <= 0 || b <= 0 || c <= 0) {
        document.getElementById("result").innerHTML = "This triangle doesn't exist!";
        return;
    }
    
    document.getElementById("result").innerHTML = "";
    
    task3Triangles.push(currentTriangle);
    addedTriangles.push(currentTriangle.vertices);
    info.innerHTML = addedTriangles.join(", ");
}

function task3() {
    const result = sortTriangles(task3Triangles);
    showResult(result);
    task3Triangles = [];
    addedTriangles = [];
}

function task4() {
    const number = document.getElementById("task4").value;
    const result = checkPalindrome(Number(number));
    showResult(result);
}

function task5() {
    let minTicket = document.getElementById("min-ticket").value;
    let maxTicket = document.getElementById("max-ticket").value;
    const context = {
        min: minTicket,
        max: maxTicket
    };
    const result = luckyTickets(context);
    showResult(result);
}

function task6() {
    let sequenceLength = document.getElementById("t6-length").value;
    let maxSquare = document.getElementById("t6-square").value;
    const result = numericSequence(Number(sequenceLength), parseFloat(maxSquare));
    showResult(result);
}

function task7() {
    let input = document.getElementById("task7").value.split(", ");
        
    if (input[0].trim() === "") {
        showResult(fiboRange());
        return;
    }
    
    let context = {};
    
    if (input.length > 1) {
        context.min = parseInt(input[0]);
        context.max = parseInt(input[1]);
    } else {
        context.length = Number(input[0]);
    }
    
    const result = fiboRange(context);
    showResult(result);
}
