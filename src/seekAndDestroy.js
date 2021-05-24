function destroyer(arr, ...args){
    
    let destroyedArray = arr.filter(item =>{
        return !args.includes(item)   
    })

    return destroyedArray;
}


module.exports = destroyer;