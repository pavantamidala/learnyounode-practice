const myModule = require('./mymodule')

const directory = process.argv[2]
const extenstion = process.argv[3]

function callBack(err,data){
    if(err) return console.log(err)
    data.map(o=>{
        console.log(o)
    })
}

myModule(directory,extenstion,callBack)
