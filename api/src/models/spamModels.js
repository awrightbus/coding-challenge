import mongoose from "mongoose";

//schema is the things, the noun the person place,
//in this case spam reports
//this is where i put i create function to specifcy the fields i want in my schema
//Schemas are tables 


const Schema = mongoose.Schema;


export const ScamReportSchema = new Schema({
     id: {
        type : String,
     },
     state: {
        type : String,
        default:'OPEN'
     },
     created: {
        type : String,
     },
     message: {
        type : String,
     },
     reportType: {
        type : String,
     },
     resolveState: {
         type: Boolean,
         default: false
     }
        
})

