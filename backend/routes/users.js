const express = require('express');
const router = express.Router();
const usersController = require('../controllers/usersController');

router.get('/populated', usersController.getPopulatedUsers);
router.post('/create', usersController.createUser);
router.get('/', usersController.getAllUsers);

module.exports = router;
