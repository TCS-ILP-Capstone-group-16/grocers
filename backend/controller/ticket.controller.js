// load the model file  ie user-defined module like a import in ts file 
let ticketModel = require("../model/ticket.model");



//---------Admin

let addTicketInfo = (request, response) => {
    let product = request.body;

    ticketModel.insertMany(product, (err, result) => {
        if (!err) {
            response.send("Record stored successfully")
        } else {
            response.send(err);
        }
    })
}



module.exports = { addTicketInfo }