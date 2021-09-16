import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Product } from './product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(public http:HttpClient) { }

  checkLoginDetails(product:Product):Observable<any>{
    return this.http.post("http://localhost:9090/api/admin/signIn",product,
    {responseType:'text'});
  }


  //test data 
//   {"productName":"Admin","productLine":"ilpgroup16admin" ,"productDescription":"ilpgroup16admin" ,
//   "productImage":"ilpgroup16admin" ,"quantityInStock":"20" ,"price":"12"
//  ,"ProductVendor":"ilpgroup16admin"
//  }
adminAddProduct(product:Product):Observable<any>{
    return this.http.post("http://localhost:9090/api/admin/addProduct",product,
    {responseType:'text'});
  }



}
