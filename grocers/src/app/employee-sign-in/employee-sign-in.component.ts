import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../employee-login.service';

@Component({
  selector: 'app-employee-sign-in',
  templateUrl: './employee-sign-in.component.html',
  styleUrls: ['./employee-sign-in.component.css']
})
export class EmployeeSignInComponent implements OnInit {

  employeeLoginRef = new FormGroup({
    empID: new FormControl("", [Validators.required]),
    password: new FormControl("", [Validators.required]),
  });

  result? : string;

  constructor(
    public loginSer: LoginService,
    public router: Router
  ) { }

  ngOnInit(): void {
  }

  // check the employee id from the database detail
  checkEmployee() {
    let loginData = this.employeeLoginRef.value;

    this.loginSer.employeeLoginValidation(loginData).subscribe(message => {
      if (message == "Suceess") {

        // go to the main page of user 
        console.log("good")
        this.router.navigate(["employeehome"]);
      }
      if (message == "Default Password") {
        this.router.navigate(["employeeRegisterPW"]);
      } else {
        this.result = message;
      }
    }, error => {
      console.log(error);
    });

    this.employeeLoginRef.reset();
  }
}
