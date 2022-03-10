const { expect } = require("@jest/globals");
const { it } = require("jest-circus");
const { describe } = require("yargs");
const app = require ("../app.js");

describe("should add two numbers together",() =>{
    test("should equal 5 when passed 2 and 3",() =>{
        expect(app.add(2,3)).not.toBe(10)
    });  

    test ("shoul equal 100 when adding 50 and 50",()=>{
        expect(app.add(50,50)).toBe(100)
    })
})


it("shouls include the name dave",()=>{
    expect(app.myArray).toContain("dave")
})