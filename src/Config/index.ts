import { config } from "dotenv";
import path from "path";

config({
    path: path.join(process.cwd(), ".env")
})

export default {
    port: process.env.PORT || 9000,
    mongo_uri: process.env.MONGO_URI,
    node_env: process.env.NODE_ENV,
    bcrypt_saltRounds: process.env.BCRYPT_SALTROUND,
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET,
    jwt: {
        accessToken: {
            secret: process.env.JWT_ACCESSTOKEN_SECRET || 'JWT_ACCESSTOKEN_SECRET',
            exp: process.env.JWT_ACCESSTOKEN_EXP || '12h'
        },
        refreshToken: {
            secret: process.env.JWT_REFRESHTOKEN_SECRET || 'JWT_REFRESHTOKEN_SECRET',
            exp: process.env.JWT_REFRESHTOKEN_EXP || '48h'
        },
        common: process.env.JWT
    },
    mail: {
        hostName: process.env.HOST,
        port: process.env.PORT || 587,
        secure: process.env.SECURE,
        auth: {
            user: String(process.env.SMTPUSERNAME),
            password: String(process.env.SMTPPASSWORD)
        },
        token: process.env.MAILTOKEN as string,
    }
}