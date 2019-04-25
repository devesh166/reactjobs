import React, { Component } from 'react'

class jobFilter extends Component {

    render() {
        return(

            <div>
              
               <form>
               <input type="text" placeholder="Company" ></input>
               <input type="text" placeholder="Location" style={{margin: 10}}></input>
               <input type="text" placeholder="Role"></input>
               <button style={{margin: 10}}>Filter</button>
                </form>
            </div>
        )
    }
}
export default jobFilter;