//navigate
//load 
let express = require("express");
//this is used to create the router reference 
//which help to route to controller function base upon the path
let router = express.Router()
let adminController = require("../controller/adminlogin.controller")

router.post("/signIn", adminController.adminSignIn);


module.exports = router;
