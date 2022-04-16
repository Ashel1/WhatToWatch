import { Injectable } from '@angular/core';
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor() { }

  private title = new BehaviorSubject<string>("");
  currenttitle = this.title.asObservable();
 
  private rate = new BehaviorSubject<string>("");
  currentrate = this.rate.asObservable();

  private overview = new BehaviorSubject<string>("");
  currentoverview = this.overview.asObservable();
 
  private releaseyear = new BehaviorSubject<string>("");
  currentreleaseyear = this.releaseyear.asObservable();
 
  private time = new BehaviorSubject<string>("");
  currenttime = this.time.asObservable();
 
  private genre = new BehaviorSubject<string>("");
  currentgenre = this.genre.asObservable();
 
  private director = new BehaviorSubject<string>("");
  currentdirector = this.director.asObservable();
 
  private platform = new BehaviorSubject<string>("");
  currentplatform = this.platform.asObservable();
 
  private photo = new BehaviorSubject<string>("");
  currentphoto = this.photo.asObservable();
 
  
  changeTitle(ans: string){
    this.title.next(ans);
  }
  changeRate(ans: string){
    this.rate.next(ans);
  }
  changeoverview(ans: string){
    this.overview.next(ans);
  }
  changeReleaseYear(ans: string){
    this.releaseyear.next(ans);
  }
  changeTime(ans: string){
    this.time.next(ans);
  }
  changeGenre(ans: string){
    this.genre.next(ans);
  }
  changeDirector(ans: string){
    this.director.next(ans);
  }
  changeplatform(ans: string){
    this.platform.next(ans);
  }
  changephoto(ans: string){
    this.photo.next(ans);
  }
}
