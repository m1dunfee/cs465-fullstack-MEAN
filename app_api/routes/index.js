const express = require('express');
const router = express.Router();

const travelController = require('../controllers/travel');

router.route('/travel').get(travelController.travelList);
// travelCode was labeled as Code in seeds, but I did do that
// if you want that to run update the travel.js model file
// then run the seed.js file to update the database.
// router.route('/travel/:travelCode').get(travelController.travelFindByCode);

module.exports = router;