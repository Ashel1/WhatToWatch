package Test

import (
	"testing"
    "backend"
)

func TestAddWatched(t *testing.T) {
	var watched = Models.Watch_list{movie: 2, movie_name: Pulp Fiction}
	if Models.AddWatched(watched) == 0 {
		t.Error("Wrong!")
	} else {
		t.Log("Right")
	}
}

func TestDeleteWatched(t *testing.T) {

	var watched = Models.Watch_list{movie: 2, movie_name: Pulp Fiction}
	if Models.DeleteWatched(watched) == 0 {
		t.Error("Wrong!")
	} else {
		t.Log("Right")
	}
}

func TestReadWatched(t *testing.T) {
	if Models.ReadWatched(2) == nil {
		t.Error("Wrong!")
	} else {
		t.Log("Right")
	}
}