const fs = require('fs')
const path = require('path')
module.exports = function(directory,filename,cb){
    fs.readdir(directory,(err,data)=>{
        if(err)return cb(err,null)
      let ans =  data.filter(file=>{
            return path.extname(file) === `.${filename}`
        })
        cb(null,ans)
    })
}