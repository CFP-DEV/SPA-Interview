import React, { Component } from 'react';

// Components
import Logo from '../../../components/Logo';
import NavigationMenu from './NavigationMenu';
import NavigationProfile from './NavigationProfile';

class Navigation extends Component {
    render () {
        return (
            <nav className="navigation">
            
                <Logo className="navigation__logo" />

                <NavigationMenu />

                <NavigationProfile />

            </nav>
        );
    }
}

export default Navigation;