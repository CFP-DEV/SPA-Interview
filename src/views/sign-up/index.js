import React, { Component } from 'react';

// Components
import Form from './components/Form';

class SignUp extends Component {
    render () {
        return (
            <div className="sign-up">
            
                <header className="header">
                    <h1 className="header__title">
                        Sign up.
                    </h1>
                    <h2 className="header__subtitle">
                        Create new account & join our amazing community.
                    </h2>
                </header>

                <Form />

            </div>
        );
    }
}

export default SignUp;