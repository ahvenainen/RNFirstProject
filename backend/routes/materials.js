const express = require('express');
const router = express.Router();
const materialsController = require('../controllers/materialsController');

router.post('/create', materialsController.createMaterial);
router.get('/', materialsController.getAllMaterials);

module.exports = router;

