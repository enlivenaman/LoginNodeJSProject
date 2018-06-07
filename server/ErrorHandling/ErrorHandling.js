var util = require("util");
//var customErrors = {
//    ErrorMessage: function (statusCode, error, extra) {
//        // token is set from auth service
//        Error.captureStackTrace(this, this.constructor);

//        this.name = this.constructor.name;
//        this.message = error;
//        this.status = statusCode;

//    }
//}
//util.inherits(customErrors, Error);
//module.exports = customErrors; 

function ErrorMessage1(statusCode, error, extra) {
    Error.call(this); //super constructor
    Error.captureStackTrace(this, this.constructor); //super helper method to include stack trace in error object

    //Set the name for the ERROR 
    this.name = "Custom Error";
    this.message = error;
    this.status = statusCode;

}

util.inherits(ErrorMessage1, Error);
module.exports = ErrorMessage1;
