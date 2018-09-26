describe("3. Test task 3", function() {
    let abc = {vertices: "ABC", a: 17, b: 12, c: 10};
    let tmp = {vertices: "TMP", a: 12.8, b: 12.14, c: 5};
    
	describe("sortTriangles", function() {
        
        afterEach(() => abc = { vertices: "ABC", a: 17, b: 12, c: 10 });
        
        let instruction = {
            status: "failed",
            reason: "An array of triangle objects must be provided. Object must consist of 4 properties: 'vertices' - name of the triangle and three sides of the triangle as numbers. "
        };
        
        const def = {vertices: "DEF", a: 20, b: 14, c: 12};
        const fer = {vertices: "FER", a: 20, b: 12, c: 15};

		it ("Sorts triangles in order of descending triangle's area", function() {
			assert.deepEqual(sortTriangles([abc, def, tmp, fer]), ["FER", "DEF", "ABC", "TMP"]);
		});
        
		it ("Returns instruction if no triangles provided", function() {
			assert.deepEqual(sortTriangles([]), instruction);
		});
        
		it ("Returns instruction if not an array of triangles has been provided", function() {
			assert.deepEqual(sortTriangles({triangle: [12, 12, 12]}), instruction);
		});
        
		it ("Returns instruction if an array contains wrong objects of triangles", function() {
            delete abc.c;
			assert.deepEqual(sortTriangles([abc, def]), instruction);
		});
    
		it ("Returns instruction if an object of triangle has negative side", function() {
            abc.a = -16;
			assert.deepEqual(sortTriangles([abc, fer]), instruction);
		});
        
		it ("Returns instruction if an object of triangle has not numeric side", function() {
            abc.b = "number";
			assert.deepEqual(sortTriangles([abc, def]), instruction);
		});

	});
    
	describe("isInputValid3", function() {
        afterEach(() => tmp = {vertices: "TMP", a: 12.8, b: 12.14, c: 5});
        
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
             tmp.d = 6;
			 assert.isFalse(isInputValid3([tmp]));
        });
        
        it ("Shouldn't validate if an object doesn't contain property 'vertices'", function() {
             delete tmp.vertices;
			 assert.isFalse(isInputValid3([tmp]));
        });
        
        it ("Shouldn't validate if property 'vertices' isn't a string", function() {
             tmp.vertices = true;
			 assert.isFalse(isInputValid3([tmp]));
        });
        
        it ("Shouldn't validate if any of triangle's sides isn't a number", function() {
             tmp.a = "7";
			 assert.isFalse(isInputValid3([tmp]));
        });
        
        it ("Shouldn't validate if any of triangle's sides is a negative number", function() {
             tmp.b = -9;
			 assert.isFalse(isInputValid3([tmp]));
        });
        
	});
    
    describe("triangleValidation", function() {
        let BFI = { vertices: "BFI", a: 9, b: 15, c: 11 };
        
        afterEach(() => BFI = { vertices: "BFI", a: 9, b: 15, c: 11 });
        
        it ("Should validate if an object with correct triangle's sides and property 'vertices' was provided", function() {
             assert.isTrue(triangleValidation(BFI));
        });
        
        it ("Shouldn't validate if an object with empty property 'vertices' was provided", function() {
             BFI.vertices = "";
             assert.isFalse(triangleValidation(BFI));
        });
        
        it ("Shouldn't validate any of triangle's sides is equal to 0", function() {
             BFI.a = 0;
             assert.isFalse(triangleValidation(BFI));
        });
        
        it ("Shouldn't validate any of triangle's sides is equal to 0", function() {
             BFI.b = 0;
             assert.isFalse(triangleValidation(BFI));
        });
        
        it ("Shouldn't validate any of triangle's sides is less than 0", function() {
             BFI.a = -5;
             assert.isFalse(triangleValidation(BFI));
        });
        
        it ("Shouldn't validate if triangle doesn't exist", function() {
             assert.isFalse(triangleValidation({vertices: "HAI", a: 10, b: 15, c: 30}));
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
