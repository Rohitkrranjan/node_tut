/*
const app = require('./app')

console.log(app)
*/

// let a=20;
// let b=30;
// let c=40;
// console.log(a+b+c)

// const arr =[1,2,3,4,5,6,7,8]

// let result = arr.filter((item)=>{
//     return item > 3
// })

// console.log(result)

const fs = require('fs')

fs.writeFileSync("hello.txt","learn node js from step by step")
console.log("==>",__dirname)
console.log("file_name",__filename)