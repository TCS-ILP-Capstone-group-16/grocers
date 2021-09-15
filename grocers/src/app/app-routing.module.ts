import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserSignInComponent } from './user-sign-in/user-sign-in.component';
import { UserSignUpComponent } from './user-sign-up/user-sign-up.component';

const routes: Routes= [
  { path: '', component: UserSignInComponent},
  { path: 'signup', component: UserSignUpComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
