import { Component, OnInit } from '@angular/core';
import { MatDialog} from '@angular/material/dialog';
import {MatDialogConfig} from "@angular/material/dialog";
import {  AppMovieDialogeComponent } from '../movie-detail/app-movie-dialoge/app-movie-dialoge.component';;
import { DomSanitizer } from '@angular/platform-browser';
@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent implements OnInit {

  public video: boolean | undefined;
  safeUrl: any;
  constructor(private dialog: MatDialog,     private _sanitizer: DomSanitizer,) { }

  ngOnInit(): void {
  }
  openDialogMovie(video:any): void {
    this.safeUrl =this._sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/8ugaeA-nMTc');

    this.dialog.open( AppMovieDialogeComponent, {
      height: '600px',
      width: '900px',
      data: { video:  this.safeUrl}
    });
  }

}
