var mongoose = require("mongoose");
//Users Schema
var UsersSchema = new mongoose.Schema(
    {
        UserID: Number,
        UserName: String,
        Email: String,
        Password: String,
        RoleId: Number,
        PersonalUniqueueID: {type: String, default: null}
    },
    {timestamps: true}
);
const User = mongoose.model("Users", UsersSchema);
/*async function createUser(){

        const user = new User({
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
createUser();*/
module.exports = User;
