import { Injectable } from '@angular/core';
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor() { }

  private title = new BehaviorSubject<string>("");
  currenttitle = this.title.asObservable();

  changeTitle(ans: string){
    this.title.next(ans);
  }
}
