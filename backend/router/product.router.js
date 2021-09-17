// load the express module 
let express = require("express");
// This is use to create the router referene. 
// which help to route to controller function base upon the sub path.
let router = express.Router();
let productController = require("../controller/product.controller")




router.post("/addProduct", productController.addProductInfo);
router.delete("/deleteProduct/:pid", productController.deleteProductInfo);
router.put("/updateProduct/:pid", productController.updateProductDetails);

router.get("/getallproducts", productController.getAllProductDetails);

module.exports = router;