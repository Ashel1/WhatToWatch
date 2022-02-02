import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'

@Component({
  selector: 'app-question6',
  templateUrl: './question6.component.html',
  styleUrls: ['./question6.component.scss']
})
export class Question6Component implements OnInit {

  selectedRating: string | undefined;
  ratings: string[] = ['No preference', '9 +', '8 +', '7 +', '5 +'];

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  
  goToQuestions(page:string):void{
    this.router.navigate([`${page}`]);
  }

}
