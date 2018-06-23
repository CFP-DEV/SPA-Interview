import React from 'react';
import { Link } from 'react-router-dom';

const NavigationProfile = () => {
    return (
        <Link to="/profile" className="navigation__profile">
            <i className="fas fa-user"></i>
        </Link>
    );
}

export default NavigationProfile;