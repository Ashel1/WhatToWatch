import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'

@Component({
  selector: 'app-question5',
  templateUrl: './question5.component.html',
  styleUrls: ['./question5.component.scss']
})
export class Question5Component implements OnInit {

  //List for Movie Release
  selectedYear: string | undefined;
  years: string[] = ['No preference', 'Released Last Year', 'Released in the Last 3 years', 'Released in the Last 5 years ', 'Released in the Last 10 years'];
 
  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  
  //Navigate to Question6
  goToQuestions(page:string):void{
    this.router.navigate([`${page}`]);
  }
  radioChange(event:any){
    this. selectedYear= event.target.value;
  }

}
