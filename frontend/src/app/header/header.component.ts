import { Component, OnInit } from '@angular/core';
import { MatDialog} from '@angular/material/dialog';
import { LoginComponent } from '../login/login.component';
import {MatDialogConfig} from "@angular/material/dialog";
import {Router} from '@angular/router'
import { DataService } from '../data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  logincheck:string="";
  user_names: string= "";
  constructor(public dialog: MatDialog, private router:Router, private data:DataService) { }

  ngOnInit(): void {
    this.data.currentlogincheck.subscribe(logincheck=>this.logincheck=logincheck);
    this.data.currentuser.subscribe(user_names=>this.user_names=user_names);
    console.log("check", this.logincheck);
    console.log(this.user_names);
  }

  //User Login Form
  openLoginForm(): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
   let dialogRef = this.dialog.open(LoginComponent, {width: '500px', height: '450px'});
  }

  //Link to Homepage
  goToPage(page:string):void{
    this.router.navigate([`${page}`]);
  }

  //Link to About page
  goToAbout(page:string):void{
    this.router.navigate([`${page}`]);
  }

  scroll(el: HTMLElement) {
    el.scrollIntoView();
  }
  loggedout(page:string):void
  {
    this.data.changeLoginCheck("not login");
    this.router.navigate([`${page}`]);
  }
}
