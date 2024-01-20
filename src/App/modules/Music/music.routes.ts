import { Router } from "express";
import multer from "multer";
import path from "path";
import { MusicsController } from "./music.controller";
import ValidateAccess from "@/Middlewares/ValidateAccess";

const MusicRoutes = Router()

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/')
    },
    filename: function (req, file, cb) {
        const ext = path.extname(file.originalname)
        // console.log({ext})
        const baseName = file.originalname.trim()?.split('.')[0]?.replace(/\s+/g, '-')
        // console.log({baseName})
        const newFileName = `${baseName}${ext}`
        // console.log({newFileName})
        cb(null, newFileName)
    }
})

const upload = multer({
    storage: storage,
    limits: {
        fileSize: 15 * 1024 * 1024
    },
    fileFilter: function (req, file, cb) {
        const allowedMimes = [
            'audio/mpeg'
        ]

        console.log(file.originalname, file.mimetype)

        if (!allowedMimes.includes(file.mimetype)) {
            return cb(new Error('Invalid file type.'))
        }
        cb(null, true)
    }
})

MusicRoutes
    .get('/', MusicsController.musicList)
    .post('/add',ValidateAccess, upload.single('music'), MusicsController.addNewMusic)

export default MusicRoutes;