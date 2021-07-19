const sockMerchant = require('../src/sockMerchant')


test("if there is one pair of type 1 in the array of three elements [1,1,2], it should return 1", () =>{
    expect(sockMerchant(3, [1,1,2])).toBe(1)
})

test("if there are two pairs of type 2 and one pair of type 3 in the array of ten elements [2,1,2,2,3,2,8,3,7,4] it should return 3", ()=>{
    expect(sockMerchant(10, [2,1,2,2,3,2,8,3,7,4])).toBe(3)
})