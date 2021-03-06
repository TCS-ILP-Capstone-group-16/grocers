import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserSignInComponent } from './user-sign-in/user-sign-in.component';
import { FormsModule } from '@angular/forms';
import { UserSignUpComponent } from './user-sign-up/user-sign-up.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { DeleteEmployeeComponent } from './delete-employee/delete-employee.component';
import { GenerateReportsComponent } from './generate-reports/generate-reports.component';
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
import { UnlockUsersComponent } from './unlock-users/unlock-users.component';
import { EditEmployeeProfileComponent } from './edit-employee-profile/edit-employee-profile.component';
import { PendingOrdersComponent } from './update-order-status/pending-orders/pending-orders.component';
import { ShippedOrdersComponent } from './update-order-status/shipped-orders/shipped-orders.component';
import { DeliveredOrdersComponent } from './update-order-status/delivered-orders/delivered-orders.component';
import { CancelledOrdersComponent } from './update-order-status/cancelled-orders/cancelled-orders.component';
import { OutForDeliveryOrdersComponent } from './update-order-status/out-for-delivery-orders/out-for-delivery-orders.component';
import { EmployeeSignInComponent } from './employee-sign-in/employee-sign-in.component';
import { UserOrderStatusComponent } from './user-order-status/user-order-status.component';
import { UserEditProfileComponent } from './user-edit-profile/user-edit-profile.component';
import { UserFundsComponent } from './user-funds/user-funds.component';
import { EmployeeRegisterPasswordComponent } from './employee-register-password/employee-register-password.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { UserhomeComponent } from './userhome/userhome.component';
import { RaiseticketComponent } from './raiseticket/raiseticket.component';
import { SelectItemsComponent } from './select-items/select-items.component';
import { DeleteItemsComponent } from './delete-items/delete-items.component';
import { ViewItemsComponent } from './view-items/view-items.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { EmployeeComponent } from './employee/employee.component';
import { SendRequestComponent } from './send-request/send-request.component';
import { UpdateOrderStatusComponent } from './update-order-status/update-order-status.component';

@NgModule({
  declarations: [
    AppComponent,
    UserSignInComponent,
    UserSignUpComponent,
    AddEmployeeComponent,
    DeleteEmployeeComponent,
    GenerateReportsComponent,
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
    EmployeeSignInComponent,
    UserOrderStatusComponent,
    UserEditProfileComponent,
    UserFundsComponent,
    EmployeeRegisterPasswordComponent,
    UserDashboardComponent,
    UserhomeComponent,
    RaiseticketComponent,
    SelectItemsComponent,
    DeleteItemsComponent,
    ViewItemsComponent,
    CheckoutComponent,
    EmployeeComponent,
    SendRequestComponent,
    UpdateOrderStatusComponent

  ],
  imports: [
    BrowserModule, 
    AppRoutingModule, 
    ReactiveFormsModule, 
    HttpClientModule, 
    BrowserAnimationsModule,
    FormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
