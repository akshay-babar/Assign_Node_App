const mongoose = require("mongoose");
//User Roles Schema
let UserRolesSchema = new mongoose.Schema({
    RoleID: Number,
    RoleName: String //a. Roles will be i. Administrator ii. Operator iii. AccessUser
});

const Role = mongoose.model("UserRoles", UserRolesSchema);
/*async function createRole() {

    const role = new Role({
        RoleID: 1,
        RoleName: "Administrator"

    });
    const result = await role.save();
    console.log("Role save result=>",result)
}

createRole();*/
module.exports = Role;
