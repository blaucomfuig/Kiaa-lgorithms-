function sockMerchant(n, ar) {
  
    let sortedArray = ar.sort((a, b) => {
        return a - b
    })

    console.log(sortedArray)
    let counter = 0

    for(let i = 1; i < n; i++){
        if((sortedArray[i] == sortedArray[i - 1])){
            counter++
            i++
        }
    }

    

    return counter

}

console.log(sockMerchant(10, [2,1,2,1,2,1,2,2,2,1]))