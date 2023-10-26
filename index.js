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

/*
const fs = require('fs')

fs.writeFileSync("hello.txt","learn node js from step by step")
console.log("==>",__dirname)
console.log("file_name",__filename)

*/

/*
const http = require('http')

http.createServer((req , resp)=>{

    resp.write("Hello this is Rohit Kumar Ranjan")
    resp.end()
}).listen(4500);
*/

/*
const colors = require('colors')
console.log("Rohit" .red)
*/

// const chalk = require('chalk')

// console.log(chalk.yellow("Hello Rohit"))

/*

const http = require('http')
const data = require('./data')

http.createServer((req , res)=>{
    res.writeHead(200,{'content-type':'application\json'});
    res.write(JSON.stringify(data));
    res.end();
}).listen(5000)

*/

const fs = require('fs');

const input = process.argv;
if(input[2] == 'add'){
    fs.writeFileSync(input[2] , input[3]);
}

else if(input[2] == 'remove')
{
    fs.unlinkSync(input[3]);
}
else{
    console.log('invalid input');
}
