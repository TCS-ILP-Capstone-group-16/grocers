import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
<<<<<<< HEAD
import { UserSignInComponent } from './user-sign-in/user-sign-in.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { UserSignUpComponent } from './user-sign-up/user-sign-up.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { DeleteEmployeeComponent } from './delete-employee/delete-employee.component';
import { GenerateReportsComponent } from './generate-reports/generate-reports.component';
=======
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { AdminhomeComponent } from './adminhome/adminhome.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import { DeleteproductComponent } from './deleteproduct/deleteproduct.component';
import { UpdateproductComponent } from './updateproduct/updateproduct.component';
import { ViewrequestComponent } from './viewrequest/viewrequest.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NotFoundComponent } from './not-found/not-found.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
<<<<<<< HEAD
>>>>>>> fcfd8fd173c56c2b7f64a552eae3229702ad9f82
=======
import { UnlockUsersComponent } from './employee/unlock-users/unlock-users.component';
import { EditEmployeeProfileComponent } from './employee/edit-employee-profile/edit-employee-profile.component';
import { PendingOrdersComponent } from './employee/update-order-status/pending-orders/pending-orders.component';
import { ShippedOrdersComponent } from './employee/update-order-status/shipped-orders/shipped-orders.component';
import { DeliveredOrdersComponent } from './employee/update-order-status/delivered-orders/delivered-orders.component';
import { CancelledOrdersComponent } from './employee/update-order-status/cancelled-orders/cancelled-orders.component';
import { OutForDeliveryOrdersComponent } from './employee/update-order-status/out-for-delivery-orders/out-for-delivery-orders.component';
>>>>>>> 30ba3366f0389f1efc52734e994fde69c4631721

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    UserSignInComponent,
    UserSignUpComponent,
    AddEmployeeComponent,
    DeleteEmployeeComponent,
    GenerateReportsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
=======
    AddproductComponent,
    AdminhomeComponent,
    AdminloginComponent,
    DeleteproductComponent,
    ViewrequestComponent,
    NotFoundComponent,
    UpdateproductComponent,
    UnlockUsersComponent,
    EditEmployeeProfileComponent,
    PendingOrdersComponent,
    ShippedOrdersComponent,
    DeliveredOrdersComponent,
    CancelledOrdersComponent,
    OutForDeliveryOrdersComponent,
  ],
  imports: [
    BrowserModule, AppRoutingModule, ReactiveFormsModule, HttpClientModule, BrowserAnimationsModule,
>>>>>>> fcfd8fd173c56c2b7f64a552eae3229702ad9f82
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
