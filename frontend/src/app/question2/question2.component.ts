import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-question2',
  templateUrl: './question2.component.html',
  styleUrls: ['./question2.component.scss']
})
export class Question2Component implements OnInit {
  typeOfPlatforms: string[] = ['Netflix', 'Amazon Prime', 'Hulu'];

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  goToQuestions(page:string):void{
    this.router.navigate([`${page}`]);
  }
}
