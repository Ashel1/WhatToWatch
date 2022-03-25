import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
@Component({
  selector: 'app-youtube',
  templateUrl: './youtube.component.html',
  styleUrls: ['./youtube.component.scss']
})
export class YoutubeComponent implements OnInit {

safeUrl: any;
platform = "Amazon";
Cast = "Tony Stark";
name = "Iron Man";
  constructor(private _sanitizer : DomSanitizer) { }

  ngOnInit(): void {
    this.safeUrl =this._sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/8ugaeA-nMTc');

  }

}
