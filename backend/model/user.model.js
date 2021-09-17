let mongoose = require("mongoose");

mongoose.pluralize(null);

let userSchema = mongoose.Schema({
    
    userID: { 
        type: Number,
        default: function() {
            return Math.floor(Math.random()*99999 - 10000) + 10000
          },
          index: { unique: true }
    },
    firstName:String,
    lastName:String,
    Username: String,
    Email: String,
    Password: String,
    Address: String,
    DateOfBirth: String,
    PhoneNumber: Number,
    BankAccount: { 
        type: Number,
        default: function() {
            return Math.floor(Math.random()*99999 - 10000) + 10000
          },
          index: { unique: true }
    },
    BankBalance: Number,

});

let userModel = mongoose.model("User", userSchema);

module.exports = userModel;