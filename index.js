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

/*
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
*/

/*
const fs = require('fs');

const path = require('path');
const dirPath = path.join(__dirname,'files')

// console.log(dirPath);

// for(i=0;i<5;i++)
// {
//     fs.writeFileSync(dirPath+"/hello"+i+".txt","a simple txt file");

// }

fs.readdir(dirPath,(err,files)=>{
    files.forEach((item)=>{
        console.log("file name is",item)
    })
})

*/

// const fs = require('fs');
// const path = require('path');
// const dirPath = path.join(__dirname,'crud');
// const filePath = `${dirPath}/apple.txt`;


// fs.writeFileSync(filePath,'This is a simple text file');

// fs.readFile(filePath , 'utf8' , (err,item)=>{
//     console.log(item)
// })

/*
// update operation

fs.appendFile(filePath, 'and file name is apple.txt ' , (err)=>{
    if(!err)
    {
        console.log('file is updated');
    }
})
*/

/*
// rename file

fs.rename(filePath , `${dirPath}/fruit.txt` , (err)=>{
    if(!err)
     console.log('File name is updated')
})
*/

/*
// delete operation

fs.unlinkSync(`${dirPath}/fruit.txt`)

*/


//  Asynchronous Programming Language
/*

let a=10;
let b=0;

let waitingData = new Promise((resolve , reject)=>{

    setTimeout(()=>{
       resolve(40);
    },2000)
})


waitingData.then((data)=>{

     b = data;
    console.log(a+b);
})


console.log(a+b);

*/

/*
const express = require('express');
const app = express();

// app.get('',(req , res)=>{
//     console.log("data sent by browser ===>>",req.query.name)
//     res.send('Welcome ,'+req.query.name);
// });

app.get('',(req,resp)=>{
    resp.send(`<h1>welcome , to Home page </h1> <a href="/about">Go to About page  </a> `);

})

app.get('/about',(req , res)=>{
    res.send("Hello , this is about page ");
});

app.get('/help',(req,res)=>{
    res.send(`<input type="text" placeholder="User name" /> 
    <button>Clike Me </button>
    <a href="/">Go to Home  page  </a> `);
});

app.listen(4300);
*/

/*

const express =require('express');
const path = require('path');

const app = express();

const publicPath = path.join(__dirname,'Public');
console.log(publicPath);

// app.use(express.static(publicPath));

app.get('',(req , resp)=>{
    resp.sendFile(`${publicPath}/index.html`)
})

app.get('/about',(req , resp)=>{
    resp.sendFile(`${publicPath}/about.html`)
})

app.get('/help',(req , resp)=>{
    resp.sendFile(`${publicPath}/help.html`)
})

app.get('*',(req , resp)=>{
    resp.sendFile(`${publicPath}/nopage.html`)
})

app.set('view engine','ejs')
app.get('',)

app.listen(2300);

*/

/*

// middleware ==>>>>>

const express = require('express');
const app = express();
const reqFilter = require('./middleware')
const route = express.Router();



// app.use(reqFilter)
route.use(reqFilter);

app.get('/',(req,res)=>{
    res.send('Welcome to Home page');
})

route.get('/user',reqFilter,(req,res)=>{
    res.send('Welcome to user page');
})

route.get('/about',reqFilter,(req,res)=>{
    res.send('Welcome to about page');
})

app.use('/',route);

app.listen(5600);

*/



const dbConnect = require('./mongodb')
/* 1st methoid 

dbConnect().then((resp)=>{
    resp.find().toArray().then((data)=>{
        console.log(data);
    })
})
*/

// 2nd method

const main =async()=>{
    let data = await dbConnect();
    data = await data.find().toArray();
    console.log(data);
}

main();