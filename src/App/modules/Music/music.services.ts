import DB from "@/Config/db";
import { TMusicPayload } from "./music.types";

const allMusics = async () => {
    const result = await DB.query(`SELECT * from musics`)
    return result.rows
}

const addNewMusic = async (data: TMusicPayload) => {
    const result = await DB.query(`
        INSERT INTO musics(title,duration,album_id,url) VALUES($1,$2,$3,$4);
    `, [data.title, data.duration, data.album_id, data.url]);

    if (result.rowCount) {
        return true;
    } else {
        return false;
    }

}

export const MusicServices = {
    allMusics,
    addNewMusic
}