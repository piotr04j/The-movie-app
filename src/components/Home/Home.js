import React from 'react';
import { Link } from 'react-router-dom';

export default () => {
    return (
        <div className="jumbotron shadow-lg container">
            <h1 className="display-4">The movie app!</h1>
            <p className="lead">Are you looking for informations about movies or TV shows?</p>
            <hr />
            <p>If <span className="font-weight-bold text-uppercase">yes</span> then you are in the good place in the web.</p>
            <Link to="/list" className="btn btn-primary btn-lg">Start</Link>
        </div>
    );
};
