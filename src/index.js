import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { HashRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import store from './store';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

// import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(
  <MuiThemeProvider>
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>
  </MuiThemeProvider>,
  document.getElementById("root")
);
// registerServiceWorker();
