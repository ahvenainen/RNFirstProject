const express = require('express');
const router = express.Router();
const hoursController = require('../controllers/hoursController');

router.post('/create', hoursController.createHour);
router.get('/', hoursController.getAllHours);

module.exports = router;
