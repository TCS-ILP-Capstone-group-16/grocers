import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ServerResponse } from './model.serverResponse';
import { Observable } from 'rxjs';
import { Employee} from './model.employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  config:any = {
    deployed:false,
    URL:'http://localhost:',
    PORT:'4200',
    URL2:'/api'
  }

  constructor(public http:HttpClient) { }


  addEmployee(signup: Employee): Observable<any> {
    return this.http.post("http://localhost:9090/api/admin/addEmp", signup,{responseType:'text'});
  }

  deleteEmployee(remove: Employee): Observable<any> {
    return this.http.post("http://localhost:9090/api/admin/delEmp", remove,{responseType:'text'});
  }

  sendCredentials(employee:any):Observable<ServerResponse>{
    let URL:string
    if(this.config['deployed']){
      URL = this.config['URL2']+"/api/employees/login"
    }else{
      URL = this.config["URL"]+this.config["PORT"]+"/api/employees/login"
    }
    console.log("[LOG]: Going to: " + URL)
    return this.http.post<ServerResponse>(URL,employee)
  }


  getEmployeeById(emp_info:any):Observable<ServerResponse>{
    let emp_id = emp_info['id']
    let URL:string
    if(this.config['deployed']){
      URL = this.config['URL2']+'/api/employees/getEmployeeById/'+emp_id
    }else{
      URL = this.config['URL']+this.config['PORT']+'/api/employees/getEmployeeById/'+emp_id
    }
    console.log(`Traveling to: ${URL}`)
    return this.http.get<ServerResponse>(URL)
  }

  updatePassword(password_info:any):Observable<ServerResponse>{
    let emp_id = password_info['id']
    let URL:string
    if(this.config['deployed']){
      URL = this.config['URL2']+'/api/employees/updatepassword/'+emp_id
    }else{
      URL = this.config['URL']+this.config['PORT']+'/api/employees/updatepassword/'+emp_id
    }
    console.log(`Traveling to: ${URL}`)
    return this.http.put<ServerResponse>(URL,password_info)
  }
  getEmployee(employee:any):Observable<Employee>{
    let URL:string
    if(this.config['deployed']){
      URL = this.config['URL2']+"/api/employees/getemployee/"+employee
    }else{
      URL = this.config["URL"]+this.config["PORT"]+"/api/employees/getemployee/"+employee
    }
    console.log("[LOG]: Going to: " + URL)
    return this.http.get<Employee>(URL)
  }

  passwordChanged(employee:any, id:any):Observable<ServerResponse>{
    let URL:string
    if(this.config['deployed']){
      URL = this.config['URL2']+"/api/employees/updateemployee/"+id
    }else{
      URL = this.config["URL"]+this.config["PORT"]+"/api/employees/updateemployee/"+id
    }
    console.log("[LOG]: Going to: " + URL)
    return this.http.put<ServerResponse>(URL,employee)
  }
}