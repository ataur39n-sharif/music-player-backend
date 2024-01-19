import {Schema} from "mongoose";
import {TAddress} from "@/Utils/types/customSchema.type";

export const AddressSchema = new Schema<TAddress>({
    streetAddress: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    zipCode: {
        type: Number,
        required: true
    },
}, {
    _id: false,
    versionKey: false
})