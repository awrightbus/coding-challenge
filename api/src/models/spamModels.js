import mongoose from "mongoose";


const Schema = mongoose.Schema;


export const ResolveSchema = new Schema({
    resolve: {
        type: Boolean,
        default: false 
    }
})

export const BlockSchema = new Schema({
    blocked: {
        type: Boolean,
        default: false 
    }
})