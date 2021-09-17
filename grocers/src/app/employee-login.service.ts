import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { EmployeeLogin } from './employee-login';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(public http: HttpClient) { }

  // validated the employee account
  employeeLoginValidation(loginInfo: EmployeeLogin): Observable<any> {
    return this.http.post("http://localhost:9090/api/employee/checkLogin", loginInfo, { responseType: "text" });
  }

  // change the default password
  employeeNewPassword(employeeInfo: EmployeeLogin): Observable<any> {
    return this.http.post("http://localhost:9090/api/employee/changePassword", employeeInfo, { responseType: "text" });
  }
}
