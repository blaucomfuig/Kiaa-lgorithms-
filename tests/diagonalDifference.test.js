const diagonalDifference = require('../src/diagonalDifference')

test("if I pass an 3 x 3 matrix to the function, [[1, 2, 3],[4, 5, 6],[7, 8, 9]], it should return the absolute differente betwen its diagonals, (1 + 5 + 8) - (3 + 5 + 7)|, which is 0", () =>{
    expect(diagonalDifference([[1, 2, 3],[4, 5, 6],[7, 8, 9]])).toBe(0)
})

test("if I pass an 3 x 3 matrix to the function, [[11, 2, 4],[4, 5, 6],[10, 8, -12]], it should return the absolute differente betwen its diagonals, (11 + 5 -12) - (4 + 5 + 10)|, which is 15", () =>{
    expect(diagonalDifference([[11, 2, 4],[4, 5, 6],[10, 8, -12]])).toBe(15)
})

test("if I pass an 5 x 5 matrix to the function, [[11, 2, 4, 3, 1],[4, 5, 6, 2, 0],[10, 8, -12, 1, -2], [1, 2, 3, 4, -5], [-4, 1, 10, 4, 2]], it should return the absolute differente betwen its diagonals, (11 + 5 -12 + 4 + 2) - (1 + 2 + -12 +2 -4)|, which is 21", () =>{
    expect(diagonalDifference([[11, 2, 4, 3, 1],[4, 5, 6, 2, 0],[10, 8, -12, 1, -2], [1, 2, 3, 4, -5], [-4, 1, 10, 4, 2]])).toBe(21)
})