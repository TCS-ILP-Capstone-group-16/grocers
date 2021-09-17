import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouteConfigLoadEnd, Router } from '@angular/router';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {


  formRef = new FormGroup({
    fname:new FormControl("",[Validators.required]),
    lname:new FormControl("",[Validators.required]),
    email:new FormControl("",[Validators.required]),
    password:new FormControl("",[Validators.required]),
    id:new FormControl("",[Validators.required])
  })

  constructor(public employeeServ:EmployeeService, public router:Router) { }
  msg:string = "";
  ngOnInit(): void {
  }

  submit(){
    let empInfo = this.formRef.value;
    this.employeeServ.addEmployee(empInfo).subscribe(result => {
      if(result =="Success"){
        this.router.navigate(["", empInfo.employee]);
      }
      else{
        this.msg = result;
      }
    }, error=>console.log(error));
      this.formRef.reset();
  }
}
