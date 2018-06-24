import React from 'react';
import { NavLink as Link } from 'react-router-dom';

const NavigationMenu = ({signOut}) => {
    return (
        <ul className="navigation__menu">
            <li className="navigation__menu__item">
                <Link exact to="/" className="navigation__menu__link" activeClassName="navigation__menu__link--is-active">
                    <i className="fas fa-home"></i>
                </Link>
            </li>
            <li className="navigation__menu__item">
                <button className="navigation__menu__link btn" onClick={() => { signOut(); }}>
                    <i className="fas fa-sign-out-alt"></i>
                </button>
            </li>
        </ul>
    );
}

export default NavigationMenu;