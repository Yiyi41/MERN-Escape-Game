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
      const newToken = uid2(16);

      const userToCheck = await User.findOne({ email: req.body.email });
      //Error with the hashedPwd attribute
      if (!userToCheck) {
        const newUser = new User({
          firstname: req.body.firstname,
          name: req.body.name,
          birthdate: req.body.birthdate,
          email: req.body.email,
          hashedPwd: newHash,
          salt: newSalt,
          history: [],
          token: newToken
        });
        await newUser.save();
        res.status(200).json({ newUser });
      } else {
        res.status(400).json("ce mail existe déjà");
      }
    } catch (error) {
      console.log(error);
    }
  });

  app.post("/login", async (req, res) => {
    try {
      const userToCheck = await User.findOne({ email: req.body.email });


      if (!userToCheck) {
        res.json("Email ou Mot de passe incorrect")
      } else {

        const saltToCheck = userToCheck.salt;
        const hashToCheck = SHA256(req.body.password + saltToCheck).toString(encBase64)
        console.log(userToCheck.hashedPwd)
        console.log("hashToCheck", hashToCheck)
        console.log("userToCheck.hashedPwd", userToCheck.hashedPwd)


        if (hashToCheck === userToCheck.hashedPwd) {
          res.json("C'est bon !")
          // res.json(userToCheck.token)
        } else {
          res.json("Pas bon")
        }
      }
    } catch (error) {
      console.log(error)
    }
  })
};

module.exports = userRoutes;
