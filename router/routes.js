// router/routes.js
const express = require('express');
const router = express.Router();
const patient = require('../controller/patient_controllers');  // Ensure the controller path is correct
const schema = require('../schema/schema');  // Ensure this is necessary

// Ensure that these routes are correctly defined
router.get('/home', patient.home);
router.get('/home/search', patient.search1);
router.post('/home/add_patient', patient.sign_up);

module.exports = router;
