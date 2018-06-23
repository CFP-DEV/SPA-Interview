import React, { Component } from 'react';

// Components
import NavigationMenu from './NavigationMenu';
import NavigationProfile from './NavigationProfile';

class Navigation extends Component {
    render () {
        return (
            <nav className="navigation">
            
                <div className="navigation__logo">
                    L
                </div>

                <NavigationMenu />

                <NavigationProfile />

            </nav>
        );
    }
}

export default Navigation;