import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './home/home.component'
import { Question1Component } from './question1/question1.component';
import { Question2Component } from './question2/question2.component';
import { CommonModule } from '@angular/common';
import { SignupComponent } from './signup/signup.component';
import { Question3Component } from './question3/question3.component';
import { Question4Component } from './question4/question4.component';
import { Question5Component } from './question5/question5.component';
import { Question6Component } from './question6/question6.component';
import { AboutComponent } from './about/about.component';
import{MovieRecommendComponent} from './movie-recommend/movie-recommend.component';
const routes: Routes = [
  {path: 'Home', component: HomeComponent},
  { path: '', redirectTo: '/Home', pathMatch: 'full' },
  {path:'Signup', component: SignupComponent},
  {path:'About', component: AboutComponent},
  {path:'Movie', component: MovieRecommendComponent},
  {path:'Question1', component: Question1Component},
  {path:'Question2', component: Question2Component},
  {path:'Question3', component: Question3Component},
  {path:'Question4', component: Question4Component},
  {path:'Question5', component: Question5Component},
  {path:'Question6', component: Question6Component}
];

@NgModule({
  imports: [CommonModule,RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
