import { updateStatus } from "../controllers/spamControllers"
import { updateBlock } from "../controllers/spamControllers"
import { postReport } from "../controllers/spamControllers"
import { getReports } from "../controllers/spamControllers"


const routes = (app) => {

    app.route('/reports')
        .get(getReports)
    
    //just in case i was told to do a POST route for new reports
    // app.route('/reports/createPost')
    //     .post(postReport)
    
    app.route('/reports/:reportsId/resolve')
        .put(updateStatus)
    
    app.route('/reports/:reportsId/block')
        .put(updateBlock)
        
}

export default routes