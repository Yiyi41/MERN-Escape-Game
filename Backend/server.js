require("dotenv").config();
const userRoutes = require("./routes/userRoutes");
const roomRoutes = require("./routes/roomRoutes");

const express = require("express");
const app = express();

const cors = require("cors");
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const mongoose = require("mongoose");
mongoose.set("strictQuery", false);
mongoose.connect(process.env.MONGODB_URI);

userRoutes(app); // appelle directement la fonction qui enveloppe toutes les routes utilisateurs
roomRoutes(app); // appelle directement la fonction qui enveloppe toutes les routes salles
app.listen(process.env.PORT, () => {
  console.log("Server🤖 started");
});
