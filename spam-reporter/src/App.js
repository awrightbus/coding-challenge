import React, { useState, useEffect } from 'react';
import axios from 'axios'
import reports from './data/reports.json'
import './App.css'

function App() {

const testData = reports.elements;

useEffect(() => {
  
},[]);

  
  return (
    
    <div className="app">
      <h1 className='title'>Spam Reporting System</h1>
      <div className='reportContainer'>
          <div className='leftSection'>
              <p className='leftId'>Id: 721212815245</p>
              <p>State: Open</p>
          </div>
          <div className='middleSection'>
              <p>Type: Spam</p>
              <p className='message'>Message: sLOoOoOoooooonggg asss message sLOoOoOoooooonggg asss message sLOoOoOoooooonggg asss messagesLOoOoOoooooonggg asss messagesLOoOoOoooooonggg asss messagesLOoOoOoooooonggg asss messagesLOoOoOoooooonggg asss messagesLOoOoOoooooonggg asss messagesLOoOoOoooooonggg asss message</p>
          </div>
          <div className='rightSection'>
              <button>Block</button>
              <button>Resolve</button>
          </div>
      </div>
    </div>
    
  );
}

export default App;
