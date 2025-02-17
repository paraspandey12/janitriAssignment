const express = require('express');
const heartRateController = require('../controllers/heartRateController');
const router = express.Router();

router.post('/record', heartRateController.recordHeartRate);
router.get('/:patientId', heartRateController.getHeartRate);

module.exports = router;
