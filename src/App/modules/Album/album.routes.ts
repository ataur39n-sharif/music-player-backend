import ValidateAccess from "@/Middlewares/ValidateAccess";
import { Router } from "express";
import { AlbumController } from "./album.controller";

const AlbumRoutes = Router()

AlbumRoutes
    .get('/', AlbumController.fetchAlbumList)
    .post('/create', ValidateAccess, AlbumController.createNewAlbum)
    .post('/createRelation', ValidateAccess, AlbumController.createRelation)

export default AlbumRoutes;