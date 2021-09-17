let employeeModel = require("../model/employee.model");

// validate the employee id and password
let validateEmployee = async (req, res) => {

    let user = req.body;    // receive the data from post method
    let userInfo = await employeeModel.find({});       // return all the data 

    // find the specific that match database id and password
    let specificUser = userInfo.find(employees => employees.empID == user.empID && employees.Password == user.password);

    // if the employee data is existed, then change whether it is default pw or the changed pw
    if(specificUser != undefined) {

        if(specificUser.Password == "welcome123") {
            res.send("Default Password");
        } else {
            res.send("Suceess");
        }
    } else {
        res.send("Invalid username or password");
    }

}

// change the default password 
let changePW = (req, res) => {
    let employee = req.body;    // receive the data from post method

    employeeModel.find({}, (err, data) => {
        if(!err) {

            // find the employee that match to its employee id in database
            let singleEmployee = data.find( employeeData => employeeData.empID == employee.empID);

            if(singleEmployee == undefined) {
                res.send("Employee ID is incorrect");
            }

            employeeModel.updateOne({ _id: singleEmployee._id},{$set:{Password: employee.password}},(err,result)=> {
                if(!err){   
                     res.send("Registered Done");
                } else {
                     res.send("Something Wrong! Please Try Again");
                }
            })
        }
    })
}

module.exports = {validateEmployee, changePW};