package main

import (
	"encoding/json"
	"fmt"
	//For SQL slite
	"gorm.io/driver/sqlite"
	"gorm.io/gorm"
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

func CheckPasswordHash(password, hash string) bool {
    err := bcrypt.CompareHashAndPassword([]byte(hash), []byte(password))
    return err == nil
}

type signinstruct struct {
	Username    string
	Password string
}

type registerstruct struct{
    gorm.Model
    Fname string
    Lname string
    Username string
    Email string 
    Password string
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
		fmt.Printf("Name = %s\n",user.Username)
		fmt.Printf("Address = %s\n",user.Password)
        //fmt.Fprintf(w, "Print done")
		/*fmt.Fprintf(w,"Post from website r.postform = %v\n",r.PostForm)
		  name := r.FormValue("name")
		  address := r.FormValue("address")

		  fmt.Println(name)
		  fmt.Println(address)*/
        db, err := gorm.Open(sqlite.Open("user.db"), &gorm.Config{})
	    if err != nil {
		panic("failed to connect database")
	    }
	    // Migrate the schema
	    db.AutoMigrate(&registerstruct{})
        //var testuser registerstruct
        //hashedPassword := db.Select("Password").Where("Username=?",user.Username)
        //db.First(&testuser, "Username=?",user.Username)
        //match := CheckPasswordHash(user.Password, hashedPassword)
	    //fmt.Println("Match:   ", match)

		default:
			fmt.Fprintf(w, "Only Post request please!")
		}
}

func register(w http.ResponseWriter, r *http.Request) {
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
		fmt.Printf("Name = %s\n",user.Username)
		fmt.Printf("Address = %s\n",user.Password)
        //fmt.Fprintf(w, "Print done")
		/*fmt.Fprintf(w,"Post from website r.postform = %v\n",r.PostForm)
		  name := r.FormValue("name")
		  address := r.FormValue("address")
		  fmt.Println(name)
		  fmt.Println(address)*/
        db, err := gorm.Open(sqlite.Open("user.db"), &gorm.Config{})
	    if err != nil {
		panic("failed to connect database")
	    }
	    // Migrate the schema
	    db.AutoMigrate(&registerstruct{})

	    // Create
        hashedPassword, _ := HashPassword(user.Password)
	    db.Create(&registerstruct{Fname: user.Fname, Lname: user.Lname, Email:user.Email, Username: user.Username, Password: hashedPassword})
        fmt.Fprintf(w, "Registration Successful")

	    default:
		fmt.Fprintf(w, "Only Post request please!")
	    }
}

func main() {

	http.HandleFunc("/signin", signin)
    http.HandleFunc("/register", register)
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
