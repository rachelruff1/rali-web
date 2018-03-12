import React, { Component } from 'react';
import './App.css';
import routes from './routes';
import AppHeader from './components/Header/AppHeader/AppHeader';
import Header from './components/Header/Header';


class App extends Component {
  render() {
    return (
      <div className="App">
      {/* < AppHeader /> */}
        {routes}
      </div>
    );
  }
}

export default App;
