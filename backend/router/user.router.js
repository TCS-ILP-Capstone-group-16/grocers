let express = require('express');

// this is use to creat the router reference. which help to route to controller function base upon the path.
let router = express.Router();

let userController = require("../controller/user.controller");
//router.get("/getAllProducts", user.userController.getAllProductDetails);
//router.get("/getAllProducts", productController.getAllProductDetails);
//router.get("/getAllProducts", productController.getAllProductDetails);
router.get("/getUserInfo", userController.fetchUserDetails);
router.put("/changeFunds", userController.updateBalance);
router.put("/editProfile", userController.updateProfile);
router.get("/select-items", userController.getAllProductDetails);
router.post("/userSignIn", userController.userSignin);
router.post("/userSignUp", userController.userSignup);

module.exports = router;