import React from 'react';
import { Switch, Route, Miss } from 'react-router-dom';

import App from './components/App';
import Card from './components/Card/Card';
import Robot from './robot';

const routes = () => {
    return (
        <Switch>
            <Route exact path='/' component={App} />
            <Route path='/card' component={Card} />
            <Miss component={Robot} />
        </Switch>
    );
};

export default routes;
