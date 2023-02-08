const http = require('http')

const url = process.argv[2]

http.get(url,(res)=>{
    let finalData = ''
    res.on('data',(chunk)=>{
        finalData = finalData+ chunk.toString() 
    })

    res.on('end',()=>{
        let count = finalData.length
        console.log(count)
        console.log(finalData)
    })

    res.on('error',(err)=>{
        console.log(err)
    })
}).on('error',(err)=>console.log(err))


