var express = require("express");
var router = express.Router();

//var LogInStatusController = require('./../controllers/login.status.controller');
var UserController = require("./../controllers/user.controller");

//Auth User
router.post("/api/userlogin", function(req, res) {
  UserController.AuthUser(req, res);
});

//User CRUD Operations
router.get("/api/getalluser", function(req, res) {
  UserController.GetAllUser(req, res);
});

router.get("/api/getuser/:id", function(req, res) {
  UserController.GetUserById(req, res);
});

router.post("/api/createuser", function(req, res) {
  UserController.Create(req, res);
});

router.get("/api/getuserid", function(req, res) {
  UserController.GetUserId(req, res);
});

router.get("/api/searchoperator", function(req, res) {
  UserController.SearchOperator(req, res);
});

router.put("/api/updateuser", function(req, res) {
  UserController.Update(req, res);
});

router.delete("/api/deleteuser/:id", function(req, res) {
  UserController.Delete(req, res);
});

module.exports = router;
