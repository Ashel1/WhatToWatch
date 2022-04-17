import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/shared/movie';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
@Component({
  selector: 'app-watch-list',
  templateUrl: './watch-list.component.html',
  styleUrls: ['./watch-list.component.scss']
})
export class WatchListComponent implements OnInit {
  user_names: string= "";
  user:any;
  stringJson1: string | undefined;
 
  stringObject1: any;
  constructor(private router:Router,private data:DataService) { }

  ngOnInit(): void {
    this.data.currentuser.subscribe(user_names=>this.user_names=user_names)
    this.user = '{"Username":"'+ this.user_names +'"}';
    this.stringJson1 = JSON.stringify(this.user);
    
    this.stringObject1 = JSON.parse(this.user);
    console.log("JSON object -", this.stringObject1);

    fetch('http://localhost:3000/getWatchLater', {
  method: 'POST', // or 'PUT'
 
  body: JSON.stringify(this.stringObject1),
  })
  .then(response => response.json())
  .then(currdata => {
  //console.log('Success:', currdata.data['Title']);
  console.log(currdata.data);
   
    
  })
  .catch((error) => {
  console.error('Error:', error);
});
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
