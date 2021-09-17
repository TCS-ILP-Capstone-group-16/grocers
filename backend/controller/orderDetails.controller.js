let orderModel = require("../model/orderDetails.model");

// get the whole order tables from the database
let fetchOrderDetails = (request, response) => {

    orderModel.find({}, (err, data) => {
        if (!err) {
            response.json(data);
        } else {
            response.json(err);
        }
    })

}

module.exports = {fetchOrderDetails};