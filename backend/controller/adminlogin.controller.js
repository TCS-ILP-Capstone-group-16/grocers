let adminModel = require("../model/adminlogin.model");
let employeeModel = require("../model/employee.model");


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

let addEmployee = (req, response) => {
    let empInfo = {
        empID: Math.floor(Math.random()*99999 - 10000) + 10000,
        firstName: req.body.fname,
        lastName: req.body.lname,
        Password: "welcome123",
        Username: req.body.username,
        Email: req.body.email,
    }

    employeeModel.insertMany(empInfo, (err, result) => {
        if (!err) {
            response.send("EmployeeID " +empInfo.empID+" added.")
        } else {
            response.send("Failed to add.");
        }
    })
}

let deleteEmployee = (request, response) => {
    let empInfo = request.body.id;

    employeeModel.findOne
    employeeModel.findOneAndDelete({empID: empInfo}, (err, result) => {
        if (!err) {
            if(result == null) response.send("Employee does not exist.");
            else response.send("Success");
        } else {
            response.send("Invalid input. Try again.");
        }
    })
}
module.exports = { adminSignIn, addEmployee, deleteEmployee }