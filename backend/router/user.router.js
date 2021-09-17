let express = require('express');

// this is use to creat the router reference. which help to route to controller function base upon the path.
let router = express.Router();

let userController = require("../controller/user.controller");

router.get("/getUserInfo", userController.fetchUserDetails);
router.put("/changeFunds", userController.updateBalance);
router.put("/editProfile", userController.updateProfile);

router.post("/userSignIn", userController.userSignin);

module.exports = router;