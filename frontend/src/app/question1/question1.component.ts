import { ElementRef } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import { DataService } from '../data.service';

@Component({
  selector: 'app-question1',
  templateUrl: './question1.component.html',
  styleUrls: ['./question1.component.scss']
})
export class Question1Component implements OnInit {
  
  //Viewing Occasion
  ans1: string | undefined;
  selectedOccasion: string ="";
  selectedOcc: string ="";
  occasions: any = ['Watching By Myself', 'Watching a movie with Family', 'Movie Night with Friends', 'Movie Date'];

  constructor(private router:Router, private elementRef:ElementRef, private data:DataService) { }

  ngOnInit():void {
    this.data.currentans1.subscribe(ans1=>this.ans1=ans1)
  }
  
  //Navigate to Question2
  goToQuestions(page:string):void{
    this.data.changeAns1(this.selectedOccasion);
    this.router.navigate([`${page}`]);
  }

  goBack(page:string):void{
    this.router.navigate([`${page}`]);
  }

  radioChange(event:any){
    //console.log("hiii"+typeof(event.target.value))
    //if(typeof(event.target.value) !== 'undefined'){
      this.selectedOccasion = event.target.value;
      console.log("Q1"+event.target.value)
    //}
  }

}
