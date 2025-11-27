const express = require('express');
const router = express.Router();

const travelsController = require('../controllers/travel');

router.route('/travel').get(travelsController.travelList);

module.exports = router;