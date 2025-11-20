const mongoose = require('mongoose');

//difine the trip shema
const travelSchema = new mongoose.Schema({
    name: { type: String, required: true, index: true},
    image: { type: String, required: true},
    description: { type: String, required: true }
});

const Travel = mongoose.model('travel', travelSchema);

module.exports = Travel;
