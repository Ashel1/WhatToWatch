import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'

@Component({
  selector: 'app-question4',
  templateUrl: './question4.component.html',
  styleUrls: ['./question4.component.scss']
})
export class Question4Component implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  
  goToQuestions(page:string):void{
    this.router.navigate([`${page}`]);
  }
  
}
