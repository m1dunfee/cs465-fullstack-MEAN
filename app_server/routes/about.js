let express = require('express');
let router = express.Router();
const crtlAbout = require('../controllers/about');

router.get('/', crtlAbout.about);

module.exports = router;