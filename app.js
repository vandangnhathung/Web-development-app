const express = require("express");
const app = express();
const port = 3000;

app.get("/trang-chu/bai-viet", (req, res) => {
  res.send("This is a testing post");
});

app.get("/trang-chu/thong-tin-ca-nhan", (req, res) => {
  res.send("This is a testing personal page");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
