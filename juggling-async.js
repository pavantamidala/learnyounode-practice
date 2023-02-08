const http = require('http')

const url1 = process.argv[2]
const url2 = process.argv[3]
const url3 = process.argv[4]

http.get(url1,(res1)=>{
    let finalStr1 = ''
    res1.on('data',(chunk1)=>{
        finalStr1 = finalStr1 + chunk1.toString()
    })
    let finalStr2 = ''
    let finalStr3 = ''
    res1.on('end',()=>{
        http.get(url2,(res2)=>{
            res2.on('data',(chunk2)=>{
                finalStr2 = finalStr2 + chunk2.toString()
            })

            res2.on('end',()=>{
                http.get(url3,(res3)=>{
                    res3.on('data',(chunk3)=>{
                        finalStr3 = finalStr3 + chunk3.toString()
                    })

                    res3.on('end',()=>{
                        console.log(finalStr1)
                        console.log(finalStr2)
                        console.log(finalStr3)
                    })
                })
            })

        })
    })
})