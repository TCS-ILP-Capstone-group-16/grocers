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
    for(let attempts = 0; attempts < 3;){
      if (result == "Success") {
        this.router.navigate(["userhome", userLogin.username]);
      } else {
          this.msg  = "Invalid username or password";
           this.msg = result;
           attempts++
      }
      if(attempts >= 3){
        this.msg  = "Account is locked after 3 consecutive failed attempts";       
      }
    }
      

    }, error => console.log(error));
    this.formRef.reset();
  }
}
