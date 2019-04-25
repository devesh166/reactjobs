import React, { Component } from 'react'

class appHeader extends Component {

    render() {
        return (
           
            <nav className="navbar navbar-inverse">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <a className="navbar-brand" href="#">NaukriPao</a>
                    </div>
                    <ul className="nav navbar-nav">
                        <li className="active"><a href="#">Home</a></li>
                        <li><a href="#">Sign in</a></li>
                        <li><a href="#">Log out</a></li>
                         
                    </ul>
                </div>
            </nav>
        )
    }
}
export default appHeader;