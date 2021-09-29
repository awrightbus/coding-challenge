import  mongoose  from "mongoose";
import { ScamReportSchema} from "../models/spamModels";


const ScamReportModel = mongoose.model('ScamReportModel', ScamReportSchema)
// Manipulating the different routes for my schema


export const importReport = (reportList) => {

    return(reportList.elements.map((report, i) => {
         return createReport(report)
        }
        ))          
}




const createReport = (reportObject) => {
    const report = {
        id: `${reportObject.id}`,
        state: `${reportObject.state}`,
        created: `${reportObject.created}`,
        message: `${reportObject?.payload?.message}`,
        reportType: `${reportObject?.payload?.reportType}`,
        ticketStatus: false
        }

        let postNewReport = new ScamReportModel(report)

        postNewReport.save((err,newPost)=> {
            if(err){
                console.log(err)
            }
        })
    return report
}

export const postReport = (req,res) => {
    createReport(req.body); 
}

export const updateBlock = (req, res) => { 
    // used for handeling the resolve
    // need to impliment a soft Delete 
    
    ScamReportModel.findOneAndUpdate({id: req.params.reportsId}, req.body, {new: true, useFindAndModify: false} ,(err, resolve) => {
        if(err){
            res.send(err);
        }else {
            res.json(resolve);
            
        }
    }) 
}

export const updateStatus = (req, res) => {
    ScamReportModel.findOneAndRemove({id: req.params.reportsId},(err, block) => {
        if(err){
            res.send(err);
        }else {
            res.json({message: 'removal from database completed'});
            
        }
    }) 
}

export const getReports = (req, res) => {
    ScamReportModel.find({},(err, report) => {
        if(err){
            res.send(err);
        }else {
            res.json(report);
            
        }
    }) 
}
 
