let mongoose = require("mongoose")

mongoose.pluralize(null);       // to avoid creating in lower case with s postfix. 
// create the schema 
let RequestSchema = mongoose.Schema({
 //_id : Number,	
employeeID: Number,
productId:String,
description:String

});

// using scheam creating model 
//1st parameter collection name 
// 2nd parameter schema reference. 
let requestModel = mongoose.model("Request", RequestSchema);

module.exports = requestModel; 