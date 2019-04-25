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

                    <div class="card ">
                           <div className="jobDetails" > <img src={require("./paris.jpg")} height="50pt" width="50pt" alt="paris.jpg"></img></div>
                            < div className="jobDetails" >{this.props.jobs[ind].id}</div>
                            < div  className="jobDetails">{this.props.jobs[ind].designation}</div>
                            < div className="jobDetails" >{this.props.jobs[ind].location}</div>
                            < div className="jobDetails" >{this.props.jobs[ind].salary}</div>
                            <button   className="jobDetails" class="w3-button w3-block w3-dark-grey">Apply</button>
                    </div>

                )
            })
        )
    }
}
export default jobListing;