import { Component, OnInit } from '@angular/core';
import { MatDialog} from '@angular/material/dialog';
import {MatDialogConfig} from "@angular/material/dialog";
import {  AppMovieDialogeComponent } from '../movie-detail/app-movie-dialoge/app-movie-dialoge.component';;
import { DomSanitizer } from '@angular/platform-browser';
import { MovieService } from '../movie.service';
import { HttpClient } from '@angular/common/http';
import { DataService } from '../data.service';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent implements OnInit {

  
  
  public video: boolean | undefined;
  safeUrl: any;
  title: string|undefined;
  details: string|undefined;
  photo: string|undefined;
  time: string|undefined;
  rate: string|undefined;
  releaseyear: string|undefined;
  genre: string|undefined;
  director: string|undefined;
  platform: string|undefined;
  ylink: string|undefined;
  hlink: string|undefined;
  Cast: string|undefined;
  reviews: string|undefined;
  user_names: string= "";
  logincheck:string="";  
  
  constructor(private dialog: MatDialog, private _sanitizer: DomSanitizer, private movie:MovieService, private http :HttpClient,private data:DataService) { }

  ngOnInit(): void {
    this.movie.currenttitle.subscribe(title=>this.title=title)
    this.movie.currentoverview.subscribe(details=>this.details=details)
    this.movie.currentphoto.subscribe(photo=>this.photo=photo)
    this.movie.currenttime.subscribe(time=>this.time=time)
    this.movie.currentrate.subscribe(rate=>this.rate=rate)
    this.movie.currentreleaseyear.subscribe(releaseyear=>this.releaseyear=releaseyear)
    this.movie. currentgenre.subscribe(genre=>this.genre=genre)
    this.movie.currentdirector.subscribe(director=>this.director=director)
    this.movie.currentplatform.subscribe(platform=>this.platform=platform)
    this.movie.currentylink.subscribe(ylink=>this.ylink=ylink)
    this.movie.currenthphoto.subscribe(hlink=>this.hlink=hlink)
    this.movie.currentreview.subscribe(reviews=>this.reviews=reviews)
    this.movie.currentcast.subscribe(Cast=>this.Cast=Cast)
    this.data.currentuser.subscribe(user_names=>this.user_names=user_names)
    this.data.currentlogincheck.subscribe(logincheck=>this.logincheck=logincheck)

  }
  openDialogMovie(video:any): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
   let dialogRef = this.dialog.open( AppMovieDialogeComponent , {width: '900px', height: '600px'});

   //try
  
  
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
