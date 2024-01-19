import { Router } from "express";
import { AlbumController } from "./album.controller";
import ValidateAccess from "@/Middlewares/ValidateAccess";

const AlbumRoutes = Router()

AlbumRoutes
    .get('/', AlbumController.fetchAlbumList)
    .post('/create',ValidateAccess, AlbumController.createNewAlbum)

export default AlbumRoutes;