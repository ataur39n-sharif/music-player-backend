import express, { Router } from 'express';
import rootRouter from '.';
const configRoutes = Router()

configRoutes
    .use('/api/v1', rootRouter)
    .use('/file', express.static('uploads'))

export default configRoutes