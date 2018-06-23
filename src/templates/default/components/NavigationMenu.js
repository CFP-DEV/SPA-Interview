import React from 'react';
import { NavLink as Link } from 'react-router-dom';

const NavigationMenu = () => {
    return (
        <ul className="navigation__menu">
            <li className="navigation__menu__item">
                <Link exact to="/" className="navigation__menu__link" activeClassName="navigation__menu__link--is-active">
                    <i className="fas fa-home"></i>
                </Link>
            </li>
        </ul>
    );
}

export default NavigationMenu;