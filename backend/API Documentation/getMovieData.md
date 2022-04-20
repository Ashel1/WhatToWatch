


## Movie Data

This api fetches the data from the sqlite database according to the user requirement. The frontend will be requried to pass movie name and all the data will be returned.

**URL** : ```/api/getMovieData/```

**Method** : ```POST```

**Auth required** : ```NO```

**Permissions required** : ```None```


**API request body:**

```
{
  "movieName" : "Pass the name of the movie"
}
```

**Sample Body:**

```
{
  "movieName" : "Spider-Man: Into the Spider-Verse"
}
```

## Success Response

Condition : If movie is found according to criteria

**Sample Json response from the server:**
```
{"type":"Correct","data":{
   "Poster_Link"    : "https://m.media-amazon.com/images/I/71U93FWDLTS._AC_SY679_.jpg",
   "Title"          : "Spider-Man: Into the Spider-Verse",
   "Released_Year"  : "2018",
   "Certificate"    : "U",
   "Youtube_Link"   : "https://www.youtube.com/embed/g4Hbz2jLxvQ",
   "Genre"          : "Animation, Action, Adventure",
   "IMDB_Rating"    : "8.4",
   "Overview"       : "Teen Miles Morales becomes the Spider-Man of his universe, and must join with five spider-powered individuals from other dimensions to stop a threat for all realities.",
   "Meta_score"     : "87",
   "Director"       : "Bob Persichetti",
   "Star1"          : "Peter Ramsey",
   "Star2"          : "Rodney Rothman",
   "Star3"          : "Shameik Moore",
   "Star4"          : "Jake Johnson",
   "No_of_Votes"    : "375110",
   "Show_id"        : "s8069",
   "Type"           : "Movie",
   "Cast"           : "Shameik Moore, Jake Johnson, Hailee Steinfeld, Brian Tyree Henry, Lauren Vélez, Mahershala Ali, Lily Tomlin, Kathryn Hahn, Liev Schreiber, Kimiko Glenn, Nicolas Cage, John Mulaney",
   "Country"        : "United States",
   "Runtime"        : "117 min",
   "Description"    : "After being bitten by a radioactive spider, Brooklyn teen Miles Morales gets a crash course in web-slinging from his alternate-dimension counterparts.",
   "Netflix"        : "1",
   "Amazonprime"    : "0",
   "Hulu"           : "0",
   "Hlink"          : "https://m.media-amazon.com/images/I/91pywDbDu9L._AC_SL1500_.jpg"
   }}
```


| Parameter      | Description
| :---        |    ----:  
| Poster_Link |Link to the Poster of the Movie    | 
| Title      |Title of movie    | 
| Released_year      | Release year of movie |
| Certificate      |Certificate of movie    | 
| Youtube_Link      |Link to the trailer of the movie    | 
| Genre      |Genre of movie    | 
| IMDB_Rating      | IMDB_Rating of movie |
| Overview      |Overview of movie    |
| Meta_score      |Meta score of the movie    |
| Director      | Director of movie |
| Star1      | Star1 of movie |
| Star2      | Star2 of movie |
| Star3      | Star3 of movie |
| Star4      | Star4 of movie |
| No_of_votes      | Number of people that voted for the movie |
| Show_id      | Show ID|
| Type      | Type (Movie/Show) |
| Cast      | Cast of the movie |
| Country      | Country where movie is from |
| Runtime      | Runtime of movie |
| Description      | Another overview worded differently |
| Netflix      | Show if movie is on Netflix |
| Amazonprime      | Show if movie is on Amazon |
| Hulu      | Show if movie is on Hulu |
| Hlink      | Link to horizontal movie poster |

 



## Error Responses
**Condition :** If movie not found in database against the sql query
**Code :** ```400 Bad Request```
**Content :** {"Required fields are invalid": "[response]"


