import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserSignInComponent } from './user-sign-in/user-sign-in.component';
import { UserSignUpComponent } from './user-sign-up/user-sign-up.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { AdminhomeComponent } from './adminhome/adminhome.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import { DeleteproductComponent } from './deleteproduct/deleteproduct.component';
import { UpdateproductComponent } from './updateproduct/updateproduct.component';
import { ViewrequestComponent } from './viewrequest/viewrequest.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { DeleteEmployeeComponent } from './delete-employee/delete-employee.component';
import { GenerateReportsComponent } from './generate-reports/generate-reports.component';
import { EmployeeRegisterPasswordComponent } from './employee-register-password/employee-register-password.component';
import { EmployeeSignInComponent } from './employee-sign-in/employee-sign-in.component';
import { UserEditProfileComponent } from './user-edit-profile/user-edit-profile.component';
import { UserFundsComponent } from './user-funds/user-funds.component';
import { UserOrderStatusComponent } from './user-order-status/user-order-status.component';

const routes: Routes= [
  { path: '', component: UserSignInComponent},
  { path: 'signup', component: UserSignUpComponent},
  { path: "adminlogin", component: AdminloginComponent },
  //{ path: "", redirectTo: "adminlogin", pathMatch: "prefix" },
  //{ path: "**", component: NotFoundComponent },
  { path: "employeeSignIn", component: EmployeeSignInComponent },
  { path: "employeeRegisterPW", component: EmployeeRegisterPasswordComponent },
  { path: ":user/orderStatus", component: UserOrderStatusComponent },
  { path: ":user/editProfile", component: UserEditProfileComponent },
  { path: ":user/funds", component: UserFundsComponent },
  {
    path: "adminhome/:uname", component: AdminhomeComponent,

    children: [
      { path: "addproduct", component: AddproductComponent },
      { path: "deleteproduct", component: DeleteproductComponent },
      { path: "updateproduct", component: UpdateproductComponent },
      { path: "viewrequest", component: ViewrequestComponent },
      { path: "addemployee", component: AddEmployeeComponent },
      { path: "deleteemployee", component: DeleteEmployeeComponent },
      { path: "generatereports", component: GenerateReportsComponent }
    ]


  },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


// routing navigation rules 
// http://localhost:4200
//admin routes 
// const routes: Routes = [



//   // { path: "adminhome/:uname", component: AdminhomeComponent }, // uname is use to receive the value from a path 

//   { path: "", redirectTo: "adminlogin", pathMatch: "prefix" },
//   { path: "**", component: NotFoundComponent }


//   //end of admin routes 

// ];


