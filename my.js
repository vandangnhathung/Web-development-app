const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
// const port = 3000;

app.get("/trang-chu/bai-viet", (req, res) => {
  res.send("This is a testing post");
});

app.get("/trang-chu/thong-tin-ca-nhan", (req, res) => {
  res.send("This is a testing personal page");
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});

app.post("/trang-chu/bai-viet", (req, res) => {
  res.send("This is a testing post");
});
