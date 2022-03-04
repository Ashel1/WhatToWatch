package test

import (
	"bytes"
	"net/http"
	"net/http/httptest"
	"testing"
)

//login and register

//test register
func TestRegister(t *testing.T) {
	//registration
	var jsonStr = []byte(`{"Firstname":"abhishek","Lastname":"redwal","username":"abhi","email":"xyz@pqr.com","password":"11aabbcc"}`)

	req, err := http.NewRequest("POST", "/api/register", bytes.NewBuffer(jsonStr)) //router.POST("/api/register", users.Register)
	if err != nil {
		t.Fatal(err)
	}
	req.Header.Set("Content-Type", "application/json")
	rr := httptest.NewRecorder()
	handler := http.HandlerFunc(Register)
	handler.ServeHTTP(rr, req)
	if status := rr.Code; status != http.StatusOK {
		t.Errorf("handler returned wrong status code: got %v want %v",
			status, http.StatusOK)
	}
	//check
	expected := `{"Firstname":"abhishek","Lastname":"redwal","username":"abhi","email":"xyz@pqr.com","password":"11aabbcc"}`
	if rr.Body.String() != expected {
		t.Errorf("handler returned unexpected body: got %v want %v",
			rr.Body.String(), expected)
	}
}
