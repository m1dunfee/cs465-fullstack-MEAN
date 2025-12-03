const express = require('express');
const router = express.Router();

const travelController = require('../controllers/travel');

router
    .route('/travel')
    .get(travelController.travelList)
    .post(travelController.travelsAddTravel);

//this is for single find by travelcode
router
    .route('/travel/:travelCode')
    .get(travelController.travelFindByCode)
    .put(travelController.travelsUpdateTravel);

module.exports = router;