import { updateStatus } from "../controllers/spamControllers"
import { updateBlock } from "../controllers/spamControllers"

const routes = (app) => {

    app.route('/reports')
        .get((req, res) => {
            res.send('GET request working')
        })
    
    app.route('/reports/:reportsId')
        .put(updateStatus)
    
    app.route('/reports/block/:reportsId')
        .put(updateBlock)
        
}

export default routes