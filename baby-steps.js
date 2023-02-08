// console.log(process.argv)
console.log(process.argv.slice(2,process.argv.length).reduce((pre,current)=>Number(pre)+Number(current)))