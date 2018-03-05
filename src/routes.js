import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from './components/HomePage/HomePage';
import NetworkSelector from './components/NetworkSelecter/NetworkSelector';
import ViewNetwork from './components/ViewNetwork/ViewNetwork';
import CreateNetwork from './components/NetworkSelecter/components/CreateNetwork/CreateNetwork';
import SearchNetwork from './components/NetworkSelecter/components/SearchNetwork/SearchNetwork';
import ExpandEvent from './components/ViewNetwork/components/ExpandEvent/ExpandEvent';
import MyEvents from './components/ViewNetwork/components/MyEvents/MyEvents';
import NetworkEvents from './components/ViewNetwork/components/NetworkEvents/NetworkEvents';


export default (
    <Switch>
        <Route exact path= '/' component={HomePage} />
        <Route path='/network-selector' component={NetworkSelector} />
        <Route path='/create-network' component={CreateNetwork} />
        <Route path='/search-networks' component={SearchNetwork} />
        <Route path='/network/:id' component={ViewNetwork} />
        <Route path='/event/:id' component={ExpandEvent} />
    </Switch>
)