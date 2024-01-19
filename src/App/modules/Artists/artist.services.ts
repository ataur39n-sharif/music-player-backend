import DB from "@/Config/db"
import { TArtistPayload } from "./artist.types"

const allArtists = async () => {
    const result = await DB.query(`SELECT * from artists`);
    return result.rows;
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