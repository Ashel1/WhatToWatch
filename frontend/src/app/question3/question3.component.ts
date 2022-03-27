import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-question3',
  templateUrl: './question3.component.html',
  styleUrls: ['./question3.component.scss']
})
export class Question3Component implements OnInit {

  //What2Watch List of Genres
  ans2:any[]=[];
  typeOfGenres: string[] = ['Any', 'Action', 'Adventure', 'Comedy', 'Crime & Mystery', 'Fantasy', 'Historical', 'Horror', 'Romance', 'Satire', 'Science Fiction', 'Thriller', 'Western'];
  array:any[]=[];
  constructor(private router:Router, private data:DataService) { }

  ngOnInit(): void {
    this.data.currentans2.subscribe(ans2=>this.ans2=ans2)
  }

  //Navigate to Question4
  goToQuestions(page:string):void{
    this.router.navigate([`${page}`]);
  }
  AddtoArray(feature:any){
    this.array.push(feature);
}

}
