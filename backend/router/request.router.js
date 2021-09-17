// load the express module 
let express = require("express");
// This is use to create the router referene. 
// which help to route to controller function base upon the sub path.
let router = express.Router();
let requestController = require("../controller/request.controller")

router.get("/getAllRequest", requestController.getAllRequestDetails);

router.post("/addRequest", requestController.addRequestInfo);



module.exports = router;



