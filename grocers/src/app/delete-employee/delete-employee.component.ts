import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouteConfigLoadEnd, Router } from '@angular/router';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-delete-employee',
  templateUrl: './delete-employee.component.html',
  styleUrls: ['./delete-employee.component.css']
})
export class DeleteEmployeeComponent implements OnInit {


  formRef = new FormGroup({
    id:new FormControl("",[Validators.required])
  })
  
  msg:string = "";

  constructor(public employeeServ:EmployeeService, public router:Router) { }

  ngOnInit(): void {
  }

  submit(){
    let empInfo = this.formRef.value;
    this.employeeServ.deleteEmployee(empInfo).subscribe(result => {
      if(result =="Success"){
        this.msg = "Employee Deleted";
      }
      else{
        this.msg = result;
      }
    }, error=>console.log(error));
      this.formRef.reset();
  }
}
