import DB from "@/Config/db";
import { TAlbumPayload } from "./album.types";

const allAlbums = async () => {
    const result = await DB.query(`
    SELECT artists.id, artists.name, albums.id AS album_id, albums.title, albums.release_year, albums.genre
    FROM artists
    JOIN albums_artists ON artists.id = albums_artists.artist_id
    JOIN albums ON albums_artists.album_id = albums.id;
    `);
    let modifiedData = [];

    for (const each of result.rows) {
        const alreadyAdded = modifiedData.find((item) => item.id === each.album_id)
        if (!alreadyAdded) {
            modifiedData.push({
                id: each.album_id,
                title: each.title,
                release_year: each.release_year,
                genre: each.genre,
                artists: [{
                    id: each.id,
                    name: each.name
                }]
            })
        } else {
            modifiedData.find((item) => item.id === each.album_id)?.artists.push({
                id: each.id,
                name: each.name
            })
        }

    }

    return modifiedData;
}

const newAlbum = async (data: TAlbumPayload) => {
    const result = await DB.query(`INSERT INTO albums(title,release_year,genre) VALUES($1,$2,$3)`, [
        data.title, data.release_year, data.genre
    ])
    if (result.rowCount && result.rowCount > 0) {
        return true
    } else {
        return false
    }
}



export const AlbumService = {
    allAlbums,
    newAlbum
}