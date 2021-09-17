import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit {

  username?: string;
  userID?: number;

  constructor(
    public activatedRoute: ActivatedRoute,
    public userSer: UserService,
  ) { }

  ngOnInit(): void {
    this.getUserID();
    this.activatedRoute.params.subscribe(data => {
      this.username = data.username;
    })


  }

   // get the database detail 
   getUserID() {
    this.userSer.retrieveUserInfo().subscribe(result => {
     
      // find the specfic user in the database 
      let user = result.find( (userData: any) => userData.Username == this.username);
      this.userID = user.userID;
    }, error => {
      console.log(error);
    });
  }

}
