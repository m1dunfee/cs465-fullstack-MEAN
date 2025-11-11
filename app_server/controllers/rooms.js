let fs = require('fs');
let state = JSON.parse(fs.readFileSync('./data/rooms.json','utf8'))

const rooms = (req,res) => {
    res.render('rooms', {title: "Rooms", state}); // example of passing muitple states
};

module.exports = {
    rooms
};