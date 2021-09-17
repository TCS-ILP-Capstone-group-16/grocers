// load the express module 
let express = require("express");
// This is use to create the router referene. 
// which help to route to controller function base upon the sub path.
let router = express.Router();
let ticketController = require("../controller/ticket.controller")


router.post("/addticket", ticketController.addTicketInfo);

module.exports = router;