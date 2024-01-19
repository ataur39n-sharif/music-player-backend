/* 
    node application root file
*/

import config from "@/Config";
import app from "@/app";
import http from "http";

const server = http.createServer(app)
const {port=5000} = config


const main = async () => {
    try {
        server.listen(port, () => {
            console.log(`Server is listening on ${port}. Url: http://localhost:${port}`)
        })
    } catch (e) {
        console.log((e as Error).message);
    }
}

main()


//handle unHandleRejection errors
process.on('unhandledRejection', (err) => {
    if (server) {
        server.close(() => {
            process.exit(1)
        })
    } else {
        process.exit(1)
    }
})

//handle unCaught exceptions
process.on('uncaughtException', (err) => {
    if (server)
        process.exit(1)
})

// sigterm errors
process.on('SIGTERM', (err) => {
    if (server)
        server.close()
})