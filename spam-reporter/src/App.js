import React, { useState, useEffect } from 'react';
import axios from 'axios'
import './App.css'

function App() {

const URL = 'http://localhost:5252'
const [reportList, setReportList] = useState([])


const blockReport = (reportId) => {
  axios.put(`${URL}/reports/${reportId}/block`, {
    state:'CLOSED'
  })
  .then((res)=> {
    setReportList(reportList.filter((report)=> report.id !== res.data.id))
  })
  .catch((err)=> {
    console.log(err)
  })
}

const resolveReport = (reportId) => {
  axios.put(`${URL}/reports/${reportId}/resolve`, {
    resolveState:true
  })
  .then((res)=> {
    axios.get(`${URL}/reports`)
    .then((res) => {
      console.log(res.data,'res.data')
      setReportList(res.data);
    })
    .catch((err)=> {
      console.log(err)
    })
  })
  .catch((err)=> {
    console.log(err)
  })
}


useEffect(() => {
  axios.get(`${URL}/reports`)
  .then((res) => {
    console.log(res.data,'res.data')
    setReportList(res.data);
  })
  .catch((err)=> {
    console.log(err)
  })
},[]);

useEffect(() => {
  
}, [reportList])

console.log(reportList,'report list')

  return (
    
    <div className="app">
      <h1 className='title'>Spam Reporting System</h1>
      { reportList === [] ? '' : reportList.map((report,index) => {
        return(<div className='reportContainer' key={index}>
        <div className='leftSection'>
            <p className='leftId'>Id: {report.id}</p>
            <p>State: {report?.state}</p>
        </div>
        <div className='middleSection'>
            <p>Type: {report?.reportType}</p>
            <p className='message'>Message: {report?.message}</p>
        </div>
        <div className='rightSection'>
            <button onClick={() => blockReport(`${report.id}`)}>Block</button>
            <button onClick={() => resolveReport(`${report.id}`)}>Resolve</button>
        </div>
    </div>
      )})
      
     }
    </div>
    
  );
}

export default App;
