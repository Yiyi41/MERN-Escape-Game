const Room = require("../models/roomModel")

const roomRoutes = (app) => {
    app.get("/roomslist", async (req, res) => {

        try {
            const rooms = await Room.find()
            res.send(rooms)
        } catch (error) {
            console.log(error)
        }
    })
}

module.exports = roomRoutes