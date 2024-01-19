import catchAsync from "@/Utils/helper/catchAsync";
import { sendResponse } from "@/Utils/helper/sendResponse";
import { NextFunction, Request, Response } from "express";
import { z } from "zod";
import { AuthServices } from "./auth.service";


const register = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const payload = z.object({
        username: z.string(),
        email: z.string().email(),
        password: z.string()
    }).parse(req.body)

    const data = await AuthServices.register(payload)

    sendResponse.success(res, {
        statusCode: 200,
        message: data ?'Registration successful.':'',
    })
})

const login = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const payload = z.object({
        email: z.string().email(),
        password: z.string()
    }).parse(req.body)
    const data = await AuthServices.login(payload)

    sendResponse.success(res, {
        statusCode: 200,
        message: 'Login successful',
        data
    })
})

export const AuthController = {
    login,
    register
}