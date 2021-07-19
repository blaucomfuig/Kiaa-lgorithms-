function sockMerchant(n, ar) {
  
    let sortedArray = ar.sort((a, b) => {
        return a - b
    })

 
    let counter = 0

    for(let i = 1; i < n; i++){
        if((sortedArray[i] == sortedArray[i - 1])){
            counter++
            i++
        }
    }

    

    return counter

}

module.exports = sockMerchant