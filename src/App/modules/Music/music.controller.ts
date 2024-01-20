import catchAsync from "@/Utils/helper/catchAsync";
import { sendResponse } from "@/Utils/helper/sendResponse";
import getAudioDurationInSeconds from "get-audio-duration";
import { z } from "zod";
import { MusicServices } from "./music.services";


const musicList = catchAsync(async (req, res, next) => {
    const data = await MusicServices.allMusics()
    sendResponse.success(res, {
        statusCode: 200,
        message: 'Successfully loaded musics',
        data
    })
})

const addNewMusic = catchAsync(async (req, res, next) => {
    const duration = await getAudioDurationInSeconds(req.file?.path as string)
    const payload = z.object({
        title: z.string(),
        duration: z.number(),
        url: z.string(),
        album_id: z.number(),
    }).parse({
        ...req.body,
        duration: Number((duration / 60).toFixed(2)),
        album_id: Number(req.body.album_id),
        url: `/file/${req.file?.filename}`
    })

    const data = await MusicServices.addNewMusic(payload)
    sendResponse.success(res, {
        statusCode: 201,
        message: data ? 'Music added successfully.' : '',
        data: payload
    })
})

export const MusicsController = {
    musicList,
    addNewMusic
}