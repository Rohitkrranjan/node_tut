const dbConnect = require('./mongodb');

const deleteData = async ()=>{

    const data = await dbConnect();

    const result = await data.deleteOne({name:'poco'})

    console.log(result);
}

deleteData();