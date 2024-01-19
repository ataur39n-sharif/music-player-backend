import { Router } from "express";
import { ArtistController } from "./artist.controller";

const ArtistRoutes = Router()

ArtistRoutes
    .get('/', ArtistController.fetchArtistList)
    .post('/create', ArtistController.createNewArtist)

export default ArtistRoutes;