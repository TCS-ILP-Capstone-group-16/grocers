let mongoose = require("mongoose");

mongoose.pluralize(null);

let userSchema = mongoose.Schema({
    
    userID: Number,
    firstName:String,
    lastName:String,
    Username: String,
    Email: String,
    Password: String,
    Address: String,
    DateOfBirth: String,
    PhoneNumber: Number,
    BankAccount: Number,
    BankBalance: Number,

});

let userProduct = mongoose.Schema({
    // _id : Number,	
    productName: String,
    productLine: String,
    productDescription: String,
    productImage: String,
    quantityInStock: Number,
    price: Number,
    ProductVendor: String,
    productDiscount:Number

});

let userModel = mongoose.model("User", userSchema);
//let userProductModel = mongoose.model("Products", userProduct);
module.exports = userModel;