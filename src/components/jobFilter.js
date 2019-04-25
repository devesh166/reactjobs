import React, { Component } from 'react'

class jobFilter extends Component {

    render() {
        return(
            <div>
               <form>
               <input type="text" placeholder="Company"></input>
               <input type="text" placeholder="Company"></input>
               <input type="text" placeholder="Company"></input>
               <button>Filter</button>
                </form>
            </div>
        )
    }
}
export default jobFilter;