import React , { Component } from 'react';
import logo from './logo.svg';

import AppHeader from './components/appheader'
import AppFooter from './components/appFooter'
import JobFilter from './components/jobFilter'
import JobListing from './components/JobListing'
import JobData from './jobs'
import './App.css';
import jobListing from './components/JobListing';
// function App() {
//   return (
//     <div className="App">
    
//     </div>
//   );
// }

class App extends Component {
  

   
  render() {
    let temp = JobData;
   
    return (
      <div className="App">
     
      <AppHeader />
      <JobFilter/>
      <JobListing  jobs ={temp}/>
      <AppFooter/>
   
      {/* <JobFilter/>
      <JobListing/>
      <AppFooter /> */}

      </div>
    )
  }

   
}


export default App;
