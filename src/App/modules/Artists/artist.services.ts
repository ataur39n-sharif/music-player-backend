import DB from "@/Config/db";
import { TArtistPayload, TProcessQueryData } from "./artist.types";

const allArtists = async () => {
    const result = await DB.query(`
    SELECT albums.id, albums.title, albums.release_year, albums.genre, artists.id AS artist_id, artists.name
    FROM albums
    FULL JOIN albums_artists ON albums.id = albums_artists.album_id
    FULL JOIN artists ON albums_artists.artist_id = artists.id;
    `);
    let modifiedData: TProcessQueryData[] = [];

    for (const each of result.rows) {
        const alreadyAdded = modifiedData.find((item) => item.id === each.artist_id)
        if (!alreadyAdded) {
            const tempData: TProcessQueryData = {
                id: each.artist_id,
                name: each.name,
                albums: []
            }
            each.id && tempData?.albums?.push({
                id: each.id,
                title: each.title ,
                release_year: each.release_year,
                genre: each.genre
            })
            modifiedData.push(tempData)
        } else {
            modifiedData.find((item) => item.id === each.artist_id)?.albums?.push({
                id: each.id,
                title: each.title,
                release_year: each.release_year,
                genre: each.genre,
            })
        }

    }

    return modifiedData;
}

const newArtist = async (data: TArtistPayload) => {
    const result = await DB.query(`INSERT INTO artists(name) VALUES($1)`, [
        data.name
    ])
    if (result.rowCount && result.rowCount > 0) {
        return true
    } else {
        return false
    }
}



export const ArtistService = {
    allArtists,
    newArtist
}