import React from 'react';

// Components
import Logo from '../../../components/Logo';
import NavigationMenu from './NavigationMenu';
import NavigationProfile from './NavigationProfile';

const Navigation = ({signOut}) => {
    return (
        <nav className="navigation">
        
            <Logo className="navigation__logo" />

            <NavigationMenu signOut={() => { signOut(); }} />

            <NavigationProfile />

        </nav>
    );
}

export default Navigation;