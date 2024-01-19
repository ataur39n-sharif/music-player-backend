import ValidateAccess from "@/Middlewares/ValidateAccess";
import { Router } from "express";
import { ArtistController } from "./artist.controller";

const ArtistRoutes = Router()

ArtistRoutes
    .get('/', ArtistController.fetchArtistList)
    .post('/create', ValidateAccess, ArtistController.createNewArtist)

export default ArtistRoutes;