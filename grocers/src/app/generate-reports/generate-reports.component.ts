import { Component, OnInit } from '@angular/core';
import { OrdersService } from '../orders.service';
import { ProductService } from '../product.service';
import { UserService } from '../user.service';


interface Order {
  _id:string,
  orderNumber:number,
  productCode:number,
  productName:string,
  productImage:string,
  quantityOrdered:number,
  priceEach:number,
  Status:number,
  UserID:string

}
interface Product {
  productName: String,
  productLine: String,
  productDescription: String,
  productImage: String,
  quantityInStock: Number,
  price: Number,
  ProductVendor: String,
  productDiscount:Number

}
interface User {
  userID: Number,
  firstName:String,
  lastName:String,
  Username: String,
  Email: String,
  Password: String,
  Address: String,
  DateOfBirth: String,
  PhoneNumber: Number,
  BankAccount: Number,
  BankBalance: Number,

}
@Component({
  selector: 'app-generate-reports',
  templateUrl: './generate-reports.component.html',
  styleUrls: ['./generate-reports.component.css']
})
export class GenerateReportsComponent implements OnInit {

  public orders:Order[] = []
  public products:Product[] = []
  public users:User[] = []
  constructor(public orderServ:OrdersService, public productServ: ProductService, public userServ: UserService) { }

  daily:boolean = true;
  weekly:boolean = false;
  monthly:boolean = false;
  product:boolean = false;
  customer:boolean = false;


  ngOnInit(): void {
    this.orderServ.getOrders().
    subscribe((result:Order[]) => {
      console.log(result);
      this.orders = result
    }, error => console.log(error));

    this.productServ.getProducts().
    subscribe((result:Product[]) => {
      console.log(result);
      this.products = result
    }, error => console.log(error));

    this.userServ.getUsers().
    subscribe((result:User[]) => {
      console.log(result);
      this.users = result
    }, error => console.log(error));
  }

  swap(digit:number){
    switch (digit){
      case 1:
        this.daily = true;
        this.weekly = false;
        this.monthly = false;
        this.product = false;
        this.customer = false;
        break;
      case 2:
        this.daily = false;
        this.weekly = true;
        this.monthly = false;
        this.product = false;
        this.customer = false;
        break;
      case 3:
        this.daily = false;
        this.weekly = false;
        this.monthly = true;
        this.product = false;
        this.customer = false;
        break;
      case 4:
        this.daily = false;
        this.weekly = false;
        this.monthly = false;
        this.product = true;
        this.customer = false;
        break;
      case 5:
        this.daily = false;
        this.weekly = false;
        this.monthly = false;
        this.product = false;
        this.customer = true;
        break;
      default:
        break;
    }
  }
}
