const routes = (app) => {

    app.route('/reports')
        .get((req, res) => {
            res.send('GET request working')
        })
    
    app.route('/reports/:reportsId')
        .put((req,res) => {
            res.send('Spam as been resolved')
        })
    
    app.route('/reports/block/:reportsId')
        .put((req,res) => {
            res.send('block route is active')
        })
        
}

export default routes