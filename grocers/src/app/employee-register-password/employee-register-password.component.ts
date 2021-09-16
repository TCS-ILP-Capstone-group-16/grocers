import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../employee-login.service';

@Component({
  selector: 'app-employee-register-password',
  templateUrl: './employee-register-password.component.html',
  styleUrls: ['./employee-register-password.component.css']
})
export class EmployeeRegisterPasswordComponent implements OnInit {

  employeeLoginRef = new FormGroup({
    empID: new FormControl("", [Validators.required]),
    password: new FormControl("", [Validators.required]),
  });

  result?: string = "Please Change Your Default Password Before You Login";

  constructor(
    public loginSer: LoginService,
    public router: Router
  ) { }

  ngOnInit(): void {
  }

  // check the employee id from the database detail
  checkEmployee() {
    let loginData = this.employeeLoginRef.value;

    this.loginSer.employeeNewPassword(loginData).subscribe(message => {
      if (message == "Registered Done") {

        // go to the main page of user 
        this.router.navigate(["PATH_NAME_OF_DASHBAORD_HERE"]);
      } else {
        this.result = message;
      }
    }, error => {
      console.log(error);
    });
    
    this.employeeLoginRef.reset();
  }

}
