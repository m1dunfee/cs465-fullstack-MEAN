const mongoose = require('mongoose');

//difine the trip shema
const roomsSchema = new mongoose.Schema({
    name: { type: String, required: true, index: true},
    rate: {type: String, required: true},
    image: { type: String, required: true},
    description: { type: String, required: true }
});

const Rooms = mongoose.model('rooms', roomsSchema);

module.exports = Rooms;
