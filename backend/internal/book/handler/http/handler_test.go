package http

/*
func TestBookHandler_AddBook(t *testing.T) {
	testUser := domain.User{
		Id:       1,
		Username: "user1",
		Password: "123456",
	}

	r := gin.Default()
	group := r.Group("/api", func(c *gin.Context) {
		c.Set("userId", testUser.Id)
	})

	bookBody := domain.Book{
		Id:          1,
		Title:       "title",
		Description: "description",
		Price:       500,
		Date:        "2006",
	}

	expected, err := json.Marshal(gin.H{
		"id": strconv.Itoa(int(bookBody.Id)),
	})
	assert.NoError(t, err)

	body, err := json.Marshal(bookBody)
	assert.NoError(t, err)

	s := new(service.BookServiceMock)
	RegisterEndpoints(group, s)

	s.On("AddBook", &bookBody).Return(strconv.Itoa(int(bookBody.Id)), nil)

	w := httptest.NewRecorder()
	req, _ := http.NewRequest("POST", "/api/book", bytes.NewBuffer(body))
	r.ServeHTTP(w, req)
	actual := w.Body.Bytes()
	assert.Equal(t, string(expected), string(actual))
	assert.Equal(t, 201, w.Code)
}

func TestBookHandler_GetBooks(t *testing.T) {
	testUser := domain.User{
		Id:       1,
		Username: "user1",
		Password: "123456",
	}

	r := gin.Default()
	group := r.Group("/api", func(c *gin.Context) {
		c.Set("userId", testUser.Id)
	})

	books := []domain.Book{
		{
			Id:          1,
			UserId:      testUser.Id,
			Title:       "title",
			Description: "description",
			Price:       500,
			Date:        "2006",
		},
		{
			Id:          2,
			UserId:      testUser.Id,
			Title:       "title2",
			Description: "description2",
			Price:       500,
			Date:        "2007",
		},
	}

	expected, err := json.Marshal(gin.H{
		"books": books,
	})
	assert.NoError(t, err)

	s := new(service.BookServiceMock)
	RegisterEndpoints(group, s)

	s.On("GetBooks").Return(&books, nil)

	w := httptest.NewRecorder()
	req, _ := http.NewRequest("GET", "/api/book", nil)
	r.ServeHTTP(w, req)
	actual := w.Body.Bytes()
	assert.Equal(t, string(expected), string(actual))
	assert.Equal(t, 200, w.Code)
}

func TestBookHandler_GetBookById(t *testing.T) {
	testUser := domain.User{
		Id:       1,
		Username: "user1",
		Password: "123456",
	}

	r := gin.Default()
	group := r.Group("/api", func(c *gin.Context) {
		c.Set("userId", testUser.Id)
	})

	book := domain.Book{
		Id:          1,
		UserId:      testUser.Id,
		Title:       "title",
		Description: "description",
		Price:       500,
		Date:        "2006",
	}

	expected, err := json.Marshal(gin.H{
		"book": book,
	})
	assert.NoError(t, err)

	s := new(service.BookServiceMock)
	RegisterEndpoints(group, s)

	s.On("GetBookById", strconv.Itoa(int(book.Id))).Return(&book, nil)

	w := httptest.NewRecorder()
	req, _ := http.NewRequest("GET", "/api/book/1", nil)
	r.ServeHTTP(w, req)
	actual := w.Body.Bytes()
	assert.Equal(t, string(expected), string(actual))
	assert.Equal(t, 200, w.Code)
}

func TestBookHandler_DeleteBook(t *testing.T) {
	testUser := domain.User{
		Id:       1,
		Username: "user1",
		Password: "123456",
	}

	r := gin.Default()
	group := r.Group("/api", func(c *gin.Context) {
		c.Set("userId", testUser.Id)
	})

	bookBody := domain.Book{
		Id:          1,
		UserId:      testUser.Id,
		Title:       "title",
		Description: "description",
		Price:       500,
		Date:        "2006",
	}

	expected, err := json.Marshal(gin.H{
		"id": strconv.Itoa(int(bookBody.Id)),
	})
	assert.NoError(t, err)

	body, err := json.Marshal(bookBody)
	assert.NoError(t, err)

	s := new(service.BookServiceMock)
	RegisterEndpoints(group, s)

	s.On("UpdateBook", strconv.Itoa(int(bookBody.Id)), &bookBody).Return(strconv.Itoa(int(bookBody.Id)), nil)

	w := httptest.NewRecorder()
	req, _ := http.NewRequest("PUT", "/api/book/1", bytes.NewBuffer(body))
	r.ServeHTTP(w, req)
	actual := w.Body.Bytes()
	assert.Equal(t, string(expected), string(actual))
	assert.Equal(t, 200, w.Code)
}

func TestBookHandler_UpdateBook(t *testing.T) {
	testUser := domain.User{
		Id:       1,
		Username: "user1",
		Password: "123456",
	}

	r := gin.Default()
	group := r.Group("/api", func(c *gin.Context) {
		c.Set("userId", testUser.Id)
	})

	bookBody := domain.Book{
		Id:          1,
		UserId:      testUser.Id,
		Title:       "title",
		Description: "description",
		Price:       500,
		Date:        "2006",
	}

	expected, err := json.Marshal(gin.H{
		"id": strconv.Itoa(int(bookBody.Id)),
	})
	assert.NoError(t, err)

	s := new(service.BookServiceMock)
	RegisterEndpoints(group, s)

	s.On("DeleteBook", strconv.Itoa(int(bookBody.Id))).Return(strconv.Itoa(int(bookBody.Id)), nil)

	w := httptest.NewRecorder()
	req, _ := http.NewRequest("DELETE", "/api/book/1", nil)
	r.ServeHTTP(w, req)
	actual := w.Body.Bytes()
	assert.Equal(t, string(expected), string(actual))
	assert.Equal(t, 200, w.Code)
}
*/
