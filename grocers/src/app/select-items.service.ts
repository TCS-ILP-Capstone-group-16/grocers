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
  



}
