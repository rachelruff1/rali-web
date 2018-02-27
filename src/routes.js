import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from './components/HomePage/HomePage';
import NetworkSelector from './components/NetworkSelecter/NetworkSelector';
import ViewNetwork from './components/ViewNetwork/ViewNetwork';
import Login from './components/HomePage/components/Login/Login';
import CreateAccount from './components/HomePage/components/Login/CreateAccount';

export default (
    <Switch>
        <Route exact path= '/' component={HomePage} />
        <Route path ='/login' component={Login} />
        <Route path='/networkselector' component={NetworkSelector} />
        <Route path='/viewnetwork' component={ViewNetwork} />
        <Route path='/createaccount' component={CreateAccount} />
    </Switch>
)