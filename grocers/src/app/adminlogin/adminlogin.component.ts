import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {
  adminloginRef = new FormGroup({
    username: new FormControl(),
    password: new FormControl()
  });

  //public router:Router,

  constructor(public adminSer: AdminService, public router: Router) { }
msg?:string
  ngOnInit(): void {
  }


  checkAdmin() {
    let login = this.adminloginRef.value;


    this.adminSer.checkAdminLoginDetails(login).subscribe(result => {

      if (result == "Success") {
        this.router.navigate(["adminhome", login.username]); // // appended name through path
      } else {
      //  this.msg  = "InValid username or password";
           this.msg  = result;
      }
    }, error => console.log(error));

 

    this.adminloginRef.reset();
  }




}








