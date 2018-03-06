import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./components/HomePage/HomePage";
import NetworkSelector from "./components/NetworkSelecter/NetworkSelector";
import ViewNetwork from "./components/ViewNetwork/ViewNetwork";
import CreateNetwork from "./components/NetworkSelecter/components/CreateNetwork/CreateNetwork";
import SearchNetwork from "./components/NetworkSelecter/components/SearchNetwork/SearchNetwork";
import ExpandEvent from "./components/ViewNetwork/components/ExpandEvent/ExpandEvent";
import CreateEvent from "./components/ViewNetwork/components/CreateEvent/CreateEvent";
import Profile from "./components/Header/Profile/Profile";
import ManageNetworks from "./components/Header/ManageNetworks/ManageNetworks";

export default (
  <Switch>
    <Route exact path="/" component={HomePage} />
    <Route path='/profile' component={Profile} />
    <Route path='/manage-networks' component={ManageNetworks} />
    <Route path="/network-selector" component={NetworkSelector} />
    <Route path="/create-network" component={CreateNetwork} />
    <Route path="/search-networks" component={SearchNetwork} />
    <Route exact path="/network/:id" component={ViewNetwork} />
    <Route path="/network/:id/create-event/" component={CreateEvent} />
    <Route path="/network/:netId/event/:evId" component={ExpandEvent} />

  </Switch>
);

{/* <Route
path="/network/:id"
render={() => {
    console.log('router')
    return(
  <ViewNetwork>
    <Switch>
      <Route path="/network/:id/create-event" component={CreateEvent} />
      <Route path="/network/:id/event/:id" component={ExpandEvent} />
    </Switch>
  </ViewNetwork>
)}}
/> */}
