function sumAll(arr){

    let sortedArray = arr.sort((a,b) =>{
        return a - b;
    })

   /*  console.log(sortedArray); */

    let expandedArray = [];
    for(let i = sortedArray[0]; i < sortedArray[1] +1; i++ ){
        expandedArray.push(i);
    }

    /* console.log(expandedArray); */
    
    return expandedArray.reduce((a,b) =>{
        return a + b;
    })
    
}


module.exports = sumAll;

















