import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Question1Component } from './question1/question1.component';
import {HomeComponent} from './home/home.component'
import { CommonModule } from '@angular/common';
import { SignupComponent } from './signup/signup.component';
const routes: Routes = [
  {path: '' , component: HomeComponent},
  {path:'Question1', component: Question1Component},
  {path:'Signup', component: SignupComponent}
];

@NgModule({
  imports: [CommonModule,RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
