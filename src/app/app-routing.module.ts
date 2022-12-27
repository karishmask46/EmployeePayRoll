import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationGuard } from './Components/authentication.guard';
import { FirstPAgeComponent } from './Components/employeedetails/employeedetails.component';
import { LoginComponent } from './Components/login/login.component';
import { SecondPageComponent } from './Components/listOfEmployees/listOfemployees.component';
import { SignupComponent } from './Components/signup/signup.component';

const routes: Routes = [
  {path:'',redirectTo:'/login',pathMatch:'full'},
  {path:'employeedetails',component:FirstPAgeComponent,canActivate:[AuthenticationGuard]},
  {path:'listofemployees',component:SecondPageComponent},
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
