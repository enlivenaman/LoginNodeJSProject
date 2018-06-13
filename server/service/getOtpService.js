var smsGatewayService = require('./smsGatewayService');
var ErrorMessage = require('../config/ErrorMessage');

var getOtpService = {
    getOTP: function (mobile, callback) {
        smsGatewayService.GetOTP(mobile, function (err, response) {
            if (err)
                return callback(err,new customError(401, ErrorMessage.AUTHENTICATIONFAIL));
            else
                return callback(null, response);
        });
    }
}


module.exports = getOtpService;