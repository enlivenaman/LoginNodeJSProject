var verifyOtpService = require('../service/verifyOtpService');

var verifyOtpController = {

    authenticateOTP: function (req, res, next) {
        var otp = req.body.otp;
        var secret = req.body.secret;
        console.log('-----------otp controller%s----------',otp);
        console.log('-----------secret controller %s----------',secret);
        verifyOtpService.authenticateOTP(otp, secret,function (err, data) {
            if (err)
                res.json(err);
            else
                next(data);
        });
    },
    registerUser: function (req, res, next) {
        var user = req.session.user;
        verifyOtpService.registerUser(user,function (err, data) {
            if (err)
                res.json(err);
            else
                res.json(200, "User is registered successfully!!!");
        });
    }
}
module.exports = verifyOtpController;