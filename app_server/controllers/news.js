let fs = require('fs');
let context = JSON.parse(fs.readFileSync('./data/news.json','utf8'))

const news = (req, res) => {
    res.render('news', {title: "News", context});
};

module.exports = {
    news
};