var mongoose = require("mongoose");
var express = require("express");
var jwt = require("jsonwebtoken");
//var geolocation = require("geolocation");

var UserModel = require("./../models/user.model");
var LoginStatesModel = require("./../models/login.status.model");
var LoginStatus = mongoose.model("LoginStatus");
var User = mongoose.model("Users");

var app = express();
var jwtSettings = {
    jwtSecret: "sbibobbompnb37645sbi28yesbi"
};
app.set("jwtSecret", jwtSettings["jwtSecret"]);

var UserController = {};

//Authenticate User
UserController.AuthUser = function (request, response) {
    var user = request.body.user;
    //var LoggedInUserName = null;
    User.findOne(user).exec(function (err, res) {
        if (!err) {
            if (res != null) {
                var Token = jwt.sign({user}, app.get("jwtSecret"), {
                    expiresIn: 3600
                });
                const ip =
                    request.headers["x-forwarded-for"] ||
                    (request.connection && request.connection.remoteAddress) ||
                    "";
                //var Location = null;
                //To DO Here..
                // if (navigator != undefined) {
                //   geolocation.getCurrentPosition(function(err, position) {
                //     if (err) throw err;
                //     console.log(position);
                //     Location = position;
                //   });
                // }
                var loginstatusObject = {
                    UserName: user.UserName,
                    LogInFrom: null,
                    RoleId: res.RoleId,
                    DateTime: new Date(),
                    IPAddress: ip
                };
                LoginStatus.create(loginstatusObject, function (err, res) {
                    if (!err) {
                        if (res != null) {
                            response.send({
                                statusCode: 200,
                                authenticated: true,
                                status: "Profile Created Successful",
                                token: Token,
                                roleId: res.RoleId,
                                UserName: res.UserName
                            });
                        }
                    }
                });
            } else {
                response.send({statusCode: 404, status: "Some Error Occured.."});
            }
        } else {
            response.send({statusCode: 404, status: "Some Error Occured.."});
        }
    });
};

//Get User
UserController.GetUserById = function (request, response) {
    // var user = {
    //     UserName: request.body.UserName,
    //     PassWord: request.body.PassWord
    // }
    // User.create(user);
};
//Get User
UserController.GetAllUser = function (request, response) {
    var tokenRecived = request.headers.authorization.split(" ")[1];
    jwt.verify(tokenRecived, app.get("jwtSecret"), function (err, decoded) {
        if (err) {
            response.send({success: false, message: "Token verification failed"});
        } else {
            request.decoded = decoded;
            var query = User.find({RoleId: "2"}).select("-_id -__v -updatedAt");
            query.exec(function (err, res) {
                if (!err) {
                    if (res != null) {
                        var returnedObjects = [];
                        res.forEach(element => {
                            var Obj = new Object();
                            Obj.UserID = element.UserID;
                            Obj.UserName = element.UserName;
                            Obj.Email = element.Email;
                            Obj.Password = element.Password;
                            Obj.RoleId = element.RoleId;
                            var date = new Date(element.createdAt);
                            date = date.toUTCString();
                            Obj.createdAt = date;
                            returnedObjects.push(Obj);
                        });
                        //console.log(returnedObjects);
                        response.send({data: returnedObjects});
                    } else {
                        response.send({error: "User Creation Failed."});
                    }
                } else {
                    response.send({error: err});
                }
            });
        }
    });
};

UserController.GetUserId = function (request, response) {
    var tokenRecived = request.headers.authorization.split(" ")[1];
    jwt.verify(tokenRecived, app.get("jwtSecret"), function (err, decoded) {
        if (err) {
            response.send({success: false, message: "Token verification failed"});
        } else {
            request.decoded = decoded;
            User.find({}, function (err, res) {
                if (!err) {
                    if (res != null) {
                        response.send({data: res});
                    } else {
                        response.send({error: "User Creation Failed."});
                    }
                } else {
                    response.send({error: err});
                }
            });
        }
    });
};
//Create User
UserController.Create = function (request, response) {
    var user = request.body.user;
    var tokenRecived = request.headers.authorization.split(" ")[1];
    jwt.verify(tokenRecived, app.get("jwtSecret"), function (err, decoded) {
        if (err) {
            response.send({success: false, message: "Token verification failed"});
        } else {
            request.decoded = decoded;
            User.create(user, function (err, res) {
                if (!err) {
                    if (res != null) {
                        response.send({
                            data: res,
                            statusMessage: "Operator Created Successful",
                            statusCode: 200
                        });
                    } else {
                        response.send({error: "User Creation Failed."});
                    }
                } else {
                    response.send({error: err});
                }
            });
        }
    });
};

//Update User
UserController.Update = function (request, response) {
    var user = request.body.user;
    var tokenRecived = request.headers.authorization.split(" ")[1];
    jwt.verify(tokenRecived, app.get("jwtSecret"), function (err, decoded) {
        if (err) {
            response.send({success: false, message: "Token verification failed"});
        } else {
            request.decoded = decoded;
            User.updateOne(
                {UserID: user.UserID},
                {
                    $set: {
                        UserName: user.UserName,
                        Email: user.Email,
                        Password: user.Password,
                        RoleId: user.RoleId
                    }
                },
                function (err, res) {
                    if (!err) {
                        if (res != null) {
                            response.send({
                                data: res,
                                statusMessage: "Operator Updated Successful",
                                statusCode: 200
                            });
                        } else {
                            response.send({error: "User Updation Failed."});
                        }
                    } else {
                        response.send({error: err});
                    }
                }
            );
        }
    });
};
//Search Operator
UserController.SearchOperator = function (request, response) {
    var tokenRecived = request.headers.authorization.split(" ")[1];
    var Criteria = request.headers.criteria;
    //console.log(Criteria);
    jwt.verify(tokenRecived, app.get("jwtSecret"), function (err, decoded) {
        if (err) {
            response.send({success: false, message: "Token verification failed"});
        } else {
            request.decoded = decoded;
            var query = User.find({UserName: Criteria}).select(
                "-_id -__v -updatedAt"
            );
            query.exec(function (err, res) {
                if (!err) {
                    if (res != null) {
                        console.log(res);
                        var returnedObjects = [];
                        res.forEach(element => {
                            var Obj = new Object();
                            Obj.UserID = element.UserID;
                            Obj.UserName = element.UserName;
                            Obj.Email = element.Email;
                            Obj.Password = element.Password;
                            Obj.RoleId = element.RoleId;
                            var date = new Date(element.createdAt);
                            date = date.toUTCString();
                            Obj.createdAt = date;
                            returnedObjects.push(Obj);
                        });
                        response.send({data: returnedObjects});
                    } else {
                        response.send({error: "User Search Failed."});
                    }
                } else {
                    response.send({error: err});
                }
            });
        }
    });
};

//Delete User
UserController.Delete = function (request, response) {
    console.log("this is Delete");
};

module.exports = UserController;
