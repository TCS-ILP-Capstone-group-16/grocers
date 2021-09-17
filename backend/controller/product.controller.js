// load the model file  ie user-defined module like a import in ts file 
const { isValidObjectId } = require("mongoose");
let productModel = require("../model/product.model");

let getAllProductDetails = (request, response) => {

    productModel.find({}, (err, data) => {
        if (!err) {
            response.json(data);
        } else {
            response.json(err);
        }
    })

}

let addProductInfo = (request, response) => {
    let product = request.body;

    productModel.insertMany(product, (err, result) => {
        if (!err) {
            response.send("Record stored successfully")
        } else {
            response.send(err);
        }
    })
}

let deleteProductInfo = (request, response) => {
    let pid = request.params.pid
    console.log(request.params)
    console.log("api", JSON.stringify(pid));
    productModel.deleteOne({ _id: pid }, (err, result) => {
        if (!err) {
            response.send(result)
        } else {
            response.send(err);
        }
    })


}

let updateProductDetails = (request, response) => {
    //pass only one value 
    let pid = request.params.pid;
    //pass more than one
    let product = {};
    const properties = ["quantityInStock", "price", "productDiscount"]
    properties.forEach((property) => {
        //sanitizing data
        if (property in request.body) {
            product[property] = request.body[property];
        }
    })

    productModel.updateOne({ _id: pid }, { $set: product }, (err, result) => {
        if (!err) {
            response.send(result);
        } else {
            response.send(err);
        }
    })
}

module.exports = { getAllProductDetails, addProductInfo, deleteProductInfo, updateProductDetails }

