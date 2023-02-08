const fs = require('fs')

const filePath = process.argv[2]

fs.readFile(filePath,(err,data)=>{
    // console.log(data)
    let strData = data.toString()
    // console.log(strData)
    let count = strData.split('\n').length-1
    console.log(count)

})

