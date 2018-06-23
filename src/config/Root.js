import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// Default Template
import Default from '../templates/default/index';

const Root = () => {
   return (
    <Router>
        <Switch>
            <Route path="/" component={Default} /> 
        </Switch>
    </Router>
   );
}

export default Root;