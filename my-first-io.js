const fs = require('fs')

const filePath = process.argv[2]
let fileContent = fs.readFileSync(filePath)
// console.log(fileContent.toString())

// fs.writeFile('./data.txt',fileContent.toString(),(err)=>{
//     console.log(err)
// })

let fileContentInAStr = fileContent.toString().split('\n').length
console.log(fileContentInAStr-1)
