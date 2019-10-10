var mongoose = require("mongoose");

//Normal User Schema
var NormalUserSchema = new mongoose.Schema(
    {
        PersonalUniqueueID: String,
        FullName: String,
        Gender: String,
        DateOfBirth: String,
        Age: String,
        Address: String,
        City: String,
        State: String,
        PinCode: Number,
        PhoneNo: String,
        MobileNo: String,
        PhysicalDisability: String,
        MaritalStatus: String, //1. Married, Unmarried, Divorced, Widow, Widower, etc
        EducationStatus: String, // e.g. Masters, Phd, Graduate, Under-Graduate, HSC, SSC, Illiterate, etc.
        BirthSign: String
    },
    {timestamps: true}
);

var TempNormalUserSchema = new mongoose.Schema(
    {
        PersonalUniqueueID: String,
        FullName: String,
        Gender: String,
        DateOfBirth: String,
        Age: String,
        Address: String,
        City: String,
        State: String,
        PinCode: Number,
        PhoneNo: String,
        MobileNo: String,
        PhysicalDisability: String,
        MaritalStatus: String, //1. Married, Unmarried, Divorced, Widow, Widower, etc
        EducationStatus: String, // e.g. Masters, Phd, Graduate, Under-Graduate, HSC, SSC, Illiterate, etc.
        BirthSign: String,
        ApproveStatus: {type: String, default: "Pending"}
    },
    {timestamps: true}
);

module.exports = mongoose.model("AccessUser", NormalUserSchema);
module.exports = mongoose.model("TempAccessUser", TempNormalUserSchema);
