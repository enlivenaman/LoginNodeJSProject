var smsGatewayService = require('./smsGatewayService');
var ErrorMessage = require('../config/ErrorMessage');
var dbConfig = require('../config/sqlconfiguration').getsqlconfig();
var mysql = require('mysql');

var Date = require('../helpers/dateHelpers');

var verifyOtpService = {
    
    authenticateOTP: function (otp,secret, callback) {
        console.log('-----------otp service %s----------',otp);
        console.log('-----------secret service %s----------',secret);
        smsGatewayService.AuthenticateOTP(otp,secret, function (err, response) {

            if (err)
                return callback(err, new customError(401, ErrorMessage.AUTHENTICATIONFAIL));
            else
                return callback(null, response);
        });
    },
    registerUser: function (user, callback) {
        executeRegisterUserProcedure(user, function (err, data) {
            if (err) {
                return callback(err);
            }
            callback(null, data);
        });
    }
}
function executeRegisterUserProcedure(user, callback) {
    console.log(JSON.stringify(user));
    var connection = mysql.createConnection(dbConfig);

    var sql = `CALL registerUser(?,?,?,?,?)`;

    //connection.query()
    connection.query(sql, [user.name, user.email, user.mobile, user.password, user.dob], (error, results, fields) => {
        if (error) {
            console.error(error.message);
            return callback(error,error);
        }
        console.log(results[0]);
        return callback(results[0]);
    });

    connection.end();

}
module.exports = verifyOtpService;