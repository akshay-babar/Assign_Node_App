var express = require("express");
var router = express.Router();
var NormalUserController = require("../controllers/normal.user.controller");

//Auth Normal User
//router.get('/api/accessuserlogin',function(req,res){NormalUserController.AuthAccessUser(req,res)});

//Normal User CRUD Operations
router.get("/api/getallnormalusers", function(req, res) {
  NormalUserController.GetAllUsers(req, res);
});
router.get("/api/searchaccessuser", function(req, res) {
  NormalUserController.SearchAccessUser(req, res);
});

router.post("/api/approvenormaluser", function(req, res) {
  NormalUserController.Approve(req, res);
});

router.post("/api/createnormaluser", function(req, res) {
  NormalUserController.Create(req, res);
});

router.put("/api/updatenormaluser", function(req, res) {
  NormalUserController.Update(req, res);
});

router.delete("/api/deletenormaluser/:id", function(req, res) {
  NormalUserController.Delete(req, res);
});

router.post("/api/activatenormaluser", function(req, res) {
  NormalUserController.Activate(req, res);
});

router.get("/api/getnormaluserdetails", function(req, res) {
  NormalUserController.GetAccessUserProfile(req, res);
});
module.exports = router;
