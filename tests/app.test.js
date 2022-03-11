


const app = require ("../app.js");
//example 1 test

describe("should add two numbers together",() =>{
    test("should equal 5 when passed 2 and 3",() =>{
        expect(app.add(2,3)).not.toBe(10)
    });  

    test ("shoul equal 100 when adding 50 and 50",()=>{
        expect(app.add(50,50)).toBe(100)
    });
});


//example 2 test 
    
it("shouls include the name dave",()=>{
    expect(app.myArray).toContain("dave")
});


//activity 1 
test("should not return null",()=>{
expect(app.getNotNull()).not.toBeNull();
})

//activity 2 test
describe("should return true if 1 equal 1",()=>{
    test("number 1 should be strictly equal to 1 should be true",()=>{
        expect(app.truthy(1,1)).toBe(true)
    });
    test("number 1 should not be  equal to 2 should be false ",()=>{
        expect(app.truthy(1,2)).toBe(false)
    });

    
})


//activity 3

//activity 4 test 

describe("should return item with 6 or more characters",()=>{
    it("should return correct items given array of elements containing 6 or more characters",()=>{
        const input = ['javascript', 'element', 'html', 'selector', 'css', 'DOM'];
        expect(app.getItems(input)).toContain('javascript', 'selector', 'element');
		expect(app.getItems(input)).not.toContain('html', 'css', 'DOM');

    })
})

// activity 4 test
it('should create object with correct properties', () => {
	expect(app.createObject()).toMatchObject({
        name:"leenah",
        age:"forever young"
    
    });
});



// ativity 5 test
it('should convert number to string', () => {
	expect(app.convertNumberToString(17)).toBe('17');
});


//activity 6  
describe('should display correct planet given order away from the Sun', () => {
	it('should return Earth given 3rd planet from Sun', () => {
		expect(app.getPlanetFromOrder(3)).toBe('Earth');
	});

	it('should return Mercury given 1st planet from Sun', () => {
		expect(app.getPlanetFromOrder(1)).toBe('Mercury');
	});
});