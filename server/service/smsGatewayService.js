var request = require('request');
var smsGatewayConfig = require('../config/globalConfig').getglobalConfig();
var LogMessage = require('../ErrorHandling/LogMessage');
var otplib = require("otplib");

var smsGatewayService = {
    GetOTP: function (mobile, callback) {
        var user = smsGatewayConfig.smsGatewayUser;
        var password = smsGatewayConfig.smsGatewayPassword;
        const secret = otplib.authenticator.generateSecret();
        const token = otplib.authenticator.generate(secret);

        console.log('-----------secret %s----------',secret);
        console.log('-----------token %s----------',token);
        var url = 'http://103.16.59.36/SendSMS/SingleSMS.aspx?usr=' + user + '&pass=' + password + '&msisdn=' + mobile + '&msg=' + token + '&sid=CUPING&mt=0';

        //return callback (null,secret);
        request(url, function (error, response, body) {
            if(error){
                return callback(error,new customError(401, ErrorMessage.AUTHENTICATIONFAIL)); 
            }else{
                var responseObj = {
                    "secret" : secret,
                    "response" : response
                }
                return callback(null,responseObj); 
            }                           
        });
    },

    AuthenticateOTP: function (otp, secret,callback) {
        console.log('-----------verify secret %s----------',secret);
        console.log('-----------verify token %s----------',otp);
        const isValid = otplib.authenticator.check(otp, secret);
        if (isValid)
            return callback(null, true);
        else
            return callback(null, false)

    }

}


module.exports = smsGatewayService;