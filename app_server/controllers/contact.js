let fs = require('fs');
let state = JSON.parse(fs.readFileSync('./data/contact.json','utf8'))

const contact = (req, res) => {
    res.render('contact', {title: "Contact", state});
};

module.exports = {
    contact
};