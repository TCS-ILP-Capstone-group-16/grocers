let orderModel = require("../model/orderDetails.model");

// get the whole order tables from the database
let fetchOrderDetails = (req, res) => {

    orderModel.find({}, (err, data) => {
        if(!err){
            res.json(data);
        } else {
            res.send("Something Wrong! Please Try Again!")  
        }
    });
}

module.exports = {fetchOrderDetails};