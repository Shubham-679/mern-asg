import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';


class Navigation extends Component {
    state = {  }
    render() { 
        return (
            <div className="container">
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/home">Home</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        
                        {/* <NavLink className="nav-link" aria-current="page" to="/home">Home</NavLink> */}
                        
                        <NavLink className="nav-link" to="/albums">Albums</NavLink>
                        
                        <NavLink className="nav-link" to="/photos">Photos</NavLink>
                        <NavLink className="nav-link" to="/count">Count</NavLink>
                        <NavLink className="nav-link" to="/timer">Timer</NavLink>
                    </ul>
                    </div>
                </div>
                </nav>
            </div>
        );
    }
}
 
export default Navigation;