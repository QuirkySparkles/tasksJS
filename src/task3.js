function sortTriangles(trianglesArray) {
    let instruction = {
        status: "failed",
        reason: "An array of triangle objects must be provided. Object must consist of 4 properties: 'vertices' - name of the triangle and three sides of the triangle as numbers. "
    };
    let result = [];
    
    const dataValidation = validateTriangles(trianglesArray);
    
    if (!dataValidation) {
        return instruction;
    }
    
    trianglesArray = trianglesArray.map(triangle => getArea(triangle));
    
    trianglesArray.sort(sortify).forEach(triangle => 
        result.push(triangle.vertices));
    
    return result;
}

function getArea(triangle) {
    const {a, b, c} = triangle;
    const p = (a + b + c) / 2;
    triangle.area = Math.sqrt(p * (p - a) * (p - b) * (p - c));
    return triangle;
}

function sortify(triangle1, triangle2) {
    return triangle1.area < triangle2.area;
}

function validateTriangles(triangles) {    
    if (!Array.isArray(triangles) || !triangles[0]) {
        return false;
    }
    
    return triangles.every(triangle => {
        
        if (typeof(triangle) !== "object" || Object.keys(triangle).length !== 4) {
            return false;
        }

        if (!("vertices" in triangle)) {
            return false;
        }
        
        if (typeof(triangle.vertices) !== "string"
            || !triangle.vertices.trim()) {
            return false;
        }

        for(let key in triangle) {
            if (key === "vertices") continue;
            if (!isNumber(triangle[key]) || (triangle[key] === 0)) {
                return false;
            }
        }

        return true;
    });
}
