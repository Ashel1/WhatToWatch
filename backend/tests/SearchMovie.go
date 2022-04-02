package Test

import (
	"fmt"
	"testing"
)

func TestSelectMovie(t *testing.T) {
	fmt.Println(Models.SearchMovieByMovieId(5))
	movie := Models.Movie{}
	if Models.SearchMovieByMovieId(4) == movie {
		t.Error("result is wrong!")
	} else {
		t.Log("result is right")
	}
}
