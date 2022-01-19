CREATE TABLE IF NOT EXISTS users
(
    id         SERIAL PRIMARY KEY NOT NULL UNIQUE,
    username   TEXT               NOT NULL UNIQUE,
    password   TEXT               NOT NULL,
    created_at TIMESTAMPTZ        NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ        NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS books
(
    id               SERIAL PRIMARY KEY                             NOT NULL UNIQUE,
    user_id          SERIAL REFERENCES users (id) ON DELETE CASCADE NOT NULL,
    title            TEXT                                           NOT NULL,
    description      TEXT                                           NOT NULL,
    price            INTEGER                                        NOT NULL,
    publication_date DATE                                           NOT NULL,
    created_at       TIMESTAMPTZ                                    NOT NULL DEFAULT NOW(),
    updated_at       TIMESTAMPTZ                                    NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS authors
(
    id         SERIAL PRIMARY KEY NOT NULL UNIQUE,
    name       TEXT               NOT NULL,
    surname    TEXT               NOT NULL,
    created_at TIMESTAMPTZ        NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ        NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS books_authors
(
    id        SERIAL                                           NOT NULL UNIQUE,
    book_id   SERIAL REFERENCES books (id) ON DELETE CASCADE   NOT NULL,
    author_id SERIAL REFERENCES authors (id) ON DELETE CASCADE NOT NULL
);