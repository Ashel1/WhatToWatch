import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './home/home.component'
import { Question1Component } from './question1/question1.component';
import { Question2Component } from './question2/question2.component';

const routes: Routes = [
  {path: '' , component: HomeComponent},
  {path:'Question1', component: Question1Component},
  {path:'Question2', component: Question2Component}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
