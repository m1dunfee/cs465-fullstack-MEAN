const mongoose = require('mongoose');

//difine the trip shema
const travelSchema = new mongoose.Schema({
    code: { type: String, required: true, index: true},
    name: { type: String, required: true, index: true},
    length: { type: String, required: true},
    start: { type: Date, required: true},
    resort: { type: String, required: true},
    perPerson: { type: String, required: true},
    image: { type: String, required: true},
    description: { type: String, required: true }
});

const Travel = mongoose.model('travel', travelSchema);

module.exports = Travel;
