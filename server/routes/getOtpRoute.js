var express = require('express');
var getOtpRoute = express.Router();
var getOtpController = require('../controller/getOtpController');


getOtpRoute.post('/',getOtpController.prepareUserObject,getOtpController.getOTP);


module.exports = getOtpRoute;