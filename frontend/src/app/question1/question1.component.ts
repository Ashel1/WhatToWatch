import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'

@Component({
  selector: 'app-question1',
  templateUrl: './question1.component.html',
  styleUrls: ['./question1.component.scss']
})
export class Question1Component implements OnInit {

  //Viewing Occasion
  selectedOccasion: string | undefined;
  occasions: string[] = ['Watching By Myself', 'Watching a movie with Family', 'Movie Night with Friends', 'Movie Date'];

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  
  //Navigate to Question2
  goToQuestions(page:string):void{
    this.router.navigate([`${page}`]);
  }
  
}
