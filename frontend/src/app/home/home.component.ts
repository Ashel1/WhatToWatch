import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {

  logincheck:string="";

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  goToQuestions(page:string):void{
    this.router.navigate([`${page}`]);
  }


}
