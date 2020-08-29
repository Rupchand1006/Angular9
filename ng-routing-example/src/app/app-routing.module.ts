import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PayrollComponent } from './payroll/payroll.component';
import { ProfileComponent } from './profile/profile.component';
import { HrComponent } from './hr/hr.component';
import { LearningComponent } from './learning/learning.component';


const routes: Routes = [
  {path: "home",redirectTo:"/home",pathMatch:"full"},
  {path: "payroll", component: PayrollComponent},
  {path: "profile", component: ProfileComponent},
  {path:"hr", component:HrComponent},
  {path:"learning", component: LearningComponent},
  {path:"", component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
