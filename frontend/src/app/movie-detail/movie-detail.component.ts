import { Component, OnInit } from '@angular/core';
import { MatDialog} from '@angular/material/dialog';
import {MatDialogConfig} from "@angular/material/dialog";
import {  AppMovieDialogeComponent } from '../movie-detail/app-movie-dialoge/app-movie-dialoge.component';;
import { DomSanitizer } from '@angular/platform-browser';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent implements OnInit {

  platform:string = "Netflix";
  public video: boolean | undefined;
  safeUrl: any;
  title: string|undefined;
  
  constructor(private dialog: MatDialog, private _sanitizer: DomSanitizer, private movie:MovieService) { }

  ngOnInit(): void {
    this.movie.currenttitle.subscribe(title=>this.title=title)

  }
  openDialogMovie(video:any): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
   let dialogRef = this.dialog.open( AppMovieDialogeComponent , {width: '900px', height: '600px'});

   //try
   
  
  }


  

}
