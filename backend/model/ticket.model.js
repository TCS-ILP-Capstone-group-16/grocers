let mongoose = require("mongoose")

mongoose.pluralize(null);       // to avoid creating in lower case with s postfix. 
// create the schema 
let ticketSchema = mongoose.Schema({
// _id : Number,	
username:String,
email: String,
ticket:String,

});

// using scheam creating model 
//1st parameter collection name 
// 2nd parameter schema reference. 
let ticketModel = mongoose.model("Ticket",ticketSchema);

module.exports=ticketModel;    // we can import using require.
                                // in anothe file 