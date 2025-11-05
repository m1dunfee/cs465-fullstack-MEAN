let express = require('express');
let router = express.Router();
const ctrlMeals = require('../controllers/meals');

router.get('/', ctrlMeals.meals);

module.exports = router;