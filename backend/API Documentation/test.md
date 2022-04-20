


## Test API to check if hosted server is working

This api calls the URL to check if the server is working on the hosting platform. 

**URL** : ```/api/test/```

**Method** : ```POST```

**Auth required** : ```NO```

**Permissions required** : ```None```


**API request body:**

```
{
    //No body req
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


| Parameter      |Description |
| :---        |    ----:  
| type | type correct indicates the hosted server is active | 


 
## Error Responses
**Condition :** If movie not found in database against the sql query
**Code :** ```400 Bad Request```
**Content :** {"Required fields are invalid": "[response]"


