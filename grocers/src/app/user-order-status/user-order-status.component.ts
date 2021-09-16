import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-order-status',
  templateUrl: './user-order-status.component.html',
  styleUrls: ['./user-order-status.component.css']
})
export class UserOrderStatusComponent implements OnInit {

  constructor(
    public userSer: UserService,
    public activatedRoute: ActivatedRoute
  ) { }

  orders?: Array<any>;
  userId?: number;

  ngOnInit(): void {
     this.getOrderInfo();
     this.activatedRoute.params.subscribe(data => {
      this.userId = data.user;
      // console.log(this.userId );
    })
    
  }

   // get the database detail 
  getOrderInfo() {
    this.userSer.retrieveItemsInfo().subscribe(result => {
      this.orders = result.filter( (userData: any) => userData.UserID == this.userId);
    }, error => {
      console.log(error);
    });
  }
}
