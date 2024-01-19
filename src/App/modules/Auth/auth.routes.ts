import { Router } from "express";
import { AuthController } from "./auth.controller";

const AuthRoute = Router();

AuthRoute
    .post('/login', AuthController.login)
    .post('/register', AuthController.register)

export default AuthRoute