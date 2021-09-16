// load the model file  ie user-defined module like a import in ts file 
let productModel = require("../model/product.model");



//---------Admin
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
    let pid = request.params.pid;
    productModel.deleteOne({ _id: pid }, (err, result) => {
        if (!err) {
            response.send(result)
        } else {
            response.send(err);
        }
    })
}

let updateProductDetails = (request, response) => {
    let product = request.body;
    productModel.updateOne({ _id: product._id }, { $set: { price: product.price } }, (err, result) => {
        if (!err) {
            response.send(result);
        } else {
            response.send(err);
        }
    })
}
//---------------------------------------------------------------------------Admin









module.exports = { getAllProductDetails, addProductInfo, deleteProductInfo, updateProductDetails }