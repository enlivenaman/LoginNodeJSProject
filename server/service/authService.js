var dbConfig = require('../config/sqlconfiguration').getsqlconfig();
var sql = require("mssql");
var customError = require('../ErrorHandling/ErrorHandling');
var ErrorMessage = require('../config/ErrorMessage');
var authService = {

}

module.exports = authService;