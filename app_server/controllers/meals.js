let fs = require('fs');
let state = JSON.parse(fs.readFileSync('./data/meals.json','utf8'))

const meals = (req, res) => {
    res.render('meals', {title: "Meals", state});
};

module.exports = {
    meals
};