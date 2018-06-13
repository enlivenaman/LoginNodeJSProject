// config for your database
var dbConfig = {
    "development": {
        user: 'root',
        password: 'password',
        server: '127.0.0.1',
        database: 'cuppingmumbai',
        options:
        {
            encrypt: false
        },
        port: 3306
    },
    "test": {
        user: 'root',
        password: 'password',
        server: '127.0.0.1',
        database: 'cuppingmumbai',
        port: 1433
    },
    "production": {
        user: 'root',
        password: 'password',
        server: '127.0.0.1',
        database: 'cuppingmumbai',
        port: 1433
    }
}
module.exports.getsqlconfig = function () {
    var node_env = process.env.NODE_ENV || 'development';
    return dbConfig[node_env];
};

//module.exports = dbConfig;