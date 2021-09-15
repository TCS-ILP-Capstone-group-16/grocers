import { HttpClient } from '@angular/common/http';
import{Admin} from './admin'
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(public http: HttpClient) { }


  checkAdminLoginDetails(login: Admin): Observable<any> {
    return this.http.post("http://localhost:9090/api/admin/signIn", login,{responseType:'text'});
  }









}
