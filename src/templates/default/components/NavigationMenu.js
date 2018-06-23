import React from 'react';
import { NavLink as Link } from 'react-router-dom';

const NavigationMenu = () => {
    return (
        <ul className="navigation__menu">
            <li className="navigation__menu__item">
                <Link to="/" className="navigation__menu__link" activeClassName="navigation__menu__link--is-active">
                    Home
                </Link>
            </li>
        </ul>
    );
}

export default NavigationMenu;