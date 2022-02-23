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
	q1	string
	q2	string
	q3	string
	q4	string
	q5	string
	q6	string
	q7	string
	q8	string
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
	fmt.Print("Recieved the answers for the questions!")
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
