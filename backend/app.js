// load all module (including user-defined)
let express = require("express");
let bodyParser = require('body-parser');
let mongoose = require("mongoose");
let cors = require("cors");

let userInfo = require("./view/user.router");
let orderInfo = require("./view/orderDetails.router");
let employeeInfo = require("./view/employee.router");

// create reference of express
let app = express();

//add middleware
app.use(cors());
app.use(bodyParser.json());

app.use("/api/user", userInfo);
app.use("/api/order", orderInfo);
app.use("/api/employee", employeeInfo);

//url database
let url = "mongodb://localhost:27017/project_example";

// connect the database
mongoose.connect(url)
    .then(res => {
        console.log("Connected");
    })
    .catch(err => {
        console.log(err);
    });

// create the server port number
app.listen(8080, () => {
    console.log("Server running on port number 8080");
});