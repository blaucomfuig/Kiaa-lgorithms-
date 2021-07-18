function whatIsInAName(collection, source) {
    let sourceKeys = Object.keys(source)
    
    return collection.filter(item =>{
        return sourceKeys.every(element =>{
            return item.hasOwnProperty(element) && item[element] === source[element]
        })
    })
    
    
  }
  
module.exports = whatIsInAName