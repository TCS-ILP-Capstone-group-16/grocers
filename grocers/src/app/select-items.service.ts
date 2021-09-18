import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Ticket } from './ticket';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SelectItemsService {
  config: any = {
    deployed: false,
    URL: 'http://localhost:',
    PORT: '9090',
    URL2: '/api'
  }

  constructor(public http: HttpClient) { }
  //test data 
  //   {"ticketName":"Admin","ticketLine":"ilpgroup16admin" ,"ticketDescription":"ilpgroup16admin" ,
  //   "ticketImage":"ilpgroup16admin" ,"quantityInStock":"20" ,"price":"12"
  //  ,"ProductVendor":"ilpgroup16admin"
  //  }
  
  getProduct(): Observable<any> {
    let URL: string
    //should we use api or v1 talk to them
    if (this.config['deployed']) {
      URL = this.config['URL2'] + '/api/userhome/select-items'
    } else {
      URL = this.config['URL'] + this.config['PORT'] + '/api/userhome/select-items'
    }

    return this.http.get(URL)

  }

  // updateUserProfile():Observable<any>{
  //   return this.http.put<any>("http://localhost:9090/api/userhome/select-items",{Email: email, Password: pw, Address: address, PhoneNumber: phone, userID: id });
  // }


}
