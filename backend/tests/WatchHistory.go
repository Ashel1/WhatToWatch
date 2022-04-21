package Test

import (
	"testing"
    "backend"
)

func TestAddWatched(t *testing.T) {
	router := gin.New()
	watchedListGroup := router.Group("/user/watchedList")
	{
		watchedListGroup.POST("/addWatchedList", main.AddWatchHistory)
		watchedListGroup.POST("/readWatchedList", main.GetWatchHistory)
	}

	params := url.Values{}
	params.Add("Username", "abhi")
	params.Add("Movie", "Spiderman")

	//params.Add("password", "123")
	para1 := params.Encode()
	w := httptest.NewRecorder()
	req, _ := http.NewRequest("POST", "/user/watchedList/addWatchedList", strings.NewReader(para1))
	req.Header.Set("Content-Type", "application/x-www-form-urlencoded")
	router.ServeHTTP(w, req)
	assert.Equal(t, 200, w.Code)

}

func TestReadWatched(t *testing.T) {
	router := gin.New()
	watchedListGroup := router.Group("/user/watchedList")
	{
		watchedListGroup.POST("/addWatchedList", main.AddWatchHistory)
		watchedListGroup.POST("/readWatchedList", main.GetWatchHistory)
	}

	params := url.Values{}
	params.Add("Username", "abhi")
	params.Add("Movie", "Spiderman")

	//params.Add("password", "123")
	para1 := params.Encode()
	w := httptest.NewRecorder()
	req, _ := http.NewRequest("POST", "/user/watchedList/readWatchedList", strings.NewReader(para1))
	req.Header.Set("Content-Type", "application/x-www-form-urlencoded")
	router.ServeHTTP(w, req)
	assert.Equal(t, 200, w.Code)
}
