let mongoose = require("mongoose");

mongoose.pluralize(null);

let employeeSchema = mongoose.Schema({
    empID: Number,
    firstName:String,
    lastName:String,
    Password: String,
    Username:String,
    Email: String,

});

let employeeModel = mongoose.model("Employee", employeeSchema);

module.exports = employeeModel;