


## Adding Watch History

This api posts the data to the sqlite database according to the username and movie name provided by the frontend. The frontend provides the username and movie name to be added to the database.

**URL** : ```/api/addWatchHistory/```

**Method** : ```POST```

**Auth required** : ```NO```

**Permissions required** : ```None```


**API request body:**

```
{
    "Username"  : "Username of the user",
    "Movie"     : "Movie to be passed to watch history"
}
```

**Sample Body:**

```
{
    "Username"  : "Jack",
    "Movie"     : "Spiderman"
}
```

## Success Response

Condition : If username is found according to criteria

**Sample Json response from the server:**
```
{
  {
  "type"  : "Correct",
  "data"  : ""}
}
```


| Parameter      | Description
| :---        |    ----:  
| type | type correct indicates the movie has been added | 


 
## Error Responses
**Condition :** If movie not found in database against the sql query
**Code :** ```400 Bad Request```
**Content :** {"Required fields are invalid": "[response]"


