<h1>What2Watch - The Movie Recommendation Platform</h1>
<h2>Sprint 1</h2> <br>
Date: 4th February 2022


<h1>A Demo of the What2Watch Platform Front-end</h1>

https://user-images.githubusercontent.com/48183518/152627055-8cbd798f-99c7-404e-b31d-b9f6a9fc8bb2.mp4

<h1>A Demo of the What2Watch Platform Back-end using Postman</h1>


https://user-images.githubusercontent.com/48183518/152628099-519e68bf-d664-434d-9df0-1c1884f5010e.mp4


<br>
<h1>Tasks accomplished in Sprint 1</h1>
<br>

User Stories for Sprint 1:
* As a user, I would like to use the What2Watch platform for a movie suggestion. 

- As a user, I would have to answer 6 questions to generate a random movie suggestion.

    - What is the watching occasion?
    - Select your preferred viewing platform. (Multiple Selection Option)
    - Please select the genre of the Movie? (Multiple Selection Option)
    - Should the movie be age-appropriate?
    - How old would you like the movie to be?
    - Preferred IMDB movie rating?

- As a user, I would like to sign up/login to use the What2Watch platform and the features it provides.

<hr>

<h2>Tasks Accomplished in the Front-end</h2>

<img src="https://github.com/Ashel1/WhatToWatch/blob/57e73dea25b6442db40ace8d31b4666b7e4e4c8c/images/angularcli.jpg" height="150" width="500"/>

- Set up the Environemnt for Angular from https://angular.io/guide/setup-local
- Referred to https://material.angular.io/ to design the components
- Designed the Homepage
- Designed the About Page
- Designed the Login Component
- Designed the Sign Up Component
- Implemented Login and Registration of users by simulating a Fake REST API using JSON server
- Designed the Pages for Question 1 to Question 6 along with answers to choose from

<hr>
<h2>Tasks Accomplished in the Back-end</h2>

<img src="https://github.com/Ashel1/WhatToWatch/blob/5fa54d47f8c0b96912c5378442eec04433270f0f/images/go.png" height="100" width="250"/>

- Set up the Environemnt for Golang from https://go.dev/doc/install
- Referred to https://go.dev/doc/ to learn the basics
- Designed an API for the registration
- Designed an API for the signin
- Created connection to the SQLite file
- Implemented encryption of password before saving it using bcrypt
- Referred to https://pkg.go.dev/golang.org/x/crypto/bcrypt for encryption
