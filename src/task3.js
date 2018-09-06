let wrongTriangle;

function sortTriangles(trianglesArray) {
    let instruction = {
        status: "failed",
        reason: "An array of triangle objects must be provided. Object must consist of 4 properties: 'vertices' - name of the triangle and three sides of the triangle as numbers. "
    };
    let result = [];
    wrongTriangle = "";
    
    const dataValidation = validateTriangles(trianglesArray);
    
    if (wrongTriangle) {
        instruction.reason += `${wrongTriangle} doesn't exist`;
        return instruction;
    }
    
    if (!dataValidation) {
        return instruction;
    }
    
    trianglesArray.sort(sortify).forEach(triangle => 
        result.push(triangle.vertices));
    
    return result;
}

function sortify(triangle1, triangle2) {
    let sides1 = [];
    let sides2 = [];
    let halfPerimeter1 = 0;
    let halfPerimeter2 = 0;
    
    for(let i = 0; i < 2; i++) {
        for (let key in arguments[i]) {
            if (typeof(arguments[i][key]) === "number") {     //extracting each
                (i === 0) ? sides1.push(arguments[i][key])    //side of the triangles
                : sides2.push(arguments[i][key]);
            }
        }
    }
    
    sides1.forEach(side => halfPerimeter1 += side);
    sides2.forEach(side => halfPerimeter2 += side);
    halfPerimeter1 /= 2;
    halfPerimeter2 /= 2;
    return getArea(halfPerimeter1, sides1) < getArea(halfPerimeter2, sides2);
}

function getArea(p, triangleSides) {
    return Math.sqrt(p * (p - triangleSides[0]) * (p - triangleSides[1]) * (p - triangleSides[2]));
}

function validateTriangles(triangles) {
    
    if (!Array.isArray(triangles) || !triangles[0]) {
        return false;
    }
    
    return triangles.every(triangle => {
        
        if (typeof(triangle) !== "object" && Object.keys(triangle).length !== 4) {
            return false;
        }

        if ("vertices" in triangle) {
            if (typeof(triangle.vertices) !== "string"
                || !triangle.vertices.trim()) {
                return false;
            }
        } else {
            return false;
        }

        let triangleSides = [];

        for(let key in triangle) {
            if (key === "vertices") continue;
            if (typeof(triangle[key]) !== "number"
                || isNaN(triangle[key])
                || !isFinite(triangle[key])) {
                return false;
            }
            triangleSides.push(triangle[key]);
        }

        if (triangleSides[0] + triangleSides[1] < triangleSides[2]
         || triangleSides[1] + triangleSides[2] < triangleSides[0]
         || triangleSides[2] + triangleSides[0] < triangleSides[1]) { //is triangle exists
            wrongTriangle = triangle.vertices;            
            return false;
        }

        return true;
    });
}
