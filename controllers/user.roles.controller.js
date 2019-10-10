var mongoose = require('mongoose');
var RolesModel = require('./../models/user.roles.model');
var Roles = mongoose.model("UserRoles");

var RolesController = {};

//Authenticate UserRole
RolesController.AuthRole = function (request, response) {
    response.send({result: `Auth Role Working Fine.`});
    //Roles.create({}).then().catch();
};

//Get Roles
RolesController.GetRole = function (request, response) {
    // var user = {
    //     UserName: request.body.UserName,
    //     PassWord: request.body.PassWord
    // }
    // Roles.create(user);
};

//Get Role By Id
RolesController.GetRoleById = function (request, response) {
    // var user = {
    //     UserName: request.body.UserName,
    //     PassWord: request.body.PassWord
    // }
    // Roles.create(user);
};

//Create Roles
RolesController.Create = function (request, response) {
    var user = {
        RoleID: request.body.RoleID,
        RoleName: request.body.RoleName
    }
    Roles.create(user, function (err, res) {
        if (!err) {
            response.send({data: res});
        } else {
            response.send({error: err});
        }
    });
};

//Update Roles
RolesController.Update = function (request, response) {
    // var user = {
    //     UserName: request.body.UserName,
    //     PassWord: request.body.PassWord
    // }
    // Roles.create(user);
};

//Delete Roles
RolesController.Delete = function (request, response) {
    // var user = {
    //     UserName: request.body.UserName,
    //     PassWord: request.body.PassWord
    // }
    // Roles.create(user);
};

module.exports = RolesController;

