-- Active: 1694310688561@@127.0.0.1@5432@music_player
/* create database */
create DATABASE music_player;

/* create user table */
create table users (
    id serial primary key, username VARCHAR(15) unique not null, email VARCHAR(255) unique not null, password VARCHAR(255) not null
);

/* create album table */
create table albums (
    id serial primary key, title VARCHAR(255) not null, release_year int not null, genre VARCHAR(255) not null
);

/* create artists table*/
create table artists (
    id serial primary key, "name" VARCHAR(255) UNIQUE NOT NULL
);

/* create albums_artists relational TABLE */
CREATE TABLE albums_artists(
   album_id int REFERENCES albums (id) ON DELETE CASCADE,
   artist_id int REFERENCES artists (id) ON DELETE CASCADE,
   PRIMARY KEY(album_id, artist_id)
);

/* create TABLE for songs */
CREATE TABLE musics(
    id serial primary key,
    title VARCHAR(255) NOT NULL,
    duration FLOAT(2) NOT NULL,
    album_id int REFERENCES albums (id) ON DELETE CASCADE,
    url VARCHAR(255) NOT NULL
);

INSERT INTO musics(title,duration,album_id,url) VALUES('title',3.33,2,'google.com');