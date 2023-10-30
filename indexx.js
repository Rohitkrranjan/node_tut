const express = require("express");
require("./Config");
const Product = require("./Product");
const app = express();

app.use(express.json());

app.post("/create", async (req, resp) => {
  let data = new Product(req.body);
  let result = await data.save();

  console.log(result);
  resp.send(result);
});

app.listen(2810);
