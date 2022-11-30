import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstPAgeComponent } from './Components/first-page/first-page.component';
import { SecondPageComponent } from './Components/second-page/second-page.component';

const routes: Routes = [
  {path:'firstpage',component:FirstPAgeComponent},
  {path:'secondpage',component:SecondPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
