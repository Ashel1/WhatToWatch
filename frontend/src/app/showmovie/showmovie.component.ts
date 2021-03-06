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
  stringJson1: string | undefined;
 
  stringObject1: any;
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
  ylink:string="";
  hlink:string = "";
  reviews:string = "";
  Cast:string = "";
  answer: any;
  user:any;
  ans1: string="";
  ans2: any []=[];
  ans3: string="";
  ans4: string="";
  ans5: string="";
  ans6: string="";
  logincheck:string="";  
  
  constructor(private router:Router, private data:DataService, private movie:MovieService, private http :HttpClient) { }
  ngOnInit() {
    this.data.currentans1.subscribe(ans1=>this.ans1=ans1)
    this.data.currentans2.subscribe(ans2=>this.ans2=ans2)
    this.data.currentans3.subscribe(ans3=>this.ans3=ans3)
    this.data.currentans4.subscribe(ans4=>this.ans4=ans4)
    this.data.currentans5.subscribe(ans5=>this.ans5=ans5)
    this.data.currentans6.subscribe(ans6=>this.ans6=ans6)
    this.data.currentuser.subscribe(user_names=>this.user_names=user_names)
    this.data.currentlogincheck.subscribe(logincheck=>this.logincheck=logincheck);

    this.answer = '{"Q1":"'+ this.ans1 +'",  "Q2":"'+this.ans2+'",  "Q3":"'+this.ans3+'",  "Q4":"'+this.ans4+'",  "Q5":"'+this.ans5+'",  "Q6":"'+this.ans6+'"}';
    this.user = '{"Username":"'+ this.user_names +'"}';

    this.stringJson = JSON.stringify(this.answer);
    this.stringObject = JSON.parse(this.answer);
    //console.log("String json object :", this.stringJson);
    //console.log("Type :", typeof this.stringJson);
    this.stringJson1 = JSON.stringify(this.user);
    
    this.stringObject1 = JSON.parse(this.user);
    console.log("JSON object -", this.stringObject);
    
    fetch('https://what2watchbackend.herokuapp.com/questionnaire', {
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
    if (currdata.data['Amazonprime'] == "1")
    {
      this.movie.changeplatform("Amazon prime");
      this.platform = "Amazon Prime";

    }

    else if (currdata.data['Hulu'] == "1")
    {
      this.movie.changeplatform("Hulu");
      this.platform = "Hulu";
    }

   else if (currdata.data['Netflix'] == "1")
    {
      this.movie.changeplatform("Netflix");
      this.platform = "Netflix";
    }

      this.title = currdata.data['Title'];
      this.movie.changeTitle(this.title);
      
      this.details = currdata.data['Overview'];
      this.movie.changeoverview(this.details);    

      this.photo = currdata.data['Poster_Link'];
      this.movie.changephoto(this.photo);

      this.time = currdata.data['Runtime'];
      this.movie.changeTime(this.time);

      this.rate = currdata.data['IMDB_Rating'];
      this.movie.changeRate(this.rate);

      this.year = currdata.data['Released_Year'];
      this.movie.changeReleaseYear(this.year);

      this.director = currdata.data['Director'];
      this.movie.changeDirector(this.director);

      this.genre = currdata.data['Genre'];
      this.movie.changeGenre(this.genre);


      this.ylink = currdata.data['Youtube_Link'];
      this.movie.changeylink(this.ylink);
      
      this.hlink= currdata.data['Hlink'];
      this.movie.changehphoto(this.hlink);
      
      this.reviews= currdata.data['No_of_Votes'];
      this.movie.changereview(this.reviews);
      this.Cast= currdata.data['Cast'];
      this.movie.changeCast(this.Cast);
      
    })
    .catch((error) => {
    console.error('Error:', error);
});


  

}

  goToVideo(page:string):void{
    this.router.navigate([`${page}`]);
  }

  getRec():void{
    fetch('https://what2watchbackend.herokuapp.com/questionnaire', {
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

    if (currdata.data['Amazonprime'] == "1")
    {
      this.movie.changeplatform("Amazon prime");
      this.platform = "Amazon Prime";

    }

    else if (currdata.data['Hulu'] == "1")
    {
      this.movie.changeplatform("Hulu");
      this.platform = "Hulu";
    }

   else if (currdata.data['Netflix'] == "1")
    {
      this.movie.changeplatform("Netflix");
      this.platform = "Netflix";
    }

      this.title = currdata.data['Title'];
      this.movie.changeTitle(this.title);
      
      this.details = currdata.data['Overview'];
      this.movie.changeoverview(this.details);    

      this.photo = currdata.data['Poster_Link'];
      this.movie.changephoto(this.photo);

      this.time = currdata.data['Runtime'];
      this.movie.changeTime(this.time);

      this.rate = currdata.data['IMDB_Rating'];
      this.movie.changeRate(this.rate);

      this.year = currdata.data['Released_Year'];
      this.movie.changeReleaseYear(this.year);

      this.director = currdata.data['Director'];
      this.movie.changeDirector(this.director);

      this.genre = currdata.data['Genre'];
      this.movie.changeGenre(this.genre);


      this.ylink = currdata.data['Youtube_Link'];
      this.movie.changeylink(this.ylink);
      
      this.hlink= currdata.data['Hlink'];
      this.movie.changehphoto(this.hlink);
      this.reviews= currdata.data['No_of_Votes'];
      this.movie.changereview(this.reviews);
      
      this.Cast= currdata.data['Cast'];
      this.movie.changeCast(this.Cast);
      
      
    })
    .catch((error) => {
    console.error('Error:', error);
});

  }

  gotoPlatform()
  {
    if(this.platform == "Netflix")
    {
      window.location.href = "https://www.netflix.com/";
    }
    else if(this.platform == "Amazon Prime")
    {
      window.location.href = "https://www.amazon.com/Amazon-Video/b/?&node=2858778011&ref=dvm_MLP_ROWNA_US_1";
    }
    else if (this.platform == "Hulu"){
      window.location.href = "https://www.hulu.com/";
    }
    else if(this.platform == "")
    {
      window.alert("No movie recommended! Please try again!")
    }
  
  }


  alert() {
   window.alert("Successfully added to watch list");

    this.http.post<any>("https://what2watchbackend.herokuapp.com/addWatchLater", {
      Username: this.user_names,
      Movie: this.title
    })
    .subscribe({
      next: (v) => console.log(v),
      error: (e) => alert("Something went wrong!!"),
      complete: () => {
        //alert("added successfully to the watchlist")
       
    }
  })
   
  }
 
  
  
}
