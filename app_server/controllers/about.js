let fs = require('fs');
let state = JSON.parse(fs.readFileSync('./data/about.json','utf8'))

const about = (req, res) => {
    res.render('about', {title: "About", state});
};

module.exports = {
    about
};