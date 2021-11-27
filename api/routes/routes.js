const express = require('express');
const router = express.Router();
const employeeRegistrationRoutes = require('./employeeRegistration.route');
const travelRequest=require('./travelRequest.route')

router.use('/employeereg', employeeRegistrationRoutes);
router.use('/travel',travelRequest)
module.exports = router;

