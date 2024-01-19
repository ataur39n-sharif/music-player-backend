-- Active: 1694310688561@@127.0.0.1@5432@music_player
/* create database */
create DATABASE music_player;

/* create user table */
create table users (
    id serial primary key, username VARCHAR(15) unique not null, email VARCHAR(255) unique not null, password VARCHAR(255) not null
)

drop Table users
/* register user query */
INSERT INTO
    users (username, email, password)
VALUES (
        'user1', 'user1@gmail.com', 'hash_pass'
    )