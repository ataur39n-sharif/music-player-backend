export type TRegisterPayload = {
    username: string,
    email: string,
    password: string,
}

export type TLoginPayload = {
    email: string,
    password: string
}

export type TUser = {
    id: number,
    username: string,
    email: string,
    password: string
}