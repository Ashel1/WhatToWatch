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
  ans3: string="";
  typeOfGenres: string[] = ['Action', 'Adventure', 'Comedy', 'Crime & Mystery', 'Fantasy', 'Historical', 'Horror', 'Romance', 'Satire', 'Science Fiction', 'Thriller', 'Western'];
  selectedGenre: string="";
  array=[]
  constructor(private router:Router, private data:DataService) { }

  ngOnInit(): void {
    this.data.currentans2.subscribe(ans2=>this.ans2=ans2)
    this.data.currentans3.subscribe(ans3=>this.ans3=ans3)
  }

  goBack(page:string):void{
    /**for(var i of this.array){
      this.data.changeAns2(i);
    }*/
    this.router.navigate([`${page}`]);
  }
  //Navigate to Question4
  goToQuestions(page:string):void{
    this.data.changeAns3(this.selectedGenre);
    this.router.navigate([`${page}`]);
  }
  radioChange(event:any){
    this.selectedGenre= event.target.value;
  }

}
