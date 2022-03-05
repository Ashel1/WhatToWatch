


## Signin

Login to an Account for the authenticated User already in database:

**URL** : ```/api/signin/```

**Method** : ```POST```

**Auth required** : ```NO```

**Permissions required** : ```None```

```
{
    "email": "[must be unique,not null]",
    "password": "[not null]",
}
```
| Parameter      | Description
| :---        |    ----:  
| Email      |email of user    | 
| password      | password of user |
Data example All fields must be sent.
```
{
    "email": "[abcde@ufl.edu]",
    "password": "[12345]",
}
```
| Parameter      | Sample Input 
| :---        |    ----:  
| Email      |abcde@ufl.edu   |  
| password      | 12345      |
## Success Response

Condition : If everything is OK
**Content:** {“Complete”}

## Error Responses
**Condition :** If Password not matches after decryption with the one that is found in database against the username
**Code :** ```401 Unauthorized```
**Content :** {"Incorrect Details": "[response]"


