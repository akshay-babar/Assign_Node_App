var mongoose = require('mongoose');
var LoginStatusModel = require('./../models/login.status.model');
var LoginStatus = mongoose.model("LoginStatus");

var LoginStatusController = {};

const LogInStatus = require('../models/login.status.model');

//Get LogInStatus
LoginStatusController.GetLogInStatus = function (request, response) {
    // var user = {
    //     UserName: request.body.UserName,
    //     PassWord: request.body.PassWord
    // }
    // LogInStatus.create(user);
};

//Create LogInStatus
LoginStatusController.CreateLogInStatus = function (request, response) {
    var user = {
        UserName: request.body.UserName,
        PassWord: request.body.PassWord
    }
    LogInStatus.create(user);
};

//Delete LogInStatus
LoginStatusController.DeleteLogInStatus = function (request, response) {
    // var user = {
    //     UserName: request.body.UserName,
    //     PassWord: request.body.PassWord
    // }
    // LogInStatus.create(user);
};

module.exports = LoginStatusController;
