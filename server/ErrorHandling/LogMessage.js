var azureADConfig = require('../config/azureadconfiguration').getazureconfig();
let appInsights = require("applicationinsights");



var LogMessage = {
    Trace: function (error) {
        let client = appInsights.defaultClient;
        if (azureADConfig.EnableTracking) {
            client.trackTrace({ message: error });
        }
    },
    Log: function (error, recordtype) {
        if (!recordtype) {
            recordtype = 0;
        }
        let client = appInsights.defaultClient;
        var node_env = process.env.NODE_ENV || 'development';
        if (node_env == 'development' && recordtype == 0) {
            console.log(error);
            if (azureADConfig.EnableTracking) {
                client.trackTrace({ message: error });
            }
        }

        if (recordtype == 1) {
            var errormessage = '';
            try { errormessage = JSON.stringify(error); }
            catch (e) { errormessage = error; }
            console.log("Error : " + errormessage);
            if (azureADConfig.EnableTracking) {
                client.trackException({ exception: new Error(errormessage) });
            }
        }
    },
    //Log: function (error, recordtype) {
    //  if (!recordtype) {
    //    recordtype = 0;
    //  }
    // // let client = appInsights.defaultClient;
    //  var node_env = process.env.NODE_ENV || 'development';
    //  if (node_env == 'development' && recordtype == 0) {
    //    console.log(error);
    //    // if (azureADConfig.EnableTracking) {
    //    //     client.trackTrace({ message: error });
    //    // }
    //  }
    //  else {
    //    var errormessage = '';
    //    try {
    //       // Raven.captureException(error);
    //        errormessage = JSON.stringify(error);
    //    }
    //    catch (e) { Raven.captureException(e);}
    //  }
    //},
    LogError: function (message) {
        var node_env = process.env.NODE_ENV || 'development';
        if (node_env == 'development')
            console.log(message);
    }
};


module.exports = LogMessage;
