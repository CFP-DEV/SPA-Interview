import React, { Component } from 'react';

// Components
import Form from './components/Form';

class SignIn extends Component {
    signIn = () => {
        // Redirect
        this.props.history.push('/');
    }

    render () {
        return (
            <div className="sign-in">
                
                <header className="header">
                    <h1 className="header__title">
                        Sign In.
                    </h1>
                    <h2 className="header__subtitle">
                        Thanks for coming back!
                    </h2>
                </header>

                <Form signIn={() => { this.signIn(); }} />

            </div>
        );
    }
}

export default SignIn;