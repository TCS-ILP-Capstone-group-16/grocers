import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-sign-in',
  templateUrl: './user-sign-in.component.html',
  styleUrls: ['./user-sign-in.component.css']
})
export class UserSignInComponent implements OnInit {


  formRef = new FormGroup({
    username:new FormControl("",[Validators.required]),
    password:new FormControl("",[Validators.required])
  })

  constructor(public userService: UserService, public router: Router) {}
  msg:string = "";
  ngOnInit(): void {
  }


  submit(){
    let userLogin = this.formRef.value;
    this.userService.checkUserLogin(userLogin).subscribe(result => {

      if (result == "Success") {
        this.router.navigate(["PLACEHOLDERFORCART", userLogin.username]);
      } else {
           this.msg = result;
      }
    }, error => console.log(error));
    this.formRef.reset();
  }
}
