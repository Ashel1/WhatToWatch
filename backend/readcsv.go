package main

import (
	"encoding/csv"
	"fmt"
	"log"
	"os"
)

type MovieRecord struct {
	Poster_Link   string
	Series_Title  string
	Released_Year string
	Certificate   string
	Runtime       string
	Genre         string
	IMDB_Rating   string
	Overview      string
}

func createmovielist(data [][]string) []MovieRecord {
	var movielist []MovieRecord
	for i, line := range data {
		if i > 0 { // omit header line
			var rec MovieRecord
			for j, field := range line {
				if j == 0 {
					rec.Poster_Link = field
				} else if j == 1 {
					rec.Series_Title = field
				} else if j == 2 {
					rec.Released_Year = field
				} else if j == 3 {
					rec.Certificate = field
				} else if j == 4 {
					rec.Runtime = field
				} else if j == 5 {
					rec.Genre = field
				} else if j == 6 {
					rec.IMDB_Rating = field
				} else if j == 7 {
					rec.Overview = field
				}
			}
			movielist = append(movielist, rec)
		}
	}
	return movielist
}

func main() {
	// open file
	f, err := os.Open("C:\\abhishek\\imdb_top_1000.csv")
	if err != nil {
		log.Fatal(err)
	}

	// remember to close the file at the end of the program
	defer f.Close()

	// read csv values using csv.Reader
	csvReader := csv.NewReader(f)
	data, err := csvReader.ReadAll()
	if err != nil {
		log.Fatal(err)
	}

	// convert records to array of structs
	movielist := createmovielist(data)

	// print the array
	fmt.Printf("%+v\n", movielist)
}
