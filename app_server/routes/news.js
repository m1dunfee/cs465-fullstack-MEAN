let express = require('express');
let router = express.Router();
const ctrlNews = require('../controllers/news');

router.get('/', ctrlNews.news);

module.exports = router;