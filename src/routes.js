import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from './components/HomePage/HomePage';
import NetworkSelector from './components/NetworkSelecter/NetworkSelector';
import ViewNetwork from './components/ViewNetwork/ViewNetwork';
import CreateNetwork from './components/NetworkSelecter/components/CreateNetwork/CreateNetwork';
import SearchNetwork from './components/NetworkSelecter/components/SearchNetwork/SearchNetwork';

export default (
    <Switch>
        <Route exact path= '/' component={HomePage} />
        <Route path='/network-selector' component={NetworkSelector} />
        <Route path='/view-network' component={ViewNetwork} />
        <Route path='/create-network' component={CreateNetwork} />
        <Route path='/search-network' component={SearchNetwork} />
    </Switch>
)