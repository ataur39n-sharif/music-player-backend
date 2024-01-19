export type TArtistPayload = {
    name: string;
}
export type TProcessQueryData = {
    id: number,
    name: string,
    albums?: {
        id: number,
        title: string,
        release_year: number,
        genre: string,
    }[]
}