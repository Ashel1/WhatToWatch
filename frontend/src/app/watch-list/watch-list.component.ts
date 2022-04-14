import { Component, OnInit } from '@angular/core';
import { Movie } from '/Users/anupamanair/Desktop/sprint4/WhatToWatch/frontend/src/shared/movie';
import { Router } from '@angular/router';
@Component({
  selector: 'app-watch-list',
  templateUrl: './watch-list.component.html',
  styleUrls: ['./watch-list.component.scss']
})
export class WatchListComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  movies: Movie[] = [
    {
      id: '0',
      name: 'Hamilton',
      image:'https://m.media-amazon.com/images/M/MV5BNjViNWRjYWEtZTI0NC00N2E3LTk0NGQtMjY4NTM3OGNkZjY0XkEyXkFqcGdeQXVyMjUxMTY3ODM@._V1_UX67_CR0,0,67,98_AL_.jpg',
      // tslint:disable-next-line:max-line-length
      description: 'A unique combination of Indian Uthappam (pancake) and Italian pizza, topped with Cerignola olives, ripe vine cherry tomatoes, Vidalia onion, Guntur chillies and Buffalo Paneer.',
      platform: 'Netflix'
    },
    {
      id: '1',
      name: 'Alice Faye',
      image:"./../assets/images/8th.jpeg",     
      description: 'Deep fried Zucchini coated with mildly spiced Chickpea flour batter accompanied with a sweet-tangy tamarind sauce',
      platform: 'Netflix'
    },
    {
      id: '2',
      name: 'The Dark Knight',
      image:"./../assets/images/9th.jpeg",     
      description: 'A quintessential ConFusion experience, is it a vada or is it a donut?',
      platform: 'Netflix'
    },
    {
      id: '3',
      name: 'Kill Bill',
      image:"./../assets/images/10th.jpeg",     
      description: 'A delectable, semi-sweet New York Style Cheese Cake, with Graham cracker crust and spiced with Indian cardamoms',
      platform: 'Netflix'
    }
   ];

   goToVideo(page:string):void{
    this.router.navigate([`${page}`]);
  }

}
