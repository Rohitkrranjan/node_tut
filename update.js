const dbConnect = require("./mongodb");

const updateData = async () => {
  let data = await dbConnect();

  let result = await data.updateOne(
    { name: "oppo" },
    { $set: { name: "Blackbery" } }
  );

  console.log(result);
};

updateData();