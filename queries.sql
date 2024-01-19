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

/* create albums_artists relational TABLE */
CREATE TABLE albums_artists(
   album_id int REFERENCES albums (id) ON DELETE CASCADE,
   artist_id int REFERENCES artists (id) ON DELETE CASCADE,
   PRIMARY KEY(album_id, artist_id)
);

/* insert query */
INSERT INTO albums_artists(album_id,artist_id) VALUES(2,2)

SELECT artists.id, artists.name, albums.id AS album_id, albums.title, albums.release_year, albums.genre
FROM artists
JOIN albums_artists ON artists.id = albums_artists.artist_id
JOIN albums ON albums_artists.album_id = albums.id;

SELECT albums.id, albums.title, albums.release_year, albums.genre, artists.id AS artist_id, artists.name
FROM albums
JOIN albums_artists ON albums.id = albums_artists.album_id
JOIN artists ON albums_artists.artist_id = artists.id;
