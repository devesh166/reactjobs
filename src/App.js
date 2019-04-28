import React , { Component } from 'react';


import AppHeader from './components/appheader'
import AppFooter from './components/appFooter'
import JobFilter from './components/jobFilter'
import JobListing from './components/JobListing'
import JobData from './jobs'
import './App.css';

// function App() {
//   return (
//     <div className="App">
    
//     </div>
//   );
// }

class App extends Component {
  
constructor(){
    super();
  this.state= {
    company:'',
    location:'',
    designation:''   
}

}

 changeFilter(temp){
  return this.setState(temp,()=>{
   console.log(this.state)
   })

 }
   

  render() {
    let temp = JobData;

    return (

      <div className="App">
     
      <AppHeader />
      <JobFilter filter={this.state} onfilterchange={(temp)=>{this.changeFilter(temp)}}/>
      
      <JobListing filterList={this.state} jobs ={temp}/>
      <AppFooter/>
   

      </div>
    )
  }

   
}


export default App;
