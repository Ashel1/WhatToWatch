import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
@Component({
  selector: 'app-question2',
  templateUrl: './question2.component.html',
  styleUrls: ['./question2.component.scss']
})
export class Question2Component implements OnInit {

  //Viewing Platforms List
  ans1: string | undefined;
  //ans2: string | undefined;
  typeOfPlatforms: string[] = ['Netflix', 'Amazon Prime', 'Hulu'];
  array:any[]=[];
  constructor(private router:Router, private data:DataService) { }
  
  ngOnInit(): void {
    this.data.currentans1.subscribe(ans1=>this.ans1=ans1)
    //this.data.currentans2.subscribe(ans2=>this.ans2=ans2)
    }

  //Navigate to Question3
  goToQuestions(page:string):void{
    this.router.navigate([`${page}`]);
  }
  AddtoArray(feature:any){
    this.array.push(feature);
}

}
