let userModel = require("../model/user.model");

let getAllProductDetails = (request, response) => {

    productModel.find({}, (err, data) => {
        if (!err) {
            response.json(data);
        } else {
            response.json(err);
        }
    })

}
// get all the user data
let fetchUserDetails = (req, res) => {

    userModel.find({}, (err, data) => {
        if(!err){
            res.json(data);
        } else {
            res.send("Something Wrong! Please Try Again!")  
        }
    });
}

// update all the details to the database
let updateProfile = (req, res) => {
    let profile = req.body;

    userModel.find({}, (err, data) => {
        if(!err) {

            let user = data.find( userData => userData.userID == profile.userID);

            userModel.updateOne({ _id: user._id},{$set:{Email: profile.Email, Password: profile.Password, Address: profile.Address, PhoneNumber: profile.PhoneNumber}},(err,result)=> {
                if(!err){ 
                     res.json("Successfully Updated User Profile");
                } else {
                     res.json("Something Wrong! Please Try Again");
                }
            })
        }
    })
}

// update the user bank account balance
let updateBalance =  (req, res) => {

   let fundInfo = req.body;
   
   // get the specific user 
   userModel.find({}, (err, data) => {

    if(!err) {

        let user = data.find( userData => userData.userID == fundInfo.userID);
        let total = user.BankBalance + fundInfo.BankBalance;

        // if the account is incorrect or the amount of balance after recharge is out of bound, deny it
        if(user.BankAccount != fundInfo.BankAccount || total >= 10000) {
            res.json("Please Check Account Number and Make Sure Account Balance is not Exceed $100000");
        } else {
 
            userModel.updateOne({ _id: user._id},{$set:{BankBalance:total}},(err,result)=> {
                if(!err){ 
                     res.json("Succesfully Refill the Balance");
                } else {
                     res.json("Something Wrong! Please Try Again");
                }
            })
        }
    }
   });
}

let userSignin = async (request, response) => {
    let user = request.body;
    let userInfo = await userModel.findOne({ username: user.Username, password: user.Password });
    if (userInfo != null) {
        response.send("Success");
    } else {
        response.send("Invalid username or password");
    }
}

let userSignup = (req, response) => {
    let userInfo = {
        firstName: req.body.fname,
        lastName: req.body.lname,
        Username: req.body.username,
        Email: req.body.email,
        Password: req.body.password,
        Address: req.body.address,
        DateOfBirth: req.body.date,
        PhoneNumber: req.body.phone,
        BankBalance: "5000",
    }

    userModel.insertMany(userInfo, (err, result) => {
        if (!err) {
            response.send("Success")
        } else {
            response.send(err);
        }
    })
}
module.exports = { fetchUserDetails, updateBalance, updateProfile, userSignin, userSignup};