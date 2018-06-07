// config for your database
var dbConfig = {
    "rtidev": {
        user: 'campusdbadmin',
        password: 'M<{[+[ULRK)zN}fz',
        server: 'rticampusappdb.database.windows.net',
        database: 'rticampusappdev',
        options:
        {
            encrypt: true
        }
    },
    "development": {
        user: 'sa',
        password: 'infotech@1',
        server: '127.0.0.1',
        database: 'RTI_MVP_NEW'

    },
    "test": {
        user: 'sa',
        password: 'rti@123',
        server: '10.43.9.175',
        database: 'RTI_MVP',
        port: 1433
    },
    "production": {
        user: 'sa',
        password: 'rti@123',
        server: '10.43.9.175',
        database: 'RTI_MVP',
        port: 1433
    }
}
module.exports.getsqlconfig = function () {
    var node_env = process.env.NODE_ENV || 'development';
    return dbConfig[node_env];
};

//module.exports = dbConfig;