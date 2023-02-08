const fs = require('fs')
const path = require('path')
const directory = process.argv[2]
const extenstion = process.argv[3]

fs.readdir(directory,(err,files)=>{
  let ans =  files.filter(file=>{
        if(path.extname(file)===`.${extenstion}`){
            console.log(file)
            return file
        }
    })
    // console.log(ans)
})
