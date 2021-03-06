import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { from, Observable, Observer } from 'rxjs';
import { ServerResponse } from './model.serverResponse';
import { Product } from './model.product';
import { User } from './model.user';
import { Ticket } from './model.ticket';
import { Order } from './model.order';
import { Items } from "./items";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  regexp = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);

  // temp_users:any = {"users":[
  //   {id:1,name:"Asis",locked:1},
  //   {id:2,name:"Smi",locked:1},
  //   {id:3,name:"Jack",locked:0},
  //   {id:4,name:"Naina",locked:1},
  //   {id:5,name:"Vetal",locked:0},
  //   {id:6,name:"Ranmicheal",locked:1},
  //   {id:7,name:"Mnaoj",locked:1},
  //   {id:8,name:"Kepa",locked:1}
  // ]}

  config:any = {
    deployed:false,
    URL:'http://localhost:',
    PORT:'9090',
    URL2:'/api'
  }

  constructor(public http:HttpClient) { }


  getUsers(): Observable<any> {
    let URL: string
    if (this.config['deployed']) {
      URL = this.config['URL2'] + '/api/user/getUserInfo'
    } else {
      URL = this.config['URL'] + this.config['PORT'] + '/api/user/getUserInfo'
    }
    console.log(`Traveling to: ${URL}`)
    return this.http.get<Product>(URL)
  }

  checkUserLogin(login: User): Observable<any> {
    return this.http.post("http://localhost:9090/api/user/userSignIn", login,{responseType:'text'});
  }

  checkUserSignup(login: User): Observable<any> {
    return this.http.post("http://localhost:9090/api/user/userSignUp", login,{responseType:'text'});
  }

  getUserByUsername(username:string):Observable<User>{
    let URL:string
    if(this.config['deployed']){
      URL = this.config['URL2']+'/api/profile/getUser/'+username;
    }else{
      URL = this.config['URL']+this.config['PORT']+'/api/profile/getUser/'+username;
    }
    console.log("[LOG]: Traveling to: " + URL)
    return this.http.get<User>(URL)
  }

  send_logout_request(){
    
  }

  get_userData(){
    let URL:string
    if(this.config['deployed']){
      URL = this.config['URL2']+'/api/profile/updateuser'
    }else{
      URL = this.config['URL']+this.config['PORT']+'/api/profile/updateuser'
    }
    return this.http.get(URL)
  }

  updateProfile(profileUpdates:any){
    let URL:string
    if(this.config['deployed']){
      URL = this.config['URL2']+'/api/profile/updateuser'
    }else{
      URL = this.config['URL']+this.config['PORT']+'/api/profile/updateuser'
    }
    console.log(`Traveling to: ${URL}`)
    return this.http.put(URL,profileUpdates).subscribe(response=>console.log(response),err=>console.log(err));
  }

  updatePassword(password_info:any):Observable<ServerResponse>{
    let username = password_info['userName']
    let URL:string
    if(this.config['deployed']){
      URL = this.config['URL2']+'/api/profile/updatepassword/'+username
    }else{
      URL = this.config['URL']+this.config['PORT']+'/api/profile/updatepassword/'+username
    }
    console.log(`Traveling to: ${URL}`)
    return this.http.put<ServerResponse>(URL,password_info)
  }

  addFunds(fundAmount:any){
    let URL:string
    if(this.config['deployed']){
      URL = this.config['URL2']+'/api/profile/addFunds'
    }else{
      URL = this.config['URL']+this.config['PORT']+'/api/profile/addFunds'
    }
    console.log(`Going to: ${URL}`)
    return this.http.post(URL,fundAmount)
  }

  signUpUser(user:any):Observable<ServerResponse>{
    let URL:string
    if(this.config['deployed']){
      URL = this.config['URL2']+'/api/auth/signup'
    }else{
      URL = this.config['URL']+this.config['PORT']+'/api/auth/signup'
    }
    return this.http.post<ServerResponse>(URL,user)
  }

  signInUser(user:any):Observable<ServerResponse>{
    let URL:string
    if(this.config['deployed']){
      URL = this.config['URL2']+'/api/auth/login'
    }else{
      URL = this.config['URL']+this.config['PORT']+'/api/auth/login'
    }
    return this.http.post<ServerResponse>(URL,user)
  }

  getProducts():Observable<Product> {
    let URL:string
    if(this.config['deployed']){
      URL = this.config['URL2']+'/api/products/getallproducts'
    }else{
      URL = this.config['URL']+this.config['PORT']+'/api/products/getallproducts'
    }
    return this.http.get<Product>(URL)
  };

  createTicket(ticket:any):Observable<ServerResponse> {
    let URL:string
    if(this.config['deployed']){
      URL = this.config['URL2']+'/api/tickets/createticket'
    }else{
      URL = this.config['URL']+this.config['PORT']+'/api/tickets/createticket'
    }
    return this.http.post<ServerResponse>(URL,ticket)
  }

  getTickets():Observable<Ticket> {
    let URL:string
    if(this.config['deployed']){
      URL = this.config['URL2']+'/api/tickets/getalltickets'
    }else{
      URL = this.config['URL']+this.config['PORT']+'/api/tickets/getalltickets'
    }
    return this.http.get<Ticket>(URL)
  }

  deleteTicket(userName:any):Observable<ServerResponse> {
    let URL:string
    if(this.config['deployed']){
      URL = this.config['URL2']+'/api/tickets/deletetticket/'
    }else{
      URL = this.config['URL']+this.config['PORT']+'/api/tickets/deletetticket/'
    }
    return this.http.delete<ServerResponse>(URL+userName)
  }
  
  createOrder(order:any):Observable<ServerResponse> {
    let URL:string
    if(this.config['deployed']){
      URL = this.config['URL2']+'/api/orders/createorder'
    }else{
      URL = this.config['URL']+this.config['PORT']+'/api/orders/createorder'
    }
    return this.http.post<ServerResponse>(URL,order)
  }
  
  getAllOrders():Observable<Order> {
    let URL:string
    if(this.config['deployed']){
      URL = this.config['URL2']+'/api/orders/getallorders'
    }else{
      URL = this.config['URL']+this.config['PORT']+'/api/orders/getallorders'
    }
    return this.http.get<Order>(URL)
  }

  // call get method to get all user data. 
  retrieveUserInfo():Observable<any>{
    return this.http.get<any>("http://localhost:9090/api/user/getUserInfo");
  }

  // call get method to get all Order details
  retrieveItemsInfo():Observable<Items[]>{
    return this.http.get<Items[]>("http://localhost:9090/api/order/getOrderDetails");
  }
  
  // update the profile page by sending updated info to the database
  updateUserProfile(email:any, pw: any, address: any, phone: any, id: any):Observable<any>{
    return this.http.put<any>("http://localhost:9090/api/user/editProfile",{Email: email, Password: pw, Address: address, PhoneNumber: phone, userID: id });
  }

  // update the user bank balance 
  updateUserBankAmount(account: any, amount: any, id: any):Observable<any> {
    return this.http.put<any>("http://localhost:9090/api/user/changeFunds", {BankAccount: account, BankBalance: amount, userID: id });
  }
  
}