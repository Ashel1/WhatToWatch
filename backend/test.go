package main

import (
    "database/sql"
    "fmt"
    "strconv"

    _ "github.com/mattn/go-sqlite3"
)

func main2() {
    database, _ := sql.Open("sqlite3", "./nraboy.db")
    statement, _ := database.Prepare("CREATE TABLE IF NOT EXISTS people (id INTEGER PRIMARY KEY, firstname TEXT, lastname TEXT)")
    statement.Exec()
    statement, _ = database.Prepare("INSERT INTO people (firstname, lastname) VALUES (?, ?)")
    statement.Exec("Nic", "Raboy")
    rows, _ := database.Query("SELECT id, firstname, lastname FROM people")
    var id int
    var firstname string
    var lastname string
    for rows.Next() {
        rows.Scan(&id, &firstname, &lastname)
        fmt.Println(strconv.Itoa(id) + ": " + firstname + " " + lastname)
    }
}