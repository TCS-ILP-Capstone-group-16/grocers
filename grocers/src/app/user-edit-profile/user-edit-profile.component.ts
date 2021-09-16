import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../user.service';
import { User } from '../user';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-edit-profile',
  templateUrl: './user-edit-profile.component.html',
  styleUrls: ['./user-edit-profile.component.css']
})
export class UserEditProfileComponent implements OnInit {

  userProfileRef = new FormGroup({
    email: new FormControl("", [Validators.required]),
    password: new FormControl("", [Validators.required]),
    address: new FormControl("", [Validators.required]),
    phoneNum: new FormControl("", [Validators.required]),
  });

  result? : string;
  userId?: number;
  email?: any;
  pw?: any;
  address?: any;
  phoneNum?: any;

  constructor(
    public userSer: UserService,
    public activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {

     this.getUserInfo();

     // get the userid from the params url
     this.activatedRoute.params.subscribe(data => {
      this.userId = data.user;
    })
  }

  // get the database detail 
  getUserInfo() {
    this.userSer.retrieveUserInfo().subscribe(result => {

      // get the user that match to the url userid 
      let user = result.find( (userData: any) => userData.userID == this.userId);
      this.email = user.Email;
      this.pw = user.Password;
      this.address = user.Address;
      this.phoneNum = user.PhoneNumber;
  
    }, error => {
      console.log(error);
    });
  }

  // update the user profile detail in database
  updateProfile() {

    let userData = this.userProfileRef.value;

    this.userSer.updateUserProfile(userData.email, userData.password,  userData.address, userData.phoneNum, this.userId).subscribe(msg => {
      this.result = msg;
    }, error => {
      console.log(error);
    });

    this.userProfileRef.reset();
  }
}
