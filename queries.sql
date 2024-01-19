-- Active: 1694310688561@@127.0.0.1@5432@music_player
/* create database */
create DATABASE music_player;

/* create user table */
create table users (
    id serial primary key, username VARCHAR(15) unique not null, email VARCHAR(255) unique not null, password VARCHAR(255) not null
)
/* login query */
SELECT * FROM users WHERE id = 1;

/* register queries */
INSERT INTO
    users (username, email, password)
VALUES (
        'username', 'user@music_player.com', 'password'
    )
/* create album table */
create table albums (
    id serial primary key, title VARCHAR(255) not null, release_year int not null, genre VARCHAR(255) not null
);
/* create new album query  */
INSERT INTO
    albums (title, release_year, genre)
VALUES ('album-1', 2020, 'test');

/* create artists table*/
create table artists (
    id serial primary key, "name" VARCHAR(255) UNIQUE NOT NULL
);
/* create new artist */
INSERT INTO artists (name) VALUES ('artist - 2')