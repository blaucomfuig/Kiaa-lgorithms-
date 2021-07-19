function myReplace(str, before, after) {
    
    let initialPhrase = str.split(" ")
    let beforeRgx = new RegExp(`ReGeX${before}ReGeX`, "/i")
    
    item = "Jumped"
    return beforeRgx.test(item)
    return initialPhrase.map(item =>{
        let beforeRgx = '/' + before + '/i'
        beforeRgx.test(item)
    })

    
  }
    
  console.log(myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped"));