let mongoose = require("mongoose");
mongoose.pluralize(null);

let adminSchema = mongoose.Schema({
    username: { type: String, unique: true },
    password: { type: String }

})

//using schema creating model
//1st parameter collection name 
//2nd prarameter schema reference 
let adminModel = mongoose.model("Admin", adminSchema);

module.exports = adminModel; //if we export this we can import this in another file as require