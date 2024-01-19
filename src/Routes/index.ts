import AlbumRoutes from "@/App/modules/Album/album.routes";
import ArtistRoutes from "@/App/modules/Artists/artist.routes";
import AuthRoute from "@/App/modules/Auth/auth.routes";
import { Router } from "express";

const rootRouter = Router()

rootRouter
    .use('/auth', AuthRoute)
    .use('/albums', AlbumRoutes)
    .use('/artists',ArtistRoutes)


export default rootRouter