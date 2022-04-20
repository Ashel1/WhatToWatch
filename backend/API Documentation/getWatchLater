


## Getting Watch Later

This api fetches the data from the sqlite database according to the username provided by the frontend. The frontend provides the username and gets a list of all the movies in Watch Later for that specific user.

**URL** : ```/api/getWatchLater/```

**Method** : ```POST```

**Auth required** : ```NO```

**Permissions required** : ```None```


**API request body:**

```
{
    "Username"  :   "Username to be checked"
}
```

**Sample Body:**

```
{
    "Username":"Jack"
}
```

## Success Response

Condition : If username is found according to criteria

**Sample Json response from the server:**
```
{
  "type"  : "Correct",
  "data"  : ["Iron Man","Spiderman","Superman"]
}
```


| Parameter      | Description
| :---        |    ----:  
| Data | Contains a list of movies from watch later| 


 
## Error Responses
**Condition :** If movie not found in database against the sql query
**Code :** ```400 Bad Request```
**Content :** {"Required fields are invalid": "[response]"


