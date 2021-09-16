let mongoose = require("mongoose");

mongoose.pluralize(null);

let empSchema = mongoose.Schema({
    // employee ID
    _id : Number,
    firstName : String,
    lastname : String,
    // employee login with username and pwd
    username : String,
    pwd : String,
    // pwdUpdated set to No by default, Yes after 1st update.
    pwdUpdated : Boolean,
    salary : Number
    
});

let empModel = mongoose.model("Emp",empSchema);

module.exports=empModel;