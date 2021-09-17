import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouteConfigLoadEnd, Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-sign-up',
  templateUrl: './user-sign-up.component.html',
  styleUrls: ['./user-sign-up.component.css']
})
export class UserSignUpComponent implements OnInit {


  formRef = new FormGroup({
    fname:new FormControl("",[Validators.required]),
    lname:new FormControl("",[Validators.required]),
    email:new FormControl("",[Validators.required]),
    username:new FormControl("",[Validators.required]),
    password:new FormControl("",[Validators.required]),
    date:new FormControl("",[Validators.required]),
    phone:new FormControl("",[Validators.required]),
    address:new FormControl("",[Validators.required]),
    bank:new FormControl("",[Validators.required])

  })

  constructor(public userServ:UserService, public router:Router) { }

  msg:string = "";

  ngOnInit(): void {
  }


  submit(){
     let userInfo = this.formRef.value;
      this.userServ.checkUserSignup(userInfo).subscribe(result => {
        if(result !="User add failed"){
          this.msg = result;
        }
        else{
          this.msg = result;
        }
      }, error=>console.log(error));
        this.formRef.reset();
  }
}
