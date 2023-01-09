const User = require("../models/UserModel");
// import uid2 from "uid2";
// import { SHA256, encBase64 } from "crypto-js";

const uid2 = require("uid2");
const SHA256 = require("crypto-js/sha256");
const encBase64 = require("crypto-js/enc-base64");

const userRoutes = (app) => {
  app.post("/signup", async (req, res) => {
    try {
      const newSalt = uid2(16);
      const newHash = SHA256(req.body.password + newSalt).toString(encBase64);
      //   const newToken = uid2(16);

      const userToCheck = await User.findOne({ email: req.body.email });

      if (!userToCheck) {
        const newUser = new User({
          firstname: req.body.firstname,
          name: req.body.name,
          birthdate: req.body.birthdate,
          email: req.body.email,
          hash: newHash,
          salt: newSalt,
          history: [],
          // token
        });
        await newUser.save();
        res.status(200).json({
          firstname: newUser.firstname,
          name: newUser.name,
          //   token: newUser.token,
        });
      } else {
        res.status(400).json("ce mail existe déjà");
      }
    } catch (error) {
      console.log(error);
    }
  });
};

module.exports = userRoutes;
