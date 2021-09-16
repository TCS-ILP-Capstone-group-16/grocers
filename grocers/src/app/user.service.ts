import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { Items } from "./items"

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(public http: HttpClient) { }

   // call get method to get all user data. 
  retrieveUserInfo():Observable<any>{
    return this.http.get<any>("http://localhost:8080/api/user/getUserInfo");
  }

  // call get method to get all Order details
  retrieveItemsInfo():Observable<Items[]>{
    return this.http.get<Items[]>("http://localhost:8080/api/order/getOrderDetails");
  }
  
  // update the profile page by sending updated info to the database
  updateUserProfile(email:any, pw: any, address: any, phone: any, id: any):Observable<any>{
    return this.http.put<any>("http://localhost:8080/api/user/editProfile",{Email: email, Password: pw, Address: address, PhoneNumber: phone, userID: id });
  }

  // update the user bank balance 
  updateUserBankAmount(account: any, amount: any, id: any):Observable<any> {
    return this.http.put<any>("http://localhost:8080/api/user/changeFunds", {BankAccount: account, BankBalance: amount, userID: id });
  }

}
