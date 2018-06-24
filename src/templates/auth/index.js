import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Helmet } from 'react-helmet';

// Views
import SignUp from '../../views/sign-up/index';
import SignIn from '../../views/sign-in/index';

// Components
import Navigation from './components/Navigation';

class Auth extends Component {
    constructor () {
        super();

        this.state = {
            userActive: false,
        }
    }

    componentDidMount () {
        if (localStorage.getItem('user')) {
            this.setState({
                userActive: true,
            });
        }
    }

    render () {
        if (this.state.userActive) {
            return <Redirect to="/" />;
        }

        return (
            <div className="auth">
                
                <Helmet>
                    <title>SPA | Auth</title>
                </Helmet>

                <Navigation location={this.props.location.pathname} />

                <div className="auth__content">
                    <Switch>
                        <Route exact path="/auth/sign-up" component={SignUp} />
                        <Route exact path="/auth/sign-in" component={SignIn} />
                        <Redirect to="/auth/sign-in" />
                    </Switch>
                </div>

            </div>
        );
    }
}

export default Auth;