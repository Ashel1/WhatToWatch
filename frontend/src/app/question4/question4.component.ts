import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import { DataService } from '../data.service';

@Component({
  selector: 'app-question4',
  templateUrl: './question4.component.html',
  styleUrls: ['./question4.component.scss']
})
export class Question4Component implements OnInit {

  constructor(private router:Router, private data:DataService) { }
  ans4: string | undefined;
  ans3: string="";
  selectedAns: string="";
  ngOnInit(): void {
    this.data.currentans3.subscribe(ans3=>this.ans3=ans3)
    this.data.currentans4.subscribe(ans4=>this.ans4=ans4)
  }
  
  goBack(page:string):void{
    this.router.navigate([`${page}`]);
  }
  
  //Navigate to Question5
  goToQuestions(page:string):void{
    this.data.changeAns4(this.selectedAns);
    this.router.navigate([`${page}`]);
  }
  radioChange(event:any){
    this.selectedAns = event.target.value;
  }
  
}
