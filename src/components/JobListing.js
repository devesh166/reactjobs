import React, { Component } from 'react'
import "./style.css"
 
class jobListing extends Component {
    constructor(props) {
        super(props);
        console.log(props);
    }
    render() {
        return (
            this.props.jobs.map((item, ind) => {
                return (
                    //<div style={{backgroundColor : "#007b5e", }} >
                    
                    
                    <div className="card ">
                        <div className="row" ><b>{this.props.jobs[ind].companyName}</b></div>
                        <div className="row" >
                           <div className="col-sm-2" > <img src={require("./paris.jpg")} height="50pt" width="50pt" alt="paris.jpg"></img></div>
                            < div className="col-sm-2 jobDetails" >{this.props.jobs[ind].id}</div>
                            < div  className="col-sm-2 jobDetails">{this.props.jobs[ind].designation}</div>
                            < div className="col-sm-2 jobDetails" >{this.props.jobs[ind].location}</div>
                            < div className="col-sm-2 jobDetails" >{this.props.jobs[ind].salary}</div>
                            <button   className="w3-button w3-block w3-dark-grey">Apply</button>
                    </div>
                    </div>
                    
                )
            })
        )
    }
}
export default jobListing;