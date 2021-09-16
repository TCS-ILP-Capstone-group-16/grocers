import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeRegisterPasswordComponent } from './employee-register-password/employee-register-password.component';
import { EmployeeSignInComponent } from './employee-sign-in/employee-sign-in.component';
import { UserEditProfileComponent } from './user-edit-profile/user-edit-profile.component';
import { UserFundsComponent } from './user-funds/user-funds.component';
import { UserOrderStatusComponent } from './user-order-status/user-order-status.component';


const routes: Routes = [
  { path: "employeeSignIn", component: EmployeeSignInComponent },
  { path: "employeeRegisterPW", component: EmployeeRegisterPasswordComponent },
  { path: ":user/orderStatus", component: UserOrderStatusComponent },
  { path: ":user/editProfile", component: UserEditProfileComponent },
  { path: ":user/funds", component: UserFundsComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
