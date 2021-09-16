let express = require('express');

// this is use to creat the router reference. which help to route to controller function base upon the path.
let router = express.Router();

let orderController = require("../controller/orderDetails.controller");

router.get("/getOrderDetails", orderController.fetchOrderDetails);

module.exports = router;