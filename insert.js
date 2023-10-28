const dbConnect = require('./mongodb')

const insert = async ()=> {
    const db = await dbConnect();
    const result = await db.insertMany(
        [
          
            { name:'realme - 5', brand :'raelme',price:14430,category:'mobile'},
            { name:'oppo', brand :'vivo',price:3430,category:'mobile'},
            { name:'poco', brand :'poco',price:25330,category:'mobile'}
        ] )

    if(result.acknowledged){
        console.log("data inserted")
    }

    }

insert()