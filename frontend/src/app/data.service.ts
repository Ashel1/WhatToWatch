import { Injectable } from '@angular/core';
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private ans1 = new BehaviorSubject<string>("ans1");
  currentans1 = this.ans1.asObservable();

  private ans2 = new BehaviorSubject<any[]>([]);
  currentans2 = this.ans2.asObservable();

  private ans3 = new BehaviorSubject<any[]>([]);
  currentans3 = this.ans3.asObservable();

  private ans4 = new BehaviorSubject<string>("ans4");
  currentans4 = this.ans4.asObservable();

  private ans5 = new BehaviorSubject<string>("ans5");
  currentans5 = this.ans5.asObservable();

  private ans6 = new BehaviorSubject<string>("ans6");
  currentans6 = this.ans6.asObservable();

  private logincheck = new BehaviorSubject<string>("not login");
  currentlogincheck = this.logincheck.asObservable();

  private user_name = new BehaviorSubject<string>(" ");
  currentuser = this.user_name.asObservable();


  constructor() { }
  changeAns1(ans: string){
    this.ans1.next(ans);
  }

  changeAns2(ans:any){
    this.ans2.next(this.ans2.getValue().concat([ans]));
    //this.ans2.next([this.ans2.getValue(),ans])
  }
  changeAns3(ans: string){
    this.ans3.next(this.ans3.getValue().concat([ans]));
  }

  changeAns4(ans: string){
    this.ans4.next(ans);
  }
  changeAns5(ans: string){
    this.ans5.next(ans);
  }

  changeAns6(ans: string){
    this.ans6.next(ans);
  }

  changeLoginCheck(ans: string){
    this.logincheck.next(ans);
  }

  changeusername(ans: string){
    this.user_name.next(ans);
  }
}
