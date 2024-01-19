import AuthRoute from "@/App/modules/Auth/auth.routes";
import { Router } from "express";

const rootRouter = Router()

rootRouter
    .use('/auth', AuthRoute)


export default rootRouter