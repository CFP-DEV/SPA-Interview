import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

// Views
import Home from '../../views/home/index';
import Profile from '../../views/profile/index'

// Components
import Navigation from './components/Navigation';

class Default extends Component {
    constructor () {
        super();

        this.state = {
            userActive: false,
            userChecking: true,
        }
    }

    componentDidMount () {
        if (localStorage.getItem('user')) {
            this.setState({
                userActive: true,
                userChecking: false,
            });
        } else {
            this.setState({
                userChecking: false,
            });
        }
    }

    render () {
        if (!this.state.userChecking && !this.state.userActive) {
            return <Redirect to="/auth/sign-in" />
        }

        return (
            <div className="default">

                <Navigation />

                <div className="default__content">
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/profile" component={Profile} />
                        <Redirect to="/" />
                    </Switch>
                </div>
            </div>
        );
    }
}

export default Default;