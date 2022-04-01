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
  constructor(public dialog: MatDialog, private router:Router, private data:DataService) { }

  ngOnInit(): void {
    this.data.currentlogincheck.subscribe(logincheck=>this.logincheck=logincheck);
    console.log("check", this.logincheck);
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
}
