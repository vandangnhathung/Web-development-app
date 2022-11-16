const mongoose = require("mongoose");
const cors = require("cors");
const express = require("express");

//App config
const app = express();
const Cards = require("./Routes/dbCard");
const port = process.env.PORT || 8001;
const connection_url =
  "mongodb://admin:admin@ac-w1dgsqb-shard-00-00.bkzjrmq.mongodb.net:27017,ac-w1dgsqb-shard-00-01.bkzjrmq.mongodb.net:27017,ac-w1dgsqb-shard-00-02.bkzjrmq.mongodb.net:27017/?ssl=true&replicaSet=atlas-h2gzzh-shard-0&authSource=admin&retryWrites=true&w=majority";

//Middleware
app.use(express.json());
app.use(cors());
app.use("/dating", Cards);
//DB config
mongoose
  .connect(connection_url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Database connected!"))
  .catch((err) => console.log(err));

//Listener
app.listen(port, () => console.log(`Listening on localhost:${port}`));
