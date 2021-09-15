import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { AdminhomeComponent } from './adminhome/adminhome.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import { DeleteproductComponent } from './deleteproduct/deleteproduct.component';
import { UpdateproductComponent } from './updateproduct/updateproduct.component';
import { ViewrequestComponent } from './viewrequest/viewrequest.component';
import { NotFoundComponent } from './not-found/not-found.component';

// routing navigation rules 
// http://localhost:4200
//admin routes 
const routes: Routes = [
  { path: "adminlogin", component: AdminloginComponent },

  {
    path: "adminhome/:uname", component: AdminhomeComponent,

    children: [
      { path: "addproduct", component: AddproductComponent },
      { path: "deleteproduct", component: DeleteproductComponent },
      { path: "updateproduct", component: UpdateproductComponent },
      { path: "viewrequest", component: ViewrequestComponent }
    ]


  },





  // { path: "adminhome/:uname", component: AdminhomeComponent }, // uname is use to receive the value from a path 

  { path: "", redirectTo: "adminlogin", pathMatch: "prefix" },
  { path: "**", component: NotFoundComponent }


  //end of admin routes 




];







@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
