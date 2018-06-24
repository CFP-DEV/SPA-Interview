import React from 'react';
import { Link } from 'react-router-dom';

const Logo = ({className}) => {
    const logoStyles = className ? 'logo ' + className : 'logo';

    return (
        <Link to="/" className={logoStyles}>
            S
        </Link>
    );
}

export default Logo;