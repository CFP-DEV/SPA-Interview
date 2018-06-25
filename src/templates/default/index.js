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
            navActive: false,
        }
    }

    signOut = () => {
        // Sign Out
        localStorage.removeItem('user');

        // Redirect
        this.props.history.push('/auth/sign-in');
    }

    showMenu = () => {
        this.setState({
            navActive: !this.state.navActive,
        });
    }

    onResize = () => {
        if (window.innerWidth >= 640 && this.state.navActive) {
            this.setState({
                navActive: false,
            });
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

        // Event Listener
        window.addEventListener('resize', this.onResize);
    }

    componentWillUnmount () {
        // Remove Event Listener
        window.removeEventListener('resize', this.onResize);
    }

    render () {
        if (!this.state.userChecking && !this.state.userActive) {
            return <Redirect to="/auth/sign-in" />
        }

        return (
            <div className="default">

                <Navigation signOut={() => { this.signOut(); }} isActive={this.state.navActive} />

                <button className="navigation-mobile-btn btn" onClick={() => { this.showMenu(); }}>
                    <span className="navigation-mobile-btn__stripe"></span>
                    <span className="navigation-mobile-btn__stripe"></span>
                    <span className="navigation-mobile-btn__stripe"></span>
                </button>

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