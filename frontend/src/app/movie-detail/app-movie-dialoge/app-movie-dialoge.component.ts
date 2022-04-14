import { Component, OnInit } from '@angular/core';
import { Inject, ViewEncapsulation } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { DomSanitizer } from '@angular/platform-browser';
@Component({
  selector: 'app-app-movie-dialoge',
  templateUrl: './app-movie-dialoge.component.html',
  styleUrls: ['./app-movie-dialoge.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppMovieDialogeComponent implements OnInit {
  safeUrl: any;
  constructor(private _sanitizer : DomSanitizer ) { }

  ngOnInit(): void {
    this.safeUrl =this._sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/8ugaeA-nMTc');
  }
 

}
