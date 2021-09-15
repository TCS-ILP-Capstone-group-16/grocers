let adminModel = require("../model/adminlogin.model");


//inserting into db
//db.Admin.insert({username:"Admin",password:"ilpgroup16admin"})


//verify admin credential 
let adminSignIn = async (request, response) => {
    let admin = request.body;    // receive the data from post method
    let adminInfo = await adminModel.findOne({ username: admin.username, password: admin.password });
    if (adminInfo != null) {
        response.send("Success");
    } else {
        response.send("InValid username or password");
    }
}
module.exports = { adminSignIn }