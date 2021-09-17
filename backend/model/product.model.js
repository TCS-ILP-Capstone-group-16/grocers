let mongoose = require("mongoose")

mongoose.pluralize(null);       // to avoid creating in lower case with s postfix. 
// create the schema 
let productSchema = mongoose.Schema({
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

// using scheam creating model 
//1st parameter collection name 
// 2nd parameter schema reference. 
let productModel = mongoose.model("Product", productSchema);

module.exports = productModel;    // we can import using require.
// in anothe file \\\var counter = mongoose.model('counter', CounterSchema);

