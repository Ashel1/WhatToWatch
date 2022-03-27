import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import { DataService } from '../data.service';

@Component({
  selector: 'app-question5',
  templateUrl: './question5.component.html',
  styleUrls: ['./question5.component.scss']
})
export class Question5Component implements OnInit {

  //List for Movie Release
  ans4: string | undefined;
  ans5: string | undefined;
  selectedYear: string="";
  years: string[] = ['No preference', 'Released Last Year', 'Released in the Last 3 years', 'Released in the Last 5 years ', 'Released in the Last 10 years'];
 
  constructor(private router:Router, private data:DataService) { }

  ngOnInit(): void {
    this.data.currentans4.subscribe(ans4=>this.ans4=ans4)
    this.data.currentans5.subscribe(ans5=>this.ans5=ans5)
  }
  
  //Navigate to Question6
  goToQuestions(page:string):void{
    this.data.changeAns5(this.selectedYear);
    this.router.navigate([`${page}`]);
  }
  radioChange(event:any){
    this. selectedYear= event.target.value;
  }

}
