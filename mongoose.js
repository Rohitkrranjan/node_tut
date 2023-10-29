const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/e-comm");

const ProductSchema = new mongoose.Schema({
  name: String,
  price: Number,
  brand: String,
  category: String,
});

const saveInDB = async () => {
  const product = mongoose.model("products", ProductSchema);
  let data = new product({
     name: "m-18",
     price: 12345,
     brand:"moto",
     category:"mobile"
    
    });
  let result = await data.save();

  console.log(result);
};

// saveInDB();

const updateInDB = async ()=>{
    const Product = mongoose.model('product',ProductSchema);
    let data = await Product.updateOne(
        {name:"m-18"},
        {
            $set:{price:6588}
        }

    )
    console.log(data)
}

// updateInDB();

const deleteInDB = async ()=>{
    const Product = mongoose.model('product',ProductSchema);
    let data = await Product.deleteOne({name:'nokia-m-20'})
    console.log(data);
}

// deleteInDB();

const findInDB = async ()=>{
    const product = mongoose.model('product' , ProductSchema);
    let data = await product.find();
    console.log(data);
}

findInDB();