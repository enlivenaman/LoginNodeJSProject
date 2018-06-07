'use strict';
var debug = require('debug');
var express = require('express');
var partials = require('express-partials');
var expressValidator = require('express-validator');
var session = require('express-session');
var path = require('path');
//var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));

// set the view engine to ejs
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(partials());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(cookieParser());
app.use(session({
    key: 'user_sid',
    secret: 'abcdefg', //somerandonstuffs
    resave: false,
    saveUninitialized: false,
    cookie: {
        expires: 3600000
    }
}));

app.use(express.static(path.join(__dirname, 'public')));
app.use(expressValidator());

app.all('/api/*', function (req, res, next) {
    // CORS headers
    res.header("Access-Control-Allow-Origin", "*"); // restrict it to the required domain
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    // Set custom headers for CORS
    res.header('Access-Control-Allow-Headers', 'Content-type,Accept,X-Access-Token,X-Key');
    if (req.method == 'OPTIONS') {
        res.status(200).end();
    } else {
        next();
    }
});

// Auth Middleware - This will check if the token is valid
// Only the requests that start with /api/v1/* will be checked for the token.
// Any URL's that do not follow the below pattern should be avoided unless you
// are sure that authentication is not needed


//app.all('/api/*', [require('./middlewares/validateRequest')]);


//var routesVersioning = require('express-routes-versioning')();
//var versionConfig = require('./config/versionConfig');
//var versionOneMinor = versionConfig.VersionOneMinor;


//Define Route for API Calls... :Start


/*
Admin Route start
*/
var sessionChecker = (req, res, next) => {

    if (req.session.user && req.cookies && req.cookies.user_sid) {
        next();
    } else {
        var isAjaxRequest = req.xhr;
        if (isAjaxRequest) {
            var errors = [];
            var error = { 'msg': 'UnAuthorized' };
            errors.push(error);

            res.status(401);
            res.statusMessage = JSON.stringify(errors);
            res.send({ message: errors });
        }
        else {
            res.redirect('/Login');
        }
        next();
    }
};

app.get('/', function (req, res) {
    res.redirect('/Login');
});

app.get('/Login', function (req, res) {
    var tagline = "Login Application.";
    res.render('login', {
        title: 'Home',
        tagline: tagline
    });
});



// route for user logout
app.use('/Logout', (req, res) => {
    if (req.session.user && req.cookies.user_sid) {
        res.clearCookie('user_sid');
    }
    res.redirect('/login');
});


/*
Admin Route End
*/

// Start the server
app.use(logErrors)
//app.use(clientErrorHandler)
//app.use(errorHandler)

function logErrors(err, req, res, next) {
    if (azureADConfig.EnableTracking) {
        var errormessage = '';
        try { errormessage = JSON.stringify(err); }
        catch (e) { errormessage = err; }

        let client = appInsights.defaultClient;
        client.trackException({ exception: new Error(errormessage) });
    }
    if (req.url.indexOf('/api') > -1) {
        err.status = err.status || 500;
        res.status(err.status).json({
            "error": err.message,
            "errodetail": err
        });
    }
    else {
        if (err) {
            var errors = [];
            var error = { 'msg': 'Error While Processing Request' };
            errors.push(error);
            res.status(500);
            res.statusMessage = JSON.stringify(errors);
            res.send({ message: errors });
        }
    }
}



app.set('port', process.env.PORT || 3000);

var server = app.listen(app.get('port'), function (req, res) {
   
});
