const whatIsInAName = require('../src/whatIsInAName')

test('if I pass whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" }), it should return [{ first: "Tybalt", last: "Capulet" }]', () =>{
    expect(whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" })).toStrictEqual([{ first: "Tybalt", last: "Capulet" }])
})

test('if I pass whatIsInAName([{ "apple": 1, "bat": 2 }, { "apple": 1 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "cookie": 2 }), it should return [{ "apple": 1, "bat": 2, "cookie": 2 }]', () =>{
    expect(whatIsInAName([{ "apple": 1, "bat": 2 }, { "apple": 1 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "cookie": 2 })).toStrictEqual([{ "apple": 1, "bat": 2, "cookie": 2 }])
})