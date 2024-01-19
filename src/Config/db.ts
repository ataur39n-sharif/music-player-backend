import { Pool } from "pg";

const DB = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'music_player',
    password: 'postgres',
    port: 5432
})

export default DB