const Room = require("../models/roomModel");

const roomRoutes = (app) => {
  app.get("/roomslist", async (req, res) => {
    try {
      const rooms = await Room.find();
      res.send(rooms);
    } catch (error) {
      console.log(error);
    }
  });

  app.get("/roomdetail/:id", async (req, res) => {
    console.log(req.params.id);
    try {
      const roomToFind = await Room.findOne({
        _id: req.params.id,
      });
      if (roomToFind) {
        res.status(200).json(roomToFind);
      } else {
        res.status(404).json({ message: "room not found" });
      }
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  });

  app.put("/reservation/:id", async (req, res) => {
    try {
      const selectedRoom = await Room.findByIdAndUpdate(
        req.body.id,
        {
          // booked[index]:
        }
      )


    } catch (error) {

    }
  })
};

module.exports = roomRoutes;
