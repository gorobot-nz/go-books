package http

/*
func TestUserHandler_SignUp(t *testing.T) {
	signUpBody := domain.User{
		Id:       1,
		Username: "user1",
		Password: "123456",
	}

	expected, err := json.Marshal(gin.H{
		"id": signUpBody.Id,
	})
	assert.NoError(t, err)

	body, err := json.Marshal(signUpBody)
	assert.NoError(t, err)

	s := new(service.UserServiceMock)
	r := gin.Default()
	RegisterEndpoints(r, s)

	s.On("SignUp", &signUpBody).Return(signUpBody.Id, nil)

	w := httptest.NewRecorder()
	req, _ := http.NewRequest("POST", "/auth/signup", bytes.NewBuffer(body))
	r.ServeHTTP(w, req)
	actual := w.Body.Bytes()
	assert.Equal(t, string(expected), string(actual))
	assert.Equal(t, 201, w.Code)
}

func TestUserHandler_SignIn(t *testing.T) {
	signInBody := domain.User{
		Username: "user1",
		Password: "123456",
	}

	expected, err := json.Marshal(gin.H{
		"token": "jwt",
	})
	assert.NoError(t, err)

	body, err := json.Marshal(signInBody)
	assert.NoError(t, err)

	s := new(service.UserServiceMock)
	r := gin.Default()
	RegisterEndpoints(r, s)

	s.On("SignIn", signInBody.Username, signInBody.Password).Return("jwt", nil)

	w := httptest.NewRecorder()
	req, _ := http.NewRequest("POST", "/auth/signin", bytes.NewBuffer(body))
	r.ServeHTTP(w, req)
	actual := w.Body.Bytes()
	assert.Equal(t, string(expected), string(actual))
	assert.Equal(t, 202, w.Code)
}
*/
