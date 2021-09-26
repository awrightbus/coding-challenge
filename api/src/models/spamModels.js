import mongoose, { Schema } from "mongoose";


const Schema = mongoose.Schema;


export const spamSchema = new Schema({
    blocked: {
        type: Boolean, 
        default: false
    },
    resolved: {
        type: Boolean, 
        default: false
    }
})