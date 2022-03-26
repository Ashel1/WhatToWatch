import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-question3',
  templateUrl: './question3.component.html',
  styleUrls: ['./question3.component.scss']
})
export class Question3Component implements OnInit {

  //What2Watch List of Genres
  typeOfGenres: string[] = ['Any', 'Action', 'Adventure', 'Comedy', 'Crime & Mystery', 'Fantasy', 'Historical', 'Horror', 'Romance', 'Satire', 'Science Fiction', 'Thriller', 'Western'];
  array:any[]=[];
  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  //Navigate to Question4
  goToQuestions(page:string):void{
    this.router.navigate([`${page}`]);
  }
  AddtoArray(feature:any){
    this.array.push(feature);
}

}
