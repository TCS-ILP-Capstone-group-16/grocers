let mongoose = require("mongoose");

mongoose.pluralize(null);

let userSchema = mongoose.Schema({
    
    userID: Number,
    Username: String,
    Email: String,
    Password: String,
    Address: String,
    PhoneNumber: Number,
    BankAccount: Number,
    BankBalance: Number,
});

let userModel = mongoose.model("User", userSchema);

module.exports = userModel;