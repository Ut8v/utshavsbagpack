import React from 'react';
import '../scss/notfound.scss';

const NotFound = () => {
    return (
        <div className="not-found-container">
            <div className="fidget-spinner"></div>
            <h1 className="not-found-title">404 - Page Not Found</h1>
            <p className="not-found-message">Oops! It seems you're lost. Let's spin back to the homepage.</p>
            <a href="/" className="home-link">Go to Homepage</a>
        </div>
    );
};

export default NotFound;