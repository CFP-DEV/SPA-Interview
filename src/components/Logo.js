import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Logo = ({className}) => {
    const logoStyles = className ? 'logo ' + className : 'logo';

    return (
        <Link to="/" className={logoStyles}>
            S
        </Link>
    );
}

Logo.propTypes = {
    className: PropTypes.string,
}

export default Logo;