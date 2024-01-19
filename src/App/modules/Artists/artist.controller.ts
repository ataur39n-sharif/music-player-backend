import catchAsync from "@/Utils/helper/catchAsync";
import { sendResponse } from "@/Utils/helper/sendResponse";
import { NextFunction, Request, Response } from "express";
import { z } from "zod";
import { ArtistService } from "./artist.services";

const fetchArtistList = catchAsync(async (req: Request, res: Response, next: NextFunction) => {

    const data = await ArtistService.allArtists()

    sendResponse.success(res, {
        statusCode: 201,
        message: 'Successfully fetched artist list.',
        data
    })
})

const createNewArtist = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const payload = z.object({
        name: z.string(),
    }).parse(req.body)

    const data = await ArtistService.newArtist(payload)

    sendResponse.success(res, {
        statusCode: 201,
        message: data ? "Successfully created new Artist" : ""
    })
})

export const ArtistController = {
    fetchArtistList,
    createNewArtist
}