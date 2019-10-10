var mongoose = require("mongoose");
mongoose.Promise = global.Promise;

mongoose
  .connect("mongodb://localhost/nodeAssignment", { useNewUrlParser: true })
  .then(() => console.log("connection succesful"))
  .catch(err => console.error(err));

var express = require("express");
//var path = require('path');
var bodyParser = require("body-Parser");
var cors = require("cors");

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

var UserRoutes = require("./routes/app.user.routes.js");
var NormalUserRoutes = require("./routes/app.normal.user.routes.js");
var RolesRoutes = require("./routes/app.user.roles.routes.js");

app.use([UserRoutes, NormalUserRoutes, RolesRoutes]);

app.listen(4090, function() {
  console.log("started listening on port number 4090.");
});
