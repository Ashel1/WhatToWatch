package main

import (
	"database/sql"
	//"strconv"
	"encoding/json"
	"fmt"

	_ "github.com/mattn/go-sqlite3"

	//For Encryption
	"golang.org/x/crypto/bcrypt"
	//For API
	"log"
	"net/http"
)

/*type Product struct {
	gorm.Model
	Userid   string
	Password string
}*/

func HashPassword(password string) (string, error) {
	bytes, err := bcrypt.GenerateFromPassword([]byte(password), 14)
	return string(bytes), err
}

//func CheckPasswordHash(password, hash string) bool {
//	err := bcrypt.CompareHashAndPassword([]byte(hash), []byte(password))
//	return err == nil
//}

type signinstruct struct {
	Username string
	Password string
}

type registerstruct struct {
	Fname    string
	Lname    string
	Username string
	Email    string
	Password string
}

type ans2ques struct{
	q1	string				//Occasion	
	q2	string				//Viewing platform 
	q3	string				//genre
	q4	string				//Age appropriate
	q5	string				//Age of movie
	q6	string				//Movie rating
}

func signin(w http.ResponseWriter, r *http.Request) {
	switch r.Method {
	case "GET":
		fmt.Fprintf(w, "Only Post request please!")
	case "POST":
		/*if err := r.ParseForm(); err != nil {
			fmt.Fprint(w, "ParseForm() err: %v", err)
			return
		}*/
		var user signinstruct
		err := json.NewDecoder(r.Body).Decode(&user)
		if err != nil {
			http.Error(w, err.Error(), http.StatusBadRequest)
			return
		}
		database, _ := sql.Open("sqlite3", "./user.db")
		rows, _ := database.Query("SELECT Password FROM User where Username=?", user.Username)
		var Password string
		for rows.Next() {
			rows.Scan(&Password)
		}
		err = bcrypt.CompareHashAndPassword([]byte(Password), []byte(user.Password))
		if err == nil {
			fmt.Fprintf(w, "Sign in successful!")
		} else {
			fmt.Fprintf(w, "Username/Password not correct")
		}
		//fmt.Printf("Name = %s\n", user.Username)
		//fmt.Printf("Address = %s\n", user.Password)
		//fmt.Fprintf(w, "Print done")
		/*fmt.Fprintf(w,"Post from website r.postform = %v\n",r.PostForm)
		  name := r.FormValue("name")
		  address := r.FormValue("address")

		  fmt.Println(name)
		  fmt.Println(address)*/
		//db, err := gorm.Open(sqlite.Open("user.db"), &gorm.Config{})
		//if err != nil {
		//	panic("failed to connect database")
		//}
		// Migrate the schema
		//db.Raw("CREATE TABLE registerstructs (Fname string, Lname string, Username string, Email string, Passwor string)")
		//var testuser []registerstruct
		//hashedPassword := db.Select("Password").Where("Username=?",user.Username)
		//db.First(&testuser, "Username=?",user.Username)
		//match := CheckPasswordHash(user.Password, hashedPassword)
		//db.Raw("Select Password FROM registerstructs Where Username=?","Jason").Scan(&testuser)
		//err = bcrypt.CompareHashAndPassword([]byte(testuser), []byte(user.Password))
		//if err == nil{
		//fmt.Println("Match:   ")
		//}else{
		//	fmt.Println("Wrong")
		//}

	default:
		fmt.Fprintf(w, "Only Post request please!")
	}
}

func register(w http.ResponseWriter, r *http.Request) {
	fmt.Printf("In register function")
	switch r.Method {
	case "GET":
		fmt.Fprintf(w, "Only Post request please!")
	case "POST":
		/*if err := r.ParseForm(); err != nil {
			fmt.Fprint(w, "ParseForm() err: %v", err)
			return
		}*/
		var user registerstruct
		err := json.NewDecoder(r.Body).Decode(&user)
		if err != nil {
			http.Error(w, err.Error(), http.StatusBadRequest)
			return
		}
		//fmt.Printf("Name = %s\n", user.Username)
		//fmt.Printf("Address = %s\n", user.Password)
		//fmt.Fprintf(w, "Print done")
		/*fmt.Fprintf(w,"Post from website r.postform = %v\n",r.PostForm)
		  name := r.FormValue("name")
		  address := r.FormValue("address")
		  fmt.Println(name)
		  fmt.Println(address)*/

		database, _ := sql.Open("sqlite3", "./user.db")
		statement, _ := database.Prepare("CREATE TABLE IF NOT EXISTS User (Username TEXT PRIMARY KEY, Fname TEXT, Lname TEXT, Email TEXT, Password TEXT)")
		statement.Exec()

		/*db, err := gorm.Open(sqlite.Open("user.db"), &gorm.Config{})
		if err != nil {
			panic("failed to connect database")
		}
		// Migrate the schema
		db.AutoMigrate(&registerstruct{})*/

		// Create
		hashedPassword, _ := HashPassword(user.Password)
		statement, _ = database.Prepare("INSERT INTO User (Fname,Lname,Email,Username,Password) VALUES (?, ? ,?, ?, ?)")
		statement.Exec(user.Fname, user.Lname, user.Email, user.Username, hashedPassword)
		//db.Create(&registerstruct{Fname: user.Fname, Lname: user.Lname, Email: user.Email, Username: user.Username, Password: hashedPassword})
		fmt.Fprintf(w, "Registration Successful")

	default:
		fmt.Fprintf(w, "Only Post request please!")
	}
}

func questionnaire(w http.ResponseWriter, r *http.Request) {
	fmt.Println("Recieved the answers for the questions!")
	switch r.Method {
	case "GET":
		fmt.Fprintf(w, "Only Post request please!")
	case "POST":
		var answers ans2ques
		err := json.NewDecoder(r.Body).Decode(&answers)
		if err != nil {
			http.Error(w, err.Error(), http.StatusBadRequest)
			return
		}
		fmt.Println(answers.q1,answers.q2,answers.q3,answers.q4,answers.q5,answers.q6)
		/*database, _ := sql.Open("sqlite3", "./movieDatabase.db")
		rows, _ := database.Query("SELECT * FROM movies where ?=1 AND genre LIKE %?% AND certificate=? AND Released_Year>? AND IMDB_Rating>?", answers.q2,answers.q3,answers.q4,answers.q5,answers.q6);
		var result [][]string	
		cols, err := rows.Columns()
		pointers := make([]interface{}, len(cols))
		container := make([]string, len(cols))
		for i, _ := range pointers {
			pointers[i] = &container[i]
		}
		for rows.Next() {
			rows.Scan(pointers...)
			result = append(result, container)
		}
		fmt.Println("Printing result now")
		fmt.Print(result[0][0])*/
		/*statement, _ := database.Prepare("CREATE TABLE IF NOT EXISTS Movie (Poster_Link varchar(255), title varchar(255),Released_in_Year INTEGER,
						 Certificate varchar(255),Runtime varchar(255),Genre varchar(255),IMDB_Rating decimal,Overview varchar(255),Meta_score integer,
						 Director varchar(255),Star1 varchar(255),Star2 varchar(255),Star3 varchar(255),Star4 varchar(255),No_of_Votes integer,
						 Gross integer,show_id varchar(255),type varchar(255),directorofmovie varchar(255),cast varchar(255),country varchar(255),
						 release_year integer,rating varchar(255),duration varchar(255),listed_in varchar(255),description TEXT,NETFLIX integer,
						 AMAZONPRIME integer,HOTSTAR integer);")*/
		//statement.Exec()
		//Remove comment when the database is finalized
		//database, _ := sql.Open("sqlite3", "./movies.db")
		//statement, _ := database.Prepare("CREATE TABLE IF NOT EXISTS User (Username TEXT PRIMARY KEY, Fname TEXT, Lname TEXT, Email TEXT, Password TEXT)")
		//statement.Exec()
		//RandomIntegerwithinRange := rand.Intn(len())

	}
}

func main() {

	http.HandleFunc("/signin", signin)
	http.HandleFunc("/register", register)
	http.HandleFunc("/questionnaire",questionnaire)
	log.Fatal(http.ListenAndServe(":3000", nil))

	/*db, err := gorm.Open(sqlite.Open("user.db"), &gorm.Config{})
	if err != nil {
		panic("failed to connect database")
	}

	// Migrate the schema
	db.AutoMigrate(&Product{})

	// Create
	db.Create(&Product{Userid: "ash", Password: "12345678"})*/

}
