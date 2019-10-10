/*
var mongoose = require("mongoose");
var User = mongoose.model("Users");
var Role = mongoose.model("Roles");
async function createRole() {

    const role = new Role({
        RoleID: 1,
        RoleName: "Administrator"

    });
    const result = await role.save();
    console.log("Role save result=>",result)
}

createRole();

async function createUser(){

    const user = new Role({
        UserID: 1,
        UserName: "admin",
        Email: "admin@gmail.com",
        Password: "admin",
        RoleId: 1,
        PersonalUniqueueID: "ID"

    });
    const result = await user.save();
    console.log("Role save result=>",result)

}
createUser();
*/

