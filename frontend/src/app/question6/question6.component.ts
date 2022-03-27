import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import { DataService } from '../data.service';

@Component({
  selector: 'app-question6',
  templateUrl: './question6.component.html',
  styleUrls: ['./question6.component.scss']
})
export class Question6Component implements OnInit {

  //List of Movie Rating
  ans5: string|undefined;
  ans6: string|undefined;
  selectedRating: string="";
  ratings: string[] = ['No preference', '9 +', '8 +', '7 +', '5 +'];

  constructor(private router:Router, private data:DataService) { }

  ngOnInit(): void {
    this.data.currentans5.subscribe(ans5=>this.ans5=ans5)
    this.data.currentans6.subscribe(ans6=>this.ans6=ans6)
  }
  
  //Navigate to next page
  goToQuestions(page:string):void{
    this.data.changeAns6(this.selectedRating);
    this.router.navigate([`${page}`]);
  }
  radioChange(event:any){
    this. selectedRating= event.target.value;
  }

}
