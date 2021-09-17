let express = require('express');

// this is use to creat the router reference. which help to route to controller function base upon the path.
let router = express.Router();

let employeeController = require("../controller/employee.controller");

router.post("/checkLogin", employeeController.validateEmployee);
router.post("/changePassword", employeeController.changePW);



module.exports = router;