package main

import (
	"database/sql"
	"math/rand"
	"net/http"
	"os"
	"strings"

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
	Movie    string
}

type movRes struct {
	Title       string
	ReleaseYear string
	RunTime     string
	Rating      string
	Link        string
	Dir         string
	Overview    string
	Genre       string
	Ylink       string
	Amazon      string
	Netflix     string
	Hulu        string
}

type allMov struct {
	Poster_Link   string
	Title         string
	Released_Year string
	Certificate   string
	Youtube_Link  string
	Genre         string
	IMDB_Rating   string
	Overview      string
	Meta_score    string
	Director      string
	Star1         string
	Star2         string
	Star3         string
	Star4         string
	No_of_Votes   string
	Show_id       string
	Type          string
	Cast          string
	Country       string
	Runtime       string
	Description   string
	Netflix       string
	Amazonprime   string
	Hulu          string
	Hlink         string
}
type JsonResponse struct {
	Type string `json:"type"`
	Data string `json:"data"`
}

type quesResponse struct {
	Type string `json:"type"`
	Data movRes `json:"data"`
}

type movNameStruct struct {
	MovieName string
}

type movieRes struct {
	Type string `json:"type"`
	Data allMov `json:"data"`
}

type history struct {
	Type string   `json:"type"`
	Data []string `json:"data"`
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
		fmt.Printf("Q2: %s\n, Q3: %s\n,Q4: %s\n,Q5: %s\n,Q6: %s\n", answers.Q2, answers.Q3, answers.Q4, answers.Q5, answers.Q6)
		var platform string
		platform = ""
		if strings.Contains(answers.Q2, "Hulu") {
			platform = platform + "(HULU = 1"
		}
		if strings.Contains(answers.Q2, "Net") {
			if platform == "" {
				platform = "(NETFLIX = 1"
			} else {
				platform = platform + " OR NETFLIX = 1"
			}
		}
		if strings.Contains(answers.Q2, "Amazon") {
			if platform == "" {
				platform = "(AMAZONPRIME = 1"
			} else {
				platform = platform + " OR AMAZONPRIME = 1"
			}
		}
		//fmt.Printf("Platform %s\n", platform)
		var certi string
		if answers.Q4 == "no" {
			certi = "='A'"
		} else {
			certi = "<>'A'"
		}
		var ryear string
		if strings.Contains(answers.Q5, "Year") {
			ryear = "2020"
		} else if strings.Contains(answers.Q5, "3") {
			ryear = "2017"
		} else if strings.Contains(answers.Q5, "5") {
			ryear = "2015"
		} else if strings.Contains(answers.Q5, "10") {
			ryear = "2010"
		}
		var rati string
		if strings.Contains(answers.Q6, "9") {
			rati = "9"
		} else if strings.Contains(answers.Q6, "8") {
			rati = "8"
		} else if strings.Contains(answers.Q6, "7") {
			rati = "7"
		} else if strings.Contains(answers.Q6, "5") {
			rati = "5"
		}
		database, _ := sql.Open("sqlite3", "./movieDatabase.db")
		qy := fmt.Sprintf("SELECT NETFLIX,AMAZONPRIME,HOTSTAR, title, Released_Year, Runtime, Genre, IMDB_Rating, Overview, director, Poster_Link, YoutubeLink FROM movies where " + platform + ") AND genre LIKE '%%" + answers.Q3 + "%%' AND certificate " + certi + " AND Released_Year>" + ryear + " AND IMDB_Rating>" + rati + ";")
		fmt.Println(qy)
		rows, err := database.Query(qy)
		//fmt.Print(rows)
		if err != sql.ErrNoRows {
			fmt.Print("No rows")
			qy := fmt.Sprintf("SELECT NETFLIX,AMAZONPRIME,HOTSTAR, title, Released_Year, Runtime, Genre, IMDB_Rating, Overview, director, Poster_Link, YoutubeLink FROM movies where genre LIKE '%%" + answers.Q3 + "%%';")
			fmt.Println(qy)
			rows, err = database.Query(qy)
			if err != nil {
				log.Fatal(err)
			}
			//log.Fatal(err)
		}
		defer rows.Close()
		var mov []movRes
		var overview string
		var genre string
		var title string
		var Released_Year string
		var Runtime string
		var IMDB_Rating string
		var Director string
		var Poster_Link string
		var ylink string
		var netflix string
		var amazon string
		var hulu string
		for rows.Next() {
			err := rows.Scan(&netflix, &amazon, &hulu, &title, &Released_Year, &Runtime, &genre, &IMDB_Rating, &overview, &Director, &Poster_Link, &ylink)
			if err != nil {
				log.Fatal(err)
			}
			//log.Println(overview, genre)
			mov = append(mov, movRes{Title: title, ReleaseYear: Released_Year, RunTime: Runtime, Rating: IMDB_Rating, Dir: Director, Link: Poster_Link, Overview: overview, Genre: genre, Ylink: ylink, Netflix: netflix, Amazon: amazon, Hulu: hulu})
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

func getWatchLater(w http.ResponseWriter, r *http.Request) {
	switch r.Method {
	case "GET":
		fmt.Fprintf(w, "Only Post request please!")
	case "POST":
		//To be colmpleted
		var details addWH
		err := json.NewDecoder(r.Body).Decode(&details)
		if err != nil {
			http.Error(w, err.Error(), http.StatusBadRequest)
			return
		}
		database, _ := sql.Open("sqlite3", "./watchDatabase.db")
		qy := fmt.Sprintf("SELECT Movie FROM WatchLater where Username='" + details.Username + "';")
		//fmt.Println(qy)
		rows, _ := database.Query(qy)
		defer rows.Close()
		var mov []string
		var movName string
		for rows.Next() {
			err := rows.Scan(&movName)
			if err != nil {
				log.Fatal(err)
			}
			//log.Println(overview, genre)
			mov = append(mov, movName)
		}
		var response = history{Type: "Correct", Data: mov}
		json.NewEncoder(w).Encode(response)
	}
}

func getWatchHistory(w http.ResponseWriter, r *http.Request) {
	switch r.Method {
	case "GET":
		fmt.Fprintf(w, "Only Post request please!")
	case "POST":
		//To be colmpleted
		var details addWH
		err := json.NewDecoder(r.Body).Decode(&details)
		if err != nil {
			http.Error(w, err.Error(), http.StatusBadRequest)
			return
		}
		database, _ := sql.Open("sqlite3", "./watchDatabase.db")
		qy := fmt.Sprintf("SELECT Movie FROM WatchHistory where Username='" + details.Username + "';")
		//fmt.Println(qy)
		rows, _ := database.Query(qy)
		defer rows.Close()
		var mov []string
		var movName string
		for rows.Next() {
			err := rows.Scan(&movName)
			if err != nil {
				log.Fatal(err)
			}
			//log.Println(overview, genre)
			mov = append(mov, movName)
		}
		var response = history{Type: "Correct", Data: mov}
		json.NewEncoder(w).Encode(response)
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
		database, _ := sql.Open("sqlite3", "./watchDatabase.db")
		statement, _ := database.Prepare("INSERT INTO WatchHistory (Username,Movie) VALUES(?, ? )")
		statement.Exec(details.Username, details.Movie)
		var response = JsonResponse{Type: "Correct"}
		json.NewEncoder(w).Encode(response)
	}
}

func addWatchLater(w http.ResponseWriter, r *http.Request) {
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
		database, _ := sql.Open("sqlite3", "./watchDatabase.db")
		statement, _ := database.Prepare("INSERT INTO WatchLater (Username,Movie) VALUES(?, ? )")
		statement.Exec(details.Username, details.Movie)
		var response = JsonResponse{Type: "Correct"}
		json.NewEncoder(w).Encode(response)
	}
}

func getMovieData(w http.ResponseWriter, r *http.Request) {
	switch r.Method {
	case "GET":
		fmt.Fprintf(w, "Only Post request please!")
	case "POST":
		var ans movNameStruct
		err := json.NewDecoder(r.Body).Decode(&ans)
		if err != nil {
			http.Error(w, err.Error(), http.StatusBadRequest)
			return
		}
		database, _ := sql.Open("sqlite3", "./movieDatabase.db")
		qy := fmt.Sprintf("Select * from movies where title='" + ans.MovieName + "';")
		fmt.Println(qy)
		rows, err := database.Query(qy)
		if err != nil {
			log.Fatal(err)
		}
		defer rows.Close()
		var mov []allMov
		var Poster_Link, Title, Released_Year, Certificate, Youtube_Link, Genre, IMDB_Rating, Overview, Meta_score, Director, Star1, Star2, Star3, Star4, No_of_Votes, Show_id, Type, Cast, Country, Runtime, Description, Netflix, Amazonprime, Hulu, Hlink string
		for rows.Next() {
			err := rows.Scan(&Poster_Link, &Title, &Released_Year, &Certificate, &Youtube_Link, &Genre, &IMDB_Rating, &Overview, &Meta_score, &Director, &Star1, &Star2, &Star3, &Star4, &No_of_Votes, &Show_id, &Type, &Cast, &Country, &Runtime, &Description, &Netflix, &Amazonprime, &Hulu, &Hlink)
			if err != nil {
				fmt.Println("Hello World!")
				log.Fatal(err)
			}
			//log.Println(overview, genre)
			mov = append(mov, allMov{Poster_Link: Poster_Link, Title: Title, Released_Year: Released_Year, Certificate: Certificate, Youtube_Link: Youtube_Link, Genre: Genre, IMDB_Rating: IMDB_Rating, Overview: Overview, Meta_score: Meta_score, Director: Director, Star1: Star1, Star2: Star2, Star3: Star3, Star4: Star4, No_of_Votes: No_of_Votes, Show_id: Show_id, Type: Type, Cast: Cast, Country: Country, Runtime: Runtime, Description: Description, Netflix: Netflix, Amazonprime: Amazonprime, Hulu: Hulu, Hlink: Hlink})
		}
		fmt.Print(mov[0])
		var response = movieRes{Type: "Correct", Data: mov[0]}
		json.NewEncoder(w).Encode(response)
	}
}

func test(w http.ResponseWriter, r *http.Request) {
	var response = JsonResponse{Type: "Correct"}
	json.NewEncoder(w).Encode(response)
}

func main() {
	mux := http.NewServeMux()
	mux.HandleFunc("/register", register)
	mux.HandleFunc("/test", test)
	mux.HandleFunc("/signin", signin)
	mux.HandleFunc("/questionnaire", questionnaire)
	mux.HandleFunc("/getWatchLater", getWatchLater)
	mux.HandleFunc("/getWatchHistory", getWatchHistory)
	mux.HandleFunc("/addWatchHistory", addWatchHistory)
	mux.HandleFunc("/addWatchLater", addWatchLater)
	mux.HandleFunc("/getMovieData", getMovieData)
	port := os.Getenv("PORT")
	if port == "" {
		port = "3000"
	}
	//http.HandleFunc("/signin", signin)
	//http.HandleFunc("/register", register)
	//http.HandleFunc("/questionnaire", questionnaire)
	handler := cors.Default().Handler(mux)
	//log.Fatal(http.ListenAndServe(":3000", nil))
	http.ListenAndServe(":"+port, handler)
	/*db, err := gorm.Open(sqlite.Open("user.db"), &gorm.Config{})
	if err != nil {
		panic("failed to connect database")
	}
	// Migrate the schema
	db.AutoMigrate(&Product{})
	// Create
	db.Create(&Product{Userid: "ash", Password: "12345678"})*/
}
