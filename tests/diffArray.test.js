const diffArray = require("../src/diffArray");

test("when arrays [1, 2, 3] and [1, 2] are passed to the function, it should return an array containing the simmetric difference between the two: [3]", () =>{
    expect(diffArray([1,2,3], [1,2])).toStrictEqual([3]);
})

test("when arrays ['diorite', 'andesite', 'grass', 'dirt', 'pink wool', 'dead shrub'] and ['diorite', 'andesite', 'grass', 'dirt', 'dead shrub'] are passed to the function, it should return an array containing the simmetric difference between the two: ['pink wool']", () =>{
    expect(diffArray(['diorite', 'andesite', 'grass', 'dirt', 'pink wool', 'dead shrub'],['diorite', 'andesite', 'grass', 'dirt', 'dead shrub'])).toStrictEqual(['pink wool']);
})

test("when arrays ['andesite', 'grass', 'dirt', 'dead shrub'] and ['andesite', 'grass', 'dirt', 'dead shrub'] are passed to the function, it should return an array containing the simmetric difference between the two: []", () =>{
    expect(diffArray(['andesite', 'grass', 'dirt', 'dead shrub'], ['andesite', 'grass', 'dirt', 'dead shrub'])).toStrictEqual([]);
})

test("when arrays [1, 'calf', 3, 'piglet'] and  [1, 'calf', 3, 4] are passed to the function, it should return an array containing the simmetric difference between the two: ['piglet', 4]", () =>{
    expect(diffArray([1, 'calf', 3, 'piglet'], [1, 'calf', 3, 4])).toStrictEqual(['piglet', 4]);
})