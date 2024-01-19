import { Router } from "express";
import { AlbumController } from "./album.controller";

const AlbumRoutes = Router()

AlbumRoutes
    .get('/', AlbumController.fetchAlbumList)
    .post('/create', AlbumController.createNewAlbum)

export default AlbumRoutes;