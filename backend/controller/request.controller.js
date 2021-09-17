let requestModel = require("../model/request.model");

let getAllRequestDetails = (request, response) => {

    requestModel.find({}, (err, data) => {
        if (!err) {
            response.json(data);
        } else {
            response.json(err);
        }
    })

}


let addRequestInfo = (request, response) => {
    let requests = request.body;

    requestModel.insertMany(requests, (err, result) => {
        if (!err) {
            response.send("Request stored successfully")
        } else {
            response.send(err);
        }
    })
}

module.exports = { getAllRequestDetails, addRequestInfo }