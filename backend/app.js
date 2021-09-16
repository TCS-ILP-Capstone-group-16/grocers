// load all modules 
let express = require("express");
let bodyParser = require("body-parser");
let mongoose = require("mongoose");
let cors = require("cors");
// let routerProduct = require("./router/product.router");
let adminRouter = require("./router/adminLogin.router");

let userInfo = require("./router/user.router");
let orderInfo = require("./router/orderDetails.router");
let employeeInfo = require("./router/employee.router");

// create the reference of express 
let app = express();

// add middleware 
app.use(cors());
app.use(bodyParser.json())


//url database 
let url = "mongodb://localhost:27017/tcsmean"


// connect the database 
mongoose.connect(url).then(res => console.log("connected")).catch(error => console.log(error));

//advance rest client: check the data 
// http://localhost:9090/api/admin/signIn        : post adminSignIn
app.use("/api/admin", adminRouter);


app.use("/api/user", userInfo);
app.use("/api/order", orderInfo);
app.use("/api/employee", employeeInfo);







app.listen(9090, () => console.log("Server running on port number 9090"))