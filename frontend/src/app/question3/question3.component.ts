import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-question3',
  templateUrl: './question3.component.html',
  styleUrls: ['./question3.component.scss']
})
export class Question3Component implements OnInit {

  typeOfGenres: string[] = ['Action', 'Adventure', 'Comedy', 'Crime & Mystery', 'Fantasy', 'Historical', 'Horror', 'Romance', 'Satire', 'Science Fiction', 'Thriller', 'Western'];

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  goToQuestions(page:string):void{
    this.router.navigate([`${page}`]);
  }

}
