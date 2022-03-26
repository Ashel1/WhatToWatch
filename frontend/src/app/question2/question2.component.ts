import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-question2',
  templateUrl: './question2.component.html',
  styleUrls: ['./question2.component.scss']
})
export class Question2Component implements OnInit {

  //Viewing Platforms List
  typeOfPlatforms: string[] = ['Netflix', 'Amazon Prime', 'Hulu'];
  array:any[]=[];
  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  //Navigate to Question3
  goToQuestions(page:string):void{
    this.router.navigate([`${page}`]);
  }
  AddtoArray(feature:any){
    this.array.push(feature);
}

}
