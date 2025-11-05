let express = require('express');
let router = express.Router();
const ctrlRooms = require('../controllers/rooms');

router.get('/', ctrlRooms.rooms);

module.exports = router;