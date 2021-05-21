const sumAll = require("../src/rangeArray")

test("given an array [4, 1] it should return the sum of all the numbers in between the range (1+2+3+4), 10", () =>{
    expect(sumAll([4, 1])).toBe(10);
})