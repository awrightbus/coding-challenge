import  mongoose  from "mongoose";
import { ScamReportSchema} from "../models/spamModels";
import reports from '../../data/reports.json'


const ScamReportModel = mongoose.model('ScamReportModel', ScamReportSchema)
const scamReportData = reports;
// Manipulating the different routes for my schema


export const importReport = (reportList) => {

    return(reportList.elements.map((report, i) => {
         return createReport(report)
        }
        ))          
}

const createReport = (reportObject) => {
    console.log(reportObject,'report Object')
    const report = {
        id: `${reportObject.id}`,
        state: `${reportObject.state}`,
        created: `${reportObject.created}`,
        message: `${reportObject?.payload?.message}`,
        reportType: `${reportObject?.payload?.reportType}`
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

 
