const User = require("../models/UserModel");

const jwt = require("jsonwebtoken")
const uid2 = require("uid2");
const SHA256 = require("crypto-js/sha256");
const encBase64 = require("crypto-js/enc-base64");

const userRoutes = (app) => {
  app.post("/signup", async (req, res) => {
    try {
      const newSalt = uid2(16);
      const newHash = SHA256(req.body.password + newSalt).toString(encBase64);

      const userToCheck = await User.findOne({ email: req.body.email });
      if (!userToCheck) {
        const newUser = new User({
          firstname: req.body.firstname,
          name: req.body.name,
          birthdate: req.body.birthdate,
          email: req.body.email,
          hashedPwd: newHash,
          salt: newSalt,
          history: [],
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
        res.json("Cet email n'existe pas");
      } else {
        const saltToCheck = userToCheck.salt;
        const hashToCheck = SHA256(req.body.password + saltToCheck).toString(
          encBase64
        );
        // console.log(userToCheck.hashedPwd);
        // console.log("hashToCheck", hashToCheck);
        // console.log("userToCheck.hashedPwd", userToCheck.hashedPwd);

        if (hashToCheck === userToCheck.hashedPwd) {
          // res.json("C'est bon !")
          const token = jwt.sign({ _id: userToCheck._id }, 'littlesecret', { expiresIn: '1h' })

          res.json({ userToken: token, user: userToCheck });
        } else {
          res.json("connexion non autorisée");
        }
      }
    } catch (error) {
      console.log(error);
    }
  });

  function withAuth(req, res, next) {
    const token = req.headers['authorization']
    console.log(req.headers)
    if (token === null) {
      res.json({ status: 401, msg: 'bad token 1' })
    }
    jwt.verify(token, 'littlesecret', function (err, decoded) {
      if (err) {
        res.json({ status: 401, msg: "bad token 2" })
        console.log(err)
      }
      req.body._id = decoded._id
      next()
    })
  }

  app.get('/checkToken', withAuth, async (req, res) => {
    const userToCheck = await User.findOne({ _id: req.body._id })
    res.json({ status: 200, msg: "token ok", user: userToCheck })
  })
};

module.exports = userRoutes;
