var express = require("express");
var router = express.Router();

var UserRolesController = require("../controllers/user.roles.controller");

//Auth UserRole
//router.get('/api/rolelogin', function(req,res) {UserRolesController.AuthRole(req,res)});

//UserRoles CRUD Operations
router.get("/api/getallroles", function(req, res) {
  UserRolesController.GetRole(req, res);
});

router.get("/api/gerrolebyid/:id", function(req, res) {
  UserRolesController.GetRoleById(req, res);
});

router.post("/api/createrole", function(req, res) {
  UserRolesController.Create(req, res);
});

router.put("/api/updaterole/:id", function(req, res) {
  UserRolesController.Update(req, res);
});

router.delete("/api/deleterole/:id", function(req, res) {
  UserRolesController.Delete(req, res);
});

module.exports = router;
