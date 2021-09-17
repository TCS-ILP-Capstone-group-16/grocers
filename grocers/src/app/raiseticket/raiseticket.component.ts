import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-raiseticket',
  templateUrl: './raiseticket.component.html',
  styleUrls: ['./raiseticket.component.css']
})
export class RaiseticketComponent implements OnInit {

  adminloginRef = new FormGroup({
    username: new FormControl(),
    password: new FormControl()
  });

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


