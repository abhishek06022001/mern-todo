const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
dotenv.config();
app.use(cors());
app.use(bodyParser.json());
const PORT = 3000 || process.env.PORT;
app.listen(PORT, () => {
  console.log("Listening to the port");
});
mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => {
    console.log("Connected to MongoDb  ");
  })
  .catch(() => {
    console.log("Some error");
  });
app.use("/api", require("./Routes/router"));
