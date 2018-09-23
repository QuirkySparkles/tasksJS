describe("3. Test task 3", function() {
    const abc = {vertices: "ABC", a: 17, b: 12, c: 10};
    const tmp = {vertices: "TMP", a: 12, b: 12, c: 5};
	describe("sortTriangles", function() {
        let instruction = {
            status: "failed",
            reason: "An array of triangle objects must be provided. Object must consist of 4 properties: 'vertices' - name of the triangle and three sides of the triangle as numbers. "
        };
        
        const qlt = {vertices: "QLT", a: 20, b: 14, c: 12};
        const fer = {vertices: "FER", a: 20, b: 12, c: 15};

		it ("Sorts triangles in order of descending triangle's area", function() {
			assert.deepEqual(sortTriangles([abc, qlt, tmp, fer]), ["FER", "QLT", "ABC", "TMP"]);
		});
        
		it ("Returns instruction if no triangles provided", function() {
			assert.deepEqual(sortTriangles([]), instruction);
		});
        
		it ("Returns instruction if not an array of triangles has been provided", function() {
			assert.deepEqual(sortTriangles({triangle: [12, 12, 12]}), instruction);
		});
        
		it ("Returns instruction if an array contains wrong objects of triangles", function() {
			assert.deepEqual(sortTriangles([abc, {vertices: "DRC", a: 17, c: 10}]), instruction);
		});
    
		it ("Returns instruction if an object of triangle has negative side", function() {
			assert.deepEqual(sortTriangles([{vertices: "ABC", a: -17, b: 12, c: 10}, fer]), instruction);
		});
        
		it ("Returns instruction if an object of triangle has not numeric side", function() {
			assert.deepEqual(sortTriangles([{vertices: "ABC", a: 17, b: "number", c: 10}, qlt]), instruction);
		});

	});
    
	describe("isInputValid3", function() {
        it ("Should validate if value is an array that contains objects of triangles with properties: 'vertices' (string), and three sides (positive number).", function() {
            delete abc.area;
            delete tmp.area;
            assert.isTrue(isInputValid3([abc, tmp]));
        });
        
        it ("Shouldn't validate if value isn't an array", function() {
			 assert.isFalse(isInputValid3("Let me in :("));
        });
        
        it ("Shouldn't validate if first value of an array isn't defined", function() {
			 assert.isFalse(isInputValid3([, abc]));
        });
        
        it ("Shouldn't validate if an array contains something except objects", function() {
			 assert.isFalse(isInputValid3([abc, 15]));
        });
        
        it ("Shouldn't validate if an object contains more than 4 properties", function() {
			 assert.isFalse(isInputValid3([{vertices: "DHJ", a: 4, b: 4, c: 4, d: 4}]));
        });
        
        it ("Shouldn't validate if an object doesn't contain property 'vertices'", function() {
			 assert.isFalse(isInputValid3([{a: 4, b: 4, c: 4}]));
        });
        
        it ("Shouldn't validate if property 'vertices' isn't a string", function() {
			 assert.isFalse(isInputValid3([{vertices: true, a: 4, b: 4, c: 4}]));
        });
        
        it ("Shouldn't validate if property 'vertices' has an empty string", function() {
			 assert.isFalse(isInputValid3([{vertices: "", a: 4, b: 4, c: 4}]));
        });
        
        it ("Shouldn't validate if any of triangle's sides isn't a number", function() {
			 assert.isFalse(isInputValid3([{vertices: "NBV", a: "4", b: 9, c: 9}]));
        });
        
        it ("Shouldn't validate if any of triangle's sides is a negative number", function() {
			 assert.isFalse(isInputValid3([{vertices: "NBV", a: 4, b: -9, c: 9}]));
        });
        
        it ("Shouldn't validate if any of triangle's sides is equal to 0", function() {
			 assert.isFalse(isInputValid3([{vertices: "NBV", a: 4, b: 9, c: 0}]));
        });
        
	});
    
    describe("getArea", function() {
        it ("Should calculate triangle's area correctly. Sides: 17, 12, 10.", function() {
             const area = Math.floor(getArea(abc).area * 100) / 100;
			 assert.equal(area, 58.93);
        });
        
        it ("Should write NaN in property 'area' if one of triangle's sides isn't a number.", function() {
             const area = getArea({vertices: "ABC", a: "d7", b: 12, c: 10}).area;
			 assert.deepEqual(area, NaN);
        });
        
    });

    describe("sortify", function() {
        it ("Should return 'true' if property 'area' of the second object is bigger than in first object.", function() {
            assert.isTrue(sortify({area: 14}, {area: 20}));
        });
        
        it ("Should return 'false' if property 'area' of the second object is smaller than in first object.", function() {
            assert.isFalse(sortify({area: 12}, {area: 8}));
        });
    });
});
