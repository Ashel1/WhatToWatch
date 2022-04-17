import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { DataService } from '../data.service';
import { MovieService } from '../movie.service';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-showmovie',
  templateUrl: './showmovie.component.html',
  styleUrls: ['./showmovie.component.scss'],
  animations: [
    trigger('flipState', [
      state('active', style({
        transform: 'rotateY(179deg)'
      })),
      state('inactive', style({
        transform: 'rotateY(0)'
      })),
      transition('active => inactive', animate('500ms ease-out')),
      transition('inactive => active', animate('500ms ease-in'))
    ])
  ]
})

export class ShowmovieComponent implements OnInit {
  
  //title = "jhvyt";
  //details = " A billionaire idustrialist and genius inventor, Tony Stark (Robert Downey Jr.), is conducting weapons tests overseas, but terrorists kidnap him to force him to build a devastating weapon. Instead, he builds an armored suit and upends his captors. Returning to America, Stark refines the suit and uses it to combat crime and terrorism.";
  // platform ="Amazon";
  flip: string = 'inactive';
  user_names: string= "";
  //photo = "https://i.pinimg.com/originals/93/b3/c0/93b3c0d4745f4839a2f276427d340203.jpg";
  stringJson: string | undefined;
  stringObject: any;
  toggleFlip() {
    this.flip = (this.flip == 'inactive') ? 'active' : 'inactive';
  }

  title:string="";
  details:string="";
  platform:string="";
  photo:string="";
  rate:string="";
  time:string="";
  year:string="";
  director:string="";
  genre:string="";
  answer: any;
  ans1: string="";
  ans2: any []=[];
  ans3: string="";
  ans4: string="";
  ans5: string="";
  ans6: string="";

  
  
  constructor(private router:Router, private data:DataService, private movie:MovieService, private http :HttpClient) { }
  ngOnInit() {
    this.data.currentans1.subscribe(ans1=>this.ans1=ans1)
    this.data.currentans2.subscribe(ans2=>this.ans2=ans2)
    this.data.currentans3.subscribe(ans3=>this.ans3=ans3)
    this.data.currentans4.subscribe(ans4=>this.ans4=ans4)
    this.data.currentans5.subscribe(ans5=>this.ans5=ans5)
    this.data.currentans6.subscribe(ans6=>this.ans6=ans6)
    this.data.currentuser.subscribe(user_names=>this.user_names=user_names);

    this.answer = '{"Q1":"'+ this.ans1 +'",  "Q2":"'+this.ans2+'",  "Q3":"'+this.ans3+'",  "Q4":"'+this.ans4+'",  "Q5":"'+this.ans5+'",  "Q6":"'+this.ans6+'"}';
    
    this.stringJson = JSON.stringify(this.answer);
    //console.log("String json object :", this.stringJson);
    //console.log("Type :", typeof this.stringJson);

    this.stringObject = JSON.parse(this.answer);
    console.log("JSON object -", this.stringObject);
    
    fetch('http://localhost:3000/questionnaire', {
    method: 'POST', // or 'PUT'
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(this.stringObject),
    })
    .then(response => response.json())
    .then(currdata => {
    //console.log('Success:', currdata.data['Title']);
    console.log(currdata.data);
      this.title = currdata.data['Title'];
      this.movie.changeTitle(this.title);
      
      this.details = currdata.data['Overview'];
      this.movie.changeoverview(this.details);

      this.platform = "Netflix";
      this.movie.changeplatform(this.platform);

      this.photo = currdata.data['Link'];
      this.movie.changephoto(this.photo);

      this.time = currdata.data['RunTime'];
      this.movie.changeTime(this.time);

      this.rate = currdata.data['Rating'];
      this.movie.changeRate(this.rate);

      this.year = currdata.data['ReleaseYear'];
      this.movie.changeReleaseYear(this.year);

      this.director = currdata.data['Dir'];
      this.movie.changeDirector(this.director);

      this.genre = currdata.data['Genre'];
      this.movie.changeGenre(this.genre);
      
    })
    .catch((error) => {
    console.error('Error:', error);
});
  
  

}

  goToVideo(page:string):void{
    this.router.navigate([`${page}`]);
  }
  alert() {


    this.http.post<any>("http://localhost:3000/register", {
      Username: this.user_names,
      Movie: this.title
    })
    .subscribe({
      next: (v) => console.log(v),
      error: (e) => alert("Something went wrong!!"),
      complete: () => {
        alert("added successfully to the watchlist")
       
    }
  })
   
  }
 
  
  
}
