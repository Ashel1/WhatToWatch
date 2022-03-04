import { ElementRef } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
//import {Movie} from '../../shared/movie'

@Component({
  selector: 'app-question1',
  templateUrl: './question1.component.html',
  styleUrls: ['./question1.component.scss']
})
export class Question1Component implements OnInit {

  //Viewing Occasion
  selectedOccasion: string | undefined;
  selectedOcc: string ="";
  occasions: any = ['Watching By Myself', 'Watching a movie with Family', 'Movie Night with Friends', 'Movie Date'];

  constructor(private router:Router, private elementRef:ElementRef) { }

  ngOnInit(): void {
  }
  
  //Navigate to Question2
  goToQuestions(page:string):void{
    this.router.navigate([`${page}`]);
  }

  radioChange(event:any){
    this.selectedOccasion = event.target.value;
  }
  
}
