var getOtpService = require('../service/getOtpService');

var getOtpController = {

    prepareUserObject: function (req, res, next) {
        var user = {
            "name": req.body.name,
            "email": req.body.email,
            "mobile": req.body.mobile,
            "password": req.body.password,
            "dob": req.body.dob
        };
        console.log('prepareUSerObject' + user);
        req.body.userdetails = user;
        next();
    },
    getOTP: function (req, res, next) {
        var user = req.body.userdetails;
        var sess = req.session;
        sess.user = user;
        console.log('user %s',sess.user);
        getOtpService.getOTP(user.mobile, function (err, data) {
            if (err){
                res.json(err);
            }else{
                var response = {
                    'secret' : data,
                    'msg' : 'OTP sent suceessfully'
                }
                res.json(response);
            }                
        });

    }
}
module.exports = getOtpController;