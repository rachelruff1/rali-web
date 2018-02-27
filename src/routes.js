import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from './components/HomePage/HomePage';
import NetworkSelector from './components/NetworkSelecter/NetworkSelector';
import ViewNetwork from './components/ViewNetwork/ViewNetwork';

export default (
    <Switch>
        <Route exact path= '/' component={HomePage} />
        <Route path='/networkselector' component={NetworkSelector} />
        <Route path='/viewnetwork' component={ViewNetwork} />
    </Switch>
)