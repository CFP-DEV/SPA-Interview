import React from 'react';
import { Link } from 'react-router-dom';

// Components
import Logo from '../../../components/Logo';

const Navigation = ({location}) => {
    const authCTA = location === '/auth/sign-in' ? (
        <div className="navigation__sign-up">
            <span>Don't have an account?</span>
            <Link to="/auth/sign-up" className="btn btn--is-outline">
                SIGN UP
            </Link>
        </div>
    ) : (
        <div className="navigation__sign-in">
            <span>Have an account?</span>
            <Link to="/auth/sign-in" className="btn btn--is-outline">
                SIGN IN
            </Link>
        </div>
    );

    return (
        <nav className="navigation">
            <Logo className="navigation__logo" />

            { authCTA }
        </nav>
    );
}

export default Navigation;