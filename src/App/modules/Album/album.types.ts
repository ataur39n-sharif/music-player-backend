export type TAlbumPayload = {
    title: string,
    release_year: number,
    genre: string
}

export type TAlbumQueryResponse = {
    id: number,
    title: string,
    release_year: number,
    genre: string,
    artists?: {
        id: number,
        name: string
    }[]
} 