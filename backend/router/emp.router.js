// load the express module
let express = require("express");
// create the router reference to help
// route to controller function based upon sub path
let router=express.Router();
let empController = require("../controller/emp.controller");

// use GET / POST / DELETE / PUT
// ex template: 
// router.post(".../pathNameHere", empController.functionNameHere);
router.post("/addEmployee", empController.addEmployee);
router.post("/deleteEmployee", empController.deleteEmployee);

module.exports=router;