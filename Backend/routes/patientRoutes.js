const express = require('express');
const patientController = require('../controllers/patientController');
const router = express.Router();

router.post('/', patientController.addPatient);
router.get('/:id', patientController.getPatientDetails);

module.exports = router;
