let mongoose = require("mongoose");

mongoose.pluralize(null);

let userSchema = mongoose.Schema({
    
    userID: Number,
    firstName:String,
    lastName:String,
    Username: String,
    Password: String,
    Email: String,
    DateOfBirth: String,
    Address: String,
    PhoneNumber: Number,
    BankAccount: Number,
    BankBalance: Number,
    Attempts: Number,

});

let userModel = mongoose.model("User", userSchema);

module.exports = userModel;