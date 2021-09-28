import mongoose from "mongoose";
import { ScamReportSchema} from "../models/spamModels";
import reports from '../../data/reports.json'


const ScamReportModel = mongoose.model('ScamReportModel', ScamReportSchema)
const scamReportData = reports;
// Manipulating the different routes for my schema


const createReport = (id,state,created,message,reportType) => {
    return({
        id: `${id}`,
        state: `${state}`,
        created: `${created}`,
        message: `${message}`,
        reportType: `${reportType}`
    })
}

const importReport = (reportList) => {

    return(reportList.elements.map((report, i) => {
         return createReport(`${report?.id}`, `${report?.state}`,`${report?.created}`,`${report?.payload?.message}`,`${report?.payload?.reportType}`)
        }
        ))          
}

export const postReport = (req,res) => {

    const data = JSON.parse(JSON.stringify(importReport(scamReportData))) 
    console.log(data,'data')
    let postNewReport = new ScamReportModel(data)
    console.log(new ScamReportModel(data),'new scam report model decleration')
    console.log(postNewReport,'post new report')
    postNewReport.save((err,newPost)=> {
        if(err){
            res.send(err);
        }else {
            res.json(newPost);
            
        }
    })
}

export const updateStatus = (req, res) => {
    
    // console.log(req,'request update status')
    
    let resolveStatus = new ScamReportModel(req.body)
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
    
    let blockStatus = new ScamReportModel(req.body)
    blockStatus.save((err, block) => {
        if(err){
            res.send(err);
        }else {
            res.json(block);
            
        }
    }) 
}

 
