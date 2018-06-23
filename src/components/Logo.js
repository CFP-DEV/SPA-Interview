import React from 'react';

const Logo = ({className}) => {
    const logoStyles = className ? 'logo ' + className : 'logo';

    return (
        <div className={logoStyles}>
            L
        </div>
    );
}

export default Logo;