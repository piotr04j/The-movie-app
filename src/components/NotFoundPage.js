import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
    return (
        <div className="container my-3">
            <p className="font-weight-bold">Page not found</p>
            <p>Back to home page:</p>
            <Link to='/' className="btn btn-primary">Home Page</Link>
        </div>
    )
};

export default NotFoundPage;
