var express = require('express');
var verifyOtpRoute = express.Router();
var verifyOtpController = require('../controller/verifyOtpController');


verifyOtpRoute.post('/',verifyOtpController.authenticateOTP,verifyOtpController.registerUser);


module.exports = verifyOtpRoute;