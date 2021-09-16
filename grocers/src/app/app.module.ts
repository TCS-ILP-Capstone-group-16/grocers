import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { EmployeeSignInComponent } from './employee-sign-in/employee-sign-in.component';
import { UserOrderStatusComponent } from './user-order-status/user-order-status.component';
import { UserEditProfileComponent } from './user-edit-profile/user-edit-profile.component';
import { UserFundsComponent } from './user-funds/user-funds.component';
import { EmployeeRegisterPasswordComponent } from './employee-register-password/employee-register-password.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeSignInComponent,
    UserOrderStatusComponent,
    UserEditProfileComponent,
    UserFundsComponent,
    EmployeeRegisterPasswordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
