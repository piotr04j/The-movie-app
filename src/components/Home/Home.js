import React from 'react';
import { Link } from 'react-router-dom';

export default () => {
    return (
        <div className="jumbotron shadow-lg container my-5">
            <h1 className="display-4">The movie app!</h1>
            <p className="lead">Are you looking for informations about movies, TV shows, actresses or actors?</p>
            <hr />
            <p>If <span className="font-weight-bold text-uppercase">yes</span> then you are in the good place in the web.</p>
            <Link to="/movies-list/1" className="btn btn-primary btn-lg">Start</Link>
        </div>
    );
};
