let mongoose = require("mongoose");

mongoose.pluralize(null);

let employeeSchema = mongoose.Schema({
    empID: Number,
    Password: String,
});

let employeeModel = mongoose.model("Employee", employeeSchema);

module.exports = employeeModel;