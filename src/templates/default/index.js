import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

// Views
import Home from '../../views/home';

// Components
import Navigation from './components/Navigation';

class Default extends Component {
    render () {
        return (
            <div className="default">

                <Navigation />

                <Switch>
                    <Route exact path="/" component={Home} />
                </Switch>

            </div>
        );
    }
}

export default Default;