let empModel = require("../model/emp.model");

let addEmployee=(request,response)=> {
    let employee = request.body;

    empModel.insetMany(employee,(err,result)=> {
        if(!err){
            response.send("Employee account created successfully")
        }else {
            response.send(err);
        }
    })
}

let deleteEmployee=(request,response)=> {
    let eid = request.params.eid;

    empModel.deleteOne({_id:eid},(err,result)=> {
        if(!err){
            response.send(result)
        }else {
            response.send(err);
        }
    })
}

module.exports= {addEmployee, deleteEmployee};