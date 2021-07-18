function destroyer(arr, ...arg) {

    let filteredArray = arr.filter(element =>{
        return !arg.includes(element)
    })
    
    return filteredArray

  }
  
  console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));