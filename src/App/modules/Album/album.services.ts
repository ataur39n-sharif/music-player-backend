import DB from "@/Config/db"
import { TAlbumPayload } from "./album.types"

const allAlbums = async () => {
    const result = await DB.query(`SELECT * from albums`);
    return result.rows;
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