let fs = require('fs');
let state = JSON.parse(fs.readFileSync('./data/travel.json','utf8'));

const travel = (req, res) => {
    res.render('travel', {title: "Travel", state}); //this references travel.hbs in that first param type string (located in view folder)
};

module.exports = {
    travel
};