var express = require('express');
var loginRoute = express.Router();
var request = require('request');
var loginController = require('../admincontroller/loginController');


loginRoute.get('/', function (req, res) {
    res.render('login', {
        title: 'Login'
    });
});

loginRoute.post('/UserValidate',loginController.validateUser);