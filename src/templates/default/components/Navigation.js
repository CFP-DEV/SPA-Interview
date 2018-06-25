import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

// Components
import Logo from '../../../components/Logo';
import NavigationMenu from './NavigationMenu';
import NavigationProfile from './NavigationProfile';

const Navigation = ({signOut, isActive}) => {
    const navigationStyles = classNames({
        'navigation': true,
        'navigation--is-active': isActive
    });

    return (
        <nav className={navigationStyles}>
        
            <Logo className="navigation__logo" />

            <NavigationMenu signOut={() => { signOut(); }} />

            <NavigationProfile />

        </nav>
    );
}

Navigation.propTypes = {
    signOut: PropTypes.func.isRequired,
    isActive: PropTypes.bool.isRequired,
}

export default Navigation;