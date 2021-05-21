const sumAll = require("../src/rangeArray")

test("if we pass [4, 1] to the function it should return the total sum of the numbers in between the range: 1 +2 +3 +4 = 10", () =>{
    expect(sumAll([4,1])).toBe(10);
});

test("if we pass [1, 13] to the function it should return the total sum of the numbers in between the range 1 + ... + 13 = 81", ()=>{
    expect(sumAll([1,13])).toBe(91);
});

test("if we pass [10, 100] to the function it should return the total sum of the numbers in between the range 10 + ... + 100 = 5005", ()=>{
    expect(sumAll([10,100])).toBe(5005);
})










