


import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from './product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminproductService {
  config: any = {
    deployed: false,
    URL: 'http://localhost:',
    PORT: '9090',
    URL2: '/api'
  }

  constructor(public http: HttpClient) { }


  //test data 
  //   {"productName":"Admin","productLine":"ilpgroup16admin" ,"productDescription":"ilpgroup16admin" ,
  //   "productImage":"ilpgroup16admin" ,"quantityInStock":"20" ,"price":"12"
  //  ,"ProductVendor":"ilpgroup16admin"
  //  }


  admindeleteProduct(id: string): Observable<any> {
    let URL: string
    //should we use api or v1 talk to them
    if (this.config['deployed']) {
      URL = this.config['URL2'] + '/api/admin/deleteProduct/' + id
    } else {
      URL = this.config['URL'] + this.config['PORT'] + '/api/admin/deleteProduct/' + id
    }


    return this.http.delete(URL);


  }

  adminupdateProduct(id: string, data: any): Observable<any> {
    let URL: string
    //should we use api or v1 talk to them
    if (this.config['deployed']) {
      URL = this.config['URL2'] + '/api/admin/updateProduct/' + id
    } else {
      URL = this.config['URL'] + this.config['PORT'] + '/api/admin/updateProduct/' + id
    }


    return this.http.put(URL, data);


  }



  adminAddProduct(product: Product): Observable<any> {
    let URL: string
    //should we use api or v1 talk to them
    if (this.config['deployed']) {
      URL = this.config['URL2'] + '/api/admin/addProduct'
    } else {
      URL = this.config['URL'] + this.config['PORT'] + '/api/admin/addProduct'
    }

    return this.http.post(URL, product,
      { responseType: 'text' });
  }



}