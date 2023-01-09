require("dotenv").config();

const express = require("express");
const app = express();

const cors = require("cors");
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const mongoose = require("mongoose");
mongoose.set("strictQuery", false);
// mongoose.connect(process.env.MONGODB_URI);

app.listen(process.env.PORT, () => {
  console.log("Server🤖 started");
});
