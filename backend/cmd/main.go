package main

import (
	"database/sql"
	"math/rand"
	"net/http"

	"github.com/rs/cors"

	//"strconv"
	"encoding/json"
	"fmt"

	_ "github.com/mattn/go-sqlite3"

	//For Encryption
	"golang.org/x/crypto/bcrypt"
	//For API
	"log"
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
	Firstname string
	Lastname  string
	Username  string
	Email     string
	Password  string
}

type ans2ques struct {
	Q1 string //Occasion
	Q2 string //Viewing platform
	Q3 string //genre
	Q4 string //Age appropriate
	Q5 string //Age of movie
	Q6 string //Movie rating
}

type addWH struct {
	Username string
	mName    string
}

type movRes struct {
	Title       string
	ReleaseYear string
	Cert        string
	RunTime     string
	Rating      string
	Link        string
	Director    string
	Overview    string
	Genre       string
}

type JsonResponse struct {
	Type string `json:"type"`
	Data string `json:"data"`
}
type quesResponse struct {
	Type string `json:"type"`
	Data movRes `json:"data"`
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
		fmt.Println(user.Username, user.Password)
		database, _ := sql.Open("sqlite3", "./user.db")
		rows, _ := database.Query("SELECT Password FROM User where Username=?", user.Username)
		var Password string
		for rows.Next() {
			rows.Scan(&Password)
		}
		err = bcrypt.CompareHashAndPassword([]byte(Password), []byte(user.Password))
		if err == nil {
			//fmt.Fprintf(w, "%v", user.Username)
			var response = JsonResponse{Type: "Complete", Data: user.Username}
			json.NewEncoder(w).Encode(response)
		} else {
			var response = JsonResponse{Type: "Incorrect Details"}
			json.NewEncoder(w).Encode(response)
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
		println("Printing the recieved values: ")
		println(user.Username, user.Firstname, user.Lastname, user.Email)
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
		statement.Exec(user.Firstname, user.Lastname, user.Email, user.Username, hashedPassword)
		//db.Create(&registerstruct{Fname: user.Fname, Lname: user.Lname, Email: user.Email, Username: user.Username, Password: hashedPassword})
		//fmt.Fprintf(w, "Registration Successful")
		var response = JsonResponse{Type: "Correct"}
		json.NewEncoder(w).Encode(response)

	default:
		fmt.Fprintf(w, "Only Post request please!")
	}
}

func questionnaire(w http.ResponseWriter, r *http.Request) {
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
		database, _ := sql.Open("sqlite3", "./movieDatabase.db")
		qy := fmt.Sprintf("SELECT title, Released_Year, Certificate, Runtime, Genre, IMDB_Rating, Overview, Director, Poster_Link FROM movies where " + answers.Q2 + "=1 AND genre LIKE '%%" + answers.Q3 + "%%' AND certificate='" + answers.Q4 + "' AND Released_Year>" + answers.Q5 + " AND IMDB_Rating>" + answers.Q6 + "")
		//fmt.Println(qy)
		rows, _ := database.Query(qy)
		defer rows.Close()
		var mov []movRes
		var overview string
		var genre string
		var title string
		var Released_Year string
		var Certificate string
		var Runtime string
		var IMDB_Rating string
		var Director string
		var Poster_Link string
		for rows.Next() {
			err := rows.Scan(&title, &Released_Year, &Certificate, &Runtime, &IMDB_Rating, &Director, &Poster_Link, &overview, &genre)
			if err != nil {
				log.Fatal(err)
			}
			//log.Println(overview, genre)
			mov = append(mov, movRes{Title: title, ReleaseYear: Released_Year, Cert: Certificate, RunTime: Runtime, Rating: IMDB_Rating, Director: Director, Link: Poster_Link, Overview: overview, Genre: genre})
		}
		var randnum int
		randnum = rand.Intn(len(mov))
		//println(randnum)
		//var rts string
		//rts="\"Name:\""
		var response = quesResponse{Type: "Correct", Data: mov[randnum]}
		json.NewEncoder(w).Encode(response)
		//fmt.Fprintf(w, "%+v", mov[randnum])
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

func getWatchHistory(w http.ResponseWriter, r *http.Request) {
	switch r.Method {
	case "GET":
		fmt.Fprintf(w, "Only Post request please!")
	case "POST":
		fmt.Fprintf(w, "Only Post request please!")
		//To be colmpleted
	}
}

func addWatchHistory(w http.ResponseWriter, r *http.Request) {
	switch r.Method {
	case "GET":
		fmt.Fprintf(w, "Only Post request please!")
	case "POST":
		var details addWH
		err := json.NewDecoder(r.Body).Decode(&details)
		if err != nil {
			http.Error(w, err.Error(), http.StatusBadRequest)
			return
		}
		database, _ := sql.Open("sqlite3", "./movieDatabase.db")
		qy := fmt.Sprintf("INSERT INTO WatchHistory(Username,Movie) VALUES)'" + details.Username + "','" + details.mName + "');")
		rows, _ := database.Query(qy)
		defer rows.Close()
	}
}

func main() {
	mux := http.NewServeMux()
	mux.HandleFunc("/register", register)
	mux.HandleFunc("/signin", signin)
	mux.HandleFunc("/questionnaire", questionnaire)
	mux.HandleFunc("/getWatchHistory", getWatchHistory)
	mux.HandleFunc("/addWatchHistory", addWatchHistory)
	//http.HandleFunc("/signin", signin)
	//http.HandleFunc("/register", register)
	//http.HandleFunc("/questionnaire", questionnaire)
	handler := cors.Default().Handler(mux)
	//log.Fatal(http.ListenAndServe(":3000", nil))
	http.ListenAndServe(":3000", handler)
	/*db, err := gorm.Open(sqlite.Open("user.db"), &gorm.Config{})
	if err != nil {
		panic("failed to connect database")
	}

	// Migrate the schema
	db.AutoMigrate(&Product{})

	// Create
	db.Create(&Product{Userid: "ash", Password: "12345678"})*/

}
