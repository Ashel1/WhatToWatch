import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/shared/movie';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
import { MovieService } from '../movie.service';
@Component({
  selector: 'app-watch-list',
  templateUrl: './watch-list.component.html',
  styleUrls: ['./watch-list.component.scss']
})
export class WatchListComponent implements OnInit {
  user_names: string= "";
  user:any;
  stringJson1: string | undefined;
  stringJson2: string | undefined;
  userarray: string[] | undefined;
  stringObject1: any;
  stringObject2: any;


  title:string="";
  details:string="";
  platform:string="";
  photo:string="";
  rate:string="";
  time:string="";
  year:string="";
  director:string="";
  genre:string="";
  answer: any;
  constructor(private router:Router,private data:DataService,private movie:MovieService) { }
  user1:any;
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
  this.userarray = currdata.data; 
    
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

  fetchdetails(title1:string)
  {
    window.alert(title1);
    this.user1 = '{"Username":"'+ title1 +'"}';
    this.stringJson2 = JSON.stringify(this.user1);
    
    this.stringObject2 = JSON.parse(this.user1);
    console.log("JSON object -", this.stringObject2);
    /*fetch('http://localhost:3000/getMovieData', {
    method: 'POST', // or 'PUT'
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(this.stringObject2),
    })
    .then(response => response.json())
    .then(currdata => {
    //console.log('Success:', currdata.data['Title']);
    console.log(currdata.data);
      this.title = currdata.data['Title'];
      this.movie.changeTitle(this.title);
      
      this.details = currdata.data['Overview'];
      this.movie.changeoverview(this.details);

      this.platform = "Netflix";
      this.movie.changeplatform(this.platform);

      this.photo = currdata.data['Link'];
      this.movie.changephoto(this.photo);

      this.time = currdata.data['RunTime'];
      this.movie.changeTime(this.time);

      this.rate = currdata.data['Rating'];
      this.movie.changeRate(this.rate);

      this.year = currdata.data['ReleaseYear'];
      this.movie.changeReleaseYear(this.year);

      this.director = currdata.data['Dir'];
      this.movie.changeDirector(this.director);

      this.genre = currdata.data['Genre'];
      this.movie.changeGenre(this.genre);
      this.router.navigate([`details`])
    })
    .catch((error) => {
    console.error('Error:', error);
});
*/


  }

}
