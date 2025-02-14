import express from 'express';
import routes from './src/routes/spamRoutes';
import cors from 'cors'
import mongoose from 'mongoose';
require('dotenv').config()
import scamData from '../api/data/reports.json'
import { importReport } from './src/controllers/spamControllers';


const app = express();
const PORT = 5252;


//middleware
app.use(express.json())
app.use(express.urlencoded({
    extended: true
  }));
app.use(cors());

//setting up database connection
mongoose.Promise = global.Promise
mongoose.connect(process.env.URI,{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => {
  importReport(scamData);
  console.log('connected to Db')
})
.catch((err) => console.log(err));


//allocating route handling to a different file
routes(app);

  
  app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`)
  })