const destroyer = require("../src/seekAndDestroy");

test("if I pass the array [1,2,3] as first argument, and 1,2 as second argument, it should return an array without these numbers: [3]", () =>{
    expect(destroyer([1,2,3], 1, 2)).toStrictEqual([3]);
})

test("if I pass the array [2, 3, 2, 3] as first argument, and 2,3 as second argument, it should return an array without these numbers: []", () =>{
    expect(destroyer([2, 3, 2, 3], 2, 3)).toStrictEqual([]);
})

test("if I pass the array ['possum', 'trollo', 12, 'safari', 'hotdog', 92, 65, 'grandma', 'bugati', 'trojan', 'yacht'] as first argument, and 'yacht', 'possum', 'trollo', 'safari', 'hotdog', 'grandma', 'bugati', 'trojan' as second argument, it should return an array without these numbers: [12, 92, 65]", () =>{
    expect(destroyer(['possum', 'trollo', 12, 'safari', 'hotdog', 92, 65, 'grandma', 'bugati', 'trojan', 'yacht'], 'yacht', 'possum', 'trollo', 'safari', 'hotdog', 'grandma', 'bugati', 'trojan')).toStrictEqual([12,92,65]);
})