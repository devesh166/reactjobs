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

                    <div class="w3-container card">
                        <div class="w3-card-4" >
                            <div class="w3-container w3-light-grey">
                                <h3>{this.props.jobs[ind].companyName}</h3>
                            </div>

                            <div class="w3-container  " >
                                < div className="jobDetails" >{this.props.jobs[ind].id}</div>
                                < div  className="jobDetails">{this.props.jobs[ind].designation}</div>
                                < div className="jobDetails" >{this.props.jobs[ind].location}</div>
                                < div className="jobDetails" >{this.props.jobs[ind].salary}</div>
                                <button class="w3-button w3-block w3-dark-grey">Apply</button>
                            </div>
                        </div>
                    </div>

                )
            })
        )
    }
}
export default jobListing;