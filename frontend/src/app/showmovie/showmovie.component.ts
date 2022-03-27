import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { DataService } from '../data.service';

@Component({
  selector: 'app-showmovie',
  templateUrl: './showmovie.component.html',
  styleUrls: ['./showmovie.component.scss'],
  animations: [
    trigger('flipState', [
      state('active', style({
        transform: 'rotateY(179deg)'
      })),
      state('inactive', style({
        transform: 'rotateY(0)'
      })),
      transition('active => inactive', animate('500ms ease-out')),
      transition('inactive => active', animate('500ms ease-in'))
    ])
  ]
})

export class ShowmovieComponent implements OnInit {
  
  title = "Iron Man";
  details = " A billionaire idustrialist and genius inventor, Tony Stark (Robert Downey Jr.), is conducting weapons tests overseas, but terrorists kidnap him to force him to build a devastating weapon. Instead, he builds an armored suit and upends his captors. Returning to America, Stark refines the suit and uses it to combat crime and terrorism.";
   platform ="Amazon";
  flip: string = 'inactive';
  photo = "https://i.pinimg.com/originals/93/b3/c0/93b3c0d4745f4839a2f276427d340203.jpg";
  toggleFlip() {
    this.flip = (this.flip == 'inactive') ? 'active' : 'inactive';
  }

  ans6: string="";
  constructor(private router:Router, private data:DataService) { }

  ngOnInit() {
    this.data.currentans6.subscribe(ans6=>this.ans6=ans6)
  }
  goToVideo(page:string):void{
    this.router.navigate([`${page}`]);
  }
  
}
