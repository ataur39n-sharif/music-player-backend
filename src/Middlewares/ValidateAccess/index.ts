import Config from "@/Config";
import catchAsync from "@/Utils/helper/catchAsync";
import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import { z } from "zod";

const ValidateAccess = catchAsync(async (req: Request, res: Response, next: NextFunction) => {

    const accessToken = z.string({
        required_error: "Access token is required."
    }).parse(req.headers.authorization?.split('Bearer ')[1])

    const validateToken = jwt.verify(accessToken, Config.jwt.accessToken.secret as string)
    next()
})

export default ValidateAccess