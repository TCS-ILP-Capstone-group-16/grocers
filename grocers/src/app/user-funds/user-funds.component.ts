import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../user.service';


@Component({
  selector: 'app-user-funds',
  templateUrl: './user-funds.component.html',
  styleUrls: ['./user-funds.component.css']
})
export class UserFundsComponent implements OnInit {

  accountRef = new FormGroup({
    accountNum: new FormControl("", [Validators.required]),
    refillAmount: new FormControl("", [Validators.required]),
  });

  result? : string;
  availableBalance?: number;
  userId?: number;

  constructor(
    public userSer: UserService,
    public activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.getUserInfo();
    this.activatedRoute.params.subscribe(data => {
      this.userId = data.user;
    })
  }

 // get the database detail 
  getUserInfo() {
    this.userSer.retrieveUserInfo().subscribe(result => {
     
      // find the specfic user in the database 
      let user = result.find( (userData: any) => userData.userID == this.userId);
      this.availableBalance = user.BankBalance;

    }, error => {
      console.log(error);
    });
  }

  // check the employee id from the database detail
  refillAccount() {
    let accountData = this.accountRef.value;

    this.userSer.updateUserBankAmount(accountData.accountNum, accountData.refillAmount, this.userId).subscribe( msg => {
        
        this.result = msg;
        this.getUserInfo();
      }, error => {
        console.log(error);
      });
    this.accountRef.reset();
  }
}
