import DB from "@/Config/db"
import CustomError from "@/Utils/errors/customError.class"
import { generateToken } from "@/Utils/helper/generateToken"
import { HashHelper } from "@/Utils/helper/hashHelper"
import { TLoginPayload, TRegisterPayload, TUser } from "./auth.type"

const register = async (data: TRegisterPayload) => {
    const alreadyRegistered = await DB.query(`SELECT * FROM users WHERE email= $1`, [data.email])
    if (alreadyRegistered.rows.length) throw new CustomError(`This email is already registered`, 400)

    const password = await HashHelper.generateHashPassword(data.password)
    const query = await DB.query("INSERT INTO users(username,email,password) VALUES($1,$2,$3)", [data.username, data.email, password])
    if (query.rowCount && query.rowCount > 0) {
        return true
    } else {
        return false
    }
}

const login = async (data: TLoginPayload) => {

    const result = await DB.query(`Select * from users where email=$1`, [data.email])
    if (result.rows.length < 1) throw new CustomError("User not found", 404)

    const { password, ...othersInfo } = result.rows[0] as TUser
    const validPassword = await HashHelper.comparePassword(data.password, password)
    if (!validPassword) throw new CustomError("Invalid credentials", 401)

    const accessToken = generateToken.accessToken({ id: othersInfo.id, email: othersInfo.email })

    return {
        accessToken,
        ...othersInfo
    }
}


export const AuthServices = {
    login,
    register,
}