var mongoose = require("mongoose");
//LoginStatus Schema
var LoginStatusSchema = new mongoose.Schema(
    {
        LoginStatusId: Number,
        UserName: String,
        LogInFrom: String,
        RoleId: Number,
        DateTime: String,
        IPAddress: String
    },
    {timestamps: true}
);

module.exports = mongoose.model("LoginStatus", LoginStatusSchema);
