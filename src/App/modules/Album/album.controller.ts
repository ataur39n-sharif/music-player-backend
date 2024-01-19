import catchAsync from "@/Utils/helper/catchAsync";
import { sendResponse } from "@/Utils/helper/sendResponse";
import { NextFunction, Request, Response } from "express";
import { z } from "zod";
import { AlbumService } from "./album.services";


const fetchAlbumList = catchAsync(async (req: Request, res: Response, next: NextFunction) => {

    const data = await AlbumService.allAlbums()

    sendResponse.success(res, {
        statusCode: 201,
        message: 'Successfully fetched albums list.',
        data
    })
})

const createNewAlbum = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const payload = z.object({
        title: z.string(),
        release_year: z.number(),
        genre: z.string(),
    }).parse(req.body)

    const data = await AlbumService.newAlbum(payload)

    sendResponse.success(res, {
        statusCode: 201,
        message: data ? "Successfully created new album" : ""
    })
})

export const AlbumController = {
    fetchAlbumList,
    createNewAlbum
}