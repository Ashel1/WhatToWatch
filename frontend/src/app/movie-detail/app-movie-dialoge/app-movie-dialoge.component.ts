import { Component, OnInit } from '@angular/core';
import { Inject, ViewEncapsulation } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
@Component({
  selector: 'app-app-movie-dialoge',
  templateUrl: './app-movie-dialoge.component.html',
  styleUrls: ['./app-movie-dialoge.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppMovieDialogeComponent implements OnInit {

  constructor( public dialogRef: MatDialogRef<AppMovieDialogeComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
  }
  closeDialog() {
    this.dialogRef.close('movie');
  }

}
