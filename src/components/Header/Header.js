import React from 'react';
import { NavLink } from 'react-router-dom';
import SearchEngine from './SearchEngine';


const Header = () => {

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <div className="container">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <NavLink activeStyle={{fontWeight: "bold"}} className="nav-link" exact to="/">Home<span className="sr-only">(current)</span></NavLink>
                        </li>
                        <li className="nav-item active">
                            <NavLink activeStyle={{fontWeight: "bold"}} className="nav-link" to="/movies-list/1">Movies<span className="sr-only">(current)</span></NavLink>
                        </li>
                        <li className="nav-item active">
                            <NavLink activeStyle={{fontWeight: "bold"}} className="nav-link" to="/tv-list/1">TV Shows<span className="sr-only">(current)</span></NavLink>
                        </li>
                    </ul>
                    <span className="navbar-text">
                        <SearchEngine />
                    </span>
                </div>
            </div>
        </nav>
    )
}


export default Header;
