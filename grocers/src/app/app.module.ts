import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
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
import { UnlockUsersComponent } from './employee/unlock-users/unlock-users.component';
import { EditEmployeeProfileComponent } from './employee/edit-employee-profile/edit-employee-profile.component';
import { PendingOrdersComponent } from './employee/update-order-status/pending-orders/pending-orders.component';
import { ShippedOrdersComponent } from './employee/update-order-status/shipped-orders/shipped-orders.component';
import { DeliveredOrdersComponent } from './employee/update-order-status/delivered-orders/delivered-orders.component';
import { CancelledOrdersComponent } from './employee/update-order-status/cancelled-orders/cancelled-orders.component';
import { OutForDeliveryOrdersComponent } from './employee/update-order-status/out-for-delivery-orders/out-for-delivery-orders.component';

@NgModule({
  declarations: [
    AppComponent,
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
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
