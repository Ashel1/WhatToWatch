import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  //Features to be listed
  listOfFeatures =[' Time-saving & easy to use','Use without registering','Multiple movie genres','One Recommendation at a time','Read overview of the movie','Watch trailers' ]
  constructor() { }

  ngOnInit(): void {
  }

}
