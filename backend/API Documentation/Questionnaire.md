


## Questionnaire

This api fetches the data from the sqlite database according to the user requirement. The user will be asked several questions and upon answering them, the user will be given a random movie that matches the criteria of all the answer that the user provide with the help of a random function

**URL** : ```/api/Questionnaire/```

**Method** : ```POST```

**Auth required** : ```NO```

**Permissions required** : ```None```

```
{
    "Title": "[must be unique,not null]",
    "Released_year": "[not null]",
    "Certificate": "[must be unique,not null]",
    "Runtime": "[not null]",
    "Genre": "[must be unique,not null]",
    "IMDB_Rating": "[not null]",
    "Overview": "[must be unique,not null]",
    "Director": "[not null]",
    "Poster_Link": "[not null]"
}
```
| Parameter      | Description
| :---        |    ----:  
| Title      |Title of movie    | 
| Released_year      | Release year of movie |
| Certificate      |Certificate of movie    | 
| Runtime      | Runtime of movie |
| Genre      |Genre of movie    | 
| IMDB_Rating      | IMDB_Rating of movie |
| Overview      |Overview of movie    | 
| Director      | Director of movie |
| Poster_Link      |Poster_Link of movie    | 


## Success Response

Condition : If movie is found according to criteria
**Content:** {“movie data”}

## Error Responses
**Condition :** If movie not found in database against the sql query
**Code :** ```400 Bad Request```
**Content :** {"Required fields are invalid": "[response]"


