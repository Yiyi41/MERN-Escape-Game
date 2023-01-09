const mongoose = require("mongoose")

const Room = mongoose.model(
    "Room", {
    name: String,
    age: Number,
    capacity: Number,
    img: String,
    description: String,
    price: Number,
    minplayers: Number
}
)

module.exports = Room