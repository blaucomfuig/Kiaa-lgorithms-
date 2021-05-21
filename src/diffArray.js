function diffArray(arr1, arr2){
   
    let filteredArr1 = arr1.filter(item => {
        return !arr2.includes(item)    
    })
    let filteredArr2 = arr2.filter(item => {
        return !arr1.includes(item)    
    })

    let filteredArray = [...filteredArr1, ...filteredArr2];

    return filteredArray;
}


module.exports = diffArray;