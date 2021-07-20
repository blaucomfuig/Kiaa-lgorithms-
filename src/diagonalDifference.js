function diagonalDifference(arr) {
    let generalArray = []
    let n = arr[0].length

    let firstDiagonal = []
   
    let secondDiagonal = []
   

    arr.forEach(item=>{
        item.forEach(element =>{
            generalArray.push(element)
        })
    })

    for(let i = 0; i < (n**2); i++){
        firstDiagonal.push(generalArray[i])
        i += n
    }

    for(let i = (n-1); i <= (n**2 - n); i++){
        secondDiagonal.push(generalArray[i])
        i += (n-2)
    }

    let sumFirstDiagonal = firstDiagonal.reduce((a,b) => a + b)
    let sumSecondDiagonal = secondDiagonal.reduce((a,b) => a + b)

    return Math.abs(sumFirstDiagonal - sumSecondDiagonal)
}

module.exports = diagonalDifference