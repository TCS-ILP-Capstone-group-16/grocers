import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

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
    password:new FormControl("",[Validators.required]),
    date:new FormControl("",[Validators.required]),
    phone:new FormControl("",[Validators.required]),
    address:new FormControl("",[Validators.required])
  })

  ngOnInit(): void {
  }


  submit(){

  }
}
