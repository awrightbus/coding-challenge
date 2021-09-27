import mongoose from "mongoose";
import { ResolveSchema, BlockSchema } from "../models/spamModels";

const Resolve = mongoose.model('Resolve', ResolveSchema)
const Block = mongoose.model('Block', BlockSchema)

export const updateStatus = (req, res) => {
    
    // console.log(req,'request update status')
    
    let resolveStatus = new Resolve(req.body)
    resolveStatus.save((err, resolve) => {
        if(err){
            res.send(err);
        }else {
            res.json(resolve);
            
        }
    }) 
}

export const updateBlock = (req, res) => {
    
    // console.log(req,'request update status')
    
    let blockStatus = new Block(req.body)
    blockStatus.save((err, block) => {
        if(err){
            res.send(err);
        }else {
            res.json(block);
            
        }
    }) 
}

 
