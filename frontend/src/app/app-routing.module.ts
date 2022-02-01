import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Question1Component } from './question1/question1.component';
import {HomeComponent} from './home/home.component'

const routes: Routes = [
  {path: '' , component: HomeComponent},
  {path:'Question1', component: Question1Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
