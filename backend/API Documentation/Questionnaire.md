


## Questionnaire

This api fetches the data from the sqlite database according to the user requirement. The user will be asked several questions and upon answering them, the user will be given a random movie that matches the criteria of all the answer that the user provide with the help of a random function

**URL** : ```/api/Questionnaire/```

**Method** : ```POST```

**Auth required** : ```NO```

**Permissions required** : ```None```


**API request body:**

```
{
    "Q1": "Answer to question 1 of form",
    "Q2": "Answer to question 2 of form"
    "Q3": "Answer to question 3 of form"
    "Q4": "Answer to question 4 of form"
    "Q5": "Answer to question 5 of form"
    "Q6": "Answer to question 6 of form"
}
```

**Sample Body:**

```
{
    "Q1": "Watching with friends",
    "Q2": "Netflix"
    "Q3": "Action"
    "Q4": "no"
    "Q5": "3"
    "Q6": "5"
}
```

## Success Response

Condition : If movie is found according to criteria

**Sample Json response from the server:**
```
{"type":"Correct","data":{
    "Poster_Link"   :"https://ih1.redbubble.net/image.716563473.5110/flat,750x,075,f-pad,750x1000,f8f8f8.u3.jpg",
    "Title"         :"Rosemary's Baby",
    "Released_Year" :"1968",
    "Certificate"   :"A",
    "Youtube_Link"  :"https://www.youtube.com/embed/dBSbmNNm84Y",
    "Genre"         :"Drama, Horror",
    "IMDB_Rating"   :"8",
    "Overview"      :"A young couple trying for a baby move into a fancy apartment surrounded by peculiar neighbors.",
    "Meta_score"    :"96",
    "Director"      :"Roman Polanski",
    "Star1"         :"Mia Farrow",
    "Star2"         :"John Cassavetes",
    "Star3"         :"Ruth Gordon",
    "Star4"         :"Sidney Blackmer",
    "No_of_Votes"   :"193674",
    "Show_id"       :"s7895",
    "Type"          :"Movie",
    "Cast"          :"Mia Farrow, John Cassavetes, Ruth Gordon, Sidney Blackmer, Maurice Evans, Ralph Bellamy, Patsy Kelly, Elisha Cook Jr., Emmaline Henry, Charles Grodin",
    "Country"       :"United States",
    "Runtime"       :"137 min",
    "Description"   :"A woman is thrilled to find out she's pregnant. But as her belly grows, the more certain she becomes that her unborn child is in serious danger.",
    "Netflix"       :"1",
    "Amazonprime"   :"0",
    "Hulu"          :"0",
    "Hlink"         :"https://www.vintagemovieposters.co.uk/wp-content/uploads/2015/08/IMG_0427-482x358.jpg"}}
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


