let mongoose = require("mongoose");

mongoose.pluralize(null);

let orderSchema = mongoose.Schema({
    orderNumber: Number,
    productName: String,
    quantityOrdered: Number,
    priceEach: Number,
    productImage: String,
    Status: String,
    UserID: Number,
});

let orderModel = mongoose.model("Order_details", orderSchema);

module.exports = orderModel;