import { Component, OnInit } from '@angular/core';
import { Inject, ViewEncapsulation } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { DomSanitizer } from '@angular/platform-browser';
import { MovieService } from '../../movie.service';

@Component({
  selector: 'app-app-movie-dialoge',
  templateUrl: './app-movie-dialoge.component.html',
  styleUrls: ['./app-movie-dialoge.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppMovieDialogeComponent implements OnInit {
  safeUrl: any;
  ylink: string="";
  constructor(private _sanitizer : DomSanitizer,private movie:MovieService ) { }

  ngOnInit(): void {
    this.movie.currentylink.subscribe(ylink=>this.ylink=ylink)
    this.safeUrl =this._sanitizer.bypassSecurityTrustResourceUrl(this.ylink);
    
  }
 

}
