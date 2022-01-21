package http

/*
func TestAuthorHandler_AddAuthor(t *testing.T) {
	testUser := domain.User{
		Id:       1,
		Username: "user1",
		Password: "123456",
	}

	r := gin.Default()
	group := r.Group("/api", func(c *gin.Context) {
		c.Set("userId", testUser.Id)
	})

	authorBody := domain.Author{
		Id:      1,
		Name:    "author",
		Surname: "author",
	}

	expected, err := json.Marshal(gin.H{
		"id": strconv.Itoa(int(authorBody.Id)),
	})
	assert.NoError(t, err)

	body, err := json.Marshal(authorBody)
	assert.NoError(t, err)

	s := new(service.AuthorServiceMock)
	RegisterEndpoints(group, s)

	s.On("AddAuthor", &authorBody).Return(strconv.Itoa(int(authorBody.Id)), nil)

	w := httptest.NewRecorder()
	req, _ := http.NewRequest("POST", "/api/author", bytes.NewBuffer(body))
	r.ServeHTTP(w, req)
	actual := w.Body.Bytes()
	assert.Equal(t, string(expected), string(actual))
	assert.Equal(t, 201, w.Code)
}

func TestAuthorHandler_GetAuthors(t *testing.T) {
	testUser := domain.User{
		Id:       1,
		Username: "user1",
		Password: "123456",
	}

	r := gin.Default()
	group := r.Group("/api", func(c *gin.Context) {
		c.Set("userId", testUser.Id)
	})

	authors := []domain.Author{
		{
			Id:      1,
			Name:    "author",
			Surname: "author",
		},
		{
			Id:      2,
			Name:    "author2",
			Surname: "author2",
		},
	}

	expected, err := json.Marshal(gin.H{
		"authors": authors,
	})
	assert.NoError(t, err)

	s := new(service.AuthorServiceMock)
	RegisterEndpoints(group, s)

	s.On("GetAuthors").Return(&authors, nil)

	w := httptest.NewRecorder()
	req, _ := http.NewRequest("GET", "/api/author", nil)
	r.ServeHTTP(w, req)
	actual := w.Body.Bytes()
	assert.Equal(t, string(expected), string(actual))
	assert.Equal(t, 200, w.Code)
}

func TestAuthorHandler_GetAuthorById(t *testing.T) {
	testUser := domain.User{
		Id:       1,
		Username: "user1",
		Password: "123456",
	}

	r := gin.Default()
	group := r.Group("/api", func(c *gin.Context) {
		c.Set("userId", testUser.Id)
	})

	author := domain.Author{
		Id:      1,
		Name:    "author",
		Surname: "author",
	}

	expected, err := json.Marshal(gin.H{
		"author": author,
	})
	assert.NoError(t, err)

	s := new(service.AuthorServiceMock)
	RegisterEndpoints(group, s)

	s.On("GetAuthorById", strconv.Itoa(int(author.Id))).Return(&author, nil)

	w := httptest.NewRecorder()
	req, _ := http.NewRequest("GET", "/api/author/1", nil)
	r.ServeHTTP(w, req)
	actual := w.Body.Bytes()
	assert.Equal(t, string(expected), string(actual))
	assert.Equal(t, 200, w.Code)
}

func TestAuthorHandler_DeleteAuthor(t *testing.T) {
	testUser := domain.User{
		Id:       1,
		Username: "user1",
		Password: "123456",
	}

	r := gin.Default()
	group := r.Group("/api", func(c *gin.Context) {
		c.Set("userId", testUser.Id)
	})

	author := domain.Author{
		Id:      1,
		Name:    "author",
		Surname: "author",
	}

	expected, err := json.Marshal(gin.H{
		"id": strconv.Itoa(int(author.Id)),
	})
	assert.NoError(t, err)

	s := new(service.AuthorServiceMock)
	RegisterEndpoints(group, s)

	s.On("DeleteAuthor", strconv.Itoa(int(author.Id))).Return(strconv.Itoa(int(author.Id)), nil)

	w := httptest.NewRecorder()
	req, _ := http.NewRequest("DELETE", "/api/author/1", nil)
	r.ServeHTTP(w, req)
	actual := w.Body.Bytes()
	assert.Equal(t, string(expected), string(actual))
	assert.Equal(t, 200, w.Code)
}

func TestAuthorHandler_UpdateAuthor(t *testing.T) {
	testUser := domain.User{
		Id:       1,
		Username: "user1",
		Password: "123456",
	}

	r := gin.Default()
	group := r.Group("/api", func(c *gin.Context) {
		c.Set("userId", testUser.Id)
	})

	authorBody := domain.Author{
		Id:      1,
		Name:    "author",
		Surname: "author",
	}

	expected, err := json.Marshal(gin.H{
		"id": strconv.Itoa(int(authorBody.Id)),
	})
	assert.NoError(t, err)

	body, err := json.Marshal(authorBody)
	assert.NoError(t, err)

	s := new(service.AuthorServiceMock)
	RegisterEndpoints(group, s)

	s.On("UpdateAuthor", strconv.Itoa(int(authorBody.Id)), &authorBody).Return(strconv.Itoa(int(authorBody.Id)), nil)

	w := httptest.NewRecorder()
	req, _ := http.NewRequest("PUT", "/api/author/1", bytes.NewBuffer(body))
	r.ServeHTTP(w, req)
	actual := w.Body.Bytes()
	assert.Equal(t, string(expected), string(actual))
	assert.Equal(t, 200, w.Code)
}
*/
