import React, { Component } from 'react';

// Components
import Form from './components/Form';

class SignIn extends Component {
    render () {
        return (
            <div className="sign-in">
                
                <header className="header">
                    <h1 className="header__title">
                        Thanks for coming back!
                    </h1>
                    <h2 className="header__subtitle">
                        We are updating our site daily for you.
                    </h2>
                </header>

                <Form />

            </div>
        );
    }
}

export default SignIn;